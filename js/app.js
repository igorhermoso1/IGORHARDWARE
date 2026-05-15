/* ============================================
   App — entrada principal, eventos globales
   ============================================ */

// Callbacks expuestos al State manager
function onLevelUp(newLevel) {
  const lvl = LEVELS[newLevel - 1];
  if (!lvl) return;
  UI.showModal({
    icon: lvl.emoji,
    title: `¡Subiste a Nivel ${newLevel}!`,
    body: `<p><strong>${lvl.name}</strong></p><p>${lvl.desc}</p><p>Sigue así, Igor está orgulloso. 🐦</p>`
  });
  UI.fireConfetti();
  UI.renderSidebar();
}

function onAchievement(ach) {
  UI.showToast(`🏅 Logro: ${ach.name}`, 'success');
  // Pequeña animación de confetti
  setTimeout(() => UI.fireConfetti(), 200);
}

// Init
window.addEventListener('DOMContentLoaded', () => {
  // 1. Carga estado
  State.load();

  // 2. UI init
  UI.init();

  // 3. Bind mobile toggle
  const $toggle = document.getElementById('mobileToggle');
  const $sidebar = document.getElementById('sidebar');
  if ($toggle && $sidebar) {
    $toggle.onclick = () => $sidebar.classList.toggle('open');
  }

  // Click fuera del sidebar para cerrar (móvil)
  document.addEventListener('click', (e) => {
    if (window.innerWidth < 1024 && $sidebar.classList.contains('open')) {
      if (!$sidebar.contains(e.target) && e.target !== $toggle) {
        $sidebar.classList.remove('open');
      }
    }
  });

  // 4. Reset button
  const $reset = document.getElementById('resetBtn');
  if ($reset) {
    $reset.onclick = () => {
      if (confirm('⚠️ ¿Borrar TODO tu progreso? Esto eliminará IgorCoins, niveles, logros y recompensas. No se puede deshacer.')) {
        if (confirm('Última oportunidad. ¿Seguro? Igor te llorará.')) {
          State.reset();
          UI.updateStats();
          UI.renderSidebar();
          window.location.hash = 'dashboard';
          UI.showToast('Progreso reiniciado. ¡A empezar de nuevo!', 'info');
          Router.handle();
        }
      }
    };
  }

  // 5. Router init
  Router.init();

  // 6. Check logros iniciales
  State.checkAchievements();

  // 7. Toast de bienvenida primera vez
  const isFirstVisit = !localStorage.getItem('igorhardware_visited');
  if (isFirstVisit) {
    localStorage.setItem('igorhardware_visited', '1');
    setTimeout(() => {
      UI.showModal({
        icon: '🐦',
        title: '¡Bienvenido a IGORHARDWARE!',
        body: `<p>Hola, soy Igor. Esta plataforma te enseñará todo el hardware que necesitas saber para SMR.</p>
               <p>Cómo va esto:</p>
               <ul style="text-align:left; margin: 1rem 0;">
                 <li>Cada módulo tiene teoría, tips y ejercicios variados.</li>
                 <li>Cada ejercicio te da <strong>IgorCoins</strong>.</li>
                 <li>Sube de nivel: del <strong>Amante</strong> hasta la <strong>Pirámide Aristotélica</strong>.</li>
                 <li>Gasta tus IgorCoins en <strong>recompensas absurdas</strong> (un beso fuerte mío, p. ej.).</li>
                 <li>Tu progreso se guarda local. <em>"Don't make cabesa a mess"</em>.</li>
               </ul>
               <p><strong>¿Por dónde empiezas? Te recomiendo el módulo de Hardware o Unidades de medida si vas verde verde.</strong></p>`
      });
    }, 400);
  }
});
