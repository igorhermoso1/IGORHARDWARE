/* ============================================
   MODULE_CONTENT (parte 2) — Almacenamiento, GPU,
   Fuente, Refrigeración, BIOS, SO, Windows, VBox,
   Montaje, Diagnóstico, Compatibilidad, Redes, Seguridad
   ============================================ */

Object.assign(MODULE_CONTENT, {

  /* ============== ALMACENAMIENTO ============== */
  'almacenamiento': {
    intro: 'Aquí guardas tu vida digital. Fotos, juegos, sistema operativo, memes. El almacenamiento es donde permanecen los datos cuando el PC se apaga.',
    blocks: [
      {
        title: '💿 HDD vs SSD vs NVMe',
        html: `
          <div class="info-grid">
            <div class="info-card">
              <h4>HDD (Hard Disk Drive)</h4>
              <p>Mecánico. Platos giratorios + cabezas magnéticas. <strong>Barato</strong> y con mucha capacidad (16-24 TB hoy), pero lento (~150 MB/s) y frágil al golpe.</p>
            </div>
            <div class="info-card">
              <h4>SSD SATA</h4>
              <p>Sin partes móviles, chips NAND. Velocidades ~550 MB/s. Conector SATA + cable de alimentación. <strong>Bueno para upgrade barato</strong>.</p>
            </div>
            <div class="info-card">
              <h4>SSD NVMe</h4>
              <p>Conexión PCIe directa, formato M.2. Velocidades 3.500-14.000 MB/s. <strong>Lo más rápido</strong> actualmente.</p>
            </div>
            <div class="info-card">
              <h4>SSD U.2 / U.3</h4>
              <p>Formato 2.5" pero con conexión PCIe (no SATA). Para servidores y workstations.</p>
            </div>
          </div>
        `
      },
      {
        title: '📊 Comparativa real de velocidades (2026)',
        html: `
          <table class="cozy-table">
            <thead><tr><th>Tipo</th><th>Lectura secuencial</th><th>4K aleatorio (IOPS)</th><th>Uso</th></tr></thead>
            <tbody>
              <tr><td>HDD 7200 RPM</td><td>~180 MB/s</td><td>~150</td><td>Almacenamiento masivo, backups</td></tr>
              <tr><td>SSD SATA</td><td>~550 MB/s</td><td>~100.000</td><td>Upgrade barato, segundo SSD</td></tr>
              <tr><td>NVMe Gen3</td><td>3.500 MB/s</td><td>~600.000</td><td>SSD principal en PCs medios</td></tr>
              <tr><td>NVMe Gen4</td><td>7.000 MB/s</td><td>~1.000.000</td><td>Gaming, edición, creación</td></tr>
              <tr><td>NVMe Gen5</td><td>14.000 MB/s</td><td>~1.500.000</td><td>Edición 8K, IA, top de gama</td></tr>
            </tbody>
          </table>
          <p>Para gaming la diferencia entre Gen3 y Gen5 es <strong>casi imperceptible</strong>. Para edición pesada y carga de modelos IA, sí se nota.</p>
        `
      },
      {
        title: '🧠 Tecnologías NAND',
        html: `
          <ul>
            <li><strong>SLC:</strong> 1 bit por celda. Velocísimo y duradero. Caro. Solo enterprise.</li>
            <li><strong>MLC:</strong> 2 bits. Buen equilibrio. Casi extinto.</li>
            <li><strong>TLC:</strong> 3 bits. Estándar actual. Buena relación calidad/precio.</li>
            <li><strong>QLC:</strong> 4 bits. Barato pero más lento y menos duradero.</li>
            <li><strong>PLC:</strong> 5 bits. En desarrollo (2025-2026). Para almacenamiento masivo barato.</li>
          </ul>
          <p>Las celdas se desgastan al escribir. Por eso los SSDs llevan un controlador con <strong>wear leveling</strong> que distribuye las escrituras. La métrica de durabilidad es el <strong>TBW (TeraBytes Written)</strong>.</p>
        `
      },
      {
        title: '🔌 Conectores',
        html: `
          <div class="info-grid">
            <div class="info-card"><div class="info-card-icon">🔌</div><h4>SATA III</h4><p>Cable de datos + cable de alimentación. 6 Gbps máximo (~550 MB/s real).</p></div>
            <div class="info-card"><div class="info-card-icon">📍</div><h4>M.2 NVMe</h4><p>Slot en placa base. Tamaños: 2230, 2242, 2260, 2280 (el más común), 22110.</p></div>
            <div class="info-card"><div class="info-card-icon">🔄</div><h4>U.2 / U.3</h4><p>Conector enterprise. PCIe x4 en formato 2.5".</p></div>
            <div class="info-card"><div class="info-card-icon">🌊</div><h4>eSATA</h4><p>SATA externo. Obsoleto, sustituido por USB-C.</p></div>
          </div>
        `
      },
      {
        title: '🌳 Sistemas de archivos',
        html: `
          <table class="cozy-table">
            <thead><tr><th>FS</th><th>SO nativo</th><th>Tamaño máx archivo</th><th>Características</th></tr></thead>
            <tbody>
              <tr><td><strong>NTFS</strong></td><td>Windows</td><td>16 EB</td><td>Permisos, journaling, cifrado, compresión.</td></tr>
              <tr><td><strong>FAT32</strong></td><td>Universal</td><td>4 GB</td><td>Compatible con todo, pero ojo al límite.</td></tr>
              <tr><td><strong>exFAT</strong></td><td>Win/macOS</td><td>16 EB</td><td>Sucesor de FAT32. Ideal para USBs y discos compartidos.</td></tr>
              <tr><td><strong>APFS</strong></td><td>macOS</td><td>~8 EB</td><td>Encriptación nativa, snapshots, optimizado para SSD.</td></tr>
              <tr><td><strong>HFS+</strong></td><td>macOS antiguo</td><td>8 EB</td><td>Reemplazado por APFS.</td></tr>
              <tr><td><strong>ext4</strong></td><td>Linux</td><td>16 TB</td><td>Estándar Linux. Journaling, robusto.</td></tr>
              <tr><td><strong>Btrfs / ZFS</strong></td><td>Linux/BSD</td><td>16 EB</td><td>Snapshots, RAID software, checksums.</td></tr>
            </tbody>
          </table>
        `
      }
    ],
    igor: 'Un HDD de 4 TB es ideal para guardar tus 18 temporadas de series sin enfadarte. Un SSD NVMe es para que Windows arranque en 8 segundos y tu juego cargue antes de poder pedir patatas.',
    secrets: [
      'Los SSDs <strong>Gen5</strong> generan tanto calor que vienen con disipadores enormes (a veces con ventilador). Necesitan refrigeración activa o se "throttlean" en segundos.',
      'El <strong>DirectStorage</strong> de Microsoft permite que la GPU acceda directamente al SSD NVMe sin pasar por la CPU. Reduce dramáticamente tiempos de carga en juegos compatibles (Forspoken, Ratchet & Clank).',
      'Existen SSDs <strong>QLC con caché SLC dinámica</strong>: usan parte del NAND como caché rapidísima. Al agotarse, la velocidad cae a ~150 MB/s. Por eso los benchmarks pueden engañar.'
    ],
    tips: [
      'Sistema operativo y programas en SSD NVMe. Documentos en SSD SATA. Backups en HDD. Esta es la jerarquía clásica.',
      'NUNCA desfragmentes un SSD. Windows lo sabe y solo le hace TRIM automáticamente. Desfragmentarlo solo lo desgasta.',
      'Activa siempre TRIM en Linux/Mac/Windows. En Linux: <code>sudo fstrim -av</code> semanal.'
    ],
    mistakes: [
      'Llenar un SSD por encima del 90%. Por encima del 85% empieza a perder rendimiento por falta de espacio para wear leveling.',
      'Formatear un USB grande en FAT32 esperando guardar películas. El límite de 4 GB por archivo te frenará. Usa exFAT.',
      'Conectar un SSD NVMe Gen4 a un slot M.2 cableado por chipset que solo da Gen3. La velocidad caerá a la mitad.'
    ]
  },

  /* ============== GPU ============== */
  'gpu': {
    intro: 'La <strong>GPU (Graphics Processing Unit)</strong> es el corazón de la tarjeta gráfica. Diseñada para hacer <strong>cálculos en paralelo</strong> (miles a la vez), no solo sirve para juegos: edición de video, IA, render 3D, ciencia.',
    blocks: [
      {
        title: '🎯 Partes de una tarjeta gráfica',
        html: `
          <ul>
            <li><strong>GPU (chip):</strong> el procesador gráfico. Miles de núcleos especializados.</li>
            <li><strong>VRAM:</strong> memoria de la tarjeta. GDDR6, GDDR6X, GDDR7 o HBM. Almacena texturas, framebuffers, modelos 3D.</li>
            <li><strong>PCB:</strong> placa de circuito donde va todo soldado.</li>
            <li><strong>VRMs:</strong> reguladores de voltaje. Como en la placa base, pero para la GPU.</li>
            <li><strong>Refrigeración:</strong> disipador + ventiladores (1 a 4). En modelos premium, AIO o cámara de vapor.</li>
            <li><strong>Conectores de salida:</strong> HDMI, DisplayPort, USB-C (raro). En 2026, DP 2.1 y HDMI 2.1 son estándar.</li>
            <li><strong>Conectores de alimentación:</strong> 6-pin, 8-pin PCIe, o el nuevo 12VHPWR / 16-pin (12V-2x6) para gama alta.</li>
          </ul>
        `
      },
      {
        title: '🟢 NVIDIA',
        html: `
          <p>Fundada en 1993. En 1999 lanzó la <strong>GeForce 256</strong>, considerada la primera GPU. Líder del mercado en gaming, IA y centros de datos.</p>
          <p><strong>Gamas principales:</strong></p>
          <ul>
            <li><strong>GeForce:</strong> consumo y gaming. Series RTX 30, 40, 50.</li>
            <li><strong>RTX A-Series (antes Quadro):</strong> profesional. Optimizado para estabilidad.</li>
            <li><strong>Tesla / A100 / H100 / Blackwell B200:</strong> IA y supercomputación.</li>
          </ul>
          <p><strong>Tecnologías clave:</strong></p>
          <ul>
            <li><strong>CUDA:</strong> plataforma de cómputo paralelo. La razón por la que NVIDIA domina la IA.</li>
            <li><strong>Ray Tracing (RTX):</strong> iluminación realista por trazado de rayos.</li>
            <li><strong>DLSS 4 (2025):</strong> reconstrucción por IA. Multi Frame Generation: la GPU "inventa" hasta 3 fotogramas por cada uno renderizado.</li>
            <li><strong>NVIDIA Reflex:</strong> reduce latencia de entrada en gaming.</li>
            <li><strong>G-Sync:</strong> sincronización adaptativa con el monitor.</li>
          </ul>
        `
      },
      {
        title: '🔴 AMD Radeon',
        html: `
          <p>AMD (Advanced Micro Devices) fundada en 1969. Compró ATI en 2006 para entrar en gráficas. Provee también las GPUs de PlayStation 5 y Xbox Series.</p>
          <p><strong>Gamas:</strong></p>
          <ul>
            <li><strong>Radeon RX:</strong> consumo y gaming. Series RX 7000, RX 8000, RX 9000.</li>
            <li><strong>Radeon Pro:</strong> profesional.</li>
            <li><strong>Instinct (MI300, MI325):</strong> IA y datacenter.</li>
          </ul>
          <p><strong>Tecnologías clave:</strong></p>
          <ul>
            <li><strong>FSR 4 (2025):</strong> equivalente a DLSS. Reescalado por IA, ahora compatible solo con RDNA 4.</li>
            <li><strong>FreeSync:</strong> sincronización adaptativa (gratis, sin chip propietario como G-Sync).</li>
            <li><strong>Infinity Cache:</strong> memoria interna que acelera el acceso a datos.</li>
            <li><strong>Smart Access Memory (SAM):</strong> CPU Ryzen + GPU Radeon comparten memoria de forma eficiente.</li>
          </ul>
        `
      },
      {
        title: '🔵 Intel Arc: el nuevo invitado',
        html: `
          <p>Intel entró en el mercado de gráficas dedicadas en 2022 con la serie <strong>Arc Alchemist (A380, A750, A770)</strong>. En 2024 lanzó <strong>Battlemage (B580, B570)</strong> con muy buena relación calidad/precio.</p>
          <p><strong>Tecnologías:</strong></p>
          <ul>
            <li><strong>XeSS:</strong> equivalente a DLSS/FSR. Reescalado con IA.</li>
            <li><strong>AV1 encoding:</strong> Intel fue pionera en codec AV1 por hardware.</li>
            <li><strong>Drivers:</strong> mejoraron muchísimo desde 2022. Aún algo verdes en juegos antiguos.</li>
          </ul>
        `
      },
      {
        title: '🏷 Cómo leer una nomenclatura de GPU',
        html: `
          <div class="info-box"><span class="box-icon">🧐</span><div><div class="box-title">Ejemplo: NVIDIA GeForce RTX 5080</div>
          <strong>GeForce:</strong> familia consumer.<br>
          <strong>RTX:</strong> compatible con Ray Tracing y DLSS.<br>
          <strong>50:</strong> generación 50 (arquitectura Blackwell).<br>
          <strong>80:</strong> gama (60=media, 70=alta, 80=top, 90=entusiasta).</div></div>
          <div class="info-box"><span class="box-icon">🧐</span><div><div class="box-title">Ejemplo: AMD Radeon RX 9070 XT</div>
          <strong>RX:</strong> consumer gaming.<br>
          <strong>90:</strong> generación.<br>
          <strong>70:</strong> gama.<br>
          <strong>XT:</strong> versión potenciada (más rendimiento que la base).</div></div>
        `
      }
    ],
    igor: '"Objetivo: Fortnite" — Igor.<br>Igor opina: "para Full HD 60 FPS, una gráfica de 250€ basta. Para 1440p competitivo, vete a 500-700€. Para 4K Ultra Ray Tracing, vacía la cuenta del banco".',
    secrets: [
      '<strong>Frame Generation</strong> de DLSS 4 y FSR 4 puede multiplicar los FPS x4. Pero introduce latencia y artefactos visuales. Para gaming competitivo se desactiva; para single-player se disfruta.',
      'Las GPU modernas tienen <strong>Tensor Cores</strong> (NVIDIA) y <strong>AI Accelerators</strong> (AMD/Intel) dedicados a IA. Por eso Stable Diffusion y LLMs locales corren tan bien.',
      'El conector <strong>12VHPWR / 16-pin</strong> (RTX 4090 y posteriores) ha tenido casos de derretimiento. La revisión <strong>12V-2x6</strong> es más segura. Si conectas mal el cable, puedes incendiar el conector.'
    ],
    tips: [
      'No compares solo por el número de la GPU: una RTX 4060 NO es más potente que una RTX 3080. Compara por benchmarks reales.',
      'Si tu CPU es modesta (i3, Ryzen 3), no merece la pena gastar en una RTX 4080. La CPU te limitará: cuello de botella.',
      'Para IA local: prioriza VRAM. Una RTX 3090 (24 GB) puede correr modelos que una RTX 4070 (12 GB) no.'
    ],
    mistakes: [
      'Comprar GPU sin verificar que la fuente aguante. Una RTX 4080 necesita mínimo 750W de calidad. Una 4090, 850W+.',
      'Conectar el cable 12VHPWR sin asegurarse de que entre a fondo. Tiene que hacer "clic". Mal conectado = riesgo de incendio.',
      'Comprar tarjeta low-profile sin medir la caja. Algunas GPUs son ENORMES (3-4 slots, 35 cm). Mide antes.'
    ]
  },

  /* ============== FUENTE ============== */
  'fuente': {
    intro: 'La <strong>fuente de alimentación (PSU)</strong> convierte la corriente alterna (AC) de la pared en corriente continua (DC) que alimentará todos los componentes. Si fallas aquí, fallas TODO el PC.',
    blocks: [
      {
        title: '⚡ ¿Cuántos vatios necesito?',
        html: `
          <p>Suma el TDP de la CPU + GPU + ~100W para el resto. Y añade ~20-30% de margen para picos:</p>
          <table class="cozy-table">
            <thead><tr><th>Build</th><th>Recomendación</th></tr></thead>
            <tbody>
              <tr><td>Ofimática (CPU iGPU)</td><td>400-500W</td></tr>
              <tr><td>Gaming media (RTX 4060/RX 7600)</td><td>550-650W</td></tr>
              <tr><td>Gaming alta (RTX 4070 Ti / RX 7800 XT)</td><td>750W</td></tr>
              <tr><td>Gaming top (RTX 4080/4090, RX 7900 XTX)</td><td>850-1000W</td></tr>
              <tr><td>Entusiasta (4090 + Threadripper)</td><td>1200-1600W</td></tr>
            </tbody>
          </table>
        `
      },
      {
        title: '🏆 Certificaciones 80 Plus',
        html: `
          <p>Mide la <strong>eficiencia energética</strong>: qué porcentaje de electricidad consume realmente la fuente vs lo que entrega a los componentes.</p>
          <table class="cozy-table">
            <thead><tr><th>Certificación</th><th>Eficiencia @50% carga</th></tr></thead>
            <tbody>
              <tr><td>80 Plus White</td><td>82%</td></tr>
              <tr><td>80 Plus Bronze</td><td>85%</td></tr>
              <tr><td>80 Plus Silver</td><td>88%</td></tr>
              <tr><td>80 Plus Gold</td><td>90%</td></tr>
              <tr><td>80 Plus Platinum</td><td>92%</td></tr>
              <tr><td>80 Plus Titanium</td><td>94%</td></tr>
            </tbody>
          </table>
          <p>Para una build decente, mínimo <strong>80 Plus Bronze</strong>. Para gaming, Gold es lo ideal. Cyberpunk 2077 4K Ultra te lo agradecerá.</p>
        `
      },
      {
        title: '🔌 Conectores principales',
        html: `
          <ul>
            <li><strong>ATX 24-pin:</strong> alimenta la placa base.</li>
            <li><strong>EPS 4+4 / 8-pin:</strong> alimenta el CPU. Algunas placas premium tienen 2 (8+8 o 8+4).</li>
            <li><strong>PCIe 6+2 / 8-pin:</strong> alimenta GPU.</li>
            <li><strong>12VHPWR / 16-pin:</strong> nuevo estándar para GPUs gama alta (4080+, 5070+).</li>
            <li><strong>SATA Power:</strong> alimenta SSDs SATA, HDDs.</li>
            <li><strong>Molex (4-pin):</strong> en desuso. Ventiladores antiguos, periféricos.</li>
          </ul>
        `
      },
      {
        title: '🧩 Modular, semi o no-modular',
        html: `
          <div class="info-grid">
            <div class="info-card">
              <h4>No modular</h4>
              <p>Todos los cables soldados a la fuente. Cables sobrantes ocupan espacio. Más barata.</p>
            </div>
            <div class="info-card">
              <h4>Semi-modular</h4>
              <p>Cables principales fijos (ATX, EPS, PCIe), el resto desmontables.</p>
            </div>
            <div class="info-card">
              <h4>Full modular</h4>
              <p>Todos los cables se conectan a la fuente. Cableado limpio, solo los necesarios. Más cara.</p>
            </div>
          </div>
        `
      }
    ],
    igor: 'Igor te lo grita: "<strong>NO AHORRES EN LA FUENTE</strong>". Una fuente barata puede freír todo tu PC y, en casos extremos, provocar fuego. Mínimo: marca conocida (Corsair, Seasonic, EVGA, be quiet!, Cooler Master) y 80 Plus Bronze.',
    secrets: [
      'El estándar <strong>ATX 3.1</strong> (2024) define la curva de potencia que debe aguantar una fuente moderna ante los picos de las GPU como la RTX 4090, que pueden subir a 600W durante microsegundos.',
      'Las fuentes <strong>"Cybenetics"</strong> es otra certificación moderna que mide eficiencia Y nivel de ruido. Algunas fuentes son "Lambda A++" (silencio extremo).',
      'Fuentes <strong>SFX</strong> y <strong>SFX-L</strong> son las pequeñas para builds Mini-ITX. En 2026 ya hay SFX de 1000W+ para meter 4090 en cajas minúsculas.'
    ],
    tips: [
      'Compra fuente "para el futuro". Si necesitas 650W ahora, coge 850W. Cambiar fuente luego es un coñazo.',
      'Las fuentes funcionan en su mejor punto al ~50% de carga. Sobredimensionar también es eficiente.',
      'Marcas tier-1 (Seasonic, Super Flower, FSP) fabrican para terceros. Una "EVGA SuperNOVA G+" suele ser un Super Flower rebadged.'
    ],
    mistakes: [
      'Comprar fuente sin certificación 80 Plus. Probablemente tiene poca regulación, ruido y eficiencia ridícula.',
      'Conectar 2 cables PCIe a una misma GPU usando el mismo "rail". Mejor 1 cable por toma.',
      'Encender el PC sin conectar el EPS de la CPU. La placa parpadea pero no arranca, y mucha gente cree que la fuente está rota.'
    ]
  },

  /* ============== REFRIGERACIÓN ============== */
  'refrigeracion': {
    intro: 'Tu PC genera calor. Mucho. Si no lo disipas, los componentes se "throttlean" (bajan velocidad para no fundirse) o se mueren. La refrigeración es el sistema de aire acondicionado del PC.',
    blocks: [
      {
        title: '🌬 Refrigeración por aire',
        html: `
          <p>La más común y barata. Consiste en un <strong>disipador</strong> (bloque de aluminio/cobre con aletas) sobre la CPU + un <strong>ventilador</strong> que mueve el aire.</p>
          <p>Variantes:</p>
          <ul>
            <li><strong>Top-flow:</strong> ventilador horizontal, sopla hacia la placa. Bueno para cajas pequeñas.</li>
            <li><strong>Tower:</strong> aletas verticales con uno o dos ventiladores. El estándar.</li>
            <li><strong>Dual-tower:</strong> dos torres de aletas con 2-3 ventiladores. Top de aire (Noctua NH-D15, Be Quiet! Dark Rock Pro).</li>
          </ul>
        `
      },
      {
        title: '💧 Refrigeración líquida',
        html: `
          <div class="info-grid">
            <div class="info-card">
              <h4>AIO (All-In-One)</h4>
              <p>Sistema cerrado: bloque + bomba + tubos + radiador + ventiladores. Tamaños 120, 240, 280, 360, 420 mm. Plug & play.</p>
            </div>
            <div class="info-card">
              <h4>Custom Loop</h4>
              <p>Refrigeración líquida modular. Tubos rígidos, depósitos, bloques personalizados. Caro, complejo, espectacular.</p>
            </div>
          </div>
          <p>¿Líquida es siempre mejor? <strong>NO</strong>. Un buen disipador de aire dual-tower puede igualar a un AIO 240 mm y ser más silencioso.</p>
        `
      },
      {
        title: '🌡 Pasta térmica',
        html: `
          <p>Entre la CPU y el disipador se aplica <strong>pasta térmica</strong> para mejorar la transferencia de calor. Sin ella, el aire entre las dos superficies actúa como aislante.</p>
          <ul>
            <li><strong>No conductiva</strong> (estándar, base silicio): segura para todo. Arctic MX-6, Noctua NT-H2.</li>
            <li><strong>Metal líquido:</strong> mejor rendimiento pero conduce electricidad. Si gotea sobre la placa, adiós. Solo para expertos.</li>
            <li><strong>PTM 7950 (almohadillas):</strong> moda 2024-2025. Cambia de fase con calor, no se seca.</li>
          </ul>
        `
      },
      {
        title: '💨 Airflow del chasis',
        html: `
          <p>No solo importa enfriar la CPU; el aire dentro de la caja debe <strong>circular</strong>. Reglas básicas:</p>
          <ul>
            <li>Aire frío entra por <strong>delante e abajo</strong>.</li>
            <li>Aire caliente sale por <strong>detrás y arriba</strong>.</li>
            <li>Mantén <strong>presión positiva</strong> (más intake que exhaust) para evitar entrada de polvo por filtros.</li>
            <li>Limpia los filtros cada 2-3 meses. El polvo es el enemigo silencioso.</li>
          </ul>
        `
      }
    ],
    igor: 'Si tu PC suena como un secador, no es "potencia": es mal flujo de aire o ventiladores baratos. Igor recomienda Noctua o Arctic en aire, Lian Li o NZXT en AIO.',
    secrets: [
      'Los <strong>ventiladores Noctua marrones</strong> son legendarios por silencio y durabilidad. Hasta los enemigos los respetan, aunque sean horribles estéticamente.',
      'Las <strong>almohadillas PTM 7950</strong> sustituyen a la pasta térmica tradicional. Cambian de fase a ~50°C y no se secan nunca. Una sola dura años.',
      'El <strong>Direct-Die cooling</strong> (quitar el IHS del CPU y aplicar refrigeración directamente al silicio) puede bajar 15-20°C, pero anula la garantía y rompes la CPU si fallas.'
    ],
    tips: [
      'Una buena CPU "K" (Intel) o no-X (AMD) no necesita refrigeración bestia. Un Arctic Freezer 36 a 35€ bate a AIOs de 100€.',
      'Si tu caja es pequeña, prioriza ventiladores grandes (140 mm) a pocas RPM antes que muchos pequeños a alta velocidad: más aire, menos ruido.',
      'Configura curvas de ventilador en BIOS. Por defecto suelen estar muy agresivas o muy silenciosas. Personaliza para tu uso.'
    ],
    mistakes: [
      'Poner los ventiladores al revés. Mira la flecha en el marco del ventilador: indica dirección de aire y rotación.',
      'Aplicar demasiada pasta térmica. Un guisante en el centro. Si pones tanto que rebosa, contaminas el socket.',
      'No revisar la altura del disipador antes de comprar. Algunos disipadores tower no caben en cajas Mid-Tower compactas.'
    ]
  },

  /* ============== BIOS ============== */
  'bios': {
    intro: 'La <strong>BIOS</strong> (Basic Input-Output System) es el primer software que se ejecuta al encender el PC. Inicializa hardware, verifica que todo está bien (POST) y entrega el control al sistema operativo. La <strong>UEFI</strong> es su sucesora moderna.',
    blocks: [
      {
        title: '⚙️ BIOS vs UEFI',
        html: `
          <table class="cozy-table">
            <thead><tr><th>Característica</th><th>BIOS (Legacy)</th><th>UEFI</th></tr></thead>
            <tbody>
              <tr><td>Año</td><td>~1981</td><td>~2007 (uso masivo desde 2012)</td></tr>
              <tr><td>Tipo de partición</td><td>MBR</td><td>GPT</td></tr>
              <tr><td>Discos máximos</td><td>2 TB</td><td>9,4 ZB (zettabytes)</td></tr>
              <tr><td>Particiones</td><td>4 primarias</td><td>128 GPT</td></tr>
              <tr><td>Interfaz</td><td>Texto, teclado</td><td>Gráfica, ratón soportado</td></tr>
              <tr><td>Tiempo de arranque</td><td>Lento</td><td>Rápido</td></tr>
              <tr><td>Seguridad</td><td>Limitada</td><td>Secure Boot, TPM</td></tr>
            </tbody>
          </table>
          <p>Modos UEFI:</p>
          <ul>
            <li><strong>UEFI Nativo:</strong> arranque moderno, requiere disco GPT.</li>
            <li><strong>CSM (Compatibility Support Module):</strong> emula BIOS para sistemas viejos. Permite arrancar discos MBR.</li>
            <li><strong>Legacy Boot:</strong> sinónimo de CSM activado.</li>
          </ul>
        `
      },
      {
        title: '🚪 Cómo entrar a la BIOS/UEFI',
        html: `
          <p>Justo al encender el PC, pulsa la tecla correspondiente. Suele aparecer en pantalla brevemente:</p>
          <ul>
            <li><strong>DEL</strong> o <strong>SUPR:</strong> ASUS, Gigabyte, MSI, ASRock (lo más común en sobremesa).</li>
            <li><strong>F2:</strong> portátiles Dell, ASUS, Acer.</li>
            <li><strong>F10:</strong> HP.</li>
            <li><strong>F12:</strong> menú de boot directo (sin entrar a la BIOS completa).</li>
            <li><strong>ESC:</strong> algunos modelos como menú secundario.</li>
          </ul>
          <p>En Windows 10/11 puedes entrar también desde: <em>Configuración → Sistema → Recuperación → Inicio avanzado → Reiniciar ahora</em>. Luego: <em>Solucionar problemas → Opciones avanzadas → Configuración de firmware UEFI</em>.</p>
        `
      },
      {
        title: '🛠 Qué puedes modificar en la BIOS',
        html: `
          <ul>
            <li>Cambiar el <strong>orden de arranque</strong> (Boot Priority).</li>
            <li>Cargar <strong>ajustes de fábrica</strong> (Load Defaults).</li>
            <li>Actualizar la BIOS (Flash / EZ Update).</li>
            <li>Configurar <strong>contraseña</strong> de acceso o de boot.</li>
            <li>Cambiar fecha y hora del sistema.</li>
            <li>Ver/cambiar configuración de almacenamiento (AHCI, RAID).</li>
            <li>Configurar el <strong>POST</strong>: con detalles o salto rápido.</li>
            <li>Activar/desactivar <strong>caché interna</strong> del procesador.</li>
            <li>Cambiar comportamiento de CPU (Turbo, virtualización VT-x/AMD-V).</li>
            <li>Cambiar <strong>velocidad de la RAM</strong> (XMP/EXPO).</li>
            <li>Configurar curvas de <strong>ventilador</strong> (Fan Control).</li>
            <li>Activar/desactivar el <strong>logo del fabricante</strong> al arrancar.</li>
            <li>Activar/desactivar <strong>NumLock</strong> al arranque.</li>
            <li>Activar <strong>Secure Boot</strong> y <strong>TPM</strong>.</li>
          </ul>
        `
      },
      {
        title: '🔐 Secure Boot, TPM y Windows 11',
        html: `
          <p>Windows 11 exige <strong>TPM 2.0</strong> (Trusted Platform Module) y <strong>Secure Boot</strong> activados. Microsoft lo justifica por seguridad:</p>
          <ul>
            <li><strong>TPM 2.0:</strong> chip que almacena claves de cifrado, certifica integridad de arranque.</li>
            <li><strong>Secure Boot:</strong> impide que se cargue software no firmado durante el arranque.</li>
            <li><strong>BitLocker:</strong> usa TPM para cifrar el disco transparentemente.</li>
          </ul>
          <p>Muchas placas modernas tienen <strong>fTPM (firmware TPM)</strong> integrado, basta con activarlo en BIOS. Si tu placa es pre-2016, posiblemente no tenga TPM y no podrás instalar Windows 11 oficialmente.</p>
        `
      },
      {
        title: '💾 XMP / EXPO en BIOS',
        html: `
          <p>Las memorias RAM tienen perfiles JEDEC (lentos pero compatibles) y perfiles XMP/EXPO (rápidos). Para usar tu RAM "DDR5-6000":</p>
          <ol>
            <li>Entra a la BIOS.</li>
            <li>Busca <strong>"AI Tweaker"</strong> (ASUS), <strong>"OC"</strong> (MSI), <strong>"Tweaker"</strong> (Gigabyte) o similar.</li>
            <li>Activa <strong>XMP</strong>, <strong>DOCP</strong> (AMD/ASUS) o <strong>EXPO</strong> (AMD).</li>
            <li>Guarda y reinicia.</li>
          </ol>
          <div class="warning-box"><span class="box-icon">⚠️</span><div><div class="box-title">Si no arranca tras activar XMP</div>Quita la pila CR2032 de la placa durante 1-2 minutos para resetear la BIOS. O usa el jumper "Clear CMOS".</div></div>
        `
      },
      {
        title: '🥾 Boot Order y opciones de arranque',
        html: `
          <p>Define en qué orden la BIOS busca un sistema operativo al arrancar. Típicamente:</p>
          <ol>
            <li>USB drives (para instalar Windows desde USB).</li>
            <li>SSD principal (donde está Windows/Linux).</li>
            <li>DVD/CD-ROM (en desuso).</li>
            <li>Red (PXE boot, para arranque remoto en empresas).</li>
          </ol>
          <p>Modos clásicos:</p>
          <ul>
            <li><strong>USB-FDD:</strong> emulación de disquete. Rarísimo hoy.</li>
            <li><strong>USB-ZIP:</strong> emulación de unidad ZIP. También obsoleto.</li>
            <li><strong>USB-HDD:</strong> el común. Tu pendrive arrancable.</li>
          </ul>
        `
      },
      {
        title: '🔄 Update de BIOS',
        html: `
          <p>Actualizar la BIOS añade soporte para CPUs nuevas, corrige bugs y mejora estabilidad. Pero es <strong>arriesgado</strong>: si falla, la placa queda <strong>"bricked"</strong>.</p>
          <p>Métodos:</p>
          <ul>
            <li><strong>EZ Flash / Q-Flash:</strong> desde la propia BIOS, lees un USB con el archivo.</li>
            <li><strong>BIOS Flashback:</strong> botón externo que actualiza sin CPU ni RAM. Imprescindible para CPUs nuevas en placas antiguas.</li>
            <li><strong>Desde el SO:</strong> peligroso si Windows se cuelga durante el flasheo.</li>
          </ul>
        `
      }
    ],
    igor: '"¿Qué hago en la BIOS? Por favor, me pierdo." — Igor.<br>Tranquilo: las BIOS modernas tienen un botón "Load Optimized Defaults" o "Restore Defaults" que devuelve todo a valores seguros si la lías parda.',
    secrets: [
      'Las placas <strong>MSI Click BIOS X</strong> (2024-2025) tienen interfaz gráfica con menús sectorizados muy intuitivos. Pueden hasta proyectar info por móvil con QR.',
      'Algunas placas tienen <strong>"BIOS dual"</strong>: dos chips de BIOS. Si actualizas y muere uno, arranca con el otro automáticamente. Gigabyte y ASUS lo llevan en gama alta.',
      'El <strong>"Resizable BAR" / "SAM"</strong>, activable en BIOS, mejora rendimiento gaming hasta un 10%. Imprescindible con GPUs modernas. Suele estar desactivado por defecto.'
    ],
    tips: [
      'Antes de actualizar BIOS, guarda la versión actual. Algunas placas tienen "Save BIOS to USB".',
      'Si tu Windows 11 no arranca con Secure Boot, comprueba que el disco esté en GPT (no MBR). El instalador de Windows 11 no funciona con MBR.',
      'Etiqueta cada tecla rápida (F2, DEL, F10) en una pegatina dentro de la caja. Te ahorrarás 5 segundos cada vez que necesites entrar.'
    ],
    mistakes: [
      'Actualizar BIOS sin SAI/UPS durante tormenta o cortes de luz. Si se va la corriente: placa muerta.',
      'Activar el XMP con perfil incorrecto. A veces hay XMP1 y XMP2 con valores distintos. Prueba ambos.',
      'Cambiar configuración de RAID accidentalmente. Si tu Windows estaba en modo AHCI y lo pasas a RAID, no arrancará.'
    ]
  }

});
