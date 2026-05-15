/* ============================================
   STATE — Gestión de progreso con LocalStorage
   ============================================ */

const STORAGE_KEY = 'igorhardware_v1';

const DEFAULT_STATE = {
  points: 0,
  totalPointsEarned: 0,
  level: 1,
  doneExercises: {},        // { exerciseId: true }
  doneModules: {},          // { moduleId: true }
  achievements: {},         // { achievementId: true }
  unlockedRewards: {},      // { rewardId: true }
  streak: 0,
  bestStreak: 0,
  lastVisit: null,
  daysActive: 0,
  flashcardsSeen: {},
  startDate: null
};

const State = {
  data: { ...DEFAULT_STATE },

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        this.data = { ...DEFAULT_STATE, ...parsed };
      } else {
        this.data.startDate = new Date().toISOString();
        this.save();
      }
    } catch (e) {
      console.warn('Error cargando estado, reset:', e);
      this.data = { ...DEFAULT_STATE };
    }
    this.checkDailyVisit();
  },

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.warn('No se pudo guardar:', e);
    }
  },

  reset() {
    this.data = { ...DEFAULT_STATE, startDate: new Date().toISOString() };
    this.save();
  },

  checkDailyVisit() {
    const today = new Date().toDateString();
    if (this.data.lastVisit !== today) {
      this.data.daysActive = (this.data.daysActive || 0) + 1;
      this.data.lastVisit = today;
      this.save();
    }
  },

  /* PUNTOS */
  addPoints(amount, exerciseId = null) {
    // Evitar duplicados: si el ejercicio ya estaba hecho, dar solo 1/3 de los puntos
    let final = amount;
    if (exerciseId && this.data.doneExercises[exerciseId]) {
      final = Math.floor(amount / 3);
    }
    this.data.points += final;
    this.data.totalPointsEarned += final;

    if (exerciseId) {
      this.data.doneExercises[exerciseId] = true;
    }
    this.updateLevel();
    this.checkAchievements();
    this.save();
    return final;
  },

  spendPoints(amount) {
    if (this.data.points < amount) return false;
    this.data.points -= amount;
    this.save();
    return true;
  },

  /* RACHA */
  incrementStreak() {
    this.data.streak += 1;
    if (this.data.streak > this.data.bestStreak) {
      this.data.bestStreak = this.data.streak;
    }
    this.save();
  },

  resetStreak() {
    this.data.streak = 0;
    this.save();
  },

  /* NIVELES */
  updateLevel() {
    const xp = this.data.totalPointsEarned;
    let lvl = 1;
    for (let i = LEVELS.length - 1; i >= 0; i--) {
      if (xp >= LEVELS[i].xpRequired) {
        lvl = i + 1;
        break;
      }
    }
    const prevLevel = this.data.level;
    this.data.level = lvl;
    if (lvl > prevLevel) {
      // Subida de nivel
      setTimeout(() => {
        if (typeof onLevelUp === 'function') onLevelUp(lvl);
      }, 300);
    }
  },

  getCurrentLevel() {
    return LEVELS[this.data.level - 1] || LEVELS[0];
  },

  getNextLevel() {
    return LEVELS[this.data.level] || null;
  },

  getLevelProgress() {
    const current = this.getCurrentLevel();
    const next = this.getNextLevel();
    if (!next) return 100;
    const xp = this.data.totalPointsEarned;
    const range = next.xpRequired - current.xpRequired;
    const got = xp - current.xpRequired;
    return Math.min(100, Math.max(0, (got / range) * 100));
  },

  /* MÓDULOS */
  markModuleDone(modId) {
    this.data.doneModules[modId] = true;
    this.save();
  },

  isModuleDone(modId) {
    return !!this.data.doneModules[modId];
  },

  getModuleProgress(modId) {
    // % de ejercicios del módulo completados
    const exercises = (EXERCISES[modId] || []);
    if (!exercises.length) return 0;
    const done = exercises.filter(e => this.data.doneExercises[`${modId}_${e.id}`]).length;
    return Math.round((done / exercises.length) * 100);
  },

  /* ACHIEVEMENTS */
  unlockAchievement(id) {
    if (this.data.achievements[id]) return false;
    this.data.achievements[id] = true;
    this.save();
    return true;
  },

  checkAchievements() {
    // Comprobar cada logro
    ACHIEVEMENTS.forEach(a => {
      if (this.data.achievements[a.id]) return;
      if (a.check(this.data)) {
        this.unlockAchievement(a.id);
        if (typeof onAchievement === 'function') onAchievement(a);
      }
    });
  },

  /* RECOMPENSAS */
  unlockReward(rewardId) {
    const reward = REWARDS.find(r => r.id === rewardId);
    if (!reward) return false;
    if (this.data.unlockedRewards[rewardId]) return false;
    if (this.data.points < reward.cost) return false;
    this.spendPoints(reward.cost);
    this.data.unlockedRewards[rewardId] = true;
    this.save();
    return true;
  },

  /* PROGRESO GENERAL */
  getTotalProgress() {
    const total = Object.keys(EXERCISES).reduce((s, k) => s + EXERCISES[k].length, 0);
    if (!total) return 0;
    const done = Object.keys(this.data.doneExercises).length;
    return Math.min(100, Math.round((done / total) * 100));
  },

  getStats() {
    const totalExercises = Object.keys(EXERCISES).reduce((s, k) => s + EXERCISES[k].length, 0);
    const doneExercises = Object.keys(this.data.doneExercises).length;
    const totalModules = MODULES.length;
    const doneModules = MODULES.filter(m => this.getModuleProgress(m.id) === 100).length;
    return {
      points: this.data.points,
      totalEarned: this.data.totalPointsEarned,
      level: this.data.level,
      streak: this.data.streak,
      bestStreak: this.data.bestStreak,
      totalExercises,
      doneExercises,
      totalModules,
      doneModules,
      progress: this.getTotalProgress(),
      daysActive: this.data.daysActive
    };
  }
};

