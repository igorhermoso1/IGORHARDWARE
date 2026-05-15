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
        const expectedOrder = Array.isArray(ex.correctOrder)
          ? ex.correctOrder.map(i => ex.items[i])
          : (ex.correct || []);
        correct = JSON.stringify(userOrder) === JSON.stringify(expectedOrder);
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
