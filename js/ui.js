/* ============================================
   UI — Renderizado de páginas y componentes
   ============================================ */

const UI = {

  /* Refs DOM */
  $main: null,
  $sidebar: null,
  $toastContainer: null,
  $modalOverlay: null,
  $modal: null,

  init() {
    this.$main = document.getElementById('main');
    this.$sidebar = document.getElementById('sidebar');
    this.$toastContainer = document.getElementById('toastContainer');
    this.$modalOverlay = document.getElementById('modalOverlay');
    this.$modal = document.getElementById('modal');
    this.renderSidebar();
    this.updateStats();
  },

  /* ============== STATS / SIDEBAR ============== */
  updateStats() {
    const s = State.getStats();
    document.getElementById('statPoints').textContent = s.points;
    document.getElementById('statLevel').textContent = s.level;
    document.getElementById('statDone').textContent = s.doneExercises;
    document.getElementById('statStreak').textContent = s.streak;
    document.getElementById('progressPct').textContent = s.progress + '%';
    document.getElementById('progressFill').style.width = s.progress + '%';
  },

  renderSidebar() {
    // Limpia y rellena cada grupo según el módulo
    const groups = { fund: 'navModulesFund', comp: 'navModulesComp', sys: 'navModulesSys', adv: 'navModulesAdv' };
    Object.keys(groups).forEach(g => {
      const el = document.getElementById(groups[g]);
      if (!el) return;
      // Mantener título
      const title = el.querySelector('.nav-title');
      el.innerHTML = '';
      if (title) el.appendChild(title);
      MODULES.filter(m => m.group === g).forEach(m => {
        const item = document.createElement('div');
        item.className = 'nav-item';
        item.dataset.route = `module/${m.id}`;
        const progress = State.getModuleProgress(m.id);
        const done = progress === 100;
        item.innerHTML = `
          <span class="nav-item-icon">${m.icon}</span>
          <span style="flex:1; overflow: hidden; text-overflow: ellipsis;">${m.name}</span>
          ${done ? '<span class="nav-item-badge">✓</span>' : (progress > 0 ? `<span class="nav-item-badge" style="background:var(--primary-soft); color:var(--primary-dark);">${progress}%</span>` : '')}
        `;
        el.appendChild(item);
      });
    });

    // Click handler general
    document.querySelectorAll('.nav-item').forEach(item => {
      if (!item.id) {
        item.onclick = () => {
          const route = item.dataset.route;
          if (route) {
            window.location.hash = route;
            // Cierra sidebar en móvil
            if (window.innerWidth < 1024) {
              this.$sidebar.classList.remove('open');
            }
          }
        };
      }
    });

    // Marca activo
    this.markActiveNav();
  },

  markActiveNav() {
    const currentRoute = (window.location.hash || '#dashboard').replace('#', '');
    document.querySelectorAll('.nav-item').forEach(i => {
      i.classList.toggle('active', i.dataset.route === currentRoute);
    });
  },

  /* ============== DASHBOARD ============== */
  renderDashboard() {
    const s = State.getStats();
    const currentLvl = State.getCurrentLevel();
    const nextLvl = State.getNextLevel();
    const lvlProgress = State.getLevelProgress();

    let html = `
      <div class="hero">
        <h1>🐦 Bienvenido a <span class="highlight">IGORHARDWARE</span></h1>
        <p class="hero-subtitle">Tu plataforma para aprender hardware, sistemas operativos y redes de la mano de Igor. Aquí no hay clases aburridas, hay aventuras.</p>
        <div class="hero-igor">
          <strong>"Don't make cabesa a mess"</strong> — Igor te da la bienvenida. Empieza por cualquier módulo, completa ejercicios, gana <strong>IgorCoins</strong> y desbloquea recompensas. Tu progreso se guarda automáticamente.
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="stats-row">
        <div class="stat-card">
          <div class="stat-card-icon">💰</div>
          <div class="stat-card-value">${s.points}</div>
          <div class="stat-card-label">IgorCoins</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-icon">${currentLvl.emoji}</div>
          <div class="stat-card-value">${currentLvl.name}</div>
          <div class="stat-card-label">Nivel ${s.level}</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-icon">✅</div>
          <div class="stat-card-value">${s.doneExercises}/${s.totalExercises}</div>
          <div class="stat-card-label">Ejercicios</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-icon">🔥</div>
          <div class="stat-card-value">${s.streak}</div>
          <div class="stat-card-label">Racha actual</div>
        </div>
      </div>

      <!-- Level progress -->
      <div class="level-progress-box">
        <div class="level-progress-header">
          <span>Nivel actual: <strong>${currentLvl.emoji} ${currentLvl.name}</strong></span>
          ${nextLvl ? `<span>Siguiente: ${nextLvl.emoji} ${nextLvl.name}</span>` : '<span>¡Nivel máximo!</span>'}
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width: ${lvlProgress}%"></div>
        </div>
        <div class="level-progress-footer">
          ${nextLvl ? `<span>${s.totalEarned} / ${nextLvl.xpRequired} XP</span>` : '<span>¡Has alcanzado el rango supremo!</span>'}
        </div>
      </div>

      <!-- Módulos -->
      <h2 class="section-title">📚 Módulos del curso</h2>
      <p class="section-subtitle">Empieza por donde quieras. Cada módulo tiene teoría, ejemplos, ejercicios variados y curiosidades.</p>
      <div class="modules-grid">
    `;

    MODULES.forEach(m => {
      const progress = State.getModuleProgress(m.id);
      const done = progress === 100;
      const moduleEx = EXERCISES[m.id] || [];
      const totalEx = moduleEx.length;
      const doneEx = moduleEx.filter(e => State.data.doneExercises[`${m.id}_${e.id}`]).length;
      const diffBadge = m.difficulty === 'basic' ? '🟢 Fácil' : m.difficulty === 'medium' ? '🟡 Medio' : '🔴 Difícil';

      html += `
        <div class="module-card" data-mod="${m.id}">
          <div class="module-icon">${m.icon}</div>
          <div class="module-difficulty">${diffBadge}</div>
          <h3 class="module-name">${m.name}</h3>
          <p class="module-desc">${m.desc}</p>
          <div class="module-progress-row">
            <div class="progress-track" style="flex:1;"><div class="progress-fill" style="width:${progress}%"></div></div>
            <span class="module-progress-text">${doneEx}/${totalEx}</span>
          </div>
          ${done ? '<div class="module-completed">✓ Completado</div>' : ''}
        </div>
      `;
    });

    html += `
      </div>

      <!-- Quick links -->
      <h2 class="section-title">🎯 Atajos</h2>
      <div class="quick-links">
        <div class="quick-link" data-route="rewards">
          <div class="ql-icon">🎁</div>
          <div class="ql-title">Recompensas</div>
          <div class="ql-desc">Gasta tus IgorCoins en premios absurdos.</div>
        </div>
        <div class="quick-link" data-route="achievements">
          <div class="ql-icon">🏅</div>
          <div class="ql-title">Logros</div>
          <div class="ql-desc">Desbloquea medallas por tus hazañas.</div>
        </div>
        <div class="quick-link" data-route="lab">
          <div class="ql-icon">⚗️</div>
          <div class="ql-title">Laboratorio 2026</div>
          <div class="ql-desc">Las novedades más punteras del hardware.</div>
        </div>
        <div class="quick-link" data-route="flashcards">
          <div class="ql-icon">🃏</div>
          <div class="ql-title">Flashcards</div>
          <div class="ql-desc">Repaso rápido de conceptos clave.</div>
        </div>
        <div class="quick-link" data-route="bossfight">
          <div class="ql-icon">⚔️</div>
          <div class="ql-title">Reto final</div>
          <div class="ql-desc">El examen definitivo de Igor.</div>
        </div>
        <div class="quick-link" data-route="levels">
          <div class="ql-icon">🎖</div>
          <div class="ql-title">Niveles</div>
          <div class="ql-desc">Mira el camino hasta la Pirámide Aristotélica.</div>
        </div>
        <div class="quick-link quick-link-featured" data-route="pcbuilder">
          <div class="ql-icon">🏗</div>
          <div class="ql-title">PC Builder Simulator</div>
          <div class="ql-desc">¡NUEVO! Atiende a clientes y móntales su PC.</div>
        </div>
        <div class="quick-link quick-link-featured" data-route="incidences">
          <div class="ql-icon">🛠</div>
          <div class="ql-title">Resolutorio de incidencias</div>
          <div class="ql-desc">¡NUEVO! Resuelve averías paso a paso.</div>
        </div>
      </div>
    `;

    this.$main.innerHTML = html;

    // Bind click en cards
    document.querySelectorAll('.module-card').forEach(c => {
      c.onclick = () => { window.location.hash = `module/${c.dataset.mod}`; };
    });
    document.querySelectorAll('.quick-link').forEach(c => {
      c.onclick = () => { window.location.hash = c.dataset.route; };
    });
  },

  /* ============== MÓDULO ============== */
  renderModule(modId) {
    const mod = MODULES.find(m => m.id === modId);
    if (!mod) { this.renderDashboard(); return; }
    const content = MODULE_CONTENT[modId];
    if (!content) {
      this.$main.innerHTML = `<div class="empty-state">😅 Módulo "${mod.name}" aún en construcción. Pronto disponible.</div>`;
      return;
    }
    const exercises = EXERCISES[modId] || [];
    const doneEx = exercises.filter(e => State.data.doneExercises[`${modId}_${e.id}`]).length;
    const progress = exercises.length > 0 ? Math.round((doneEx / exercises.length) * 100) : 0;

    let html = `
      <div class="module-header">
        <div class="module-header-icon">${mod.icon}</div>
        <div>
          <h1>${mod.name}</h1>
          <p class="module-header-desc">${mod.desc}</p>
          <div class="module-header-meta">
            <span class="badge">${mod.difficulty === 'basic' ? '🟢 Fácil' : mod.difficulty === 'medium' ? '🟡 Medio' : '🔴 Difícil'}</span>
            <span class="badge">📝 ${exercises.length} ejercicios</span>
            <span class="badge">✅ ${doneEx} completados (${progress}%)</span>
          </div>
        </div>
      </div>

      <div class="module-intro">${content.intro}</div>

      <!-- Teoría -->
      <div class="theory-section">
    `;

    content.blocks.forEach((block, i) => {
      html += `
        <div class="theory-block">
          <h3 class="theory-title">${block.title}</h3>
          <div class="theory-content">${block.html}</div>
        </div>
      `;
    });

    html += `</div>`;

    // Igor box
    html += `
      <div class="igor-callout">
        <div class="igor-callout-icon">🐦</div>
        <div class="igor-callout-text">${content.igor}</div>
      </div>
    `;

    // Secretos
    if (content.secrets && content.secrets.length) {
      html += `
        <div class="extras-block">
          <h3 class="extras-title">🔮 Lo que nadie suele contarte</h3>
          <ul class="extras-list">
            ${content.secrets.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    // Tips
    if (content.tips && content.tips.length) {
      html += `
        <div class="extras-block tips">
          <h3 class="extras-title">💡 Tips de Igor</h3>
          <ul class="extras-list">
            ${content.tips.map(t => `<li>${t}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    // Errores
    if (content.mistakes && content.mistakes.length) {
      html += `
        <div class="extras-block mistakes">
          <h3 class="extras-title">⚠️ Errores comunes (NO hagas esto)</h3>
          <ul class="extras-list">
            ${content.mistakes.map(m => `<li>${m}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    // Ejercicios
    if (exercises.length > 0) {
      html += `
        <h2 class="section-title">📝 Ejercicios</h2>
        <p class="section-subtitle">Pon a prueba lo aprendido. Cada ejercicio te da IgorCoins. Si fallas, puedes intentarlo de nuevo (pero con menos puntos).</p>
        <div class="exercises-list" id="exercisesList"></div>
      `;
    }

    this.$main.innerHTML = html;

    // Renderizar ejercicios
    if (exercises.length > 0) {
      const $list = document.getElementById('exercisesList');
      exercises.forEach((ex, i) => {
        const $ex = ExerciseLogic.renderExercise(ex, modId, i + 1);
        $list.appendChild($ex);
      });
    }

    // Scroll arriba
    this.$main.scrollTop = 0;
    window.scrollTo(0, 0);
  },

  /* ============== NIVELES ============== */
  renderLevels() {
    const s = State.getStats();
    let html = `
      <div class="page-header">
        <h1>🎖 Sistema de Niveles</h1>
        <p>Tu rango crece con la experiencia (XP). Cada IgorCoin que ganas también es 1 XP. Algunos niveles dan acceso a contenido exclusivo.</p>
      </div>

      <div class="levels-list">
    `;

    LEVELS.forEach((lvl, i) => {
      const unlocked = s.totalEarned >= lvl.xpRequired;
      const current = s.level === lvl.id;
      const next = s.level + 1 === lvl.id;
      html += `
        <div class="level-card ${unlocked ? 'unlocked' : 'locked'} ${current ? 'current' : ''}">
          <div class="level-emoji">${lvl.emoji}</div>
          <div class="level-info">
            <div class="level-name">
              <span class="level-num">Nivel ${lvl.id}</span>
              <span class="level-title">${lvl.name}</span>
              ${current ? '<span class="level-current-badge">ACTUAL</span>' : ''}
              ${next ? '<span class="level-next-badge">SIGUIENTE</span>' : ''}
            </div>
            <div class="level-desc">${lvl.desc}</div>
            <div class="level-xp">
              <strong>${lvl.xpRequired} XP</strong> necesarios
              ${unlocked ? '<span class="level-unlocked-tag">✓ Conseguido</span>' : ''}
            </div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    this.$main.innerHTML = html;
  },

  /* ============== RECOMPENSAS ============== */
  renderRewards() {
    const s = State.getStats();
    let html = `
      <div class="page-header">
        <h1>🎁 Recompensas</h1>
        <p>Gasta tus IgorCoins en premios... únicos. Son canjeables solo en el corazón. Una vez desbloqueada, la recompensa es para siempre.</p>
        <div class="page-coin-counter">💰 Tienes <strong>${s.points}</strong> IgorCoins</div>
      </div>

      <div class="rewards-list">
    `;

    REWARDS.forEach(r => {
      const unlocked = State.data.unlockedRewards[r.id];
      const canAfford = s.points >= r.cost;
      html += `
        <div class="reward-card ${unlocked ? 'unlocked' : ''} ${canAfford && !unlocked ? 'available' : ''}">
          <div class="reward-emoji">${r.emoji}</div>
          <div class="reward-info">
            <h3 class="reward-name">${r.name}</h3>
            <p class="reward-desc">${r.desc}</p>
            <div class="reward-footer">
              <span class="reward-cost">💰 ${r.cost} IgorCoins</span>
              ${unlocked ? '<span class="reward-status unlocked">✓ Desbloqueada</span>' :
                canAfford ? `<button class="btn btn-primary btn-claim" data-id="${r.id}">¡Canjear!</button>` :
                `<span class="reward-status locked">🔒 Te faltan ${r.cost - s.points}</span>`}
            </div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    this.$main.innerHTML = html;

    document.querySelectorAll('.btn-claim').forEach(btn => {
      btn.onclick = () => {
        const id = btn.dataset.id;
        const reward = REWARDS.find(r => r.id === id);
        if (!reward) return;
        if (confirm(`¿Canjear "${reward.name}" por ${reward.cost} IgorCoins?`)) {
          const ok = State.unlockReward(id);
          if (ok) {
            this.showToast(`🎉 ¡Desbloqueado: ${reward.name}!`, 'success');
            this.fireConfetti();
            this.updateStats();
            this.renderSidebar();
            setTimeout(() => this.renderRewards(), 500);
          }
        }
      };
    });
  },

  /* ============== LOGROS ============== */
  renderAchievements() {
    const unlocked = ACHIEVEMENTS.filter(a => State.data.achievements[a.id]).length;
    let html = `
      <div class="page-header">
        <h1>🏅 Logros</h1>
        <p>Cada logro es una pequeña victoria. ${unlocked} de ${ACHIEVEMENTS.length} desbloqueados.</p>
        <div class="progress-track" style="margin-top: 1rem;">
          <div class="progress-fill" style="width:${(unlocked/ACHIEVEMENTS.length)*100}%"></div>
        </div>
      </div>

      <div class="achievements-grid">
    `;

    ACHIEVEMENTS.forEach(a => {
      const got = !!State.data.achievements[a.id];
      html += `
        <div class="achievement-card ${got ? 'unlocked' : 'locked'}">
          <div class="ach-icon">${got ? a.icon : '🔒'}</div>
          <div class="ach-name">${a.name}</div>
          <div class="ach-desc">${a.desc}</div>
          ${got ? '<div class="ach-tag">✓ Conseguido</div>' : ''}
        </div>
      `;
    });

    html += `</div>`;
    this.$main.innerHTML = html;
  },

  /* ============== LABORATORIO ============== */
  renderLab() {
    let html = `
      <div class="page-header">
        <h1>⚗️ Laboratorio 2026</h1>
        <p>Las tecnologías más punteras: NPUs, Wi-Fi 7, DLSS 4, ARM en PC y todo lo que llega. Lo que nadie te cuenta en el aula.</p>
      </div>

      <div class="lab-grid">
    `;

    LAB_ARTICLES.forEach(a => {
      html += `
        <div class="lab-card" data-id="${a.id}">
          <div class="lab-icon">${a.icon}</div>
          <div class="lab-tag">${a.tag}</div>
          <h3 class="lab-title">${a.title}</h3>
          <p class="lab-summary">${a.summary}</p>
          <button class="btn btn-secondary">Leer artículo →</button>
        </div>
      `;
    });

    html += `</div>`;
    this.$main.innerHTML = html;

    document.querySelectorAll('.lab-card').forEach(c => {
      c.onclick = () => this.renderLabArticle(c.dataset.id);
    });
  },

  renderLabArticle(id) {
    const article = LAB_ARTICLES.find(a => a.id === id);
    if (!article) { this.renderLab(); return; }

    this.$main.innerHTML = `
      <button class="btn btn-secondary back-btn" onclick="window.location.hash='lab'">← Volver al laboratorio</button>
      <div class="lab-article">
        <div class="lab-article-header">
          <div class="lab-article-icon">${article.icon}</div>
          <div>
            <div class="lab-tag">${article.tag}</div>
            <h1>${article.title}</h1>
          </div>
        </div>
        <div class="lab-article-body">${article.html}</div>
      </div>
    `;
    this.$main.scrollTop = 0;
    window.scrollTo(0, 0);
  },

  /* ============== FLASHCARDS ============== */
  renderFlashcards() {
    // Recopila todas las "secrets" + tips como flashcards
    const cards = [];
    Object.keys(MODULE_CONTENT).forEach(modId => {
      const c = MODULE_CONTENT[modId];
      const mod = MODULES.find(m => m.id === modId);
      if (!mod) return;
      (c.secrets || []).forEach((s, i) => {
        cards.push({ id: `${modId}_secret_${i}`, mod: mod.name, icon: mod.icon, type: '🔮 Secreto', text: s });
      });
      (c.tips || []).forEach((t, i) => {
        cards.push({ id: `${modId}_tip_${i}`, mod: mod.name, icon: mod.icon, type: '💡 Tip', text: t });
      });
    });

    let html = `
      <div class="page-header">
        <h1>🃏 Flashcards</h1>
        <p>Tarjetas rápidas con los secretos y tips de cada módulo. Pulsa cualquier tarjeta para ver/ocultar el contenido.</p>
      </div>

      <div class="flashcards-grid">
    `;

    cards.forEach(card => {
      html += `
        <div class="flashcard" data-id="${card.id}">
          <div class="flashcard-inner">
            <div class="flashcard-front">
              <div class="fc-icon">${card.icon}</div>
              <div class="fc-mod">${card.mod}</div>
              <div class="fc-type">${card.type}</div>
              <div class="fc-hint">Pulsa para revelar</div>
            </div>
            <div class="flashcard-back">
              <div class="fc-text">${card.text}</div>
            </div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    this.$main.innerHTML = html;

    document.querySelectorAll('.flashcard').forEach(c => {
      c.onclick = () => c.classList.toggle('flipped');
    });
  },

  /* ============== BOSSFIGHT ============== */
  renderBossfight() {
    // Examen final: 20 preguntas aleatorias de todos los módulos
    const allEx = [];
    Object.keys(EXERCISES).forEach(modId => {
      EXERCISES[modId].forEach(ex => {
        if (ex.type === 'multi' || ex.type === 'tf') {
          allEx.push({ ...ex, modId });
        }
      });
    });

    // Shuffle y toma 20
    const shuffled = allEx.sort(() => 0.5 - Math.random());
    const final = shuffled.slice(0, Math.min(20, shuffled.length));

    let html = `
      <div class="page-header">
        <h1>⚔️ Reto Final: La Pirámide Aristotélica</h1>
        <p>20 preguntas aleatorias de TODOS los módulos. Cada acierto vale 30 IgorCoins. Cada fallo, 0 (sin penalización, pero rompe la racha). Demuestra que eres digno del beso fuerte con Igor.</p>
        <div style="margin-top: 1rem;">
          <span class="badge" id="bossScore">Puntuación: 0/${final.length}</span>
          <span class="badge" id="bossPts">+0 IgorCoins</span>
        </div>
      </div>

      <div class="exercises-list" id="bossExercises"></div>
    `;
    this.$main.innerHTML = html;

    const $list = document.getElementById('bossExercises');
    let score = 0;
    let earned = 0;

    final.forEach((ex, i) => {
      const $ex = ExerciseLogic.renderExercise(ex, ex.modId, i + 1, true);
      $list.appendChild($ex);
    });

    // Actualizar el contador escuchando eventos
    window.addEventListener('boss-answer', (e) => {
      if (e.detail.correct) {
        score++;
        earned += 30;
        document.getElementById('bossScore').textContent = `Puntuación: ${score}/${final.length}`;
        document.getElementById('bossPts').textContent = `+${earned} IgorCoins`;
      }
    });
  },

  /* ============== TOAST ============== */
  showToast(msg, type = 'info') {
    const t = document.createElement('div');
    t.className = `toast toast-${type}`;
    t.textContent = msg;
    this.$toastContainer.appendChild(t);
    setTimeout(() => t.classList.add('show'), 50);
    setTimeout(() => {
      t.classList.remove('show');
      setTimeout(() => t.remove(), 350);
    }, 3500);
  },

  /* ============== MODAL ============== */
  showModal(opts) {
    document.getElementById('modalIcon').textContent = opts.icon || '🎉';
    document.getElementById('modalTitle').textContent = opts.title || '¡Bien hecho!';
    document.getElementById('modalBody').innerHTML = opts.body || '';
    this.$modalOverlay.classList.add('show');
    document.getElementById('modalOk').onclick = () => {
      this.$modalOverlay.classList.remove('show');
      if (typeof opts.onOk === 'function') opts.onOk();
    };
  },

  hideModal() {
    this.$modalOverlay.classList.remove('show');
  },

  /* ============== CONFETTI ============== */
  fireConfetti() {
    const colors = ['#c87e3c', '#d97757', '#e8a662', '#a85f25', '#f9d9b3'];
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);
    for (let i = 0; i < 60; i++) {
      const c = document.createElement('div');
      c.className = 'confetti';
      c.style.left = Math.random() * 100 + '%';
      c.style.background = colors[Math.floor(Math.random() * colors.length)];
      c.style.animationDelay = (Math.random() * 0.5) + 's';
      c.style.animationDuration = (1.5 + Math.random() * 1.5) + 's';
      container.appendChild(c);
    }
    setTimeout(() => container.remove(), 4000);
  }

};