/* ============================================
   LEVELS — Sistema personalizado de Igor
   ============================================ */

const LEVELS = [
  { id: 1, name: 'Amante',              emoji: '💘',  xpRequired: 0,     desc: 'Empieza tu romance con el hardware. El amor se cocina a fuego lento.' },
  { id: 2, name: 'Secretario',          emoji: '📋', xpRequired: 150,   desc: 'Ya tomas notas como un profesional. Igor te aprueba.' },
  { id: 3, name: 'Máquina',             emoji: '🤖', xpRequired: 400,   desc: 'Funcionas. Trabajas. No te detienes. Sin café, incluso.' },
  { id: 4, name: 'Narval',              emoji: '🦄', xpRequired: 750,   desc: 'Misterioso, marino y único. Como tú con la BIOS.' },
  { id: 5, name: 'Titán',               emoji: '🏛', xpRequired: 1200,  desc: 'Gigante del hardware. Los DIMM tiemblan a tu paso.' },
  { id: 6, name: 'Mecinah',             emoji: '🔮', xpRequired: 1800,  desc: 'Una entidad ancestral del conocimiento informático.' },
  { id: 7, name: 'Pirámide Aristotélica', emoji: '🔺', xpRequired: 2500, desc: 'Has alcanzado el conocimiento puro y absoluto. Eres uno con la placa base.' }
];

/* ============================================
   REWARDS — Recompensas absurdas con Igor
   ============================================ */

const REWARDS = [
  {
    id: 'reward1',
    emoji: '🚶‍♂️',
    name: 'Paseo por el lago con Igor',
    desc: 'Una caminata serena entre la naturaleza, hablando de DDR5 y patos.',
    cost: 100
  },
  {
    id: 'reward2',
    emoji: '🎣',
    name: 'Ir a pescar con Igor',
    desc: 'Te regala una caña, no peces. La paciencia se entrena, como el overclock.',
    cost: 250
  },
  {
    id: 'reward3',
    emoji: '🎤',
    name: 'Asistir a un concierto e invitar a todo Igor',
    desc: 'Hay que ir, sí, pero invitas tú. Los dos. Pero todos somos Igor.',
    cost: 500
  },
  {
    id: 'reward4',
    emoji: '💋',
    name: 'Un beso fuerte con Igor',
    desc: 'Un beso de los gordos. Con tildes y todo. El premio definitivo.',
    cost: 900
  },
  {
    id: 'reward5',
    emoji: '🐕',
    name: 'Adoptar un perro y ponerle Igor',
    desc: 'Tendrás que cuidarlo siempre. Le ladrará a las placas base.',
    cost: 1500
  }
];

/* ============================================
   ACHIEVEMENTS — Logros
   ============================================ */

