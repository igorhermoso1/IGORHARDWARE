/* ============================================
   MODULES — Definición de todos los módulos
   ============================================ */

const MODULES = [
  // FUNDAMENTOS
  { id: 'unidades',   icon: '📏', name: 'Unidades de medida',     desc: 'Bits, bytes, GB, TB y por qué tu disco de 1 TB tiene en realidad 931 GB.', group: 'fund',  difficulty: 'basic' },
  { id: 'hardware',   icon: '🛠', name: 'Hardware y Software',    desc: 'Qué es cada cosa, tipos de ordenadores y los periféricos básicos.',        group: 'fund',  difficulty: 'basic' },
  { id: 'monitores',  icon: '🖥', name: 'Monitores y pantallas',  desc: 'CRT, LCD, LED, OLED, QLED. Los FPS y por qué a 60 Hz te quedas corto.',     group: 'fund',  difficulty: 'basic' },
  { id: 'perifericos',icon: '🖱', name: 'Periféricos y puertos',  desc: 'Teclados (membrana, mecánico, óptico), USB, HDMI, DisplayPort y demás.',    group: 'fund',  difficulty: 'basic' },

  // COMPONENTES
  { id: 'placa-base', icon: '🔌', name: 'Placa base',             desc: 'ATX, Micro-ATX, ITX, chipset, sockets y todo lo que va soldado.',           group: 'comp',  difficulty: 'medium' },
  { id: 'cpu',        icon: '🧠', name: 'CPU / Procesador',       desc: 'El cerebro. Núcleos, hilos, GHz, Intel vs AMD, nomenclaturas y sufijos.',   group: 'comp',  difficulty: 'medium' },
  { id: 'ram',        icon: '💾', name: 'Memoria RAM',            desc: 'DIMM, SIMM, DDR3/4/5, latencias, XMP, cuánta necesitas y VRAM.',           group: 'comp',  difficulty: 'medium' },
  { id: 'almacenamiento', icon: '💿', name: 'Almacenamiento',     desc: 'HDD, SSD SATA, NVMe Gen3/4/5. Diferencias, ventajas y trampas.',           group: 'comp',  difficulty: 'medium' },
  { id: 'gpu',        icon: '🎮', name: 'Tarjeta gráfica (GPU)',  desc: 'NVIDIA, AMD, Intel Arc. VRAM, Ray Tracing, DLSS, FSR y nomenclaturas.',     group: 'comp',  difficulty: 'medium' },
  { id: 'fuente',     icon: '🔋', name: 'Fuente de alimentación', desc: 'Vatios, certificaciones 80 Plus, conectores y por qué NO ahorres aquí.',   group: 'comp',  difficulty: 'medium' },
  { id: 'refrigeracion', icon: '❄️', name: 'Refrigeración',       desc: 'Aire vs líquida, AIO, custom loop, pasta térmica y airflow del chasis.',   group: 'comp',  difficulty: 'medium' },

  // SISTEMA Y SOFTWARE
  { id: 'bios',       icon: '⚙️', name: 'BIOS y UEFI',             desc: 'Boot order, Secure Boot, TPM, XMP, CSM, MBR vs GPT y la batalla con Windows 11.', group: 'sys', difficulty: 'hard' },
  { id: 'sistema-operativo', icon: '💻', name: 'Sistemas operativos', desc: 'Windows 10/11, Linux, macOS. Sistemas de archivos: NTFS, exFAT, FAT32, APFS, ext4.', group: 'sys', difficulty: 'hard' },
  { id: 'windows',    icon: '🪟', name: 'Windows 10 y 11',          desc: 'Instalación, optimización, comandos CMD/PowerShell, BitLocker y Sysmon.',   group: 'sys',  difficulty: 'hard' },
  { id: 'virtualbox', icon: '📦', name: 'VirtualBox y virtualización', desc: 'Crear máquinas, snapshots, NAT, puente, Extension Pack y Sr. Anderson.', group: 'sys', difficulty: 'hard' },

  // AVANZADO Y PRÁCTICO
  { id: 'montaje',    icon: '🔧', name: 'Montaje paso a paso',      desc: 'Cómo ensamblar un PC sin matar tus componentes ni a tu paciencia.',         group: 'adv',  difficulty: 'hard' },
  { id: 'diagnostico',icon: '🩺', name: 'Diagnóstico de averías',   desc: 'PC no arranca, pantallazos, beeps de la BIOS y cuellos de botella.',        group: 'adv',  difficulty: 'hard' },
  { id: 'compatibilidad', icon: '🧩', name: 'Compatibilidad',       desc: 'Sockets, generaciones, BIOS necesaria, chipsets y combos que sí pegan.',    group: 'adv',  difficulty: 'hard' },
  { id: 'redes',      icon: '🌐', name: 'Redes básicas',            desc: 'IP, MAC, DHCP, DNS, LAN, WAN, RJ45, Wi-Fi y por qué ipconfig es tu amigo.', group: 'adv',  difficulty: 'hard' },
  { id: 'seguridad',  icon: '🔐', name: 'Seguridad y mantenimiento', desc: 'BitLocker, TPM 2.0, limpieza, antivirus, backups y por qué KMSPico = no.', group: 'adv',  difficulty: 'hard' }
];

/* ============================================
   MODULE_CONTENT — Teoría detallada
   Cada módulo tiene: intro, bloques, info, igor (humor), tips, errores, extras
   ============================================ */

