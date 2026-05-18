/* ============================================
   ExerciseLogic — Renderizado y validación
   Tipos: multi, tf, fill, match, order, drag, builder, diagnose
   ============================================ */

const ExerciseLogic = {

  renderExercise(ex, modId, num, isBoss = false) {
    const $card = document.createElement('div');
    $card.className = 'exercise-card';
    $card.dataset.id = ex.id;
    const exFullId = `${modId}_${ex.id}`;
    const alreadyDone = State.data.doneExercises[exFullId];

    const difficultyLabel = ex.difficulty === 'basic' ? '🟢 Básico' : ex.difficulty === 'medium' ? '🟡 Medio' : '🔴 Difícil';
    const typeLabel = this.getTypeLabel(ex.type);

    $card.innerHTML = `
      <div class="ex-header">
        <span class="ex-num">${num}</span>
        <span class="ex-prompt">${ex.prompt}</span>
        <div class="ex-meta">
          <span class="ex-badge">${typeLabel}</span>
          <span class="ex-badge">${difficultyLabel}</span>
          <span class="ex-badge ex-points">+${ex.points} 💰</span>
          ${alreadyDone ? '<span class="ex-badge ex-done">✓ Hecho</span>' : ''}
        </div>
      </div>
      <div class="ex-body"></div>
      <div class="ex-actions">
        ${ex.hint ? '<button class="btn btn-tertiary ex-hint-btn">💡 Pista</button>' : ''}
        <button class="btn btn-primary ex-check-btn">Comprobar</button>
      </div>
      <div class="ex-hint-box" style="display:none;"></div>
      <div class="ex-result" style="display:none;"></div>
    `;

    const $body = $card.querySelector('.ex-body');
    this.renderBody(ex, $body);

    // Bind: hint
    const $hintBtn = $card.querySelector('.ex-hint-btn');
    if ($hintBtn) {
      $hintBtn.onclick = () => {
        const $hint = $card.querySelector('.ex-hint-box');
        $hint.style.display = 'block';
        $hint.innerHTML = `<strong>💡 Pista:</strong> ${ex.hint}`;
      };
    }

    // Bind: check
    $card.querySelector('.ex-check-btn').onclick = () => {
      this.checkAnswer(ex, $card, modId, isBoss);
    };

    return $card;
  },

  getTypeLabel(type) {
    const labels = {
      'multi': '🔘 Opción múltiple',
      'tf': '⚖️ V/F',
      'fill': '✏️ Rellena',
      'match': '🔗 Parejas',
      'order': '📊 Ordena',
      'drag': '🎯 Arrastra',
      'builder': '🔨 Construye',
      'diagnose': '🩺 Diagnostica',
      'multiple': '🔘 Opción múltiple',
      'truefalse': '⚖️ V/F',
      'fillblank': '✏️ Rellena',
      'hotspot': '🎯 Identifica'
    };
    return labels[type] || '❓ ';
  },

  renderBody(ex, $body) {
    switch (ex.type) {
      case 'multi':
      case 'multiple':
        this.renderMulti(ex, $body);
        break;
      case 'tf':
      case 'truefalse':
        this.renderTF(ex, $body);
        break;
      case 'fill':
      case 'fillblank':
        this.renderFill(ex, $body);
        break;
      case 'match':
        this.renderMatch(ex, $body);
        break;
      case 'order':
        this.renderOrder(ex, $body);
        break;
      case 'drag':
        this.renderDrag(ex, $body);
        break;
      case 'builder':
        this.renderBuilder(ex, $body);
        break;
      case 'diagnose':
        this.renderDiagnose(ex, $body);
        break;
      default:
        $body.innerHTML = `<em>(Tipo de ejercicio aún sin renderer: ${ex.type})</em>`;
    }
  },

  /* === MULTI === */
  renderMulti(ex, $body) {
    let html = '<div class="opt-list">';
    ex.options.forEach((opt, i) => {
      html += `<label class="opt-row"><input type="radio" name="ex_${ex.id}" value="${i}"> <span>${opt}</span></label>`;
    });
    html += '</div>';
    $body.innerHTML = html;
  },

  /* === TF === */
  renderTF(ex, $body) {
    $body.innerHTML = `
      <div class="opt-list">
        <label class="opt-row"><input type="radio" name="ex_${ex.id}" value="true"> <span>✓ Verdadero</span></label>
        <label class="opt-row"><input type="radio" name="ex_${ex.id}" value="false"> <span>✗ Falso</span></label>
      </div>
    `;
  },

  /* === FILL === */
  renderFill(ex, $body) {
    $body.innerHTML = `
      <div class="fill-row">
        <input type="text" class="fill-input" placeholder="Escribe tu respuesta..." autocomplete="off">
      </div>
    `;
  },

  /* === MATCH === */
  renderMatch(ex, $body) {
    // Shuffle right column
    const rights = ex.pairs.map((p, i) => ({ text: p.right, idx: i }));
    const shuffled = [...rights].sort(() => 0.5 - Math.random());

    let html = '<div class="match-cols">';
    html += '<div class="match-col">';
    ex.pairs.forEach((p, i) => {
      html += `
        <div class="match-row-pair">
          <div class="match-left">${p.left}</div>
          <select class="match-select" data-idx="${i}">
            <option value="">-- Elige --</option>
            ${shuffled.map(s => `<option value="${s.idx}">${s.text}</option>`).join('')}
          </select>
        </div>
      `;
    });
    html += '</div></div>';
    $body.innerHTML = html;
  },

  /* === ORDER === */
  renderOrder(ex, $body) {
    // Shuffle items
    const shuffled = [...ex.items].sort(() => 0.5 - Math.random());
    let html = '<div class="order-list" id="orderList_' + ex.id + '">';
    shuffled.forEach((item, i) => {
      html += `
        <div class="order-item" draggable="true" data-text="${item}">
          <span class="order-grip">⋮⋮</span>
          <span class="order-text">${item}</span>
          <div class="order-actions">
            <button class="order-btn" data-action="up">↑</button>
            <button class="order-btn" data-action="down">↓</button>
          </div>
        </div>
      `;
    });
    html += '</div>';
    $body.innerHTML = html;

    // Bind buttons
    const $list = $body.querySelector('.order-list');
    $list.addEventListener('click', e => {
      const btn = e.target.closest('.order-btn');
      if (!btn) return;
      const $item = btn.closest('.order-item');
      const action = btn.dataset.action;
      if (action === 'up' && $item.previousElementSibling) {
        $list.insertBefore($item, $item.previousElementSibling);
      } else if (action === 'down' && $item.nextElementSibling) {
        $list.insertBefore($item.nextElementSibling, $item);
      }
    });

    // Drag and drop básico
    let dragged = null;
    $list.addEventListener('dragstart', e => {
      dragged = e.target.closest('.order-item');
      if (dragged) dragged.classList.add('dragging');
    });
    $list.addEventListener('dragend', e => {
      if (dragged) dragged.classList.remove('dragging');
      dragged = null;
    });
    $list.addEventListener('dragover', e => {
      e.preventDefault();
      const target = e.target.closest('.order-item');
      if (target && target !== dragged) {
        const rect = target.getBoundingClientRect();
        const after = e.clientY - rect.top > rect.height / 2;
        if (after && target.nextElementSibling !== dragged) {
          $list.insertBefore(dragged, target.nextElementSibling);
        } else if (!after && target.previousElementSibling !== dragged) {
          $list.insertBefore(dragged, target);
        }
      }
    });
  },

  /* === DRAG === (drag to slots) */
  renderDrag(ex, $body) {
    // Genérico: similar a match pero visual con drag-drop
    this.renderMatch(ex, $body);
  },

  /* === BUILDER === (selecciones múltiples) */
  renderBuilder(ex, $body) {
    let html = '<div class="builder-options"><p><strong>Selecciona los componentes correctos:</strong></p>';
    ex.options.forEach((opt, i) => {
      html += `
        <label class="opt-row builder-row">
          <input type="checkbox" name="ex_${ex.id}" value="${i}">
          <span>${opt}</span>
        </label>
      `;
    });
    html += '</div>';
    $body.innerHTML = html;
  },

  /* === DIAGNOSE === */
  renderDiagnose(ex, $body) {
    // Igual a multi
    this.renderMulti(ex, $body);
  },

  /* ============== CHECK ANSWER ============== */
  checkAnswer(ex, $card, modId, isBoss = false) {
    const exFullId = `${modId}_${ex.id}`;
    let correct = false;
    let userMsg = '';

    switch (ex.type) {
      case 'multi':
      case 'multiple':
      case 'diagnose': {
        const sel = $card.querySelector(`input[name="ex_${ex.id}"]:checked`);
        if (!sel) { UI.showToast('Selecciona una opción', 'warn'); return; }
        correct = parseInt(sel.value) === ex.correct;
        userMsg = `Respondiste: <em>${ex.options[parseInt(sel.value)]}</em>`;
        break;
      }
      case 'tf':
      case 'truefalse': {
        const sel = $card.querySelector(`input[name="ex_${ex.id}"]:checked`);
        if (!sel) { UI.showToast('Selecciona Verdadero o Falso', 'warn'); return; }
        const userVal = sel.value === 'true';
        correct = userVal === ex.correct;
        userMsg = `Respondiste: <em>${userVal ? 'Verdadero' : 'Falso'}</em>`;
        break;
      }
      case 'fill':
      case 'fillblank': {
        const $inp = $card.querySelector('.fill-input');
        if (!$inp || !$inp.value.trim()) { UI.showToast('Escribe una respuesta', 'warn'); return; }
        const val = $inp.value.trim().toLowerCase();
        const acceptable = (ex.acceptable || [ex.correct]).map(a => a.toLowerCase());
        correct = acceptable.includes(val);
        userMsg = `Respondiste: <em>"${$inp.value}"</em>`;
        break;
      }
      case 'match':
      case 'drag': {
        const selects = $card.querySelectorAll('.match-select');
        let allCorrect = true;
        let answered = true;
        selects.forEach(s => {
          if (!s.value) answered = false;
          const idx = parseInt(s.dataset.idx);
          if (parseInt(s.value) !== idx) allCorrect = false;
        });
        if (!answered) { UI.showToast('Empareja todas las opciones', 'warn'); return; }
        correct = allCorrect;
        userMsg = 'Has emparejado todas las opciones.';
        break;
      }
      case 'order': {
        const items = $card.querySelectorAll('.order-item');
        const userOrder = Array.from(items).map(i => i.dataset.text);
        // Soporta dos formatos:
        // 1) ex.correct: array de textos (el orden correcto)
        // 2) ex.correctOrder: array de índices originales del array ex.items
        let expected;
        if (Array.isArray(ex.correct)) {
          expected = ex.correct;
        } else if (Array.isArray(ex.correctOrder)) {
          expected = ex.correctOrder.map(idx => ex.items[idx]);
        } else {
          // Fallback: asumir que ex.items YA está en orden correcto
          expected = ex.items;
        }
        correct = JSON.stringify(userOrder) === JSON.stringify(expected);
        userMsg = `Tu orden: ${userOrder.join(' → ')}`;
        break;
      }
      case 'builder': {
        const checked = $card.querySelectorAll(`input[name="ex_${ex.id}"]:checked`);
        if (checked.length === 0) { UI.showToast('Selecciona al menos uno', 'warn'); return; }
        const userVals = Array.from(checked).map(c => parseInt(c.value)).sort();
        const correctVals = (ex.correct || []).slice().sort();
        correct = JSON.stringify(userVals) === JSON.stringify(correctVals);
        userMsg = 'Has seleccionado tus componentes.';
        break;
      }
      default:
        UI.showToast('Tipo de ejercicio aún no implementado', 'warn');
        return;
    }

    // Mostrar resultado
    const $result = $card.querySelector('.ex-result');
    $result.style.display = 'block';
    $card.classList.add(correct ? 'correct' : 'wrong');
    $result.innerHTML = `
      <div class="ex-result-header ${correct ? 'correct' : 'wrong'}">
        ${correct ? '✓ ¡Correcto!' : '✗ Incorrecto'}
      </div>
      <div class="ex-result-body">
        <p>${userMsg}</p>
        <p><strong>Explicación:</strong> ${ex.explanation || ''}</p>
      </div>
    `;

    // Deshabilitar inputs
    $card.querySelectorAll('input, select, button.order-btn').forEach(el => el.disabled = true);
    $card.querySelectorAll('.order-item').forEach(el => el.draggable = false);
    const $checkBtn = $card.querySelector('.ex-check-btn');
    $checkBtn.disabled = true;
    $checkBtn.textContent = correct ? '✓ Resuelto' : 'Sigue intentándolo';

    // Botón "intentar de nuevo" si falla
    if (!correct) {
      const $retry = document.createElement('button');
      $retry.className = 'btn btn-secondary ex-retry-btn';
      $retry.textContent = '🔄 Volver a intentar';
      $retry.onclick = () => this.resetExercise(ex, $card, modId);
      $card.querySelector('.ex-actions').appendChild($retry);
    }

    // Puntos + racha
    if (correct) {
      const earned = State.addPoints(ex.points, exFullId);
      State.incrementStreak();
      UI.updateStats();
      UI.renderSidebar();
      UI.showToast(`✓ +${earned} IgorCoins`, 'success');

      // Evento boss
      if (isBoss) {
        window.dispatchEvent(new CustomEvent('boss-answer', { detail: { correct: true } }));
      }
    } else {
      State.resetStreak();
      UI.updateStats();
      if (isBoss) {
        window.dispatchEvent(new CustomEvent('boss-answer', { detail: { correct: false } }));
      }
    }
  },

  resetExercise(ex, $card, modId) {
    $card.classList.remove('correct', 'wrong');
    $card.querySelector('.ex-result').style.display = 'none';
    $card.querySelector('.ex-result').innerHTML = '';
    $card.querySelectorAll('input, select, button.order-btn').forEach(el => el.disabled = false);
    $card.querySelectorAll('.order-item').forEach(el => el.draggable = true);
    const $body = $card.querySelector('.ex-body');
    $body.innerHTML = '';
    this.renderBody(ex, $body);
    const $check = $card.querySelector('.ex-check-btn');
    $check.disabled = false;
    $check.textContent = 'Comprobar';
    const $retry = $card.querySelector('.ex-retry-btn');
    if ($retry) $retry.remove();
    const $hint = $card.querySelector('.ex-hint-box');
    if ($hint) $hint.style.display = 'none';
  }

};