const ACHIEVEMENTS = [
  { id: 'first_ex', icon: '🌱', name: 'Primer paso', desc: 'Completaste tu primer ejercicio', check: d => Object.keys(d.doneExercises).length >= 1 },
  { id: 'ten_ex',   icon: '⚡', name: 'Diez al saco', desc: '10 ejercicios completados', check: d => Object.keys(d.doneExercises).length >= 10 },
  { id: 'fifty_ex', icon: '🔥', name: 'Imparable', desc: '50 ejercicios completados', check: d => Object.keys(d.doneExercises).length >= 50 },
  { id: 'hundred',  icon: '💯', name: 'Centurión', desc: '100 ejercicios completados', check: d => Object.keys(d.doneExercises).length >= 100 },
  { id: 'streak5',  icon: '🎯', name: 'Racha x5', desc: '5 aciertos seguidos', check: d => d.bestStreak >= 5 },
  { id: 'streak10', icon: '🚀', name: 'Racha x10', desc: '10 aciertos seguidos', check: d => d.bestStreak >= 10 },
  { id: 'streak20', icon: '🌪', name: 'Imparable absoluto', desc: '20 aciertos seguidos', check: d => d.bestStreak >= 20 },
  { id: 'level3',   icon: '🤖', name: 'Eres una Máquina', desc: 'Alcanza el nivel 3', check: d => d.level >= 3 },
  { id: 'level5',   icon: '🏛', name: 'Titánico', desc: 'Alcanza el nivel 5', check: d => d.level >= 5 },
  { id: 'level7',   icon: '🔺', name: 'Pirámide alcanzada', desc: 'Alcanza el nivel máximo', check: d => d.level >= 7 },
  { id: 'hw_mod',   icon: '🛠', name: 'Maestro Hardware', desc: 'Completa el módulo de Hardware', check: d => d.doneModules['hardware'] },
  { id: 'mb_mod',   icon: '🔌', name: 'Placa dominada', desc: 'Completa el módulo de Placa base', check: d => d.doneModules['placa-base'] },
  { id: 'cpu_mod',  icon: '🧠', name: 'CPU Master', desc: 'Completa el módulo de CPU', check: d => d.doneModules['cpu'] },
  { id: 'ram_mod',  icon: '💾', name: 'RAM Wizard', desc: 'Completa el módulo de RAM', check: d => d.doneModules['ram'] },
  { id: 'gpu_mod',  icon: '🎮', name: 'GPU Champion', desc: 'Completa el módulo de GPU', check: d => d.doneModules['gpu'] },
  { id: 'bios_mod', icon: '⚙️', name: 'BIOS Hacker', desc: 'Completa el módulo de BIOS/UEFI', check: d => d.doneModules['bios'] },
  { id: 'so_mod',   icon: '💻', name: 'Pingüino feliz', desc: 'Completa el módulo de Sistema Operativo', check: d => d.doneModules['sistema-operativo'] },
  { id: 'vbox_mod', icon: '📦', name: 'Sr. Anderson', desc: 'Completa el módulo de VirtualBox', check: d => d.doneModules['virtualbox'] },
  { id: 'all_mod',  icon: '👑', name: 'Igor Maestro', desc: '¡Completaste TODOS los módulos!', check: d => MODULES.every(m => d.doneModules[m.id]) },
  { id: 'pts100',   icon: '💰', name: '100 monedas', desc: 'Acumula 100 IgorCoins', check: d => d.totalPointsEarned >= 100 },
  { id: 'pts500',   icon: '💎', name: '500 monedas', desc: 'Acumula 500 IgorCoins', check: d => d.totalPointsEarned >= 500 },
  { id: 'pts1500',  icon: '🏆', name: 'Coleccionista', desc: 'Acumula 1500 IgorCoins', check: d => d.totalPointsEarned >= 1500 },
  { id: 'reward1u', icon: '🚶‍♂️', name: 'Paseante', desc: 'Desbloquea el primer premio', check: d => d.unlockedRewards['reward1'] },
  { id: 'reward4u', icon: '💋', name: 'Besucón', desc: 'Desbloquea el beso fuerte con Igor', check: d => d.unlockedRewards['reward4'] },
  { id: 'reward5u', icon: '🐕', name: 'Padre de Igor', desc: 'Desbloquea la adopción del perro Igor', check: d => d.unlockedRewards['reward5'] },
  { id: 'days5',    icon: '📆', name: 'Constante', desc: 'Visita la plataforma 5 días distintos', check: d => d.daysActive >= 5 }
];
