/* ============================================
   PCBuilder — Render, selección y validación
   ============================================ */

const PCBuilder = {

  currentClient: null,
  build: {
    cpu: null, mobo: null, ram: null, storage: null,
    gpu: null, psu: null, cooler: null, case: null
  },

  /* Categorías en orden de selección */
  categories: [
    { key: 'cpu',     label: '🧠 Procesador (CPU)',      catalogKey: 'cpu' },
    { key: 'mobo',    label: '🔌 Placa base',             catalogKey: 'mobo' },
    { key: 'ram',     label: '💾 Memoria RAM',            catalogKey: 'ram' },
    { key: 'storage', label: '💿 Almacenamiento',         catalogKey: 'storage' },
    { key: 'gpu',     label: '🎮 Tarjeta gráfica (GPU)',  catalogKey: 'gpu' },
    { key: 'psu',     label: '🔋 Fuente de alimentación', catalogKey: 'psu' },
    { key: 'cooler',  label: '❄️ Refrigeración CPU',      catalogKey: 'cooler' },
    { key: 'case',    label: '📦 Caja/Chasis',            catalogKey: 'case' }
  ],

  /* Iniciar simulador */
  start() {
    // Cliente aleatorio
    this.currentClient = PC_CLIENTS[Math.floor(Math.random() * PC_CLIENTS.length)];
    this.resetBuild();
    this.render();
  },

  startWithClient(clientId) {
    const c = PC_CLIENTS.find(x => x.id === clientId);
    if (!c) return this.start();
    this.currentClient = c;
    this.resetBuild();
    this.render();
  },

  resetBuild() {
    this.build = { cpu: null, mobo: null, ram: null, storage: null, gpu: null, psu: null, cooler: null, case: null };
  },

  /* Render principal */
  render() {
    const c = this.currentClient;
    if (!c) return this.renderIntro();

    const total = this.getTotal();
    const overBudget = total > c.requirements.maxBudget;

    let html = `
      <div class="builder-page">
        <button class="btn btn-secondary back-btn" onclick="PCBuilder.exitBuilder()">← Salir del simulador</button>

        <!-- Cliente -->
        <div class="builder-client">
          <div class="builder-client-avatar">${c.avatar}</div>
          <div class="builder-client-info">
            <div class="builder-client-name">${c.name}, ${c.age} años · <em>${c.job}</em></div>
            <div class="builder-client-context">📍 Contexto: <strong>${c.context}</strong></div>
            <div class="builder-client-budget">💰 Presupuesto: <strong>${c.budget}€</strong> (margen máx: ${c.requirements.maxBudget}€)</div>
          </div>
        </div>

        <div class="builder-needs">
          <div class="builder-needs-title">📋 Petición del cliente</div>
          <div class="builder-needs-text">${c.longText}</div>
        </div>

        <!-- Resumen Build -->
        <div class="builder-summary">
          <div class="builder-summary-total ${overBudget ? 'over' : ''}">
            <span>Total seleccionado:</span>
            <strong>${total}€</strong>
            <span class="budget-of">/ ${c.budget}€</span>
            ${overBudget ? '<span class="over-tag">⚠️ FUERA DE PRESUPUESTO</span>' : ''}
          </div>
          <button class="btn btn-primary" id="evaluateBtn">⚖️ Evaluar build</button>
        </div>

        <!-- Categorías -->
        <div class="builder-categories">
    `;

    this.categories.forEach(cat => {
      const selected = this.build[cat.key];
      html += `
        <div class="builder-category">
          <div class="builder-cat-header">
            <span class="builder-cat-label">${cat.label}</span>
            ${selected ? `<span class="builder-cat-selected">✓ ${selected.name} <strong>${selected.price}€</strong></span>` : '<span class="builder-cat-empty">— sin seleccionar —</span>'}
            <button class="btn btn-sm" data-cat="${cat.key}">${selected ? 'Cambiar' : 'Elegir'}</button>
          </div>
        </div>
      `;
    });

    html += `
        </div>

        <!-- Pista (oculta por defecto) -->
        <div class="builder-hint-row">
          <button class="btn btn-tertiary" id="hintBtn">💡 Pista de Igor</button>
          <div class="builder-hint" id="hintBox" style="display:none;">
            <strong>Igor te susurra:</strong> ${c.requirements.hint}
          </div>
        </div>
      </div>
    `;

    UI.$main.innerHTML = html;

    // Bind
    document.querySelectorAll('.builder-cat-header button[data-cat]').forEach(b => {
      b.onclick = () => this.openSelector(b.dataset.cat);
    });
    document.getElementById('evaluateBtn').onclick = () => this.evaluate();
    document.getElementById('hintBtn').onclick = () => {
      const $h = document.getElementById('hintBox');
      $h.style.display = $h.style.display === 'none' ? 'block' : 'none';
    };
  },

  /* Selector de piezas */
  openSelector(catKey) {
    const cat = this.categories.find(c => c.key === catKey);
    const items = PC_CATALOG[cat.catalogKey] || [];

    let html = `
      <div class="builder-page">
        <button class="btn btn-secondary back-btn" onclick="PCBuilder.render()">← Volver al build</button>
        <div class="page-header">
          <h1>${cat.label}</h1>
          <p>Selecciona una pieza para tu build. Verás precio, características técnicas y badges de compatibilidad/advertencia.</p>
        </div>

        <div class="builder-piece-list">
    `;

    // Ordenar por precio
    const sorted = [...items].sort((a, b) => a.price - b.price);
    sorted.forEach(item => {
      const compat = this.checkPieceCompatibility(catKey, item);
      html += `
        <div class="builder-piece-card ${compat.warnings.length ? 'has-warnings' : ''}">
          <div class="builder-piece-main">
            <div class="builder-piece-name">${item.name}</div>
            <div class="builder-piece-specs">${this.formatSpecs(catKey, item)}</div>
            ${compat.warnings.map(w => `<div class="builder-piece-warning">⚠️ ${w}</div>`).join('')}
            ${compat.notes.map(n => `<div class="builder-piece-note">ℹ️ ${n}</div>`).join('')}
          </div>
          <div class="builder-piece-right">
            <div class="builder-piece-price">${item.price === 0 ? 'Gratis' : item.price + '€'}</div>
            <button class="btn btn-primary" data-id="${item.id}">Seleccionar</button>
          </div>
        </div>
      `;
    });

    html += `</div></div>`;
    UI.$main.innerHTML = html;

    document.querySelectorAll('.builder-piece-card button[data-id]').forEach(b => {
      b.onclick = () => {
        const id = b.dataset.id;
        const item = (PC_CATALOG[cat.catalogKey] || []).find(x => x.id === id);
        if (item) {
          this.build[catKey] = item;
          this.render();
        }
      };
    });
  },

  formatSpecs(catKey, item) {
    switch (catKey) {
      case 'cpu':
        return `${item.brand} · ${item.cores}C/${item.threads}T · ${item.tdp}W TDP · Socket ${item.socket}${item.igpu ? ' · iGPU ✓' : ' · sin iGPU'}`;
      case 'mobo':
        return `${item.chipset} · Socket ${item.socket} · ${item.ram} (máx ${item.maxRam}GB) · ${item.factor} · ${item.m2} M.2 · ${item.sata} SATA${item.wifi ? ' · Wi-Fi' : ''}`;
      case 'ram':
        return `${item.size}GB ${item.type}-${item.speed} · ${item.modules} módulo(s)`;
      case 'storage':
        return `${item.type} · ${item.size}GB · ${item.conn} · ${item.speed} MB/s`;
      case 'gpu':
        return item.tier === 'none' ? 'Usa iGPU del procesador' : `${item.brand} · ${item.vram}GB VRAM · ${item.tdp}W TDP · ${item.length}mm largo`;
      case 'psu':
        return `${item.watt}W · 80+ ${item.cert} · ${item.modular === 'no' ? 'No modular' : item.modular === 'semi' ? 'Semi modular' : 'Full modular'}`;
      case 'cooler':
        return item.type === 'air' ? `Aire · soporta ${item.tdpMax}W · ${item.height}mm alto` : `AIO ${item.radSize}mm · soporta ${item.tdpMax}W`;
      case 'case':
        return `${item.factor.join('/')} · GPU máx ${item.maxGpuLen}mm · disipador máx ${item.maxCoolerH}mm · rad ${item.maxRad}mm`;
      default: return '';
    }
  },

  /* Compatibilidad: muestra warnings al SELECCIONAR una pieza */
  checkPieceCompatibility(catKey, item) {
    const warnings = [];
    const notes = [];

    if (catKey === 'cpu' && this.build.mobo) {
      if (item.socket !== this.build.mobo.socket) warnings.push(`Socket NO compatible con tu placa ${this.build.mobo.name} (${this.build.mobo.socket})`);
    }
    if (catKey === 'mobo' && this.build.cpu) {
      if (item.socket !== this.build.cpu.socket) warnings.push(`Socket NO compatible con tu CPU ${this.build.cpu.name} (${this.build.cpu.socket})`);
    }
    if (catKey === 'mobo' && this.build.ram) {
      if (item.ram !== this.build.ram.type) warnings.push(`Tu RAM es ${this.build.ram.type}, esta placa es ${item.ram}`);
    }
    if (catKey === 'ram' && this.build.mobo) {
      if (item.type !== this.build.mobo.ram) warnings.push(`Esta RAM es ${item.type}, tu placa requiere ${this.build.mobo.ram}`);
      if (item.size > this.build.mobo.maxRam) warnings.push(`Capacidad excede el máximo de la placa (${this.build.mobo.maxRam}GB)`);
    }
    if (catKey === 'gpu' && this.build.case && item.length > 0) {
      if (item.length > this.build.case.maxGpuLen) warnings.push(`GPU (${item.length}mm) no cabe en tu caja (máx ${this.build.case.maxGpuLen}mm)`);
    }
    if (catKey === 'gpu' && this.build.psu && item.tdp > 0) {
      // Estimación grosso modo
      const cpuTdp = this.build.cpu?.tdp || 100;
      const minPsuW = item.tdp + cpuTdp + 150;
      const recPsuW = Math.round(minPsuW * 1.3);
      if (this.build.psu.watt < minPsuW) warnings.push(`Tu PSU (${this.build.psu.watt}W) es insuficiente. Mínimo ~${minPsuW}W, recomendado ${recPsuW}W`);
      else if (this.build.psu.watt < recPsuW) notes.push(`PSU justita. Recomendado ${recPsuW}W para margen seguro`);
    }
    if (catKey === 'cooler' && this.build.cpu) {
      if (item.tdpMax < this.build.cpu.tdp) warnings.push(`Este disipador (${item.tdpMax}W) no aguanta el TDP de tu CPU (${this.build.cpu.tdp}W)`);
    }
    if (catKey === 'cooler' && this.build.case && item.type === 'air') {
      if (item.height > this.build.case.maxCoolerH) warnings.push(`Disipador (${item.height}mm) NO cabe en tu caja (máx ${this.build.case.maxCoolerH}mm)`);
    }
    if (catKey === 'cooler' && this.build.case && item.type === 'aio') {
      if (item.radSize > this.build.case.maxRad) warnings.push(`Radiador ${item.radSize}mm no cabe en tu caja (máx ${this.build.case.maxRad}mm)`);
    }
    if (catKey === 'case' && this.build.mobo) {
      if (!item.factor.includes(this.build.mobo.factor)) warnings.push(`Tu placa es ${this.build.mobo.factor}, esta caja admite ${item.factor.join('/')}`);
    }
    if (catKey === 'case' && this.build.gpu && this.build.gpu.length > 0) {
      if (this.build.gpu.length > item.maxGpuLen) warnings.push(`Tu GPU (${this.build.gpu.length}mm) NO cabe en esta caja (máx ${item.maxGpuLen}mm)`);
    }
    if (catKey === 'gpu' && item.tier === 'none' && this.build.cpu && !this.build.cpu.igpu) {
      warnings.push(`Tu CPU ${this.build.cpu.name} NO tiene iGPU. Necesitas GPU dedicada.`);
    }

    return { warnings, notes };
  },

  getTotal() {
    return Object.values(this.build).reduce((s, p) => s + (p?.price || 0), 0);
  },

  /* Evaluar al final */
  evaluate() {
    const c = this.currentClient;
    const b = this.build;
    const total = this.getTotal();
    const issues = [];
    const goods = [];

    // 1. Completitud
    const missing = this.categories.filter(cat => !b[cat.key]).map(cat => cat.label);
    if (missing.length) {
      issues.push({ type: 'critical', text: `Faltan piezas: ${missing.join(', ')}` });
    }

    // 2. Compatibilidad
    if (b.cpu && b.mobo && b.cpu.socket !== b.mobo.socket) {
      issues.push({ type: 'critical', text: `CPU (${b.cpu.socket}) y placa (${b.mobo.socket}) NO compatibles` });
    }
    if (b.mobo && b.ram && b.mobo.ram !== b.ram.type) {
      issues.push({ type: 'critical', text: `Placa requiere ${b.mobo.ram} pero la RAM es ${b.ram.type}` });
    }
    if (b.ram && b.mobo && b.ram.size > b.mobo.maxRam) {
      issues.push({ type: 'critical', text: `Placa máx ${b.mobo.maxRam}GB, RAM elegida ${b.ram.size}GB` });
    }
    if (b.case && b.mobo && !b.case.factor.includes(b.mobo.factor)) {
      issues.push({ type: 'critical', text: `Placa ${b.mobo.factor} no cabe en caja ${b.case.factor.join('/')}` });
    }
    if (b.case && b.gpu && b.gpu.length > 0 && b.gpu.length > b.case.maxGpuLen) {
      issues.push({ type: 'critical', text: `GPU mide ${b.gpu.length}mm pero la caja solo admite ${b.case.maxGpuLen}mm` });
    }
    if (b.cooler && b.cpu && b.cooler.tdpMax < b.cpu.tdp) {
      issues.push({ type: 'critical', text: `Disipador (${b.cooler.tdpMax}W) insuficiente para CPU (${b.cpu.tdp}W)` });
    }
    if (b.cooler && b.case && b.cooler.type === 'air' && b.cooler.height > b.case.maxCoolerH) {
      issues.push({ type: 'critical', text: `Disipador ${b.cooler.height}mm no cabe en caja (máx ${b.case.maxCoolerH}mm)` });
    }
    if (b.cooler && b.case && b.cooler.type === 'aio' && b.cooler.radSize > b.case.maxRad) {
      issues.push({ type: 'critical', text: `Radiador ${b.cooler.radSize}mm no cabe en caja (máx ${b.case.maxRad}mm)` });
    }

    // 3. PSU adecuada
    if (b.psu && b.cpu) {
      const gpuTdp = b.gpu?.tdp || 0;
      const minPsu = b.cpu.tdp + gpuTdp + 150;
      const recPsu = Math.ceil(minPsu * 1.3);
      if (b.psu.watt < minPsu) {
        issues.push({ type: 'critical', text: `PSU (${b.psu.watt}W) insuficiente. Mínimo ${minPsu}W` });
      } else if (b.psu.watt < recPsu) {
        issues.push({ type: 'warning', text: `PSU justita. Recomendado ${recPsu}W con margen` });
      } else {
        goods.push(`PSU ${b.psu.watt}W con margen adecuado`);
      }
    }

    // 4. iGPU si no hay GPU dedicada
    if (b.cpu && b.gpu && b.gpu.tier === 'none' && !b.cpu.igpu) {
      issues.push({ type: 'critical', text: `CPU sin iGPU y sin GPU dedicada: no habrá imagen` });
    }

    // 5. Cumplimiento de presupuesto
    if (total > c.requirements.maxBudget) {
      issues.push({ type: 'critical', text: `Te has pasado ${total - c.requirements.maxBudget}€ del presupuesto máximo (${c.requirements.maxBudget}€)` });
    } else if (total < c.budget * 0.8) {
      issues.push({ type: 'warning', text: `Te has quedado ${c.budget - total}€ por debajo. ¿Podrías invertir en componentes mejores?` });
    } else {
      goods.push(`Presupuesto bien aprovechado: ${total}€ / ${c.budget}€`);
    }

    // 6. Cumplimiento de requisitos del cliente
    const req = c.requirements;
    if (b.ram && req.minRam && b.ram.size < req.minRam) {
      issues.push({ type: 'warning', text: `RAM (${b.ram.size}GB) por debajo de lo recomendado (${req.minRam}GB)` });
    } else if (b.ram && req.minRam) {
      goods.push(`RAM cumple: ${b.ram.size}GB ≥ ${req.minRam}GB`);
    }
    if (b.storage && req.minStorage && b.storage.size < req.minStorage) {
      issues.push({ type: 'warning', text: `Almacenamiento (${b.storage.size}GB) por debajo de lo recomendado (${req.minStorage}GB)` });
    }
    if (req.needsGPU && (!b.gpu || b.gpu.tier === 'none')) {
      issues.push({ type: 'critical', text: `${c.name} NECESITA GPU dedicada para su uso (${c.context})` });
    }
    if (req.minGpuPerf && b.gpu && b.gpu.perfGaming < req.minGpuPerf) {
      issues.push({ type: 'warning', text: `GPU insuficiente para sus necesidades (rendimiento ${b.gpu.perfGaming}/${req.minGpuPerf})` });
    }
    if (req.minVRAM && b.gpu && b.gpu.vram < req.minVRAM) {
      issues.push({ type: 'warning', text: `VRAM (${b.gpu.vram}GB) por debajo de lo necesario (${req.minVRAM}GB)` });
    }
    if (req.minCores && b.cpu && b.cpu.cores < req.minCores) {
      issues.push({ type: 'warning', text: `CPU con pocos núcleos (${b.cpu.cores}) para su uso. Recomendado: ${req.minCores}+` });
    }
    if (req.preferIGPU && b.gpu && b.gpu.tier !== 'none') {
      issues.push({ type: 'info', text: `Te has gastado dinero en GPU dedicada que ${c.name} NO necesita. Habrías ahorrado mucho.` });
    }

    // Puntuación
    let score = 100;
    issues.forEach(i => {
      if (i.type === 'critical') score -= 30;
      else if (i.type === 'warning') score -= 10;
      else score -= 5;
    });
    score = Math.max(0, score);
    let grade = '🏆 EXCELENTE';
    let earned = 250;
    if (score < 30) { grade = '💀 CATASTRÓFICO'; earned = 20; }
    else if (score < 50) { grade = '😬 MALO'; earned = 50; }
    else if (score < 70) { grade = '😐 REGULAR'; earned = 100; }
    else if (score < 90) { grade = '👍 BUENO'; earned = 175; }

    // Render resultados
    let html = `
      <div class="builder-page">
        <button class="btn btn-secondary back-btn" onclick="PCBuilder.render()">← Volver al build</button>
        <div class="page-header">
          <h1>⚖️ Evaluación del build</h1>
          <p>Veamos qué tal lo has hecho con ${c.name}.</p>
        </div>

        <div class="builder-score-card">
          <div class="builder-score-grade">${grade}</div>
          <div class="builder-score-num">${score}<span>/100</span></div>
          <div class="builder-score-earned">+${earned} IgorCoins</div>
        </div>
    `;

    if (issues.length) {
      html += `<h3 class="section-title">⚠️ Cosas a mejorar</h3><div class="builder-issues">`;
      issues.forEach(i => {
        html += `<div class="builder-issue builder-issue-${i.type}"><strong>${i.type === 'critical' ? '🔴 CRÍTICO' : i.type === 'warning' ? '🟡 AVISO' : '🔵 NOTA'}</strong> ${i.text}</div>`;
      });
      html += `</div>`;
    }

    if (goods.length) {
      html += `<h3 class="section-title">✅ Lo que has hecho bien</h3><div class="builder-issues">`;
      goods.forEach(g => {
        html += `<div class="builder-issue builder-issue-good">✓ ${g}</div>`;
      });
      html += `</div>`;
    }

    html += `
      <div class="builder-final-actions">
        <button class="btn btn-secondary" onclick="PCBuilder.render()">🔄 Ajustar build</button>
        <button class="btn btn-primary" onclick="PCBuilder.start()">🎲 Nuevo cliente</button>
        <button class="btn btn-tertiary" onclick="PCBuilder.exitBuilder()">📋 Salir</button>
      </div>
      </div>
    `;

    UI.$main.innerHTML = html;

    // Otorgar puntos
    State.addPoints(earned, `builder_${c.id}_${Date.now()}`);
    UI.updateStats();
    UI.renderSidebar();
    if (score >= 90) {
      UI.fireConfetti();
      UI.showToast(`+${earned} IgorCoins por excelente build!`, 'success');
    } else {
      UI.showToast(`+${earned} IgorCoins`, score >= 70 ? 'success' : 'warn');
    }
  },

  renderIntro() {
    let html = `
      <div class="page-header">
        <h1>🏗 PC Builder Simulator</h1>
        <p>Un cliente llega con una petición y un presupuesto. Tu trabajo: montarle el PC perfecto del catálogo. Tendrás que considerar compatibilidad, presupuesto, las necesidades reales del cliente y... el sentido común.</p>
      </div>

      <div class="builder-clients-grid">
    `;
    PC_CLIENTS.forEach(c => {
      html += `
        <div class="builder-client-card" data-id="${c.id}">
          <div class="builder-client-card-avatar">${c.avatar}</div>
          <div class="builder-client-card-name">${c.name}</div>
          <div class="builder-client-card-context">${c.context}</div>
          <div class="builder-client-card-budget">💰 ${c.budget}€</div>
          <div class="builder-client-card-needs">${c.needs}</div>
          <button class="btn btn-primary">Atender a ${c.name.split(' ')[0]}</button>
        </div>
      `;
    });
    html += `</div>
      <div style="text-align:center; margin-top: 2rem;">
        <button class="btn btn-tertiary" onclick="PCBuilder.start()">🎲 O atiende a un cliente aleatorio</button>
      </div>`;

    UI.$main.innerHTML = html;
    document.querySelectorAll('.builder-client-card').forEach(card => {
      card.querySelector('button').onclick = () => this.startWithClient(card.dataset.id);
    });
  },

  exitBuilder() {
    this.currentClient = null;
    this.resetBuild();
    window.location.hash = 'dashboard';
  }

};