const MODULE_CONTENT = {

  /* ============== UNIDADES DE MEDIDA ============== */
  'unidades': {
    intro: 'La informática se basa en ceros y unos. Pero los humanos no contamos con dos dedos (o sí, depende del momento), así que necesitamos agrupar esos bits en unidades manejables. Aquí empieza todo.',
    blocks: [
      {
        title: '🔢 Bit y Byte',
        html: `
          <p>La unidad <strong>más pequeña</strong> es el <strong>bit</strong> (acrónimo de <em>Binary Digit</em>): solo puede valer <strong>0</strong> o <strong>1</strong> — Sí/No, Verdadero/Falso, On/Off.</p>
          <p>El <strong>byte</strong> es un grupo de <strong>8 bits</strong>. Con un byte puedes representar 256 valores distintos (2⁸), suficiente para guardar un carácter ASCII. <em>"Don't make cabesa a mess"</em> como dice Igor: un bit no es un byte. Punto.</p>
          <div class="info-box"><span class="box-icon">💡</span><div><div class="box-title">Truco mental</div>1 byte = 1 letra. Por eso un archivo .txt con "Hola Igor" pesa unos 9 bytes (incluido el espacio).</div></div>
        `
      },
      {
        title: '📊 Tabla de equivalencias',
        html: `
          <table class="cozy-table">
            <thead>
              <tr><th>Unidad</th><th>Símbolo</th><th>Equivale a</th><th>En bytes (aprox.)</th></tr>
            </thead>
            <tbody>
              <tr><td>Kilobyte</td><td>KB</td><td>1.024 bytes</td><td>10³</td></tr>
              <tr><td>Megabyte</td><td>MB</td><td>1.024 KB</td><td>10⁶</td></tr>
              <tr><td>Gigabyte</td><td>GB</td><td>1.024 MB</td><td>10⁹</td></tr>
              <tr><td>Terabyte</td><td>TB</td><td>1.024 GB</td><td>10¹²</td></tr>
              <tr><td>Petabyte</td><td>PB</td><td>1.024 TB</td><td>10¹⁵</td></tr>
              <tr><td>Exabyte</td><td>EB</td><td>1.024 PB</td><td>10¹⁸</td></tr>
            </tbody>
          </table>
          <p>Para <strong>subir de nivel</strong>: multiplica por 1024. Para <strong>bajar</strong>: divide entre 1024.</p>
          <div class="info-box"><span class="box-icon">🧮</span><div><div class="box-title">Ejemplo de Igor</div>1471 MB → 1471 / 1024 = <strong>1,4365 GB</strong>.<br>200 GB → 200 × 1024 = <strong>204.800 MB</strong>.</div></div>
        `
      },
      {
        title: '🚀 Velocidad de transferencia: Mbps vs MB/s',
        html: `
          <p>Aquí está la <strong>trampa</strong> que sufre todo el mundo. Tu compañía de internet te vende <strong>400 Mbps</strong> (megabits por segundo, fíjate en la "b" minúscula). Pero al descargar un archivo verás como mucho ~50 MB/s.</p>
          <p>¿Por qué? Porque <strong>1 byte = 8 bits</strong>. Por tanto:</p>
          <div class="code-block">400 Mbps ÷ 8 = <span class="num">50 MB/s</span>  // Velocidad real máxima</div>
          <p>Las velocidades de <strong>internet</strong> se miden en <strong>Mbps</strong> (megabits). La <strong>copia de archivos</strong> en tu PC se mide en <strong>MB/s</strong> (megabytes). No es lo mismo, no es lo mismo, NO ES LO MISMO.</p>
        `
      },
      {
        title: '🤔 Por qué tu disco de 1 TB tiene 931 GB',
        html: `
          <p>Compras un disco duro de "1 TB" y al meterlo en Windows ves <strong>931 GB</strong>. ¿Te estafaron? No.</p>
          <p>Los fabricantes usan <strong>base decimal</strong> (1 TB = 10¹² bytes = 1.000.000.000.000 bytes). Pero Windows usa <strong>base binaria</strong>: 1 TB "real" = 2⁴⁰ bytes ≈ 1.099.511.627.776 bytes.</p>
          <div class="code-block">1.000.000.000.000 / 1.073.741.824 = <span class="num">931,32 GB</span></div>
          <p>Esa diferencia siempre te la van a "robar". Bienvenido al sistema.</p>
        `
      }
    ],
    igor: '"Giga, Yiga y Meiga" — Igor.<br>Y sí, Igor llama a su disco duro "el archivero" y a la RAM "el escritorio donde abro 35 cosas a la vez". Buena analogía.',
    secrets: [
      'El término "byte" lo inventó Werner Buchholz en 1956. Originalmente significaba "by eight" (de a 8). Algunos arquitectos lo escribieron "bite" pero cambiaron la "i" por "y" para que no se confundiera con "bit".',
      'Existen unidades del SI estandarizadas para evitar confusión: <strong>KiB, MiB, GiB</strong> (binarias) frente a KB, MB, GB (decimales). Casi nadie las usa, pero Linux sí.',
      'El <strong>Yottabyte</strong> (10²⁴ bytes) es tan grande que se estima que toda la información mundial de internet cabría en unos pocos YB. El próximo es el "brontobyte" pero aún no es oficial.'
    ],
    tips: [
      'Cuando contrates internet, divide el número de Mbps entre 8 para saber tu velocidad real de descarga en MB/s.',
      'Si te dicen "tu archivo pesa 1500 megas" suelen referirse a 1,5 GB. Si es "1500 megabits", son ~187 MB. Aclara siempre.',
      'En las apps que muestran "MB/s" al descargar (Steam, Epic, navegadores) ya van en megaBYTES — listas para multiplicar.'
    ],
    mistakes: [
      'Confundir Mbps con MB/s al elegir tarifa de internet.',
      'Pensar que un USB de "32 GB" tiene exactamente 32.000.000.000 bytes (no, Windows lo verá como ~29,8 GB).',
      'Asumir que un SSD de 512 GB "rellena" exactamente medio TB. No: 512 × 1024 / 1.000.000 = ~537 GB decimales.'
    ]
  },

  /* ============== HARDWARE Y SOFTWARE ============== */
  'hardware': {
    intro: 'El hardware es todo lo que <strong>puedes tocar</strong>. El software es todo lo que <strong>puedes ejecutar pero no tocar</strong>. Si lo pateas y duele, era hardware. Si no, software.',
    blocks: [
      {
        title: '🛠 Hardware',
        html: `
          <p>El <strong>hardware</strong> corresponde a todas las <strong>partes tangibles</strong> de un sistema informático: eléctricas, electrónicas, electromecánicas y mecánicas. Cables, gabinetes, periféricos, chips, ventiladores, todo.</p>
          <p><em>Entre nosotros:</em> es la parte que puedes ver y tocar. Pantalla, teclado, ratón, torre, ventilador del CPU echando rugidos en verano.</p>
          <div class="info-grid">
            <div class="info-card"><div class="info-card-icon">⚡</div><h4>Eléctrico</h4><p>Fuente de alimentación, transformadores.</p></div>
            <div class="info-card"><div class="info-card-icon">🔌</div><h4>Electrónico</h4><p>Placa base, CPU, RAM, GPU.</p></div>
            <div class="info-card"><div class="info-card-icon">⚙️</div><h4>Electromecánico</h4><p>HDD, ventiladores, lectores ópticos.</p></div>
            <div class="info-card"><div class="info-card-icon">📦</div><h4>Mecánico</h4><p>Caja, tornillos, raíles, soportes.</p></div>
          </div>
        `
      },
      {
        title: '💾 Software',
        html: `
          <p>El <strong>software</strong> es el equipamiento lógico: el conjunto de componentes intangibles que hacen funcionar el hardware. Programas, instrucciones, datos, sistemas.</p>
          <p>Tipos principales:</p>
          <ul>
            <li><strong>Software de sistema:</strong> sistemas operativos (Windows, Linux, macOS), drivers, BIOS/UEFI.</li>
            <li><strong>Software de aplicación:</strong> navegadores, ofimática, juegos, editores.</li>
            <li><strong>Software de programación:</strong> compiladores, IDEs, intérpretes.</li>
            <li><strong>Firmware:</strong> el "software dentro del hardware" (BIOS, microcontroladores).</li>
          </ul>
        `
      },
      {
        title: '🖥 Tipos de ordenadores',
        html: `
          <div class="info-grid">
            <div class="info-card">
              <div class="info-card-icon">🖥</div><h4>Sobremesa</h4>
              <p>Torre + monitor. Modular, potente, mejorable a precio razonable. El favorito de Igor.</p>
            </div>
            <div class="info-card">
              <div class="info-card-icon">💻</div><h4>Portátil</h4>
              <p>Todo integrado en una pieza. Cómodo pero limitado: solo se cambia RAM, SSD y batería en la mayoría.</p>
            </div>
            <div class="info-card">
              <div class="info-card-icon">📱</div><h4>Tablet / Móvil</h4>
              <p>Hardware especializado en bajo consumo. Procesadores ARM, todo soldado.</p>
            </div>
            <div class="info-card">
              <div class="info-card-icon">📺</div><h4>Smart TV / Wearables</h4>
              <p>Mini-ordenadores integrados en otros dispositivos. Cada vez más potentes.</p>
            </div>
            <div class="info-card">
              <div class="info-card-icon">🔬</div><h4>Workstation</h4>
              <p>PC de sobremesa profesional para renderizado 3D, CAD, IA. Componentes de gama enterprise.</p>
            </div>
            <div class="info-card">
              <div class="info-card-icon">🖧</div><h4>Servidor</h4>
              <p>Hardware diseñado para funcionar 24/7. ECC RAM, redundancia, sin GPU dedicada normalmente.</p>
            </div>
          </div>
        `
      }
    ],
    igor: 'Cuando Igor te dice "instálamelo", se refiere al software. Cuando dice "móntamelo", se refiere al hardware. Cuando dice "arréglalo", se refiere a "no sé qué le pasa pero hazlo funcionar".',
    secrets: [
      'Existen los <strong>Mini PCs</strong> tipo Intel NUC o ASUS PN: del tamaño de un libro de bolsillo pero con procesadores i7 o Ryzen modernos. En 2025-2026 están reventando el mercado.',
      'Los <strong>Single Board Computers</strong> (Raspberry Pi, Orange Pi, ASUS Tinker) son ordenadores completos en una placa del tamaño de una tarjeta de crédito. Por ~50€ tienes un PC funcional.',
      'En 2024 Apple lanzó los chips <strong>M4</strong> con NPU integrada. La frontera entre "ordenador" y "móvil" está desapareciendo: ambos usan arquitectura ARM y se parecen cada vez más.'
    ],
    tips: [
      'Si vas a hacer un PC nuevo, define primero el USO (gaming, ofimática, edición de video) antes que el presupuesto. Igor lo dice: "primero la meta, luego el camino".',
      'Un portátil es como un matrimonio: cómodo pero no puedes cambiar mucho. Un sobremesa es como una banda de música: cambias miembros cuando quieras.',
      'Las cajas (chasis) baratas a veces tienen bordes cortantes. Echa un ojo a las opiniones antes de comprar, te lo digo por experiencia.'
    ],
    mistakes: [
      'Llamar "CPU" a toda la torre. La CPU es solo el procesador; lo demás se llama "torre", "caja" o "gabinete".',
      'Creer que "más caro = mejor". Una RTX 4080 en un portátil de oficina es como ponerle alerón a un Renault Twingo: ridículo.',
      'No considerar el ruido. Un PC potente sin buena refrigeración suena a turbina de avión. Tus oídos pagarán el precio.'
    ]
  },

  /* ============== MONITORES ============== */
  'monitores': {
    intro: 'El monitor es lo único que ves directamente del PC. Si te equivocas con él, el resto no importa. Veamos las tecnologías, los Hz, los FPS y la verdad sobre los píxeles.',
    blocks: [
      {
        title: '🔬 ¿Cómo funciona un monitor?',
        html: `
          <p>Un monitor no es solo "una pantalla que muestra cosas". Es un sistema complejo formado por varios elementos electrónicos y ópticos:</p>
          <ul>
            <li><strong>Panel:</strong> donde se forman los píxeles. Millones de <strong>subpíxeles</strong> rojos, verdes y azules dispuestos en matriz.</li>
            <li><strong>Retroiluminación (en LCD):</strong> LEDs que dan luz al panel, porque los cristales líquidos no emiten luz por sí solos.</li>
            <li><strong>T-CON (Timing Controller):</strong> sincroniza señales de la GPU con los píxeles del panel.</li>
            <li><strong>Drivers del panel:</strong> aplican voltaje a cada subpíxel.</li>
            <li><strong>Escalador / procesador de imagen:</strong> ajusta resoluciones, interpreta HDR, mejora nitidez.</li>
          </ul>
        `
      },
      {
        title: '📺 Tipos de panel: CRT, LCD, LED, OLED, QLED, Mini-LED',
        html: `
          <table class="cozy-table">
            <thead>
              <tr><th>Tipo</th><th>Cómo funciona</th><th>Pros</th><th>Contras</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>CRT</strong></td><td>Tubos de rayos catódicos</td><td>Ideal para retrogaming</td><td>Pesado, voluminoso, radiación</td></tr>
              <tr><td><strong>LCD</strong></td><td>Cristales líquidos + retroiluminación</td><td>Barato, fino</td><td>Negros grises, contraste limitado</td></tr>
              <tr><td><strong>LED</strong></td><td>LCD con retroiluminación LED</td><td>Mejor brillo y consumo</td><td>Sigue con fugas de luz</td></tr>
              <tr><td><strong>OLED</strong></td><td>Cada píxel emite su propia luz</td><td>Negros perfectos, contraste infinito</td><td>Burn-in, caro</td></tr>
              <tr><td><strong>QLED</strong></td><td>LED + nanopartículas Quantum Dot</td><td>Colores muy puros y vivos</td><td>Sigue siendo LCD por debajo</td></tr>
              <tr><td><strong>Mini-LED</strong></td><td>LED con miles de zonas de atenuación</td><td>HDR brutal, contraste alto</td><td>Caro, blooming en bordes</td></tr>
              <tr><td><strong>Micro-LED</strong></td><td>Cada píxel es un LED inorgánico</td><td>Lo mejor de OLED sin burn-in</td><td>Carísimo, en 2026 aún en desarrollo</td></tr>
            </tbody>
          </table>
        `
      },
      {
        title: '🔬 Variantes de LCD: TN, IPS, VA',
        html: `
          <div class="info-grid">
            <div class="info-card">
              <h4>TN (Twisted Nematic)</h4>
              <p>Los primeros LCD. Rápidos y baratos pero ángulos de visión pobres y colores limitados.</p>
            </div>
            <div class="info-card">
              <h4>IPS (In-Plane Switching)</h4>
              <p>Mejores colores y ángulos. Perfectos para edición gráfica y trabajo. Tiempos de respuesta razonables.</p>
            </div>
            <div class="info-card">
              <h4>VA (Vertical Alignment)</h4>
              <p>Contraste más alto, negros más profundos. Habituales en TVs y monitores multimedia.</p>
            </div>
          </div>
        `
      },
      {
        title: '⚡ FPS vs Hz: la verdad',
        html: `
          <p>Los <strong>FPS</strong> (Frames Per Second) son las imágenes que la <strong>GPU</strong> es capaz de generar por segundo. Los <strong>Hz</strong> (Hertz) son las imágenes que el <strong>monitor</strong> puede mostrar por segundo.</p>
          <p>Si la GPU produce 144 FPS pero el monitor solo es de 60 Hz, <strong>solo verás 60 imágenes</strong>. El resto se descartan. Y si pasa lo contrario (40 FPS en monitor de 144 Hz), notarás tirones.</p>
          <div class="warning-box"><span class="box-icon">⚠️</span><div><div class="box-title">Tearing</div>Cuando GPU y monitor no van sincronizados, partes de distintos fotogramas aparecen solapados en pantalla. Solución: <strong>G-Sync</strong> (NVIDIA), <strong>FreeSync</strong> (AMD) o <strong>VSync</strong> (vía software).</div></div>
          <p>Para gaming competitivo, los <strong>240 Hz / 360 Hz / 540 Hz</strong> existen y marcan diferencia. Para Netflix, con 60 Hz vas sobrado.</p>
        `
      },
      {
        title: '📏 Resoluciones más comunes',
        html: `
          <table class="cozy-table">
            <thead><tr><th>Nombre</th><th>Resolución</th><th>Uso típico</th></tr></thead>
            <tbody>
              <tr><td>HD</td><td>1280 × 720</td><td>Calidad mínima, ya obsoleta en monitores</td></tr>
              <tr><td>Full HD (1080p)</td><td>1920 × 1080</td><td>Estándar actual, gaming asequible</td></tr>
              <tr><td>2K / QHD (1440p)</td><td>2560 × 1440</td><td>El "sweet spot" para gaming en 2026</td></tr>
              <tr><td>4K / UHD</td><td>3840 × 2160</td><td>Edición profesional, cine, gaming top</td></tr>
              <tr><td>5K</td><td>5120 × 2880</td><td>Monitores profesionales Apple</td></tr>
              <tr><td>8K</td><td>7680 × 4320</td><td>Aún de nicho, exige hardware bestial</td></tr>
              <tr><td>UltraWide 3440×1440</td><td>2K con 21:9</td><td>Inmersión en gaming y productividad</td></tr>
            </tbody>
          </table>
        `
      }
    ],
    igor: '"¿Pero no vas a hablar de los FPS bro?" — Igor.<br>Igor recomienda: para ofimática, IPS 1080p 75 Hz. Para gaming casual, IPS 1440p 144 Hz. Para gaming competitivo, OLED 240 Hz o más. Para edición pro, IPS de calibración profesional.',
    secrets: [
      '<strong>QD-OLED</strong> (Quantum Dot OLED) de Samsung combina lo mejor de OLED y QLED: negros perfectos + colores ultra vivos. Es la tecnología premium de 2025-2026.',
      'El <strong>burn-in</strong> de los OLED se mitiga con tecnologías como "pixel shift" (mueve la imagen sutilmente cada pocos minutos) y limpieza automática. Pero un logo estático 12 horas al día sigue siendo riesgo.',
      'Los monitores <strong>Mini-LED</strong> de 2026 alcanzan brillos de 2000-3000 nits con miles de zonas de atenuación local, rivalizando con OLED en HDR sin el riesgo de burn-in.'
    ],
    tips: [
      'No compres un monitor 4K si tu GPU es de gama media: vas a sufrir y tirar dinero. Mejor 1440p 144 Hz.',
      'La <strong>profundidad de color</strong> importa: 8-bit (estándar), 10-bit (HDR real), 12-bit (profesional). Mira la ficha técnica.',
      'Calibra el monitor con software gratuito como DisplayCAL. Los monitores de fábrica vienen con configuración "tienda" que te quema los ojos.'
    ],
    mistakes: [
      'Mirar solo los Hz e ignorar el panel. Un TN de 240 Hz se ve peor que un IPS de 144 Hz para casi todo.',
      'Comprar HDR "fake": muchos monitores tienen "HDR400" que en realidad no es HDR real. El mínimo decente es HDR600 o DisplayHDR True Black 400 para OLED.',
      'Ignorar la curva del monitor: las pantallas curvas son geniales para gaming inmersivo pero un desastre para diseño CAD o arquitectura.'
    ]
  },

  /* ============== PERIFÉRICOS ============== */
  'perifericos': {
    intro: 'Periféricos: todo lo que conectas al PC y que no es estrictamente "el PC". Teclado, ratón, impresora, escáner, cámaras, gamepads. Veamos los más importantes y todos esos puertos misteriosos.',
    blocks: [
      {
        title: '⌨️ Tipos de teclado',
        html: `
          <p>Todos los teclados funcionan con una <strong>matriz de contactos</strong>: al pulsar, se cierra un circuito que el controlador interpreta. Lo que cambia es el <strong>mecanismo</strong>:</p>
          <ul>
            <li><strong>Membrana:</strong> capa de goma sobre membrana conductiva. Baratos, silenciosos, imprecisos.</li>
            <li><strong>Tijera (scissor-switch):</strong> variante con mecanismo de tijera, típico en portátiles. Más estable.</li>
            <li><strong>Mecánico:</strong> cada tecla tiene un switch independiente con muelle. Durabilidad y precisión brutales. Tipos: lineales (suaves), táctiles (con bump), clicky (con clic sonoro).</li>
            <li><strong>Óptico:</strong> el accionamiento se hace con un haz de luz interrumpido. Sin desgaste mecánico, latencia mínima.</li>
            <li><strong>Capacitivo (Hall Effect):</strong> sensores magnéticos. Permite punto de activación regulable. La moda en 2024-2026.</li>
          </ul>
        `
      },
      {
        title: '📐 Formatos de teclado',
        html: `
          <table class="cozy-table">
            <thead><tr><th>Formato</th><th>Teclas (~)</th><th>Características</th></tr></thead>
            <tbody>
              <tr><td>Full-size</td><td>104-108</td><td>Todas las teclas incluyendo numérico</td></tr>
              <tr><td>TKL (Tenkeyless)</td><td>87</td><td>Sin numérico, más espacio para el ratón</td></tr>
              <tr><td>75%</td><td>~84</td><td>Compacto pero con F-row y flechas</td></tr>
              <tr><td>65%</td><td>~68</td><td>Sin F-row, con flechas</td></tr>
              <tr><td>60%</td><td>~61</td><td>Solo bloque alfanumérico, sin flechas dedicadas</td></tr>
              <tr><td>40%</td><td>~40</td><td>Para masoquistas. Todo con capas y combinaciones.</td></tr>
            </tbody>
          </table>
          <p>Layouts: <strong>ANSI</strong> (americano, tecla Enter horizontal) y <strong>ISO</strong> (europeo, Enter en L invertida, tecla extra junto a Z).</p>
        `
      },
      {
        title: '🔌 Puertos y conectores',
        html: `
          <div class="info-grid">
            <div class="info-card"><div class="info-card-icon">🔌</div><h4>USB-A</h4><p>El clásico rectangular. Existe en USB 2.0, 3.0, 3.1, 3.2.</p></div>
            <div class="info-card"><div class="info-card-icon">🔄</div><h4>USB-C</h4><p>Reversible. Soporta vídeo, datos y carga. El futuro.</p></div>
            <div class="info-card"><div class="info-card-icon">⚡</div><h4>Thunderbolt 4/5</h4><p>USB-C con esteroides. 40-80 Gbps, vídeo 8K, alimentación.</p></div>
            <div class="info-card"><div class="info-card-icon">📺</div><h4>HDMI 2.1</h4><p>Vídeo 4K@120Hz, 8K@60Hz, audio multicanal.</p></div>
            <div class="info-card"><div class="info-card-icon">🖥</div><h4>DisplayPort 2.1</h4><p>El estándar PC. 8K@60Hz con DSC, mejor para gaming.</p></div>
            <div class="info-card"><div class="info-card-icon">🌐</div><h4>RJ45 (Ethernet)</h4><p>Red por cable. Categorías: Cat5e, Cat6, Cat6a, Cat7.</p></div>
            <div class="info-card"><div class="info-card-icon">🎵</div><h4>Jack 3.5mm</h4><p>Audio analógico. Verde (auriculares), rosa (micro), azul (line-in).</p></div>
            <div class="info-card"><div class="info-card-icon">📡</div><h4>Optical / TOSLINK</h4><p>Audio digital por fibra óptica.</p></div>
          </div>
        `
      },
      {
        title: '🔢 Versiones USB',
        html: `
          <table class="cozy-table">
            <thead><tr><th>Versión</th><th>Velocidad</th><th>Uso típico</th></tr></thead>
            <tbody>
              <tr><td>USB 1.0/1.1</td><td>1,5 Mbps</td><td>Teclados, ratones antiguos</td></tr>
              <tr><td>USB 2.0</td><td>480 Mbps (~60 MB/s)</td><td>Pendrives baratos, periféricos</td></tr>
              <tr><td>USB 3.0 (3.2 Gen 1)</td><td>5 Gbps (~600 MB/s)</td><td>Discos externos, SSDs externos básicos</td></tr>
              <tr><td>USB 3.1 (3.2 Gen 2)</td><td>10 Gbps (~1,2 GB/s)</td><td>SSDs externos rápidos</td></tr>
              <tr><td>USB 3.2 Gen 2x2</td><td>20 Gbps</td><td>SSDs NVMe externos</td></tr>
              <tr><td>USB4</td><td>40 Gbps</td><td>Thunderbolt-compatible</td></tr>
              <tr><td>USB4 v2 (2024)</td><td>80 Gbps</td><td>El más nuevo, equivalente a Thunderbolt 5</td></tr>
            </tbody>
          </table>
        `
      }
    ],
    igor: '"Bueno, vale, sí, teclado y ratón... ¿Existen inalámbricos pero queréis mi consejo? El cable a la larga funciona mejor." — Igor, defensor del cable.',
    secrets: [
      'Los teclados <strong>Hall Effect / magnéticos</strong> (Wooting, SteelSeries Apex Pro) permiten ajustar el punto de activación de cada tecla individualmente. En gaming competitivo dan ventaja real.',
      'Los <strong>ratones inalámbricos modernos</strong> con polling de 8000 Hz tienen menos latencia que muchos ratones con cable de hace 5 años. La diferencia cable/wireless casi ha desaparecido.',
      'Existe el "puerto USB POWERED" en placas modernas: cargan el móvil incluso con el PC apagado. Búscalo con el icono de un rayo amarillo junto al puerto.'
    ],
    tips: [
      'Para escribir mucho: mecánico táctil o capacitivo Topre. Para gaming: lineal o Hall Effect. Para silencio total: membrana o lineal con O-rings.',
      'Si tu teclado/ratón se desconecta misteriosamente, prueba a cambiar de puerto USB. Algunos puertos comparten controlador y se saturan.',
      'Los USB-C en placa base no son todos iguales: revisa cuál soporta carga rápida, cuál vídeo, cuál USB4/Thunderbolt. La pegatina suele indicarlo.'
    ],
    mistakes: [
      'Comprar un cable USB-C "cualquiera". Algunos son solo carga (no datos), otros no aguantan más de 60W, otros no soportan vídeo. Mira las especificaciones.',
      'Conectar un disco externo USB 3.0 a un puerto USB 2.0: irá a 1/10 de su velocidad. Mira el color del puerto (azul = 3.0).',
      'Usar adaptadores HDMI-DisplayPort baratos. Muchos no soportan más de 1080p@60Hz. Si quieres 4K o alta tasa de refresco, busca "active adapter".'
    ]
  },

  /* ============== PLACA BASE ============== */
  'placa-base': {
    intro: 'La placa base (motherboard) es el <strong>esqueleto</strong> de tu PC. En ella se conecta TODO: CPU, RAM, GPU, almacenamiento, periféricos. Si la placa falla, el resto da igual. Es la pieza más importante después de la CPU.',
    blocks: [
      {
        title: '📐 Factores de forma (tamaños)',
        html: `
          <table class="cozy-table">
            <thead><tr><th>Formato</th><th>Dimensiones</th><th>Slots RAM</th><th>Slots PCIe</th><th>Uso</th></tr></thead>
            <tbody>
              <tr><td>E-ATX</td><td>305 × 330 mm</td><td>8</td><td>Muchos</td><td>Workstations, dual-GPU, HEDT</td></tr>
              <tr><td>ATX</td><td>305 × 244 mm</td><td>4</td><td>~7</td><td>El estándar para sobremesa</td></tr>
              <tr><td>Micro-ATX</td><td>244 × 244 mm</td><td>2-4</td><td>3-5</td><td>Oficina, builds compactas</td></tr>
              <tr><td>Mini-ITX</td><td>170 × 170 mm</td><td>2</td><td>1</td><td>SFF, PCs de salón, mini PCs</td></tr>
            </tbody>
          </table>
          <div class="info-box"><span class="box-icon">⚠️</span><div><div class="box-title">Importante</div>El chasis (caja) DEBE ser compatible con el factor de forma de la placa. Una placa E-ATX no entra en una caja Micro-ATX, obviamente.</div></div>
        `
      },
      {
        title: '🔬 Chipset: el director de orquesta',
        html: `
          <p>El <strong>chipset</strong> es el conjunto de circuitos integrados que gestiona la comunicación entre la CPU y el resto de componentes. Históricamente había dos:</p>
          <ul>
            <li><strong>Northbridge (puente norte):</strong> conectaba con CPU, RAM y GPU (lo más rápido).</li>
            <li><strong>Southbridge (puente sur):</strong> gestionaba almacenamiento, USB, audio, red, periféricos.</li>
          </ul>
          <p>Hoy en día, el northbridge se ha <strong>integrado en la propia CPU</strong>. Solo queda el southbridge (llamado simplemente "chipset"). Por eso comprar una placa implica comprar un chipset COMPATIBLE con tu CPU.</p>
          <p><strong>Ejemplos 2025-2026:</strong></p>
          <ul>
            <li><strong>Intel:</strong> Z890, B860, H810 (LGA1851, generación Arrow Lake / Core Ultra).</li>
            <li><strong>AMD:</strong> X870E, X870, B850, B840, A820 (AM5, Ryzen 7000/9000).</li>
          </ul>
        `
      },
      {
        title: '🔌 Sockets',
        html: `
          <p>El <strong>socket</strong> es el conector físico donde se inserta la CPU. Cada generación de procesador suele cambiar el socket:</p>
          <div class="info-grid">
            <div class="info-card">
              <h4>Intel LGA1700 (2021-2024)</h4>
              <p>Generaciones 12, 13 y 14 (Alder, Raptor Lake). Pines en la placa.</p>
            </div>
            <div class="info-card">
              <h4>Intel LGA1851 (2024-?)</h4>
              <p>Nueva era Core Ultra (Arrow Lake). Reemplaza al LGA1700.</p>
            </div>
            <div class="info-card">
              <h4>AMD AM4 (2017-2022)</h4>
              <p>Longevísimo: soportó Ryzen 1000 hasta 5000. Aún se usa.</p>
            </div>
            <div class="info-card">
              <h4>AMD AM5 (2022-?)</h4>
              <p>Para Ryzen 7000, 8000, 9000. Es LGA (pines en la placa).</p>
            </div>
          </div>
          <div class="warning-box"><span class="box-icon">🪤</span><div><div class="box-title">Trampa común</div>Aunque el socket sea compatible, la BIOS puede necesitar actualización. Un AM5 nuevo no siempre arranca con un Ryzen 9000 sin BIOS actualizada previamente.</div></div>
        `
      },
      {
        title: '🧩 Slots, ranuras y conectores',
        html: `
          <ul>
            <li><strong>DIMM:</strong> ranuras de RAM (2 o 4 normalmente).</li>
            <li><strong>PCIe x16:</strong> el slot grande, para la GPU.</li>
            <li><strong>PCIe x1 / x4 / x8:</strong> slots más pequeños para tarjetas Wi-Fi, capturadoras, sonido, etc.</li>
            <li><strong>M.2:</strong> slots para SSDs NVMe (los más rápidos).</li>
            <li><strong>SATA:</strong> conectores para HDDs y SSDs SATA (6 Gbps).</li>
            <li><strong>ATX 24-pin:</strong> alimentación principal de la placa.</li>
            <li><strong>EPS 8-pin (o 4+4):</strong> alimentación dedicada de la CPU.</li>
            <li><strong>CPU_FAN, SYS_FAN:</strong> conectores de ventiladores (4 pines PWM o 3 pines DC).</li>
            <li><strong>Front Panel (F_PANEL):</strong> botones de encendido, reset, LED de actividad.</li>
            <li><strong>USB headers:</strong> para conectar los USB del chasis.</li>
            <li><strong>HD_AUDIO:</strong> para audio frontal del chasis.</li>
          </ul>
        `
      },
      {
        title: '⚡ PCIe: generaciones',
        html: `
          <table class="cozy-table">
            <thead><tr><th>Versión</th><th>Velocidad por línea</th><th>Año</th></tr></thead>
            <tbody>
              <tr><td>PCIe 3.0</td><td>~1 GB/s</td><td>2010</td></tr>
              <tr><td>PCIe 4.0</td><td>~2 GB/s</td><td>2017</td></tr>
              <tr><td>PCIe 5.0</td><td>~4 GB/s</td><td>2019, popularizado 2022+</td></tr>
              <tr><td>PCIe 6.0</td><td>~8 GB/s</td><td>2022, llegando a servidores en 2025-2026</td></tr>
              <tr><td>PCIe 7.0</td><td>~16 GB/s</td><td>Spec 2025, comercial ~2027</td></tr>
            </tbody>
          </table>
          <p>Las GPU usan PCIe x16 (16 líneas). Un SSD NVMe usa x4. PCIe es <strong>retrocompatible</strong>: una GPU PCIe 5.0 funciona en una placa PCIe 4.0, pero a velocidad 4.0.</p>
        `
      },
      {
        title: '🧠 BIOS / UEFI integrada',
        html: `
          <p>La placa base lleva un chip de memoria con la <strong>BIOS o UEFI</strong>, que es el primer software que se ejecuta al encender el PC. Junto a ella hay una <strong>pila CR2032</strong> que alimenta una memoria CMOS para guardar la configuración (hora, parámetros) incluso con el PC apagado.</p>
          <p>Si quitas la pila durante 1-2 minutos, la BIOS vuelve a valores de fábrica. Truco útil cuando algo se ha "trabado".</p>
        `
      }
    ],
    igor: 'La placa base es como el campo de fútbol: si está roto, no importa que tengas a Messi. Igor recomienda gastar al menos un 15-20% del presupuesto del PC en una placa decente.',
    secrets: [
      'Las placas <strong>WiFi 7</strong> (802.11be) integrado son ya estándar en 2025-2026. Velocidades teóricas de hasta 46 Gbps por canal.',
      'El <strong>BIOS Flashback</strong> (botón en el panel trasero) permite actualizar la BIOS sin CPU instalada. Imprescindible para CPUs nuevas en placas antiguas.',
      'Algunas placas modernas tienen un display LCD integrado para ver códigos de error (Q-Code) y temperaturas. ASUS ROG Maximus, MSI MEG y Gigabyte Aorus Master lo incluyen.'
    ],
    tips: [
      'Mira el VRM (regulador de voltaje) de la placa antes de comprar. Una CPU de 250W con VRM débil sufrirá throttling. Hay benchmarks de VRM por modelo de placa en YouTube.',
      'Las placas "B" (B650, B860) suelen tener mejor relación calidad/precio que las "X" o "Z". Estas últimas son para overclock y multi-GPU, cosa que pocos hacen.',
      'No abras la BIOS con manos sucias o sin antiestática. Y NUNCA actualices la BIOS si tienes la tormenta del siglo en casa con cortes de luz.'
    ],
    mistakes: [
      'Comprar la placa "más barata" del socket. Suelen tener VRMs débiles, pocos M.2 y conectividad limitada.',
      'Olvidar conectar el EPS 8-pin de la CPU. La placa enciende pero la CPU no arranca. Es el error #1 de novatos.',
      'Confundir slots PCIe x1 con M.2. Aunque parezcan similares, NO son intercambiables.'
    ]
  },

  /* ============== CPU ============== */
  'cpu': {
    intro: 'La <strong>CPU (Central Processing Unit)</strong> es el cerebro de tu ordenador. Interpreta y ejecuta las instrucciones de programas y sistema. Sin ella, el PC es solo una caja con luces bonitas.',
    blocks: [
      {
        title: '⚙️ ¿Qué hace una CPU?',
        html: `
          <p>Una CPU ejecuta el ciclo de <strong>fetch-decode-execute</strong> miles de millones de veces por segundo:</p>
          <ol>
            <li><strong>Fetch:</strong> trae una instrucción desde la memoria RAM.</li>
            <li><strong>Decode:</strong> la traduce a algo que entiende.</li>
            <li><strong>Execute:</strong> la ejecuta (suma, compara, mueve datos, etc.).</li>
            <li><strong>Writeback:</strong> guarda el resultado.</li>
          </ol>
          <p>Esto pasa <strong>3 a 6 mil millones de veces por segundo</strong> en CPUs modernas. Por eso una página web tarda "solo" 200 ms en cargar: son 600 millones de operaciones.</p>
        `
      },
      {
        title: '🔢 Características clave',
        html: `
          <div class="info-grid">
            <div class="info-card">
              <h4>Núcleos (cores)</h4>
              <p>Unidades de procesamiento independientes. Una CPU de 8 núcleos puede hacer 8 cosas en paralelo.</p>
            </div>
            <div class="info-card">
              <h4>Hilos (threads)</h4>
              <p>Con Hyper-Threading (Intel) o SMT (AMD), cada núcleo gestiona 2 hilos. CPU 8c/16t = 8 núcleos, 16 hilos.</p>
            </div>
            <div class="info-card">
              <h4>Frecuencia (GHz)</h4>
              <p>Ciclos por segundo. 3,5 GHz = 3.500.000.000 ciclos/s. Base y boost (turbo).</p>
            </div>
            <div class="info-card">
              <h4>Caché</h4>
              <p>Memoria ultrarrápida en la CPU. L1 (KB), L2 (MB), L3 (MB-decenas de MB). Más caché = más rendimiento.</p>
            </div>
            <div class="info-card">
              <h4>TDP / PBP</h4>
              <p>Watios que consume y disipa. Importante para elegir refrigeración y fuente.</p>
            </div>
            <div class="info-card">
              <h4>iGPU</h4>
              <p>Gráfica integrada. Si tu CPU la tiene, no necesitas GPU dedicada para tareas básicas.</p>
            </div>
            <div class="info-card">
              <h4>Litografía</h4>
              <p>Nanómetros del proceso de fabricación. Menos nm = más eficiente. 2025-2026 ya está en 3 nm y 2 nm.</p>
            </div>
            <div class="info-card">
              <h4>NPU</h4>
              <p>Neural Processing Unit. Para acelerar IA local. Estándar en Intel Core Ultra y AMD Ryzen AI.</p>
            </div>
          </div>
        `
      },
      {
        title: '🔵 Nomenclatura Intel',
        html: `
          <p>Las CPUs Intel Core llevan un nombre como <strong>Intel Core i7-14700K</strong>. Lo descomponemos:</p>
          <ul>
            <li><strong>Core:</strong> familia de consumo (Pentium/Celeron son la gama baja, Xeon la profesional).</li>
            <li><strong>i3/i5/i7/i9:</strong> gama. i3 entrada, i5 medio, i7 alto, i9 entusiasta.</li>
            <li><strong>Primer(os) dígito(s):</strong> generación. 14700 = 14ª generación.</li>
            <li><strong>Resto de cifras:</strong> modelo. Cuanto mayor, mejor (dentro de la misma gama).</li>
            <li><strong>Letra final:</strong></li>
            <ul>
              <li><strong>K:</strong> multiplicador desbloqueado para overclock.</li>
              <li><strong>F:</strong> sin gráfica integrada (más barato).</li>
              <li><strong>KF:</strong> overclockable y sin iGPU.</li>
              <li><strong>U:</strong> ultra bajo consumo (portátiles).</li>
              <li><strong>H / HK / HQ:</strong> portátiles de alto rendimiento.</li>
              <li><strong>T:</strong> baja potencia para sobremesa pequeño.</li>
              <li><strong>HF:</strong> portátil de gama alta sin iGPU.</li>
            </ul>
          </ul>
          <p>Desde 2024, Intel ha renombrado su gama alta como <strong>Intel Core Ultra</strong> (Ultra 5, 7, 9) con un esquema similar pero con tres tipos de núcleos: P-cores (rendimiento), E-cores (eficiencia) y LP E-cores.</p>
        `
      },
      {
        title: '🔴 Nomenclatura AMD',
        html: `
          <p>Las CPUs AMD Ryzen siguen el patrón <strong>AMD Ryzen 7 7800X3D</strong>:</p>
          <ul>
            <li><strong>Ryzen:</strong> familia de consumo (EPYC = servidores, Threadripper = HEDT).</li>
            <li><strong>3/5/7/9:</strong> gama (equivalente a i3/i5/i7/i9).</li>
            <li><strong>Primer dígito:</strong> generación. Ojo: AMD salta números (1000, 2000, 3000, 5000, 7000, 9000). El 4000 y 6000 fueron de portátil.</li>
            <li><strong>Resto:</strong> modelo dentro de la gama.</li>
            <li><strong>Sufijos:</strong></li>
            <ul>
              <li><strong>X:</strong> frecuencia alta de stock.</li>
              <li><strong>X3D:</strong> con tecnología 3D V-Cache. Brutales para gaming.</li>
              <li><strong>G:</strong> con iGPU integrada (APU).</li>
              <li><strong>F:</strong> sin iGPU (poco común).</li>
              <li><strong>(sin letra):</strong> versión base.</li>
            </ul>
          </ul>
        `
      },
      {
        title: '🥊 Intel vs AMD 2025-2026',
        html: `
          <table class="cozy-table">
            <thead><tr><th>Aspecto</th><th>Intel</th><th>AMD</th></tr></thead>
            <tbody>
              <tr><td>Arquitectura</td><td>Híbrida (P+E cores)</td><td>Uniforme (todos los cores iguales)</td></tr>
              <tr><td>Gaming top</td><td>Core Ultra 9 285K</td><td>Ryzen 7 9800X3D / 9 9950X3D</td></tr>
              <tr><td>Eficiencia</td><td>Mejor en E-cores</td><td>Generalmente más eficiente global</td></tr>
              <tr><td>Plataforma</td><td>LGA1851 (cambia rápido)</td><td>AM5 (longeva, hasta 2027+)</td></tr>
              <tr><td>Memoria</td><td>DDR5 only</td><td>DDR5 only</td></tr>
              <tr><td>NPU</td><td>Sí (hasta 13 TOPS)</td><td>Sí (Ryzen AI hasta 50 TOPS)</td></tr>
            </tbody>
          </table>
        `
      }
    ],
    igor: 'Igor dice: "para gaming en 2026, un Ryzen X3D es la opción casi por defecto. Para creación y productividad, Intel con muchos núcleos sigue compitiendo. Para ofimática... compra lo que esté de oferta, hermano".',
    secrets: [
      '<strong>3D V-Cache</strong> de AMD apila la caché L3 encima del chip, triplicándola. Los X3D son los mejores procesadores para gaming desde 2022 y siguen reinando.',
      'Intel apuesta por <strong>chiplets</strong> (varios chips en un mismo paquete) desde Meteor Lake. AMD lleva años haciendo esto (chiplets I/O + CCD).',
      'Las CPUs modernas tienen <strong>"P-cores" (Performance) y "E-cores" (Efficient)</strong>. Windows 11 sabe enviar tareas pesadas a los P y tareas ligeras a los E para ahorrar energía.'
    ],
    tips: [
      'Para gaming puro, un Ryzen 7 7800X3D / 9800X3D bate a procesadores el doble de caros. La caché V-Cache es magia para juegos.',
      'No actualices CPU sin comprobar la VRM y la BIOS de tu placa. Un Ryzen 9 en una placa B450 modesta = throttling garantizado.',
      'La diferencia entre i5 y i7 para uso normal (navegar, ofimática, Netflix) es prácticamente nula. Solo notas el i7 en cargas pesadas.'
    ],
    mistakes: [
      'Comprar CPU sin disipador y olvidar pedir uno. Algunos modelos (sobre todo "K" o "X") vienen sin refrigeración de stock.',
      'Aplicar pasta térmica como mantequilla en tostada. Un guisante en el centro es suficiente.',
      'Apretar el disipador en cruz "a tope" del tirón. Hay que apretar diagonalmente y poco a poco para no deformar el IHS.'
    ]
  },

  /* ============== RAM ============== */
  'ram': {
    intro: 'La <strong>memoria RAM (Random Access Memory)</strong> es la memoria principal y temporal del ordenador. Almacena datos e instrucciones que la CPU necesita AHORA mismo. Es rapidísima, pero <strong>volátil</strong>: al apagar el PC, se borra todo.',
    blocks: [
      {
        title: '📚 Analogía de Igor: el escritorio',
        html: `
          <div class="igor-box">
            <span class="box-icon">💡</span>
            <div>
              <div class="box-title">El escritorio vs el archivero</div>
              <strong>Disco duro = archivero:</strong> guarda miles de libros pero tardas en buscar.<br>
              <strong>RAM = escritorio:</strong> solo caben unos libros a la vez pero los tienes a mano.<br>
              Cuanto más grande sea tu escritorio (más RAM), más libros (programas) puedes consultar simultáneamente sin tener que ir al archivero.
            </div>
          </div>
        `
      },
      {
        title: '📐 Clasificación según número de pines (módulos)',
        html: `
          <ul>
            <li><strong>SIMM (Single In-line Memory Module):</strong> obsoleto. 30 o 72 pines. Se montaban de dos en dos.</li>
            <li><strong>DIMM (Dual In-line Memory Module):</strong> el estándar moderno para PC sobremesa. 168, 184, 240, 288 pines según generación. Lleva una <strong>muesca</strong> que evita ponerlo al revés.</li>
            <li><strong>SO-DIMM:</strong> versión "small outline" para portátiles. Mismo principio, formato compacto.</li>
            <li><strong>CAMM2 (2024+):</strong> nuevo estándar para portátiles modernos. Plano, gana espacio y disipa mejor.</li>
          </ul>
        `
      },
      {
        title: '🔬 Clasificación según almacenamiento: DRAM vs SRAM',
        html: `
          <div class="info-grid">
            <div class="info-card">
              <h4>DRAM</h4>
              <p>Dynamic RAM. Usa condensadores que necesitan refrescarse periódicamente porque "pierden" la carga. Es la RAM que usas: barata y densa.</p>
            </div>
            <div class="info-card">
              <h4>SRAM</h4>
              <p>Static RAM. Usa flip-flops, no necesita refresco. Mucho más rápida y cara. Solo se usa en cachés L1/L2/L3 de la CPU.</p>
            </div>
          </div>
        `
      },
      {
        title: '🚀 Generaciones DDR',
        html: `
          <table class="cozy-table">
            <thead><tr><th>Tipo</th><th>Pines (DIMM)</th><th>Velocidad típica</th><th>Voltaje</th><th>Año</th></tr></thead>
            <tbody>
              <tr><td>SDR-SDRAM</td><td>168</td><td>66-133 MHz</td><td>3,3 V</td><td>1996</td></tr>
              <tr><td>DDR</td><td>184</td><td>200-400 MHz</td><td>2,5 V</td><td>2000</td></tr>
              <tr><td>DDR2</td><td>240</td><td>400-800 MHz</td><td>1,8 V</td><td>2003</td></tr>
              <tr><td>DDR3</td><td>240</td><td>800-2133 MHz</td><td>1,5 V</td><td>2007</td></tr>
              <tr><td>DDR4</td><td>288</td><td>2133-3200+ MHz</td><td>1,2 V</td><td>2014</td></tr>
              <tr><td>DDR5</td><td>288</td><td>4800-8000+ MHz</td><td>1,1 V</td><td>2021</td></tr>
              <tr><td>DDR6 (en desarrollo)</td><td>-</td><td>8800-17600 MHz</td><td>~1 V</td><td>~2027</td></tr>
            </tbody>
          </table>
          <p>Las generaciones <strong>NO son intercambiables</strong>: DDR4 no entra en slot DDR5 (las muescas están en sitios distintos). Cuidado al comprar.</p>
        `
      },
      {
        title: '⏱ Latencias y CL',
        html: `
          <p>La latencia (CAS Latency o <strong>CL</strong>) es el número de ciclos de reloj que la RAM tarda en responder. Verás módulos descritos como:</p>
          <div class="code-block">DDR5-6000 CL30 → 6000 MHz, CL30
DDR5-6400 CL32 → 6400 MHz, CL32</div>
          <p>Para comparar latencias REALES en nanosegundos: <code>CL × 2000 / frecuencia</code>.</p>
          <p>Cuanto más bajo el CL para la misma frecuencia, mejor. Pero al subir frecuencia normalmente sube CL: hay equilibrio.</p>
        `
      },
      {
        title: '⚡ XMP / EXPO: la magia oculta',
        html: `
          <p>Las RAMs vienen con perfiles <strong>JEDEC</strong> (estándar conservador, baja velocidad). Para correr a su velocidad anunciada necesitas activar el perfil overclock:</p>
          <ul>
            <li><strong>XMP (Extreme Memory Profile):</strong> de Intel. Funciona también con AMD pero a veces se llama "DOCP" o "AMP" en placas AMD.</li>
            <li><strong>EXPO (Extended Profiles for Overclocking):</strong> de AMD para DDR5.</li>
          </ul>
          <p>Lo activas en la BIOS. Sin XMP/EXPO, una RAM "DDR5-6000" funcionará a DDR5-4800.</p>
          <div class="info-box"><span class="box-icon">🎓</span><div><div class="box-title">Igor te dice</div>SIEMPRE activa XMP/EXPO después de montar el PC. Es gratis y mejora rendimiento ~10-20% en gaming.</div></div>
        `
      },
      {
        title: '📊 Cuánta RAM necesitas (2026)',
        html: `
          <table class="cozy-table">
            <thead><tr><th>Uso</th><th>Mínimo</th><th>Recomendado</th><th>Óptimo</th></tr></thead>
            <tbody>
              <tr><td>Ofimática, navegación</td><td>8 GB</td><td>16 GB</td><td>16 GB</td></tr>
              <tr><td>Gaming actual</td><td>16 GB</td><td>32 GB</td><td>32 GB</td></tr>
              <tr><td>Streaming + gaming</td><td>16 GB</td><td>32 GB</td><td>64 GB</td></tr>
              <tr><td>Edición de video 4K</td><td>32 GB</td><td>64 GB</td><td>128 GB</td></tr>
              <tr><td>IA local / LLMs</td><td>32 GB</td><td>64 GB</td><td>128+ GB</td></tr>
            </tbody>
          </table>
        `
      },
      {
        title: '🎮 VRAM: la prima de la RAM',
        html: `
          <p>La <strong>VRAM (Video RAM)</strong> es memoria especializada para gráficos, integrada en la tarjeta gráfica. Almacena texturas, modelos 3D, sombreadores, framebuffers.</p>
          <p>Tipos modernos:</p>
          <ul>
            <li><strong>GDDR6:</strong> usado en RTX 3000 y Radeon RX 6000-7000.</li>
            <li><strong>GDDR6X:</strong> versión rápida de NVIDIA. Hasta 21 Gbps por pin.</li>
            <li><strong>GDDR7:</strong> en RTX 50 (2025). Hasta 32 Gbps por pin.</li>
            <li><strong>HBM2/HBM3:</strong> apilada, ultraancha de banda. Para GPUs profesionales e IA.</li>
          </ul>
          <p>Para gaming 1080p: 8 GB VRAM mínimo. 1440p: 12 GB. 4K: 16 GB o más en juegos modernos.</p>
        `
      },
      {
        title: '🪪 SPD: el carnet de identidad de la RAM',
        html: `
          <p>Cada módulo de RAM lleva un pequeño chip <strong>SPD (Serial Presence Detect)</strong> que almacena: capacidad, velocidad, latencias, voltaje, fabricante. Gracias a esto, la placa base detecta automáticamente cómo configurarla.</p>
          <p>Programas como <strong>CPU-Z</strong> o <strong>HWInfo</strong> leen el SPD y te muestran toda la info de tu RAM.</p>
        `
      }
    ],
    igor: '"Reveja, repasinho o repaso" — Igor.<br>Si tu PC va lento abriendo muchas pestañas de Chrome, no necesariamente necesitas más CPU: probablemente solo más RAM.',
    secrets: [
      'En 2026 ya hay módulos DDR5 de hasta <strong>9200 MHz</strong> en kits gaming premium (G.Skill, Corsair, Kingston Fury). Por encima ya entra en overclocking extremo.',
      'AMD Ryzen tiene un "sweet spot" en DDR5-6000 CL30 por cómo funciona su Infinity Fabric. Subir más no siempre mejora, a veces empeora si no se ajusta el FCLK manualmente.',
      'Las RAM con disipador <strong>RGB</strong> NO son más rápidas que las normales. Es marketing puro. Pero quedan bonitas.'
    ],
    tips: [
      'SIEMPRE compra RAM en kit de 2 módulos (2×16 GB en lugar de 1×32 GB). Activa el <strong>dual channel</strong> y ganas hasta 30% de rendimiento.',
      'Si compras 4 módulos, asegúrate de que la placa los soporte sin bajar frecuencia. Muchas DDR5 fallan al meter 4 módulos a alta velocidad.',
      'Mezclar marcas/velocidades es jugar a la ruleta rusa. Compra siempre en kit pareado.'
    ],
    mistakes: [
      'Comprar RAM DDR4 para placa DDR5 (o viceversa). No encajan, las muescas están en lugares diferentes.',
      'No activar XMP/EXPO. Tu RAM premium funcionará como una RAM básica.',
      'Mezclar latencias y frecuencias distintas. La placa bajará todo al módulo más lento.'
    ]
  }

};

