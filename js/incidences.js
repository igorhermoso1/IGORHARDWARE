/* ============================================
   Incidences — Render del protocolo de resolución
   ============================================ */

const Incidences = {

  currentIncident: null,
  currentStep: 0,
  correctCount: 0,
  totalCorrect: 0,
  wrongCount: 0,
  selections: [], // historial

  /* Entrada */
  renderList() {
    let html = `
      <div class="page-header">
        <h1>🛠 Resolutorio de Incidencias</h1>
        <p>Un cliente llega con un problema. Tú vas guiando el proceso de diagnóstico decisión a decisión. Cada paso tiene opciones: una correcta (más puntos), otras aceptables (menos puntos), otras erróneas (¡cuidado!). Aprende el protocolo de actuación profesional.</p>
      </div>

      <div class="incidences-grid">
    `;
    INCIDENCES.forEach(inc => {
      const diff = inc.difficulty === 'basic' ? '🟢 Básico' : inc.difficulty === 'medium' ? '🟡 Medio' : '🔴 Difícil';
      html += `
        <div class="incident-card" data-id="${inc.id}">
          <div class="incident-icon">${inc.icon}</div>
          <h3 class="incident-title">${inc.title}</h3>
          <div class="incident-meta">
            <span class="badge">${diff}</span>
            <span class="badge">💰 hasta ${inc.rewardBase + inc.steps.length * 15} IgorCoins</span>
            <span class="badge">📋 ${inc.steps.length} pasos</span>
          </div>
          <div class="incident-customer"><strong>Cliente:</strong> ${inc.customer}</div>
          <button class="btn btn-primary" onclick="Incidences.start('${inc.id}')">Atender llamada →</button>
        </div>
      `;
    });
    html += `</div>`;
    UI.$main.innerHTML = html;
  },

  start(id) {
    const inc = INCIDENCES.find(i => i.id === id);
    if (!inc) return this.renderList();
    this.currentIncident = inc;
    this.currentStep = 0;
    this.correctCount = 0;
    this.totalCorrect = 0;
    this.wrongCount = 0;
    this.selections = [];
    this.renderStep();
  },

  renderStep() {
    const inc = this.currentIncident;
    if (!inc) return this.renderList();

    // Si ya hemos pasado todos los pasos, mostrar resumen
    if (this.currentStep >= inc.steps.length) {
      this.renderSummary();
      return;
    }

    const step = inc.steps[this.currentStep];
    const isLastStep = this.currentStep === inc.steps.length - 1;

    let html = `
      <div class="incident-page">
        <button class="btn btn-secondary back-btn" onclick="Incidences.abandon()">← Salir</button>

        <!-- Header del cliente -->
        <div class="incident-header">
          <div class="incident-header-icon">${inc.icon}</div>
          <div class="incident-header-info">
            <h2>${inc.title}</h2>
            <div class="incident-header-meta">
              <span class="badge">${inc.customer}</span>
              <span class="badge">Paso ${this.currentStep + 1} / ${inc.steps.length}</span>
              <span class="badge">✓ Aciertos: ${this.totalCorrect}</span>
              ${this.wrongCount ? `<span class="badge" style="background: var(--danger-soft); color: var(--danger);">✗ Errores: ${this.wrongCount}</span>` : ''}
            </div>
          </div>
        </div>

        <!-- Progress -->
        <div class="progress-track" style="margin-bottom: 1.5rem;">
          <div class="progress-fill" style="width: ${(this.currentStep / inc.steps.length) * 100}%"></div>
        </div>

        <!-- Presentación cliente (solo paso 0) -->
        ${this.currentStep === 0 ? `
          <div class="incident-presentation">
            <div class="incident-presentation-customer">${inc.customer} dice:</div>
            <div class="incident-presentation-text">"${inc.presentation}"</div>
          </div>
        ` : ''}

        <!-- Situación -->
        <div class="incident-situation">
          <div class="incident-situation-icon">🤔</div>
          <div class="incident-situation-text">${step.situation}</div>
        </div>

        <!-- Opciones -->
        <div class="incident-options" id="incOpts">
    `;

    // Soportar pasos con múltiples respuestas correctas (multi: true)
    const isMulti = step.multi === true;

    step.options.forEach((opt, i) => {
      html += `
        <div class="incident-option" data-idx="${i}">
          <div class="incident-option-text">${opt.text}</div>
          <div class="incident-option-verdict" style="display:none;"></div>
        </div>
      `;
    });

    html += `
        </div>

        <div class="incident-actions" id="incActions" style="display:none;">
          ${isLastStep ? '<button class="btn btn-primary" onclick="Incidences.finishIncident()">Finalizar incidencia →</button>'
                       : '<button class="btn btn-primary" onclick="Incidences.nextStep()">Siguiente paso →</button>'}
        </div>
      </div>
    `;

    UI.$main.innerHTML = html;

    // Binding
    let answered = false;
    let correctClicked = false;
    document.querySelectorAll('.incident-option').forEach(el => {
      el.onclick = () => {
        const idx = parseInt(el.dataset.idx);
        const opt = step.options[idx];
        // Marcar
        el.classList.add(`opt-${opt.verdict}`);
        const $v = el.querySelector('.incident-option-verdict');
        $v.style.display = 'block';
        $v.innerHTML = `<strong>${opt.verdict === 'correct' ? '✓ Correcto' : opt.verdict === 'acceptable' ? '⚠ Aceptable' : '✗ Incorrecto'}</strong>${opt.feedback ? '<div>' + opt.feedback + '</div>' : ''}`;
        el.style.pointerEvents = 'none';

        // Si es multi: dejar clicar todas las correctas
        if (isMulti && opt.verdict === 'correct') {
          if (!correctClicked) {
            this.totalCorrect++;
            correctClicked = true; // un punto por paso
          }
          // Mostrar acciones cuando se haya clicado al menos UNA correcta
          document.getElementById('incActions').style.display = 'flex';
        } else {
          // Single response
          if (!answered) {
            answered = true;
            if (opt.verdict === 'correct') this.totalCorrect++;
            else if (opt.verdict === 'wrong') this.wrongCount++;
            // Bloquear todas
            document.querySelectorAll('.incident-option').forEach(o => {
              if (o !== el) o.style.pointerEvents = 'none';
            });
            // Mostrar feedbacks de las otras también (modo aprendizaje)
            step.options.forEach((o, i) => {
              if (i === idx) return;
              const $other = document.querySelector(`.incident-option[data-idx="${i}"]`);
              if (!$other) return;
              $other.classList.add('opt-disabled', `opt-${o.verdict}`);
              const $ov = $other.querySelector('.incident-option-verdict');
              $ov.style.display = 'block';
              $ov.innerHTML = `<strong>${o.verdict === 'correct' ? '✓ Era correcto' : o.verdict === 'acceptable' ? '⚠ Aceptable' : '✗ Era incorrecto'}</strong>${o.feedback ? '<div>' + o.feedback + '</div>' : ''}`;
            });
            document.getElementById('incActions').style.display = 'flex';
          }
        }
      };
    });
  },

  nextStep() {
    this.currentStep++;
    this.renderStep();
  },

  finishIncident() {
    this.renderSummary();
  },

  renderSummary() {
    const inc = this.currentIncident;
    const total = inc.steps.length;
    const accuracy = total > 0 ? this.totalCorrect / total : 0;

    let earned = Math.round(inc.rewardBase + (this.totalCorrect * 15) - (this.wrongCount * 5));
    earned = Math.max(10, earned);

    let grade, gradeIcon;
    if (accuracy >= 0.95) { grade = 'PROFESIONAL'; gradeIcon = '🏆'; }
    else if (accuracy >= 0.75) { grade = 'COMPETENTE'; gradeIcon = '🎯'; }
    else if (accuracy >= 0.5) { grade = 'EN PROCESO'; gradeIcon = '📚'; }
    else { grade = 'NECESITAS REPASO'; gradeIcon = '😵'; }

    let html = `
      <div class="incident-page">
        <div class="page-header">
          <h1>📋 Incidencia resuelta</h1>
          <p>${inc.customer} se va contento (o no tanto). Veamos cómo lo has hecho.</p>
        </div>

        <div class="builder-score-card">
          <div class="builder-score-grade">${gradeIcon} ${grade}</div>
          <div class="builder-score-num">${this.totalCorrect}<span>/${total}</span></div>
          <div class="builder-score-earned">+${earned} IgorCoins</div>
        </div>

        <div class="incident-summary-stats">
          <div class="stat-card">
            <div class="stat-card-icon">✓</div>
            <div class="stat-card-value">${this.totalCorrect}</div>
            <div class="stat-card-label">Aciertos</div>
          </div>
          <div class="stat-card">
            <div class="stat-card-icon">✗</div>
            <div class="stat-card-value">${this.wrongCount}</div>
            <div class="stat-card-label">Errores</div>
          </div>
          <div class="stat-card">
            <div class="stat-card-icon">📋</div>
            <div class="stat-card-value">${total}</div>
            <div class="stat-card-label">Pasos totales</div>
          </div>
          <div class="stat-card">
            <div class="stat-card-icon">💰</div>
            <div class="stat-card-value">${earned}</div>
            <div class="stat-card-label">IgorCoins</div>
          </div>
        </div>

        <div class="incident-summary-igor">
          🐦 <strong>Igor te dice:</strong> ${this.getIgorComment(accuracy)}
        </div>

        <div class="builder-final-actions">
          <button class="btn btn-secondary" onclick="Incidences.start('${inc.id}')">🔄 Repetir esta incidencia</button>
          <button class="btn btn-primary" onclick="Incidences.renderList()">📋 Otra incidencia</button>
          <button class="btn btn-tertiary" onclick="Incidences.abandon()">🏠 Volver al inicio</button>
        </div>
      </div>
    `;

    UI.$main.innerHTML = html;

    // Recompensa
    State.addPoints(earned, `incident_${inc.id}_${Date.now()}`);
    UI.updateStats();
    UI.renderSidebar();
    if (accuracy >= 0.95) UI.fireConfetti();
  },

  getIgorComment(acc) {
    if (acc >= 0.95) return 'Perfecto, Sr. Anderson. Has resuelto la incidencia como un auténtico técnico. Don\'t make cabesa a mess.';
    if (acc >= 0.75) return 'Muy bien. Algún detalle a pulir pero el cliente se va contento.';
    if (acc >= 0.5) return 'Hmm. Has resuelto el problema pero por el camino largo. Repasa el módulo correspondiente y vuelve a intentarlo.';
    return 'Argh. Necesitas repasar. El cliente probablemente ha llamado a otro técnico. Repasa los módulos de diagnóstico y seguridad.';
  },

  abandon() {
    this.currentIncident = null;
    window.location.hash = 'dashboard';
  }

};
