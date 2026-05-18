/* ============================================
   MODULE_CONTENT (parte 3) — Sistema Operativo,
   Windows, VirtualBox, Montaje, Diagnóstico,
   Compatibilidad, Redes, Seguridad
   ============================================ */

Object.assign(MODULE_CONTENT, {

  /* ============== SISTEMA OPERATIVO ============== */
  'sistema-operativo': {
    intro: 'Un <strong>sistema operativo (SO)</strong> es el software que gestiona el hardware y permite ejecutar otros programas. Sin SO, tu PC sería un pisapapeles caro con luces.',
    blocks: [
      {
        title: '📊 Tipos de sistemas operativos',
        html: `
          <div class="info-grid">
            <div class="info-card">
              <h4>Monoprocesador</h4>
              <p>Una sola CPU. Ejecuta instrucciones secuencialmente. (Antiguo, casi extinto).</p>
            </div>
            <div class="info-card">
              <h4>Multiprocesador</h4>
              <p>Varias CPUs comparten buses, RAM y reloj. Sistemas paralelos. Servidores modernos.</p>
            </div>
            <div class="info-card">
              <h4>Distribuido</h4>
              <p>Procesadores en máquinas distintas conectados por red. No comparten memoria.</p>
            </div>
            <div class="info-card">
              <h4>Tiempo real (RTOS)</h4>
              <p>Garantiza respuesta en tiempo limitado. Coches, marcapasos, aviones.</p>
            </div>
            <div class="info-card">
              <h4>Multitarea</h4>
              <p>Ejecuta varios procesos a la vez (todos los modernos).</p>
            </div>
            <div class="info-card">
              <h4>Multiusuario</h4>
              <p>Soporta varias sesiones de usuario simultáneamente.</p>
            </div>
          </div>
        `
      },
      {
        title: '🌐 Principales SOs de escritorio',
        html: `
          <ul>
            <li><strong>MS-DOS (1981):</strong> el padre. Solo comandos. Microsoft + IBM.</li>
            <li><strong>Microsoft Windows:</strong> el más extendido. Desde Windows 1.0 (1985) hasta Windows 11 (2021) y futuras versiones.</li>
            <li><strong>macOS:</strong> Apple, basado en Unix (Darwin). Exclusivo de Macs.</li>
            <li><strong>Linux:</strong> kernel libre. Cientos de "distribuciones": Ubuntu, Debian, Fedora, Arch, Mint, Manjaro.</li>
            <li><strong>Chrome OS:</strong> de Google, basado en Linux. Para Chromebooks.</li>
            <li><strong>BSD:</strong> FreeBSD, OpenBSD. Robustos, usados en servidores y dispositivos.</li>
          </ul>
        `
      },
      {
        title: '🗃 Sistemas de archivos',
        html: `
          <p>Cómo organiza el SO los datos en el disco. Lo vimos en almacenamiento, pero ahora con más detalle:</p>
          <table class="cozy-table">
            <thead><tr><th>FS</th><th>SO nativo</th><th>Compatibilidad</th><th>Particularidades</th></tr></thead>
            <tbody>
              <tr><td><strong>NTFS</strong></td><td>Windows</td><td>Lectura nativa en Mac/Linux. Escritura con software</td><td>Permisos avanzados, journaling, compresión, cifrado EFS</td></tr>
              <tr><td><strong>FAT32</strong></td><td>Universal</td><td>Lee y escribe TODO</td><td>Máximo 4 GB por archivo. 8 TB volumen máx.</td></tr>
              <tr><td><strong>exFAT</strong></td><td>Windows/Mac</td><td>Linux con paquete extra</td><td>Sin límite práctico de tamaño. Ideal para USBs.</td></tr>
              <tr><td><strong>APFS</strong></td><td>macOS</td><td>Solo macOS</td><td>Optimizado SSD, snapshots, cifrado nativo</td></tr>
              <tr><td><strong>HFS+</strong></td><td>macOS antiguo</td><td>Solo macOS</td><td>Pre-APFS. Aún en discos viejos Mac.</td></tr>
              <tr><td><strong>ext4</strong></td><td>Linux</td><td>Solo Linux nativo</td><td>Estándar moderno. Hasta 16 TB por archivo.</td></tr>
              <tr><td><strong>Btrfs</strong></td><td>Linux moderno</td><td>Solo Linux</td><td>Snapshots, RAID software, subvolúmenes.</td></tr>
              <tr><td><strong>ZFS</strong></td><td>BSD/Linux</td><td>Solo si tienes ZFS</td><td>Integridad de datos, checksums, deduplicación.</td></tr>
            </tbody>
          </table>
        `
      },
      {
        title: '💽 MBR vs GPT (esquemas de partición)',
        html: `
          <div class="info-grid">
            <div class="info-card">
              <h4>MBR (Master Boot Record)</h4>
              <p>Estándar de los años 80. Reserva el primer sector (sector 0) para el gestor de arranque y tabla de particiones.</p>
              <ul>
                <li>Máximo 4 particiones primarias.</li>
                <li>Si quieres más: 1 extendida con varias lógicas.</li>
                <li>Discos hasta 2 TB.</li>
                <li>Compatible con BIOS legacy.</li>
              </ul>
            </div>
            <div class="info-card">
              <h4>GPT (GUID Partition Table)</h4>
              <p>Moderno. Parte del estándar UEFI.</p>
              <ul>
                <li>Hasta 128 particiones por disco.</li>
                <li>Discos hasta 9,4 ZB.</li>
                <li>Cada partición tiene un GUID único.</li>
                <li>Múltiples copias de la tabla para redundancia.</li>
                <li>Necesario para arrancar Windows 11.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: '🔐 Cifrado: BitLocker, FileVault, LUKS',
        html: `
          <ul>
            <li><strong>BitLocker (Windows Pro/Enterprise):</strong> cifra unidades completas. Usa TPM para descifrar al arrancar.</li>
            <li><strong>FileVault (macOS):</strong> cifrado de disco con clave del usuario.</li>
            <li><strong>LUKS (Linux):</strong> cifrado a nivel de partición. Configurable durante instalación.</li>
            <li><strong>VeraCrypt:</strong> multiplataforma, gratuito. Sucesor de TrueCrypt.</li>
          </ul>
        `
      },
      {
        title: '🪟 Activación de Windows: licencias',
        html: `
          <p>Microsoft vende Windows con varias modalidades:</p>
          <ul>
            <li><strong>OEM:</strong> ligada al PC donde se instaló por primera vez. Si cambias placa, pierdes la licencia.</li>
            <li><strong>Retail:</strong> transferible. Puedes desactivar de un PC y activar en otro.</li>
            <li><strong>Volume / KMS:</strong> empresas y centros educativos. Activación masiva.</li>
            <li><strong>Digital (cuenta Microsoft):</strong> moderna. La licencia queda en la cuenta de Microsoft.</li>
          </ul>
          <div class="warning-box"><span class="box-icon">⚠️</span><div><div class="box-title">KMSPico y similares</div>Activadores piratas. Suelen contener malware. Microsoft puede detectarlos. <strong>Igor no recomienda piratería</strong>: una licencia OEM cuesta menos de 20€ en sitios legales como Kinguin/G2A/ENEBA.</div></div>
        `
      }
    ],
    igor: 'Igor te lo recuerda: "Linux no muerde". Una distro como Linux Mint o Pop!_OS es perfectamente usable para ofimática y navegación. Y es 100% gratis y legal.',
    secrets: [
      '<strong>Windows Subsystem for Linux (WSL2)</strong> permite correr Linux dentro de Windows con buen rendimiento. Ideal para programadores que necesitan herramientas de Linux sin abandonar Windows.',
      'macOS y Linux usan <strong>permisos POSIX</strong> (rwx para owner/group/others). Windows usa <strong>ACL (Access Control Lists)</strong> más complejas.',
      '<strong>ReactOS</strong> es un proyecto open source que pretende ser 100% compatible con Windows pero libre. Lleva 20 años en desarrollo y aún en alpha. Pero funciona.'
    ],
    tips: [
      'Para empezar con Linux sin miedo: prueba <strong>Linux Mint</strong> o <strong>Pop!_OS</strong>. Interfaz familiar y todo "just works".',
      'NTFS no es compatible 100% con macOS para escritura. Si compartes disco Win/Mac, formatea en <strong>exFAT</strong>.',
      'Para clonar disco antes de cambiar SO: Macrium Reflect Free (Windows), Carbon Copy Cloner (Mac), <code>dd</code> (Linux).'
    ],
    mistakes: [
      'Formatear el disco equivocado al instalar SO. Lee tres veces el número de disco antes de pulsar "Aceptar".',
      'Instalar Windows en MBR cuando tu placa solo soporta UEFI puro. Resultado: no arranca.',
      'Pensar que "formatear" elimina datos definitivamente. Solo borra la tabla. Programas como Recuva pueden recuperar mucho. Usa "borrado seguro" si vendes el PC.'
    ]
  },

  /* ============== WINDOWS ============== */
  'windows': {
    intro: 'Windows: el sistema operativo más usado del mundo. Conocido por sus actualizaciones eternas, BSOD legendarios y por preguntarte "¿Quieres reiniciar ahora?" justo cuando estás guardando algo importante.',
    blocks: [
      {
        title: '📥 Crear USB booteable de Windows',
        html: `
          <p>Pasos:</p>
          <ol>
            <li>Descarga la <strong>Media Creation Tool</strong> oficial desde microsoft.com.</li>
            <li>O usa <strong>Rufus</strong> con una ISO de Windows.</li>
            <li>Selecciona "Crear medios de instalación" o el USB en Rufus.</li>
            <li>Elige el USB (mínimo 8 GB) y el formato:
              <ul>
                <li>UEFI + GPT: para placas modernas (recomendado).</li>
                <li>BIOS + MBR (Legacy): solo si tu PC es antiguo.</li>
              </ul>
            </li>
            <li>Espera 10-30 minutos.</li>
          </ol>
        `
      },
      {
        title: '🚀 Instalación paso a paso',
        html: `
          <ol>
            <li>Entra a BIOS, cambia el <strong>Boot Priority</strong> al USB.</li>
            <li>Reinicia. Pulsa una tecla para arrancar desde USB.</li>
            <li>Elige idioma y región.</li>
            <li>Acepta términos.</li>
            <li>Selecciona "Instalación personalizada".</li>
            <li>Elige la unidad y formatéala (si es un disco nuevo).</li>
            <li>Espera mientras instala (~20-40 min).</li>
            <li>Configura usuario, contraseña y opciones de privacidad.</li>
            <li>Instala drivers (especialmente GPU).</li>
            <li>Actualiza Windows.</li>
          </ol>
        `
      },
      {
        title: '⚙️ Versiones de Windows 11',
        html: `
          <table class="cozy-table">
            <thead><tr><th>Edición</th><th>Para quién</th><th>RAM máx</th></tr></thead>
            <tbody>
              <tr><td>Home</td><td>Usuario doméstico</td><td>128 GB</td></tr>
              <tr><td>Pro</td><td>Profesional, BitLocker, Hyper-V</td><td>2 TB</td></tr>
              <tr><td>Enterprise</td><td>Empresas</td><td>6 TB</td></tr>
              <tr><td>Education</td><td>Centros educativos</td><td>2 TB</td></tr>
              <tr><td>Pro for Workstations</td><td>Workstations</td><td>6 TB</td></tr>
            </tbody>
          </table>
        `
      },
      {
        title: '🖥 CMD y PowerShell',
        html: `
          <p><strong>CMD (Command Prompt):</strong> la consola clásica desde DOS. Comandos sencillos, sintaxis vieja.</p>
          <p><strong>PowerShell:</strong> moderna, basada en .NET. Orientada a objetos, scripts potentes.</p>
          <h4>Comandos útiles CMD:</h4>
          <div class="code-block">ipconfig          <span class="com">// Info de red</span>
ipconfig /all     <span class="com">// Info detallada</span>
ipconfig /flushdns <span class="com">// Limpia caché DNS</span>
ping google.com   <span class="com">// Probar conectividad</span>
tracert google.com <span class="com">// Ruta hasta destino</span>
nslookup dominio  <span class="com">// Resuelve DNS</span>
netstat -ano      <span class="com">// Conexiones activas</span>
sfc /scannow      <span class="com">// Repara archivos sistema</span>
chkdsk C: /f      <span class="com">// Comprueba disco</span>
shutdown /s /t 0  <span class="com">// Apagar</span>
shutdown /r /t 0  <span class="com">// Reiniciar</span>
tasklist          <span class="com">// Procesos en ejecución</span>
taskkill /F /PID 1234 <span class="com">// Mata proceso por PID</span>
systeminfo        <span class="com">// Info del sistema</span>
dir               <span class="com">// Lista archivos</span>
cd carpeta        <span class="com">// Cambiar directorio</span></div>
          <h4>Comandos útiles PowerShell:</h4>
          <div class="code-block">Get-Process               <span class="com">// Lista procesos</span>
Stop-Process -Id 1234     <span class="com">// Mata proceso</span>
Get-Service               <span class="com">// Lista servicios</span>
Get-Help comando          <span class="com">// Ayuda</span>
Get-ChildItem             <span class="com">// Equivalente a dir/ls</span>
Test-NetConnection sitio  <span class="com">// Tipo ping mejorado</span></div>
        `
      },
      {
        title: '🚀 Optimización: hacer Windows más rápido',
        html: `
          <ul>
            <li><strong>msconfig</strong> → pestaña <strong>Inicio</strong>: deshabilita programas que arrancan con Windows.</li>
            <li><strong>Liberador de espacio en disco</strong> → elimina archivos temporales.</li>
            <li><strong>Win + R → %temp%</strong> → borrar contenido carpeta de temporales.</li>
            <li><strong>cmd como administrador → <code>del /q/f/s %temp%\\*</code></strong>.</li>
            <li>Desactivar efectos visuales: <strong>Sistema → Avanzado → Rendimiento → Ajustes</strong>.</li>
            <li>Desactivar telemetría innecesaria.</li>
            <li>Aplicaciones de limpieza: <strong>CCleaner</strong> (polémico, mejor uso manual).</li>
            <li><strong>Windows Update</strong>: instala todas las actualizaciones de seguridad.</li>
          </ul>
        `
      },
      {
        title: '🔐 BitLocker',
        html: `
          <p>Cifrado de unidad incluido en Windows Pro/Enterprise. Pasos:</p>
          <ol>
            <li>Menú Inicio → buscar "BitLocker" → "Administrar BitLocker".</li>
            <li>Elegir unidad (ej. C:).</li>
            <li>"Activar BitLocker".</li>
            <li>Windows comprueba TPM. Si no hay TPM, opción de contraseña o USB.</li>
            <li><strong>Guarda la clave de recuperación</strong> en cuenta Microsoft, USB o imprime.</li>
            <li>Elige modo: solo espacio usado (más rápido) o disco completo (más seguro).</li>
            <li>Reinicia y comienza el cifrado.</li>
          </ol>
          <div class="warning-box"><span class="box-icon">⚠️</span><div><div class="box-title">Cuidado</div>Si pierdes la clave de recuperación Y el TPM falla, tus datos están perdidos. Para SIEMPRE. Guárdala en sitio seguro.</div></div>
        `
      },
      {
        title: '🛡 Sysmon (System Monitor)',
        html: `
          <p>Herramienta gratuita de Microsoft Sysinternals para monitorización avanzada del sistema. Detecta:</p>
          <ul>
            <li>Quién lanza cada proceso.</li>
            <li>Conexiones de red salientes.</li>
            <li>Cambios en registro.</li>
            <li>Creación de archivos.</li>
            <li>Carga de DLLs.</li>
          </ul>
          <p>Instalación:</p>
          <ol>
            <li>Descarga Sysmon desde <em>learn.microsoft.com/en-us/sysinternals/downloads/sysmon</em>.</li>
            <li>Descarga la configuración XML de SwiftOnSecurity en GitHub.</li>
            <li>Ejecuta: <code>sysmon -accepteula -i sysmonconfig.xml</code>.</li>
            <li>Los eventos van al Visor de Eventos → Aplicaciones y Servicios → Microsoft → Windows → Sysmon.</li>
          </ol>
        `
      }
    ],
    igor: '"Chotto matte, kudasai" — Igor.<br>Igor sugiere: si tu Windows va lento tras 2 años, no es por viejo: es por toda la basura acumulada. Una reinstalación limpia hace milagros.',
    secrets: [
      '<strong>Windows 11 24H2</strong> (lanzado finales 2024) trae <strong>Copilot+ AI</strong> integrado en barra de tareas. Funciones como Recall (capturas continuas) generaron polémica por privacidad.',
      'Existe <strong>Windows IoT LTSC</strong>: versión sin actualizaciones de funciones durante 10 años. Estable, ligera, ideal para PCs viejos o industriales.',
      '<strong>Tiny11</strong> y similares son ISOs comunitarias que eliminan bloatware de Windows 11. Ocupan ~5 GB en lugar de ~20 GB. No oficiales pero funcionan.'
    ],
    tips: [
      'Win + V: abre el historial del portapapeles. Win + .: emojis. Win + Shift + S: captura de pantalla parcial.',
      'Pin programas frecuentes a la barra. Más rápido que buscarlos cada vez.',
      'Si Windows no arranca: arrancar en modo seguro pulsando F8 o desde "Inicio avanzado" tras 3 reinicios fallidos.'
    ],
    mistakes: [
      'Instalar drivers desde sitios random. Siempre usa la web oficial del fabricante (NVIDIA, AMD, Intel, fabricante de placa).',
      'Tener antivirus de terceros + Windows Defender activos simultáneamente. Se pisan y ralentizan el sistema.',
      'No hacer backups antes de actualizaciones grandes. Las "feature updates" pueden tener bugs serios.'
    ]
  },

  /* ============== VIRTUALBOX ============== */
  'virtualbox': {
    intro: 'La <strong>virtualización</strong> permite ejecutar un sistema operativo dentro de otro. VirtualBox es el más popular gratuito. Útil para probar sistemas, instalar software dudoso o crear laboratorios.',
    blocks: [
      {
        title: '🎁 Beneficios de virtualizar',
        html: `
          <ul>
            <li>Probar varios SOs sin reinstalar tu PC.</li>
            <li>Probar software peligroso en entorno aislado (sandbox).</li>
            <li>Aprender Linux, Windows Server, etc. sin riesgo.</li>
            <li>Snapshots: vuelves a estados anteriores en segundos.</li>
            <li>Práctico para desarrollo: crear entornos limpios.</li>
            <li>Simular redes complejas (varias máquinas comunicándose).</li>
          </ul>
        `
      },
      {
        title: '📦 Instalación de VirtualBox',
        html: `
          <ol>
            <li>Descarga desde <em>virtualbox.org</em>.</li>
            <li>Instala con opciones por defecto.</li>
            <li>Descarga el <strong>Extension Pack</strong> (mismo sitio).</li>
            <li>En VirtualBox: <em>Archivo → Preferencias → Extensiones → +</em> y añadir el pack.</li>
            <li>El pack habilita USB 2.0/3.0, RDP, cifrado de disco, PXE boot.</li>
          </ol>
        `
      },
      {
        title: '🖥 Crear una máquina virtual',
        html: `
          <ol>
            <li>Click en "Nueva".</li>
            <li>Nombre + tipo de SO (Windows, Linux, etc).</li>
            <li>Asigna RAM (al menos 2 GB para Windows 10; 4 GB recomendado).</li>
            <li>Crea un <strong>disco duro virtual</strong> tipo VDI:
              <ul>
                <li><strong>Reservado dinámicamente:</strong> crece a demanda. Más lento pero ahorra espacio.</li>
                <li><strong>Tamaño fijo:</strong> reserva todo desde el inicio. Más rápido.</li>
              </ul>
            </li>
            <li>Configura: número de CPUs, almacenamiento (montar ISO), red.</li>
            <li>Inicia. Instala el SO.</li>
          </ol>
        `
      },
      {
        title: '🌐 Modos de red en VirtualBox',
        html: `
          <table class="cozy-table">
            <thead><tr><th>Modo</th><th>Comportamiento</th><th>Uso</th></tr></thead>
            <tbody>
              <tr><td>NAT</td><td>VM accede a internet a través del host. Aislada del exterior.</td><td>Por defecto, navegar desde VM.</td></tr>
              <tr><td>Red NAT</td><td>Como NAT pero varias VMs comparten red entre sí.</td><td>Lab interno.</td></tr>
              <tr><td>Adaptador puente</td><td>VM aparece en la LAN como un PC real. Con IP propia.</td><td>Servicios accesibles desde otros PCs.</td></tr>
              <tr><td>Red interna</td><td>VMs solo se ven entre sí. Sin acceso a host ni internet.</td><td>Laboratorios totalmente aislados.</td></tr>
              <tr><td>Solo anfitrión</td><td>VM ↔ host. Sin internet.</td><td>Debug, conexión directa.</td></tr>
            </tbody>
          </table>
        `
      },
      {
        title: '📸 Snapshots',
        html: `
          <p>Estado guardado de la VM. Permiten volver atrás si algo sale mal.</p>
          <p>Casos de uso:</p>
          <ul>
            <li>Antes de instalar software dudoso.</li>
            <li>Antes de probar configuraciones experimentales.</li>
            <li>Para tener "puntos de control" en una práctica larga.</li>
          </ul>
          <p>Botón derecho en la VM → "Tomar instantánea". Para restaurar: "Restaurar instantánea".</p>
        `
      },
      {
        title: '💿 Crear discos duros adicionales',
        html: `
          <p>Para añadir un segundo disco a una VM:</p>
          <ol>
            <li>Apaga la VM.</li>
            <li><em>Configuración → Almacenamiento → Añadir disco duro</em>.</li>
            <li>Crear nuevo (.vdi) o usar existente.</li>
            <li>Arranca la VM.</li>
            <li>En Windows: <strong>Win+X → Administrador de discos</strong>. Inicializa y formatea.</li>
            <li>El nuevo disco aparece como D: o lo que asignes.</li>
          </ol>
        `
      }
    ],
    igor: '"Volvemos a encontrarnos Sr. Anderson" — Igor.<br>VirtualBox es ideal para "encender almenaras de Gondor" (montar redes complejas) sin gastar en hardware extra.',
    secrets: [
      '<strong>VMware Workstation Player</strong> es la alternativa gratuita comercial. Más estable y rápida que VirtualBox para Windows pero más limitada en features avanzadas.',
      '<strong>Hyper-V</strong> viene incluido en Windows Pro/Enterprise. Es de nivel "tipo 1" (más eficiente). Compite con VirtualBox para uso doméstico.',
      '<strong>Proxmox VE</strong> es la opción enterprise gratuita. Basado en Linux + KVM + LXC. Imprescindible si te dedicas a virtualización profesional.'
    ],
    tips: [
      'Si tu VM va lenta, dale más núcleos de CPU (en config) y activa <strong>aceleración 3D</strong>.',
      'Habilita virtualización en BIOS (VT-x para Intel, AMD-V para AMD). Sin ello, VirtualBox usa solo software (lentísimo).',
      'Las <strong>Guest Additions</strong> mejoran la integración: cursor compartido, redimensionamiento dinámico, portapapeles común.'
    ],
    mistakes: [
      'No asignar suficiente RAM a la VM y luego asignar también poca al host. Windows host se queda sin memoria y todo se congela.',
      'Apagar la VM con "X" en lugar de apagar correctamente. Como apagar un PC tirando el cable: corrupción de datos posible.',
      'Olvidar instalar el Extension Pack y no entender por qué los USBs del host no se ven en la VM.'
    ]
  },

  /* ============== MONTAJE ============== */
  'montaje': {
    intro: 'Montar un PC es como un Lego para adultos. Cada pieza tiene su sitio y solo encaja de una manera. Si forzas, rompes. Si vas tranquilo, todo va bien.',
    blocks: [
      {
        title: '🛡 Antes de empezar',
        html: `
          <ul>
            <li>Espacio limpio, bien iluminado. NO sobre alfombra.</li>
            <li>Pulsera antiestática o toca un radiador antes de manipular.</li>
            <li>Destornillador imantado Phillips #2.</li>
            <li>Manual de la placa base SIEMPRE a mano.</li>
            <li>Linterna del móvil cerca.</li>
            <li>Buena paciencia. Esto no es una carrera.</li>
          </ul>
        `
      },
      {
        title: '📋 Orden de montaje (paso a paso)',
        html: `
          <ol>
            <li><strong>CPU en la placa base:</strong> abre el socket, alinea la flecha de la CPU con la flecha del socket. Suéltala, NO la presiones. Cierra el retentor.</li>
            <li><strong>RAM:</strong> abre las pestañas del slot. Mira la muesca. Inserta firmemente hasta que las pestañas se cierren con clic. Slots A2 y B2 para 2 módulos (revisa manual).</li>
            <li><strong>SSD M.2:</strong> retira el disipador del slot M.2. Inserta el SSD en ángulo 30°. Aprieta con el tornillo (o sistema sin tornillo de las placas modernas).</li>
            <li><strong>Disipador CPU:</strong> aplica pasta térmica (guisante). Coloca disipador. Aprieta tornillos en cruz, gradualmente. Conecta CPU_FAN.</li>
            <li><strong>Placa al chasis:</strong> coloca los standoffs (separadores) en la caja. Atornilla la placa al chasis.</li>
            <li><strong>Fuente al chasis:</strong> atornilla la PSU. Conecta cables ATX 24-pin y EPS 8-pin (CPU).</li>
            <li><strong>Almacenamiento SATA:</strong> SSDs/HDDs en los soportes. Conecta SATA + alimentación.</li>
            <li><strong>GPU:</strong> retira tapa PCIe del chasis. Inserta GPU en PCIe x16 superior. Atornilla al chasis. Conecta cables PCIe/12VHPWR.</li>
            <li><strong>Cableado frontal:</strong> Power SW, Reset SW, HDD LED, Power LED. Esto es lo más fastidioso. Usa el manual.</li>
            <li><strong>Ventiladores del chasis</strong> a los headers SYS_FAN.</li>
            <li><strong>Cable management:</strong> usa bridas para ordenar por detrás. Aire fluye mejor.</li>
            <li><strong>Verificación:</strong> revisa que TODO está conectado. Especialmente EPS de CPU.</li>
            <li><strong>Primer arranque:</strong> conecta cable de la pared y enciende. Si arranca, entra a BIOS.</li>
          </ol>
        `
      },
      {
        title: '💡 Truco: prueba fuera del chasis',
        html: `
          <p>Antes de meter todo en la caja, monta sobre la caja de la placa (con CPU, RAM, GPU, fuente conectada) y enciende cortocircuitando los pines POWER_SW con un destornillador.</p>
          <p>Si arranca, todo bien. Si no, depuras sin tener que desmontar todo de la caja.</p>
        `
      },
      {
        title: '🔌 Conectores frontal (F_PANEL)',
        html: `
          <p>Los más confusos. El manual los identifica con polaridad (+/-):</p>
          <ul>
            <li><strong>Power SW:</strong> botón de encendido. No tiene polaridad.</li>
            <li><strong>Reset SW:</strong> botón de reset. Sin polaridad.</li>
            <li><strong>Power LED:</strong> CON polaridad. + va al pin marcado.</li>
            <li><strong>HDD LED:</strong> CON polaridad.</li>
            <li><strong>Speaker:</strong> bocina interna (no todos los chasis la tienen).</li>
          </ul>
        `
      }
    ],
    igor: 'Igor lo dice: "lo más importante al montar un PC es la paciencia". Y un destornillador imantado: si se te cae un tornillo dentro de la fuente, te toca desarmar todo.',
    secrets: [
      'Algunas placas modernas tienen <strong>tooless M.2</strong>: para instalar un SSD M.2 no necesitas tornillos, solo un sistema de clips. Quita estrés y tornillos perdidos.',
      'Las placas premium incluyen <strong>"Q-Connector"</strong>: un adaptador que agrupa todos los pines del F_PANEL para que los conectes de golpe.',
      'Algunos chasis modernos incluyen <strong>BTF (Back-To-Front)</strong>: todos los conectores van por detrás de la placa. Resultado: cero cables visibles en el cristal frontal.'
    ],
    tips: [
      'Toma fotos antes de desconectar cualquier cosa en un PC viejo. Te servirán para volver a montarlo.',
      'Guarda los tornillos en compartimentos pequeños o cajas de huevos. Distintos por tamaño.',
      'Compra una bolsa con varios tornillos M3 antes de montar. Siempre falta uno o dos.'
    ],
    mistakes: [
      'Forzar la CPU en el socket. Si no entra, NO ESTÁ ALINEADA. Para. Comprueba.',
      'Olvidar quitar el plástico protector del disipador de la CPU o GPU. Resultado: temperaturas absurdas.',
      'Montar antes de probar componentes. Si la placa está muerta, lo descubres a las 3 horas.'
    ]
  },

  /* ============== DIAGNÓSTICO ============== */
  'diagnostico': {
    intro: 'Tu PC no arranca. Tu PC arranca pero no muestra imagen. Tu PC arranca, muestra imagen pero da BSOD. Cada síntoma tiene causas y soluciones. Vamos a aprender a diagnosticar.',
    blocks: [
      {
        title: '🔍 El PC no enciende en absoluto',
        html: `
          <ul>
            <li>Comprueba el cable de la pared y el interruptor trasero de la fuente.</li>
            <li>Mira que el cable ATX 24-pin esté conectado a fondo.</li>
            <li>Comprueba el botón Power_SW del frontal: a veces se desconecta.</li>
            <li>Prueba a hacer un puente de los pines Power_SW con un destornillador.</li>
            <li>Si tienes otra fuente, pruébala.</li>
            <li>Si los ventiladores giran un segundo y se paran: posible cortocircuito.</li>
          </ul>
        `
      },
      {
        title: '🖥 Enciende pero no da imagen',
        html: `
          <p>El más frustrante. Posibles causas:</p>
          <ol>
            <li><strong>RAM mal puesta:</strong> reasienta los módulos. Prueba con un solo módulo en slot A2.</li>
            <li><strong>Cable de video mal:</strong> HDMI/DP suelto.</li>
            <li><strong>Monitor en input incorrecto:</strong> revisa source del monitor.</li>
            <li><strong>Cable de monitor en la placa (en lugar de GPU):</strong> si tienes GPU dedicada, conecta a sus salidas, NO a la placa.</li>
            <li><strong>BIOS necesita update:</strong> CPU nueva en placa con BIOS antigua.</li>
            <li><strong>GPU mal puesta:</strong> reasienta. Verifica cable de alimentación PCIe.</li>
            <li><strong>EPS de CPU no conectado:</strong> el clásico. Sin EPS, CPU no arranca.</li>
          </ol>
        `
      },
      {
        title: '🔊 Códigos POST (beeps y LEDs)',
        html: `
          <p>Si tu placa tiene altavoz o display Q-Code, los pitidos y códigos indican el problema:</p>
          <table class="cozy-table">
            <thead><tr><th>Códigos (genérico AMI/Award)</th><th>Significado</th></tr></thead>
            <tbody>
              <tr><td>1 pitido corto</td><td>Sistema OK</td></tr>
              <tr><td>2 pitidos cortos</td><td>Error de paridad de RAM</td></tr>
              <tr><td>3 pitidos cortos</td><td>Error en primeros 64 KB de RAM</td></tr>
              <tr><td>5 pitidos cortos</td><td>Error de CPU</td></tr>
              <tr><td>1 largo + 2 cortos</td><td>Error de gráfica</td></tr>
              <tr><td>1 largo + 3 cortos</td><td>Error de VRAM/gráfica</td></tr>
              <tr><td>Continuos</td><td>Sobrecalentamiento o problema de fuente</td></tr>
            </tbody>
          </table>
          <p>Placas modernas tienen <strong>LEDs de debug</strong>: CPU, DRAM, VGA, BOOT. El que queda iluminado indica el problema.</p>
        `
      },
      {
        title: '💀 Pantallazos azules (BSOD)',
        html: `
          <p>Cada BSOD tiene un código que indica el origen:</p>
          <ul>
            <li><strong>MEMORY_MANAGEMENT:</strong> RAM defectuosa o mal asentada. Prueba con <em>mdsched.exe</em> (Diagnóstico de memoria de Windows).</li>
            <li><strong>SYSTEM_THREAD_EXCEPTION_NOT_HANDLED:</strong> driver problemático. Suele ser GPU.</li>
            <li><strong>IRQL_NOT_LESS_OR_EQUAL:</strong> driver o controlador hardware.</li>
            <li><strong>WHEA_UNCORRECTABLE_ERROR:</strong> error de CPU. Posible overclock fallido.</li>
            <li><strong>KMODE_EXCEPTION_NOT_HANDLED:</strong> driver mal escrito o módulo del kernel.</li>
            <li><strong>CRITICAL_PROCESS_DIED:</strong> archivos del sistema corruptos. Prueba <code>sfc /scannow</code>.</li>
            <li><strong>INACCESSIBLE_BOOT_DEVICE:</strong> Windows no encuentra el disco. Mal modo SATA en BIOS, disco fallando, o configuración de RAID/AHCI cambiada.</li>
          </ul>
        `
      },
      {
        title: '🐌 Cuellos de botella',
        html: `
          <p>Un cuello de botella ("bottleneck") es cuando un componente limita el rendimiento de otros más potentes.</p>
          <p>Síntomas y diagnóstico:</p>
          <ul>
            <li><strong>CPU al 100%, GPU al 50%:</strong> CPU es el cuello. Soluciones: subir RAM, mejorar CPU, bajar resolución (paradójicamente carga CPU menos).</li>
            <li><strong>GPU al 99%, CPU al 30%:</strong> GPU es el cuello. Normal y deseable en gaming.</li>
            <li><strong>RAM al 90%+:</strong> falta RAM. Compra más.</li>
            <li><strong>SSD al 100% en HDD:</strong> tu HDD principal está agonizando. Cambia a SSD.</li>
          </ul>
          <p>Herramientas: <strong>MSI Afterburner</strong> + <strong>Rivatuner Statistics Server</strong> para overlay en juegos. <strong>HWInfo</strong> para datos detallados.</p>
        `
      }
    ],
    igor: 'Igor lo sabe: "lo que más se aprende cuando un PC falla". Cada avería que diagnostiques te hará 10 veces mejor técnico. La frustración es parte del proceso.',
    secrets: [
      'Los <strong>Q-Codes</strong> de placas premium muestran códigos hexadecimales con significado preciso. "00" = OK, "55" = no detecta RAM, "A0" = problema con periférico. Cada fabricante tiene su lista.',
      '<strong>Memtest86+</strong> es la herramienta definitiva para testear RAM. Se ejecuta desde USB sin SO. Si pasa varias pasadas, tu RAM es 100% estable.',
      'Las placas modernas tienen <strong>"Safe Boot"</strong>: si el sistema no arranca 3 veces seguidas, la BIOS se reinicia a valores conservadores automáticamente.'
    ],
    tips: [
      'Antes de gritar "está rota", desconecta y reconecta TODO. El 30% de los problemas son cables sueltos.',
      'Mantén un USB con utilidades: Memtest86+, Hiren\'s BootCD PE, Rescatux. Te salvan en emergencias.',
      'Documenta tus síntomas claramente para pedir ayuda en foros. "No funciona" no es un síntoma; "BSOD MEMORY_MANAGEMENT tras 5 minutos de uso intenso" sí lo es.'
    ],
    mistakes: [
      'Cambiar 5 cosas a la vez. Si un cambio funciona, no sabrás cuál fue. Cambia UNA COSA a la vez.',
      'Asumir que es la placa cuando el problema es la fuente. La fuente débil causa síntomas que parecen de placa o RAM.',
      'No revisar temperaturas. Si tu CPU pasa de 95°C constantemente, throttlea y todo va lento sin BSOD evidente.'
    ]
  }

});
