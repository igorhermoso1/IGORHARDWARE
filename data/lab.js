/* ============================================
   LAB — Zona experimental / Laboratorio 2026
   Artículos sobre tecnologías emergentes
   ============================================ */

const LAB_ARTICLES = [
  {
    id: 'lab1',
    icon: '🤖',
    title: 'PCs con IA: la era de las NPU',
    tag: 'Inteligencia Artificial',
    summary: 'Los procesadores modernos llevan una Unidad de Procesamiento Neuronal (NPU) que acelera tareas de IA local.',
    html: `
      <p>En 2024-2026 todo procesador respetable lleva integrada una <strong>NPU (Neural Processing Unit)</strong>. Es un coprocesador especializado en hacer las operaciones matemáticas típicas de las redes neuronales (multiplicación de matrices, convoluciones) de forma extremadamente eficiente.</p>
      <p>¿Por qué importa?</p>
      <ul>
        <li><strong>Privacidad:</strong> tu modelo de IA corre LOCAL, sin enviar tus datos a la nube.</li>
        <li><strong>Latencia:</strong> respuestas instantáneas, sin esperar al servidor.</li>
        <li><strong>Energía:</strong> una NPU consume 10-20W para tareas que en GPU costarían 200W.</li>
        <li><strong>Offline:</strong> funciona sin internet.</li>
      </ul>
      <h4>Capacidades 2026 (medidas en TOPS = Tera Operations Per Second):</h4>
      <table class="cozy-table">
        <thead><tr><th>Chip</th><th>NPU</th><th>TOPS</th></tr></thead>
        <tbody>
          <tr><td>Intel Core Ultra 200V (Lunar Lake)</td><td>NPU 4</td><td>48 TOPS</td></tr>
          <tr><td>AMD Ryzen AI 300</td><td>XDNA 2</td><td>50 TOPS</td></tr>
          <tr><td>Apple M4</td><td>Neural Engine</td><td>38 TOPS</td></tr>
          <tr><td>Qualcomm Snapdragon X Elite</td><td>Hexagon NPU</td><td>45 TOPS</td></tr>
        </tbody>
      </table>
      <p>Microsoft puso el listón en <strong>40 TOPS</strong> para certificar un PC como "Copilot+ PC", lo que desbloquea funciones de IA en Windows.</p>
    `
  },
  {
    id: 'lab2',
    icon: '🪟',
    title: 'Windows Copilot+: funciones que cambian el PC',
    tag: 'Windows / IA',
    summary: 'La nueva era de Windows incluye IA generativa profundamente integrada en el SO.',
    html: `
      <p>Windows 11 24H2 introdujo <strong>Copilot+</strong>, una capa de IA integrada que aprovecha la NPU local del PC. Algunas funciones:</p>
      <ul>
        <li><strong>Cocreator en Paint:</strong> generación de imágenes desde texto + dibujo guía.</li>
        <li><strong>Live Captions:</strong> subtítulos y traducción en tiempo real para cualquier audio del sistema.</li>
        <li><strong>Studio Effects:</strong> efectos para cámara web (desenfoque inteligente, contacto visual virtual).</li>
        <li><strong>Recall:</strong> capturas continuas que permiten "preguntar" qué hiciste hace X tiempo. <em>Polémica por privacidad masiva</em>.</li>
        <li><strong>Click to Do:</strong> reconocimiento de objetos en pantalla, acciones contextuales.</li>
        <li><strong>Auto Super Resolution:</strong> upscaling con IA para juegos compatibles.</li>
      </ul>
      <div class="warning-box"><span class="box-icon">⚠️</span><div><div class="box-title">Polémica Recall</div>Microsoft tuvo que retrasar Recall por críticas. Ahora es opt-in, cifrado con BitLocker, requiere Windows Hello. Igor opina: "depende de cuánto te importe que tu PC sepa absolutamente todo lo que has hecho".</div></div>
    `
  },
  {
    id: 'lab3',
    icon: '🎮',
    title: 'RTX 50 Blackwell y RX 9000 RDNA 4',
    tag: 'GPUs 2025',
    summary: 'La nueva generación de tarjetas gráficas trae más núcleos IA, GDDR7 y precios... agresivos.',
    html: `
      <p>NVIDIA lanzó las <strong>RTX 50 (Blackwell)</strong> en enero de 2025, AMD respondió con las <strong>Radeon RX 9000 (RDNA 4)</strong> meses después.</p>
      <h4>Novedades RTX 50:</h4>
      <ul>
        <li><strong>GDDR7</strong> en lugar de GDDR6X (más ancho de banda).</li>
        <li><strong>DLSS 4 con Multi Frame Generation</strong>: hasta 3 frames generados por cada uno renderizado.</li>
        <li><strong>5ª gen Tensor Cores</strong> para IA.</li>
        <li><strong>4ª gen RT Cores</strong> con Mega Geometry.</li>
        <li><strong>Reflex 2:</strong> reducción de latencia con frame warp.</li>
      </ul>
      <h4>Modelos RTX 50:</h4>
      <ul>
        <li>RTX 5090: 32 GB GDDR7, 575W TDP, ~2000€</li>
        <li>RTX 5080: 16 GB GDDR7, 360W TDP, ~1000€</li>
        <li>RTX 5070 Ti: 16 GB GDDR7, 300W TDP, ~750€</li>
        <li>RTX 5070: 12 GB GDDR7, 250W TDP, ~550€</li>
        <li>RTX 5060 Ti: 16 GB / 8 GB, ~400-500€</li>
      </ul>
      <h4>Radeon RX 9000:</h4>
      <ul>
        <li>RX 9070 XT: 16 GB GDDR6, ~700€. Competidor de la 5070 Ti.</li>
        <li>RX 9070: 16 GB GDDR6, ~600€.</li>
        <li><strong>FSR 4</strong> con IA: por fin compite con DLSS en calidad.</li>
      </ul>
      <p>Igor opina: "para gaming 1440p de gama media, la 9070 XT es una opción brillante. Para 4K Ray Tracing, NVIDIA sigue mandando".</p>
    `
  },
  {
    id: 'lab4',
    icon: '💾',
    title: 'DDR5 a 9200 MHz y el horizonte DDR6',
    tag: 'Memoria',
    summary: 'La memoria DDR5 sigue rompiendo récords. Mientras, JEDEC ya prepara DDR6 para 2027.',
    html: `
      <p>En 2026, los kits DDR5 premium alcanzan <strong>9200 MHz CL40</strong> en gaming. Por encima ya entramos en territorio de overclock extremo (récord mundial: 12,634 MHz).</p>
      <h4>Sweet spots actuales:</h4>
      <ul>
        <li><strong>AMD Ryzen 7000/9000:</strong> DDR5-6000 CL30 (límite del Infinity Fabric óptimo).</li>
        <li><strong>Intel 14th gen / Core Ultra:</strong> DDR5-7200-8000 CL36-40.</li>
      </ul>
      <h4>DDR6 en el horizonte:</h4>
      <ul>
        <li>Spec final esperada en 2025-2026.</li>
        <li>Velocidades iniciales: 8800-12800 MHz.</li>
        <li>Voltaje: ~1V (menos que DDR5).</li>
        <li>Llegada al consumidor: 2027-2028.</li>
        <li>Cambio de plataforma: AM6 y LGA1854 lo soportarán.</li>
      </ul>
      <div class="info-box"><span class="box-icon">📚</span><div><div class="box-title">Curiosidad</div>El nuevo formato <strong>CAMM2</strong> (Compression Attached Memory Module) reemplazará a SO-DIMM en portátiles. Más plano, mejor disipación, hasta 9600+ MHz. Dell lo introdujo en 2024.</div></div>
    `
  },
  {
    id: 'lab5',
    icon: '⚡',
    title: 'NVMe Gen5: velocidad que ya no notas',
    tag: 'Almacenamiento',
    summary: '14 GB/s suena bestial, pero ¿realmente lo necesitas?',
    html: `
      <p>Los SSDs <strong>NVMe Gen5</strong> alcanzan <strong>14 GB/s</strong> de lectura secuencial. Comparado con Gen4 (7 GB/s) o un SSD SATA (550 MB/s), parece magia. Pero...</p>
      <h4>¿Quién necesita Gen5?</h4>
      <ul>
        <li><strong>Edición 8K profesional:</strong> sí, marca diferencia.</li>
        <li><strong>Carga de modelos IA grandes:</strong> reduce tiempos de carga LLMs.</li>
        <li><strong>Servidores de bases de datos:</strong> obvio.</li>
        <li><strong>Gaming:</strong> NO. La diferencia con Gen4 es ~5%. DirectStorage ayuda solo en juegos compatibles.</li>
      </ul>
      <h4>El problema del calor:</h4>
      <p>Los Gen5 son <strong>HORNOS</strong>. Algunos modelos (Crucial T705, Corsair MP700) incluyen ventilador minúsculo en el disipador. Sin refrigeración activa, se "throttlean" en segundos.</p>
      <h4>Modelos 2026 destacados:</h4>
      <ul>
        <li>Crucial T705 - 14,5 GB/s</li>
        <li>Samsung 9100 Pro - 14,7 GB/s</li>
        <li>WD Black SN8100 - 14,9 GB/s</li>
        <li>Kingston Fury Renegade G5 - 14,8 GB/s</li>
      </ul>
      <p>Igor te dice: "para gaming en 2026, un Gen4 a la mitad de precio sigue siendo suficiente. Gen5 solo si estás en edición pro o IA local".</p>
    `
  },
  {
    id: 'lab6',
    icon: '🍎',
    title: 'ARM vs x86: la guerra silenciosa',
    tag: 'Arquitectura',
    summary: 'Apple lo empezó, Qualcomm lo continúa. Los PCs Windows ARM ya son realidad.',
    html: `
      <p>Desde 2020, Apple movió todos sus Macs a chips ARM (M1, M2, M3, M4). Resultado: rendimiento brutal con baterías de 18-22 horas. En 2024, Qualcomm lanzó <strong>Snapdragon X Elite</strong> y <strong>X Plus</strong> que prometen lo mismo para Windows.</p>
      <h4>ARM ventajas:</h4>
      <ul>
        <li>Eficiencia energética (5-10× mejor que x86 en idle).</li>
        <li>NPU potente integrada.</li>
        <li>Sin ventiladores en muchos casos.</li>
        <li>Batería brutal en portátiles.</li>
      </ul>
      <h4>x86 ventajas:</h4>
      <ul>
        <li><strong>Compatibilidad software:</strong> 40 años de aplicaciones x86.</li>
        <li>Gaming: la mayoría de juegos son x86, emulación tiene overhead.</li>
        <li>Drivers maduros.</li>
        <li>Mejor en cargas multihilo pesadas (renderizado, compilación).</li>
      </ul>
      <h4>Microsoft Surface Pro 11 / Laptop 7 con Snapdragon X:</h4>
      <p>Excelentes batería y eficiencia, pero <strong>Windows on ARM</strong> aún cojea con software x86 emulado (Prism). Apps nativas ARM crecen pero lentamente.</p>
      <p>Veredicto Igor 2026: "para portátil ultraligero y batería, ARM es mejor. Para sobremesa potente y gaming, x86 sigue mandando. La frontera se difumina cada año".</p>
    `
  },
  {
    id: 'lab7',
    icon: '🎥',
    title: 'Hardware para streamers en 2026',
    tag: 'Streaming',
    summary: 'Qué CPU, GPU y accesorios necesitas para hacer streaming pro.',
    html: `
      <p>Streaming en 2026 ya no es "ten un PC y prueba". Para calidad pro y multistream necesitas hardware específico.</p>
      <h4>Setup recomendado:</h4>
      <ul>
        <li><strong>CPU:</strong> Ryzen 7 7800X3D o i7-14700K. Mínimo 8 núcleos. Para multistream + grabación: Ryzen 9 9950X.</li>
        <li><strong>GPU con encoder dedicado:</strong> NVIDIA NVENC (RTX 30/40/50) o AMD AMF. NVENC sigue siendo el rey en calidad/CPU.</li>
        <li><strong>RAM:</strong> 32 GB mínimo (juego + OBS + chat + Discord + navegador).</li>
        <li><strong>SSD NVMe Gen4</strong> para grabación local.</li>
        <li><strong>Cámara:</strong> Sony ZV-1F, Logitech MX Brio (4K). O DSLR + cable HDMI.</li>
        <li><strong>Capturadora HDMI</strong> si streameas consola: Elgato 4K X, AVerMedia Live Gamer 4K.</li>
      </ul>
      <h4>El gran debate: PC único vs dos PCs</h4>
      <p>Antes era recomendable un "PC de gaming + PC de streaming". Hoy, con CPUs de 16 cores y NVENC en GPUs, un solo PC potente vale para casi todo.</p>
      <h4>OBS con NVENC AV1:</h4>
      <p>Las RTX 40/50 traen encoder AV1 hardware. Twitch comenzó a soportar AV1 en 2024. Mejor calidad con menor bitrate que H.264.</p>
    `
  },
  {
    id: 'lab8',
    icon: '🖥',
    title: 'Mini-LED y QD-OLED: la guerra del HDR',
    tag: 'Monitores 2026',
    summary: 'Los monitores premium ya no son OLED vs LCD: ahora la batalla es Mini-LED vs QD-OLED.',
    html: `
      <p>En 2025-2026, los monitores premium para gaming y edición se han dividido en dos tecnologías top:</p>
      <h4>Mini-LED:</h4>
      <ul>
        <li>LCD con miles de zonas de atenuación local (1000-5000).</li>
        <li>Brillos enormes: 1500-3000 nits.</li>
        <li>HDR brutal en escenas brillantes.</li>
        <li>Sin riesgo de burn-in.</li>
        <li>Contra: "blooming" (halos de luz alrededor de objetos brillantes sobre fondo oscuro).</li>
      </ul>
      <h4>QD-OLED:</h4>
      <ul>
        <li>OLED con Quantum Dots para colores ultra puros.</li>
        <li>Negros perfectos (cada píxel se apaga).</li>
        <li>Contraste infinito.</li>
        <li>Tiempos de respuesta de microsegundos.</li>
        <li>Contra: riesgo de burn-in (mitigado por pixel shift, pero existe).</li>
        <li>Contra: brillo limitado (600-1000 nits máx).</li>
      </ul>
      <h4>Recomendaciones 2026:</h4>
      <ul>
        <li><strong>Gaming OLED:</strong> Alienware AW3225QF, LG 27GS95QE, MSI MPG 321URX (QD-OLED).</li>
        <li><strong>Gaming Mini-LED:</strong> Innocn 32M2V, Acer Predator X32 FP.</li>
        <li><strong>Edición pro:</strong> ASUS ProArt PA32UCXR, Apple Studio Display.</li>
      </ul>
    `
  },
  {
    id: 'lab9',
    icon: '🌐',
    title: 'Wi-Fi 7 vs Cable 10 GbE',
    tag: 'Redes 2026',
    summary: 'Wi-Fi 7 ofrece 46 Gbps teóricos, pero el cable sigue ganando.',
    html: `
      <p><strong>Wi-Fi 7 (802.11be)</strong> entró al mercado en 2024 con mejoras radicales:</p>
      <ul>
        <li>Banda triple: 2.4 + 5 + 6 GHz simultáneo (<strong>Multi-Link Operation</strong>).</li>
        <li>Canales de 320 MHz (vs 160 MHz de Wi-Fi 6E).</li>
        <li>Modulación 4096-QAM (vs 1024-QAM).</li>
        <li>Velocidad teórica: 46 Gbps.</li>
        <li>Latencia: <5 ms.</li>
      </ul>
      <p>Pero en la práctica: dependes de tu router (caro), de tu cliente (caro), y de no tener interferencias.</p>
      <h4>Cable 10 GbE en 2026:</h4>
      <ul>
        <li>Antes solo en datacenters, ahora hay placas como ASUS ROG Crosshair que traen 10 GbE integrado.</li>
        <li>Cables Cat6a sirven hasta 10 GbE a 100 m.</li>
        <li>Switches 10 GbE consumidor: ~200-400€ (TP-Link, MikroTik, Ubiquiti).</li>
        <li>Ideal para NAS, edición remota, transferencias grandes.</li>
      </ul>
      <p>Igor concluye: "Wi-Fi 7 para portátiles y movilidad. Cable 10 GbE para PCs fijos donde la velocidad importa".</p>
    `
  },
  {
    id: 'lab10',
    icon: '🔋',
    title: 'TPM 2.0, Secure Boot y el futuro de la seguridad',
    tag: 'Seguridad',
    summary: 'Los requisitos de hardware para sistemas seguros se vuelven más exigentes.',
    html: `
      <p>Microsoft impuso <strong>TPM 2.0 + Secure Boot</strong> como requisito en Windows 11. ¿Por qué tanto énfasis?</p>
      <h4>TPM 2.0:</h4>
      <ul>
        <li>Chip dedicado que almacena claves criptográficas.</li>
        <li>Genera entropía verdadera para cifrado.</li>
        <li>Verifica integridad del arranque (Measured Boot).</li>
        <li>Base de BitLocker, Windows Hello, Credential Guard.</li>
        <li>Casi todas las placas modernas tienen <strong>fTPM</strong> (TPM firmware) integrado.</li>
      </ul>
      <h4>Secure Boot:</h4>
      <ul>
        <li>Solo permite arrancar software firmado por Microsoft o el OEM.</li>
        <li>Impide bootkits y rootkits que se ejecutan antes del SO.</li>
        <li>Puede desactivarse para arrancar Linux o sistemas alternativos (a riesgo).</li>
      </ul>
      <h4>Pluton (2024+):</h4>
      <p>Microsoft está empujando un nuevo procesador de seguridad llamado <strong>Pluton</strong>, integrado directamente en CPUs AMD y Qualcomm. Va más allá del TPM tradicional con seguridad a nivel de silicio.</p>
      <div class="warning-box"><span class="box-icon">🛡</span><div><div class="box-title">Igor te avisa</div>Si tu placa es pre-2016, posiblemente no tenga TPM 2.0. Hay formas de instalar Win 11 sin él (Rufus permite saltarse comprobaciones) pero no recibirás actualizaciones de seguridad oficiales.</div></div>
    `
  }
];
