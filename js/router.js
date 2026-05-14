/* ============================================
   Router — navegación por hash
   ============================================ */

const Router = {

  init() {
    window.addEventListener('hashchange', () => this.handle());
    this.handle();
  },

  handle() {
    let hash = (window.location.hash || '#dashboard').replace('#', '');
    if (!hash) hash = 'dashboard';

    // Rutas
    if (hash === 'dashboard') {
      UI.renderDashboard();
    } else if (hash === 'levels') {
      UI.renderLevels();
    } else if (hash === 'rewards') {
      UI.renderRewards();
    } else if (hash === 'achievements') {
      UI.renderAchievements();
    } else if (hash === 'lab') {
      UI.renderLab();
    } else if (hash.startsWith('lab/')) {
      const id = hash.split('/')[1];
      UI.renderLabArticle(id);
    } else if (hash === 'flashcards') {
      UI.renderFlashcards();
    } else if (hash === 'bossfight') {
      UI.renderBossfight();
    } else if (hash.startsWith('module/')) {
      const modId = hash.split('/')[1];
      UI.renderModule(modId);
    } else {
      UI.renderDashboard();
    }

    UI.markActiveNav();

    // Scroll arriba al cambiar de página
    window.scrollTo(0, 0);
    if (UI.$main) UI.$main.scrollTop = 0;
  }

};
