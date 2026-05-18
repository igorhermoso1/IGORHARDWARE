/* ============================================
   MODULE_CONTENT (parte 4) — Compatibilidad,
   Redes, Seguridad
   ============================================ */

Object.assign(MODULE_CONTENT, {

  /* ============== COMPATIBILIDAD ============== */
  'compatibilidad': {
    intro: 'Comprar componentes "que se vean bonitos" y esperar que funcionen juntos es la receta del desastre. La compatibilidad es lo primero que hay que verificar ANTES de gastar un solo euro.',
    blocks: [
      {
        title: '🔗 Las grandes compatibilidades',
        html: `
          <p>Cuando montas un PC desde cero o vas a actualizar, debes verificar TODAS estas:</p>
          <ol>
            <li><strong>CPU ↔ Placa base:</strong> mismo socket Y BIOS compatible.</li>
            <li><strong>RAM ↔ Placa base:</strong> mismo tipo de DDR (4 o 5), velocidad soportada, capacidad máxima.</li>
            <li><strong>GPU ↔ Placa base:</strong> slot PCIe x16 disponible, espacio físico.</li>
            <li><strong>GPU ↔ Fuente:</strong> potencia suficiente, conectores correctos.</li>
            <li><strong>GPU ↔ Caja:</strong> longitud de GPU < espacio de la caja.</li>
            <li><strong>Disipador ↔ Caja:</strong> altura del disipador < ancho de la caja.</li>
            <li><strong>Disipador ↔ Socket:</strong> compatible con AM4/AM5/LGA1700/1851.</li>
            <li><strong>RAM ↔ Disipador:</strong> RAM con disipador alto puede chocar con disipador de CPU.</li>
            <li><strong>AIO ↔ Caja:</strong> radiador (120/240/280/360) debe caber en algún lado.</li>
            <li><strong>Almacenamiento ↔ Placa:</strong> número de slots M.2 y conectores SATA.</li>
            <li><strong>Fuente ↔ Caja:</strong> formato ATX, SFX o SFX-L.</li>
          </ol>
        `
      },
      {
        title: '🧩 CPU + Placa: la pareja inseparable',
        html: `
          <table class="cozy-table">
            <thead><tr><th>CPU</th><th>Socket</th><th>Chipsets compatibles</th></tr></thead>
            <tbody>
              <tr><td>Intel 12ª/13ª/14ª gen</td><td>LGA1700</td><td>H610, B660, B760, H670, Z690, Z790</td></tr>
              <tr><td>Intel Core Ultra (Arrow Lake)</td><td>LGA1851</td><td>H810, B860, Z890</td></tr>
              <tr><td>Ryzen 1000/2000/3000/5000</td><td>AM4</td><td>A320, B450, X470, B550, X570</td></tr>
              <tr><td>Ryzen 7000/8000/9000</td><td>AM5</td><td>A620, B650, X670, B850, X870, X870E</td></tr>
            </tbody>
          </table>
          <div class="warning-box"><span class="box-icon">⚠️</span><div><div class="box-title">El detalle del BIOS</div>Una placa B650 lanzada en 2022 puede necesitar actualización de BIOS para soportar un Ryzen 9000. Sin <strong>BIOS Flashback</strong> en la placa, esto es imposible sin tener primero un Ryzen 7000.</div></div>
        `
      },
      {
        title: '📏 Tamaños físicos críticos',
        html: `
          <p>Antes de comprar mira las medidas en el manual de la caja:</p>
          <ul>
            <li><strong>Longitud máxima GPU:</strong> normalmente 280-400 mm. Una RTX 4090 mide ~336 mm.</li>
            <li><strong>Altura máxima disipador CPU:</strong> 150-180 mm en Mid Towers; 60 mm en SFF.</li>
            <li><strong>Soporte radiadores:</strong> dónde caben 120, 240, 280, 360, 420 mm.</li>
            <li><strong>Fuente máxima:</strong> longitud del bay de PSU.</li>
            <li><strong>Slots de expansión:</strong> 7 ATX, 4 mATX, 2 ITX.</li>
          </ul>
        `
      },
      {
        title: '⚡ Fuente: cálculo de potencia',
        html: `
          <p>Fórmula rápida: <strong>TDP de CPU + TDP de GPU + 150W (resto) × 1.3 de margen</strong>.</p>
          <table class="cozy-table">
            <thead><tr><th>CPU TDP</th><th>GPU TDP</th><th>PSU recomendada</th></tr></thead>
            <tbody>
              <tr><td>65W</td><td>120W (RTX 4060)</td><td>500W</td></tr>
              <tr><td>105W</td><td>200W (RTX 4070)</td><td>650W</td></tr>
              <tr><td>125W</td><td>285W (RTX 4070 Ti)</td><td>750W</td></tr>
              <tr><td>170W</td><td>320W (RTX 4080)</td><td>850W</td></tr>
              <tr><td>250W</td><td>450W (RTX 4090)</td><td>1000W+</td></tr>
              <tr><td>250W</td><td>575W (RTX 5090)</td><td>1200W+</td></tr>
            </tbody>
          </table>
          <p>Las webs como <strong>PCPartPicker</strong>, <strong>Outervision</strong> o <strong>Be Quiet PSU Calculator</strong> hacen los cálculos por ti con sobrante adecuado.</p>
        `
      },
      {
        title: '🔌 Conectores GPU 2025-2026',
        html: `
          <ul>
            <li><strong>RTX 30/40 mid-range:</strong> 1× 8-pin PCIe.</li>
            <li><strong>RTX 40/50 alta gama:</strong> 12VHPWR o 12V-2x6.</li>
            <li><strong>RTX 4080+:</strong> normalmente 12VHPWR con adaptador de 3-4× 8-pin.</li>
            <li><strong>RTX 4090, 5080, 5090:</strong> 12V-2x6 obligatorio o adaptador 4× 8-pin.</li>
            <li><strong>AMD RX 7900 XTX:</strong> 2× 8-pin PCIe.</li>
          </ul>
          <div class="warning-box"><span class="box-icon">⚠️</span><div><div class="box-title">Fuentes ATX 3.0/3.1</div>Las modernas (2023+) llevan cable nativo 12V-2x6. Si tu fuente es vieja, usa el adaptador incluido con la GPU. Pero <strong>asegura el conector a fondo</strong>: hubo casos de incendio con 4090s.</div></div>
        `
      },
      {
        title: '🛠 Herramientas de compatibilidad',
        html: `
          <ul>
            <li><strong>PCPartPicker.com:</strong> el rey. Marca incompatibilidades automáticamente al añadir piezas.</li>
            <li><strong>UserBenchmark / 3DMark:</strong> rendimiento esperado.</li>
            <li><strong>QVL (Qualified Vendors List):</strong> lista de RAM oficialmente certificada por el fabricante de la placa. Está en su web.</li>
            <li><strong>CPU Support List:</strong> lista de CPUs soportadas por cada placa, con versión de BIOS necesaria.</li>
          </ul>
        `
      }
    ],
    igor: 'Igor te dice: "antes de pulsar Comprar, repite la palabra ¿es compatible? cinco veces. Mira foros, mira opiniones, mira PCPartPicker. Una hora de investigación te ahorra 500€ de RMA".',
    secrets: [
      'Algunas placas <strong>X870E</strong> permiten correr <strong>RAM EXPO de 8000+ MHz</strong> con 4 módulos. Antes era imposible. Pero requieren CPU específicas y manual fine-tune.',
      'En 2025 ya se vio que <strong>Intel Arrow Lake con LGA1851 será una socket de UNA SOLA GENERACIÓN</strong> (Panther Lake usará LGA1854). Si compras placa LGA1851, no podrás upgradear sin cambiar también placa.',
      'AMD confirmó soporte AM5 <strong>hasta al menos 2027</strong>. Comprar Ryzen 7000 hoy te garantiza upgrade futuro sin cambiar placa.'
    ],
    tips: [
      'Si ya tienes una pieza, configura tu build alrededor de ella. No al revés. Una GPU enorme determinará la caja, no la caja la GPU.',
      'Si dudas entre dos placas, mira la <strong>QVL de memoria</strong>: una placa que oficialmente soporte 6400 MHz con 4 módulos es mejor que una que solo certifique 4800 MHz.',
      'No te dejes guiar por estética solo. Una caja con malísimo airflow te puede dar 15°C más en CPU/GPU.'
    ],
    mistakes: [
      'Comprar RAM DDR5 para placa DDR4. Aunque parecen iguales, la muesca está en distinto sitio. NO entra.',
      'Comprar GPU sin medir la caja. Las RTX 4090 modelos ASUS/Gigabyte/MSI pueden llegar a 360 mm. Muchas cajas Mid Tower solo aceptan 320 mm.',
      'Suponer que cualquier disipador AM4 vale para AM5. Algunos son compatibles, pero muchos requieren bracket adicional (que muchos fabricantes regalan gratis si lo pides).'
    ]
  },

  /* ============== REDES ============== */
  'redes': {
    intro: 'Una <strong>red informática</strong> conecta dispositivos para que compartan recursos y datos. Desde tu casa con Wi-Fi hasta internet entero. Sin redes, los PCs son islas.',
    blocks: [
      {
        title: '🌐 Tipos de redes',
        html: `
          <div class="info-grid">
            <div class="info-card">
              <h4>PAN</h4>
              <p>Personal Area Network. Tu Bluetooth, móvil ↔ auriculares. Pocos metros.</p>
            </div>
            <div class="info-card">
              <h4>LAN</h4>
              <p>Local Area Network. Tu casa, tu oficina. Un edificio.</p>
            </div>
            <div class="info-card">
              <h4>WLAN</h4>
              <p>Wireless LAN. LAN pero por Wi-Fi.</p>
            </div>
            <div class="info-card">
              <h4>MAN</h4>
              <p>Metropolitan Area Network. Una ciudad.</p>
            </div>
            <div class="info-card">
              <h4>WAN</h4>
              <p>Wide Area Network. Países, continentes. Internet es la WAN máxima.</p>
            </div>
            <div class="info-card">
              <h4>VPN</h4>
              <p>Virtual Private Network. Red privada simulada sobre internet pública.</p>
            </div>
          </div>
        `
      },
      {
        title: '🔢 Direcciones IP',
        html: `
          <p>Cada dispositivo en una red tiene una <strong>IP única</strong> dentro de esa red. Es como su número de teléfono.</p>
          <h4>IPv4</h4>
          <ul>
            <li>32 bits, 4 octetos de 0-255 separados por puntos. Ejemplo: <code>192.168.1.100</code>.</li>
            <li>Capacidad: ~4.300 millones de direcciones (insuficientes hoy).</li>
            <li>Clases A (1.x.x.x), B (128.x), C (192.x).</li>
          </ul>
          <h4>IPv6</h4>
          <ul>
            <li>128 bits, 8 grupos de 4 hex separados por dos puntos.</li>
            <li>Ejemplo: <code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code>.</li>
            <li>Capacidad: 340 sextillones (3.4 × 10³⁸). Más que suficiente.</li>
          </ul>
          <h4>IPs privadas (RFC 1918)</h4>
          <ul>
            <li><code>10.0.0.0/8</code></li>
            <li><code>172.16.0.0/12</code></li>
            <li><code>192.168.0.0/16</code></li>
          </ul>
          <p>Tu router de casa te da una IP privada (192.168.x.x). Las IPs públicas las asigna tu ISP.</p>
        `
      },
      {
        title: '🏷 MAC, máscara, puerta de enlace, DNS',
        html: `
          <table class="cozy-table">
            <thead><tr><th>Concepto</th><th>Qué es</th><th>Ejemplo</th></tr></thead>
            <tbody>
              <tr><td>MAC</td><td>Identificador único de cada tarjeta de red. 48 bits, asignado por fabricante. Inmutable.</td><td>00:1A:2B:3C:4D:5E</td></tr>
              <tr><td>Máscara subred</td><td>Define qué parte de la IP es "red" y qué parte es "host".</td><td>255.255.255.0 (/24)</td></tr>
              <tr><td>Gateway</td><td>Puerta de enlace. Por dónde sale tu PC hacia otras redes (router típicamente).</td><td>192.168.1.1</td></tr>
              <tr><td>DNS</td><td>Domain Name System. Traduce nombres (google.com) a IPs.</td><td>8.8.8.8 (Google)</td></tr>
              <tr><td>DHCP</td><td>Dynamic Host Configuration Protocol. Asigna IPs automáticamente.</td><td>Tu router lo hace</td></tr>
            </tbody>
          </table>
        `
      },
      {
        title: '🔌 Cable RJ45 y categorías Ethernet',
        html: `
          <p>El cable de red estándar es <strong>UTP (Unshielded Twisted Pair)</strong> con conector <strong>RJ45</strong>. Categorías:</p>
          <table class="cozy-table">
            <thead><tr><th>Cat</th><th>Velocidad</th><th>Distancia</th><th>Uso</th></tr></thead>
            <tbody>
              <tr><td>Cat5</td><td>100 Mbps</td><td>100 m</td><td>Obsoleto</td></tr>
              <tr><td>Cat5e</td><td>1 Gbps</td><td>100 m</td><td>Estándar mínimo hoy</td></tr>
              <tr><td>Cat6</td><td>1 Gbps (10 Gbps a 55 m)</td><td>100 m</td><td>Doméstico moderno</td></tr>
              <tr><td>Cat6a</td><td>10 Gbps</td><td>100 m</td><td>Oficinas modernas</td></tr>
              <tr><td>Cat7</td><td>10 Gbps</td><td>100 m</td><td>Profesional, blindado</td></tr>
              <tr><td>Cat8</td><td>40 Gbps</td><td>30 m</td><td>Datacenters</td></tr>
            </tbody>
          </table>
          <p>El cable tiene 4 pares trenzados. Estándares de conexión: <strong>T568A</strong> y <strong>T568B</strong>. Si los dos extremos usan distinto estándar = cable cruzado (raro hoy gracias a Auto-MDIX).</p>
        `
      },
      {
        title: '📡 Wi-Fi: generaciones',
        html: `
          <table class="cozy-table">
            <thead><tr><th>Nombre</th><th>Estándar</th><th>Velocidad teórica</th><th>Banda</th><th>Año</th></tr></thead>
            <tbody>
              <tr><td>Wi-Fi 4</td><td>802.11n</td><td>600 Mbps</td><td>2.4 / 5 GHz</td><td>2008</td></tr>
              <tr><td>Wi-Fi 5</td><td>802.11ac</td><td>3.5 Gbps</td><td>5 GHz</td><td>2014</td></tr>
              <tr><td>Wi-Fi 6</td><td>802.11ax</td><td>9.6 Gbps</td><td>2.4 / 5 GHz</td><td>2019</td></tr>
              <tr><td>Wi-Fi 6E</td><td>802.11ax</td><td>9.6 Gbps</td><td>+ 6 GHz</td><td>2020</td></tr>
              <tr><td>Wi-Fi 7</td><td>802.11be</td><td>46 Gbps</td><td>2.4 / 5 / 6 GHz</td><td>2024</td></tr>
              <tr><td>Wi-Fi 8 (en desarrollo)</td><td>802.11bn</td><td>100+ Gbps</td><td>2.4 / 5 / 6 GHz</td><td>~2028</td></tr>
            </tbody>
          </table>
        `
      },
      {
        title: '🛡 Protocolos clave',
        html: `
          <ul>
            <li><strong>TCP/IP:</strong> el dúo dinámico que sustenta Internet.</li>
            <li><strong>HTTP/HTTPS:</strong> web. HTTPS cifrado con TLS.</li>
            <li><strong>FTP/SFTP:</strong> transferencia de archivos.</li>
            <li><strong>SSH:</strong> shell remota cifrada. Para administrar servidores.</li>
            <li><strong>DNS:</strong> resolución de nombres.</li>
            <li><strong>DHCP:</strong> asignación dinámica de IP.</li>
            <li><strong>SMTP/POP3/IMAP:</strong> email.</li>
            <li><strong>SMB/NFS:</strong> compartir archivos en red local.</li>
          </ul>
        `
      },
      {
        title: '💻 Comandos de red útiles',
        html: `
          <div class="code-block"><span class="com"># Windows</span>
ipconfig /all
ipconfig /release       <span class="com">// libera IP</span>
ipconfig /renew         <span class="com">// pide IP nueva</span>
ipconfig /flushdns      <span class="com">// limpia caché DNS</span>
ping google.com
tracert google.com
nslookup google.com
netstat -ano            <span class="com">// conexiones activas</span>
arp -a                  <span class="com">// tabla ARP</span>

<span class="com"># Linux/Mac</span>
ifconfig    <span class="com">// (o ip addr)</span>
ip route
ping google.com
traceroute google.com
dig google.com
ss -tunlp               <span class="com">// equivalente a netstat moderno</span></div>
        `
      }
    ],
    igor: '"Argh" — Igor cuando alguien le pregunta por qué no le va el Wi-Fi sin haber reiniciado el router primero. Truco supremo: <em>turn it off and on again</em>.',
    secrets: [
      '<strong>WPA3</strong> es el estándar de seguridad Wi-Fi actual. Si tu router solo tiene WPA2, hora de cambiar. WEP está roto desde 2001 (se craquea en 5 minutos).',
      'Las redes <strong>mesh</strong> (Eero, Deco, Orbi, Asus AiMesh) reemplazan los repetidores Wi-Fi clásicos. Sin pérdida de velocidad al saltar de nodo. Ideal para casas grandes.',
      'Con un <strong>Raspberry Pi</strong> y <strong>Pi-hole</strong> puedes filtrar anuncios y trackers a nivel de red para todos tus dispositivos. Gratis y muy eficaz.'
    ],
    tips: [
      'Conexión por cable SIEMPRE que sea posible. Más rápida, más estable, menos latencia. Wi-Fi es para movilidad.',
      'Si tu Wi-Fi va mal: 2.4 GHz para mayor alcance (atraviesa paredes), 5/6 GHz para mayor velocidad (menos alcance).',
      'Cambia DNS por defecto a <strong>1.1.1.1</strong> (Cloudflare) o <strong>9.9.9.9</strong> (Quad9) para más velocidad y privacidad.'
    ],
    mistakes: [
      'Asignar IPs manuales sin tener en cuenta el rango DHCP del router. Conflictos garantizados.',
      'Olvidarse de la <strong>máscara de subred</strong>. Una mal puesta hace que el PC no se vea con otros en la misma red.',
      'Usar el mismo SSID (nombre de red) para 2.4 y 5 GHz si no tienes router moderno. El cliente puede engancharse al peor a veces.'
    ]
  },

  /* ============== SEGURIDAD ============== */
  'seguridad': {
    intro: 'Tu PC contiene tu vida: contraseñas, fotos, documentos, recuerdos. Protegerlo no es opcional. Veamos las prácticas básicas, las herramientas integradas y por qué KMSPico es una pésima idea.',
    blocks: [
      {
        title: '🔐 Niveles de seguridad',
        html: `
          <ol>
            <li><strong>Físico:</strong> contraseña BIOS, candado del PC, control de acceso al edificio.</li>
            <li><strong>Arranque:</strong> Secure Boot, TPM 2.0, BitLocker.</li>
            <li><strong>Sistema:</strong> contraseña de usuario, MFA (autenticación multifactor).</li>
            <li><strong>Aplicaciones:</strong> permisos, sandbox, antivirus.</li>
            <li><strong>Red:</strong> firewall, VPN, WPA3.</li>
            <li><strong>Datos:</strong> cifrado, backups, gestión de claves.</li>
            <li><strong>Conductual:</strong> NO clicar en cualquier link, leer permisos, usar fuentes oficiales.</li>
          </ol>
        `
      },
      {
        title: '🛡 Windows Defender / Microsoft Defender',
        html: `
          <p>El antivirus integrado en Windows 10/11 es de los mejores del mercado en 2026. Gratuito, ligero, actualizado constantemente. <strong>No necesitas comprar antivirus si lo mantienes activo</strong>.</p>
          <p>Componentes:</p>
          <ul>
            <li><strong>Real-time protection:</strong> escanea archivos al abrirlos.</li>
            <li><strong>Cloud-delivered protection:</strong> consulta a Microsoft Cloud Protection Service.</li>
            <li><strong>Tamper protection:</strong> impide que malware desactive el antivirus.</li>
            <li><strong>Controlled folder access:</strong> protege contra ransomware bloqueando carpetas.</li>
            <li><strong>SmartScreen:</strong> bloquea descargas peligrosas y phishing.</li>
            <li><strong>Firewall:</strong> control de conexiones.</li>
          </ul>
        `
      },
      {
        title: '🔑 BitLocker en profundidad',
        html: `
          <p>BitLocker cifra el disco completo. Para descifrarlo se necesita una clave que se guarda:</p>
          <ul>
            <li>En el <strong>TPM 2.0</strong>: descifrado transparente al arrancar (siempre que el sistema esté limpio).</li>
            <li>Con <strong>PIN</strong>: TPM + PIN al arrancar (más seguro).</li>
            <li>Con <strong>USB</strong>: clave en pendrive (insertable al arrancar).</li>
            <li><strong>Clave de recuperación:</strong> texto largo, único, OBLIGATORIO guardar.</li>
          </ul>
          <p>Versiones:</p>
          <ul>
            <li><strong>BitLocker</strong> (Win Pro/Enterprise): unidades completas.</li>
            <li><strong>BitLocker To Go</strong>: cifrado de USBs y discos externos.</li>
            <li><strong>Device Encryption</strong>: versión simple en Win Home con cuenta Microsoft.</li>
          </ul>
        `
      },
      {
        title: '🦠 Malware: tipos',
        html: `
          <div class="info-grid">
            <div class="info-card">
              <h4>Virus</h4>
              <p>Se replica a sí mismo infectando otros archivos.</p>
            </div>
            <div class="info-card">
              <h4>Troyano</h4>
              <p>Se disfraza de software legítimo. Una vez ejecutado, abre puertas.</p>
            </div>
            <div class="info-card">
              <h4>Worm</h4>
              <p>Se propaga por red sin necesidad de usuario. Famoso: WannaCry.</p>
            </div>
            <div class="info-card">
              <h4>Ransomware</h4>
              <p>Cifra tus datos y pide rescate. Devastador.</p>
            </div>
            <div class="info-card">
              <h4>Spyware</h4>
              <p>Recopila info sobre ti sin tu consentimiento.</p>
            </div>
            <div class="info-card">
              <h4>Adware</h4>
              <p>Muestra publicidad invasiva. Menos peligroso, más molesto.</p>
            </div>
            <div class="info-card">
              <h4>Rootkit</h4>
              <p>Se oculta en el sistema con privilegios máximos. Muy difícil de detectar.</p>
            </div>
            <div class="info-card">
              <h4>Keylogger</h4>
              <p>Captura todo lo que tecleas. Roba contraseñas.</p>
            </div>
            <div class="info-card">
              <h4>Cryptojacker</h4>
              <p>Usa tu CPU/GPU para minar criptomonedas a tus expensas.</p>
            </div>
          </div>
        `
      },
      {
        title: '⚠️ Por qué KMSPico (y similares) son MAL',
        html: `
          <p>KMSPico, MS-Toolkit, AAct, ReLoader y demás "activadores" prometen activar Windows/Office gratis. ¿Qué hacen realmente?</p>
          <ul>
            <li>Modifican el registro y procesos del sistema para fingir activación.</li>
            <li>A menudo incluyen <strong>malware</strong>: troyanos, mineros, backdoors.</li>
            <li>Suelen <strong>desactivar Windows Defender</strong> (porque legítimamente lo detectaría).</li>
            <li>Microsoft puede detectarlos en updates y dejarte sin sistema activado de golpe.</li>
            <li>En entornos empresariales = despido inmediato y problemas legales.</li>
          </ul>
          <p>Alternativas legales: <strong>Windows Home OEM</strong> cuesta ~10-20€ en sitios como Kinguin/G2A/Eneba. Office 365 personal son 70€/año.</p>
        `
      },
      {
        title: '💾 Backups: las 3-2-1',
        html: `
          <p>Estrategia mínima de respaldo:</p>
          <ul>
            <li><strong>3</strong> copias de tus datos importantes.</li>
            <li><strong>2</strong> medios distintos (SSD + HDD, o disco + nube).</li>
            <li><strong>1</strong> copia fuera de tu casa (nube o disco en otro sitio).</li>
          </ul>
          <p>Herramientas:</p>
          <ul>
            <li><strong>Windows:</strong> Historial de archivos, Copia de seguridad Windows 7 (sí, sigue ahí).</li>
            <li><strong>macOS:</strong> Time Machine.</li>
            <li><strong>Linux:</strong> rsync, Timeshift, BorgBackup.</li>
            <li><strong>Multiplataforma:</strong> Veeam (gratis para uso doméstico), Macrium Reflect Free.</li>
            <li><strong>Cloud:</strong> Google Drive, OneDrive, Dropbox, iCloud, Backblaze.</li>
          </ul>
        `
      },
      {
        title: '🧼 Mantenimiento del PC',
        html: `
          <ul>
            <li><strong>Cada semana:</strong> revisa que el antivirus esté actualizado.</li>
            <li><strong>Cada mes:</strong> instala actualizaciones de Windows. Limpia archivos temporales.</li>
            <li><strong>Cada 3 meses:</strong> limpia los filtros antipolvo de la caja.</li>
            <li><strong>Cada 6 meses:</strong> limpieza interior con aire comprimido.</li>
            <li><strong>Cada 1-2 años:</strong> cambia pasta térmica de la CPU (si las temperaturas suben).</li>
            <li><strong>Anualmente:</strong> revisa estado de los SSDs con CrystalDiskInfo. Si el SMART avisa, sustituye antes de que muera.</li>
          </ul>
        `
      }
    ],
    igor: '"Don\'t make cabesa a mess" — Igor.<br>Para tener un PC seguro: 1) no instales basura, 2) actualiza, 3) usa contraseñas fuertes, 4) haz backups, 5) duda de todo.',
    secrets: [
      '<strong>Windows Sandbox</strong> (Win Pro/Enterprise) permite crear un entorno desechable en segundos para probar software sospechoso. Al cerrarlo, todo se borra.',
      'La función <strong>"Core Isolation" + "Memory Integrity"</strong> de Windows 11 protege contra malware avanzado pero deshabilita algunos drivers viejos. Verifica antes de activar.',
      'Hay malware diseñado para <strong>infectar el firmware UEFI</strong>. Sobrevive al formateo. Para limpiarlo: flash de BIOS desde otra PC + reset CMOS.'
    ],
    tips: [
      'Usa un <strong>gestor de contraseñas</strong>: Bitwarden (gratis), 1Password, KeePassXC. Una contraseña fuerte distinta para cada servicio.',
      'Activa <strong>2FA</strong> (autenticación de dos factores) en todas tus cuentas importantes. App como Authy o Microsoft Authenticator, no SMS (vulnerables a SIM swap).',
      'Antes de tirar un disco viejo: <strong>destruirlo físicamente</strong> o usar herramientas como DBAN. Borrar no es suficiente.'
    ],
    mistakes: [
      'Pensar que "no me va a pasar a mí". Le pasa a todo el mundo. Estadísticamente, vas a sufrir un incidente de seguridad antes o después.',
      'Usar la misma contraseña en varios sitios. Cuando uno se filtra, los demás caen.',
      'Hacer backups y nunca probarlos. Un backup sin verificar puede estar corrupto o no contener lo que crees.'
    ]
  }

});
