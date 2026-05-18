/* ============================================
   EXERCISES — Ejercicios por módulo
   Tipos: multi (opción múltiple), tf (V/F), fill (rellenar),
          match (parejas), order (ordenar), drag (drag & drop),
          builder (construir), diagnose (diagnosticar)
   ============================================ */

const EXERCISES = {

  /* ============== UNIDADES ============== */
  'unidades': [
    {
      id: 'ex1', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Cuántos bits hay en un byte?',
      options: ['4 bits', '6 bits', '8 bits', '16 bits'],
      correct: 2,
      hint: 'Un byte es un grupo de bits que permite 256 valores distintos.',
      explanation: 'Un byte = 8 bits. Con 8 bits puedes representar 2⁸ = 256 valores diferentes, suficiente para guardar un carácter ASCII.'
    },
    {
      id: 'ex2', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Qué unidad es MAYOR?',
      options: ['1 GB', '1024 MB', 'Son iguales', 'Depende del sistema'],
      correct: 2,
      hint: '1 GB = 1024 MB exactamente en sistema binario.',
      explanation: '1 GB = 1024 MB. Por tanto son IGUALES en sistema binario. En sistema decimal hay pequeñas diferencias pero por convención son lo mismo.'
    },
    {
      id: 'ex3', type: 'tf', difficulty: 'basic', points: 15,
      prompt: 'Una conexión de 400 Mbps te permite descargar a 400 MB/s.',
      correct: false,
      hint: 'Recuerda: 1 byte = 8 bits.',
      explanation: 'FALSO. 400 Mbps son MEGABITS por segundo. Para pasar a MEGABYTES: 400 / 8 = 50 MB/s. ¡Cuidado con la b minúscula vs B mayúscula!'
    },
    {
      id: 'ex4', type: 'fill', difficulty: 'medium', points: 20,
      prompt: 'Convierte 2048 MB a GB:',
      correct: '2',
      acceptedAnswers: ['2', '2 gb', '2gb', '2.0', '2,0'],
      hint: 'Divide entre 1024.',
      explanation: '2048 MB ÷ 1024 = 2 GB. Para bajar de unidad divides entre 1024.'
    },
    {
      id: 'ex5', type: 'fill', difficulty: 'medium', points: 20,
      prompt: 'Si tu archivo pesa 1.5 GB, ¿cuántos MB son? (solo número)',
      correct: '1536',
      acceptedAnswers: ['1536', '1536 mb', '1536mb'],
      hint: 'Multiplica por 1024.',
      explanation: '1.5 × 1024 = 1536 MB. Para subir de unidad multiplicas por 1024.'
    },
    {
      id: 'ex6', type: 'multi', difficulty: 'medium', points: 20,
      prompt: 'Compras un disco etiquetado como "1 TB". ¿Qué tamaño verás aproximadamente en Windows?',
      options: ['1 TB exactos', '~931 GB', '~1024 GB', '~1100 GB'],
      correct: 1,
      hint: 'Fabricantes usan base decimal, Windows base binaria.',
      explanation: '~931 GB. Los fabricantes cuentan 1 TB = 10¹² bytes (decimal). Windows lo divide entre 2⁴⁰ (binario), resultando en ~931 GB.'
    },
    {
      id: 'ex7', type: 'order', difficulty: 'basic', points: 15,
      prompt: 'Ordena de menor a mayor:',
      items: ['Bit', 'Byte', 'KB', 'MB', 'GB', 'TB'],
      correctOrder: [0, 1, 2, 3, 4, 5],
      hint: 'Empieza por la unidad más pequeña.',
      explanation: 'Bit → Byte → KB → MB → GB → TB. Cada salto multiplica por 1024 (excepto bit a byte que es ×8).'
    },
    {
      id: 'ex8', type: 'match', difficulty: 'medium', points: 25,
      prompt: 'Empareja cada unidad con su símbolo:',
      pairs: [
        { left: 'Megabyte', right: 'MB' },
        { left: 'Megabit por segundo', right: 'Mbps' },
        { left: 'Gigabyte', right: 'GB' },
        { left: 'Terabyte', right: 'TB' }
      ],
      hint: 'Atención a las mayúsculas: B = Byte, b = bit.',
      explanation: 'MB y Mbps son distintos: el primero es megabytes (almacenamiento), el segundo megabits/segundo (velocidad). 1 byte = 8 bits.'
    },
    {
      id: 'ex9', type: 'multi', difficulty: 'hard', points: 30,
      prompt: 'Tu internet es de 600 Mbps. ¿Cuánto tardarías como mínimo en descargar un juego de 75 GB?',
      options: ['~20 minutos', '~17 minutos', '~10 minutos', '~5 minutos'],
      correct: 1,
      hint: 'Primero pasa Mbps a MB/s, luego calcula.',
      explanation: '600 Mbps / 8 = 75 MB/s. 75 GB = 75×1024 ≈ 76800 MB. 76800 / 75 ≈ 1024 segundos ≈ 17 minutos. ¡Pero esto es el máximo teórico!'
    },
    {
      id: 'ex10', type: 'tf', difficulty: 'medium', points: 20,
      prompt: 'Un USB de 64 GB puede guardar exactamente 64.000.000.000 bytes.',
      correct: false,
      hint: 'Misma trampa que los discos duros.',
      explanation: 'FALSO. El fabricante etiqueta en base decimal. En Windows verás ~59.6 GB binarios reales.'
    }
  ],

  /* ============== HARDWARE ============== */
  'hardware': [
    {
      id: 'ex1', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Cuál de estos NO es hardware?',
      options: ['Disco duro', 'Ratón', 'Microsoft Word', 'Tarjeta gráfica'],
      correct: 2,
      hint: 'Si lo pateas y no duele, es software.',
      explanation: 'Microsoft Word es SOFTWARE (programa). Los otros tres son hardware: piezas físicas que puedes tocar.'
    },
    {
      id: 'ex2', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Qué tipo de hardware es una fuente de alimentación?',
      options: ['Electromecánico', 'Eléctrico', 'Mecánico', 'Electrónico'],
      correct: 1,
      hint: 'Convierte corriente alterna en continua.',
      explanation: 'Eléctrico. La fuente convierte AC (pared) en DC (PC). Aunque tiene componentes electrónicos, su función principal es eléctrica.'
    },
    {
      id: 'ex3', type: 'tf', difficulty: 'basic', points: 15,
      prompt: 'En un portátil moderno se puede cambiar la CPU igual que en un sobremesa.',
      correct: false,
      hint: 'Los portátiles tienen casi todo soldado.',
      explanation: 'FALSO. En la mayoría de portátiles modernos la CPU está soldada (BGA). Solo se puede cambiar RAM (no siempre), SSD y batería.'
    },
    {
      id: 'ex4', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Cuál de estos es un ordenador "single board computer"?',
      options: ['Intel NUC', 'Raspberry Pi', 'iMac', 'MSI Stealth'],
      correct: 1,
      hint: 'Tamaño tarjeta de crédito, una sola placa.',
      explanation: 'Raspberry Pi. Es un ordenador completo en una placa del tamaño de una tarjeta. El NUC es un Mini PC; el iMac un AIO; el MSI Stealth un portátil.'
    },
    {
      id: 'ex5', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué tipo de software es un driver?',
      options: ['Aplicación', 'Sistema', 'Programación', 'Firmware'],
      correct: 1,
      hint: 'Comunica el SO con el hardware.',
      explanation: 'Software de sistema. Los drivers son intermediarios entre el SO y el hardware. Sin ellos, el SO no sabe usar la GPU, impresora, etc.'
    },
    {
      id: 'ex6', type: 'match', difficulty: 'medium', points: 25,
      prompt: 'Empareja el tipo de ordenador con su descripción:',
      pairs: [
        { left: 'Sobremesa', right: 'Modular, torre + monitor' },
        { left: 'Portátil', right: 'Todo integrado, batería' },
        { left: 'Servidor', right: 'Funciona 24/7, sin GPU' },
        { left: 'Workstation', right: 'Trabajo profesional pesado' }
      ],
      hint: 'Piensa en el uso típico de cada uno.',
      explanation: 'Cada uno tiene un propósito específico. Un servidor prioriza estabilidad; un workstation, potencia; un portátil, movilidad; un sobremesa, balance y mejorabilidad.'
    },
    {
      id: 'ex7', type: 'tf', difficulty: 'basic', points: 15,
      prompt: 'La "torre" del PC es la CPU.',
      correct: false,
      hint: 'CPU = Central Processing Unit, el procesador.',
      explanation: 'FALSO. La CPU es solo el procesador (un chip pequeño). La torre/caja/chasis es donde van TODOS los componentes incluyendo la CPU.'
    },
    {
      id: 'ex8', type: 'multi', difficulty: 'hard', points: 30,
      prompt: 'Una empresa quiere un servidor para almacenamiento corporativo. ¿Qué NO debería ser prioritario?',
      options: ['ECC RAM', 'Redundancia (RAID)', 'GPU RTX 4090', 'Fuente con respaldo SAI'],
      correct: 2,
      hint: 'Los servidores no juegan al Fortnite.',
      explanation: 'GPU RTX 4090. Los servidores priorizan ECC RAM (corrige errores), RAID (redundancia) y SAI (continuidad). No necesitan GPU dedicada potente.'
    },
    {
      id: 'ex9', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué es el firmware?',
      options: ['Hardware barato', 'Software dentro del hardware', 'Una marca de chips', 'El sistema operativo'],
      correct: 1,
      hint: 'BIOS y los microcontroladores son ejemplos.',
      explanation: 'Software almacenado dentro del hardware. La BIOS de la placa, el firmware del SSD, el código del microcontrolador del teclado, etc.'
    },
    {
      id: 'ex10', type: 'tf', difficulty: 'medium', points: 20,
      prompt: 'Un Mini PC tipo Intel NUC puede tener un Core i7 igual de potente que el de un sobremesa.',
      correct: true,
      hint: 'En 2025-2026 los mini PCs son potentes.',
      explanation: 'VERDADERO. Los Mini PCs modernos llevan i7/i9 reales, no versiones recortadas. Limitación: refrigeración y un solo SSD/RAM cambiable.'
    }
  ],

  /* ============== MONITORES ============== */
  'monitores': [
    {
      id: 'ex1', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Cuántos píxeles tiene una pantalla Full HD?',
      options: ['1280 × 720', '1920 × 1080', '2560 × 1440', '3840 × 2160'],
      correct: 1,
      hint: 'Full HD también se llama "1080p".',
      explanation: '1920 × 1080. Full HD = 1080p. Otros nombres: HD (720p), QHD/2K (1440p), UHD/4K (2160p).'
    },
    {
      id: 'ex2', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Qué tecnología tiene los negros más profundos?',
      options: ['LCD', 'LED', 'OLED', 'TN'],
      correct: 2,
      hint: 'Una de ellas apaga los píxeles completamente.',
      explanation: 'OLED. Cada píxel emite su propia luz, así que para mostrar negro simplemente se apaga = negro absoluto. LCD/LED/TN siempre tienen algo de retroiluminación encendida.'
    },
    {
      id: 'ex3', type: 'tf', difficulty: 'basic', points: 15,
      prompt: 'Un monitor de 144 Hz te servirá de algo si tu GPU solo consigue 40 FPS en el juego.',
      correct: false,
      hint: 'Recuerda: FPS los genera la GPU, Hz los muestra el monitor.',
      explanation: 'FALSO. Si tu GPU produce 40 FPS, solo verás 40 imágenes por segundo aunque el monitor pueda mostrar 144. El monitor solo limita por arriba.'
    },
    {
      id: 'ex4', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Cuál es el principal problema del OLED a largo plazo?',
      options: ['Consumo energético', 'Burn-in (quemado)', 'Latencia', 'Ángulos de visión'],
      correct: 1,
      hint: 'Imagen estática durante mucho tiempo.',
      explanation: 'Burn-in. Los píxeles OLED se desgastan con el uso, y elementos estáticos (logos, barras de tareas) pueden "quemarse" permanentemente con el tiempo.'
    },
    {
      id: 'ex5', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué tecnología de sincronización es de NVIDIA?',
      options: ['FreeSync', 'G-Sync', 'V-Sync', 'AdaptiveSync'],
      correct: 1,
      hint: 'G... de Geforce.',
      explanation: 'G-Sync es propietaria de NVIDIA. FreeSync es AMD (abierta). VSync es por software. AdaptiveSync es el estándar genérico de DisplayPort.'
    },
    {
      id: 'ex6', type: 'match', difficulty: 'medium', points: 25,
      prompt: 'Empareja tipo de panel LCD con su característica:',
      pairs: [
        { left: 'TN', right: 'Rápido y barato, colores limitados' },
        { left: 'IPS', right: 'Buen color y ángulos de visión' },
        { left: 'VA', right: 'Alto contraste, buenos negros' }
      ],
      hint: 'TN es el más antiguo, VA el de mejor contraste.',
      explanation: 'Cada tipo de panel tiene fortalezas: TN para esports baratos, IPS para trabajo y creación, VA para multimedia y películas.'
    },
    {
      id: 'ex7', type: 'multi', difficulty: 'hard', points: 30,
      prompt: 'Un cliente quiere un monitor para edición de fotos profesional. ¿Qué eliges?',
      options: ['TN 144 Hz 1080p', 'OLED 240 Hz 1440p', 'IPS 4K con cobertura 99% sRGB', 'VA 1080p HDR'],
      correct: 2,
      hint: 'Necesita colores precisos, no velocidad.',
      explanation: 'IPS 4K con buena cobertura de color. Para edición profesional importa la precisión cromática y resolución, no los Hz ni el contraste.'
    },
    {
      id: 'ex8', type: 'tf', difficulty: 'medium', points: 20,
      prompt: 'Un monitor con HDR400 ofrece "HDR real" como en cine.',
      correct: false,
      hint: 'HDR400 es la certificación más básica.',
      explanation: 'FALSO. HDR400 es marketing. El HDR real empieza en HDR600 o DisplayHDR True Black 400 (OLED). Por debajo es "HDR de pega".'
    },
    {
      id: 'ex9', type: 'multi', difficulty: 'hard', points: 30,
      prompt: '¿Qué tecnología combina QLED + OLED?',
      options: ['Mini-LED', 'QD-OLED', 'Micro-LED', 'Nano-LED'],
      correct: 1,
      hint: 'Quantum Dots aplicados sobre paneles OLED.',
      explanation: 'QD-OLED. Combina los negros perfectos de OLED con los colores vivos de Quantum Dots. Es la tecnología premium 2025-2026 (Samsung S95C, LG B4).'
    },
    {
      id: 'ex10', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué resolución es "UltraWide 1440p"?',
      options: ['1920 × 1080', '2560 × 1440', '3440 × 1440', '3840 × 1600'],
      correct: 2,
      hint: 'Aspecto 21:9.',
      explanation: '3440 × 1440 (21:9). El "1440p" se refiere a la altura. Es ideal para productividad y juegos inmersivos.'
    },
    {
      id: 'ex11', type: 'fill', difficulty: 'medium', points: 20,
      prompt: 'El efecto visual cuando GPU y monitor no van sincronizados se llama:',
      correct: 'tearing',
      acceptedAnswers: ['tearing', 'screen tearing'],
      hint: 'En inglés, "rasgar".',
      explanation: 'Tearing (rasgado de pantalla). Partes de fotogramas distintos aparecen solapadas. Se soluciona con G-Sync, FreeSync o VSync.'
    }
  ],

  /* ============== PERIFÉRICOS ============== */
  'perifericos': [
    {
      id: 'ex1', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Qué tipo de teclado tiene un switch independiente por cada tecla?',
      options: ['Membrana', 'Tijera', 'Mecánico', 'Capacitivo'],
      correct: 2,
      hint: 'Hace clic. Mucho clic.',
      explanation: 'Mecánico. Cada tecla tiene su propio interruptor con muelle. Por eso son tan duraderos y precisos (y a veces ruidosos).'
    },
    {
      id: 'ex2', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Cuál es la velocidad máxima de USB 3.0?',
      options: ['480 Mbps', '5 Gbps', '10 Gbps', '20 Gbps'],
      correct: 1,
      hint: 'Suele tener color azul en el conector.',
      explanation: '5 Gbps (~600 MB/s). USB 2.0 es 480 Mbps, USB 3.1 son 10 Gbps, USB 3.2 Gen 2x2 son 20 Gbps.'
    },
    {
      id: 'ex3', type: 'tf', difficulty: 'basic', points: 15,
      prompt: 'Todos los cables USB-C soportan transferencia de vídeo.',
      correct: false,
      hint: 'USB-C es solo la forma del conector.',
      explanation: 'FALSO. Hay USB-C que son solo carga, otros solo datos USB 2.0, otros con vídeo (DP Alt Mode), otros con Thunderbolt. Mira las especificaciones.'
    },
    {
      id: 'ex4', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué puerto soporta 80 Gbps en 2024?',
      options: ['USB 3.2', 'USB 4', 'USB 4 v2', 'Thunderbolt 3'],
      correct: 2,
      hint: 'Es el más nuevo.',
      explanation: 'USB 4 v2 (Thunderbolt 5 equivalente). USB 4 es 40 Gbps. TB3 es 40 Gbps. La carrera por velocidad sigue subiendo.'
    },
    {
      id: 'ex5', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué formato de teclado mantiene flechas pero quita el bloque numérico?',
      options: ['Full-size', 'TKL', '60%', '40%'],
      correct: 1,
      hint: '"Tenkeyless" = sin "ten keys" del numpad.',
      explanation: 'TKL (Tenkeyless). 87 teclas aproximadamente. Conserva todo menos el numpad: ideal para gaming porque deja más espacio al ratón.'
    },
    {
      id: 'ex6', type: 'match', difficulty: 'medium', points: 25,
      prompt: 'Empareja puerto con uso típico:',
      pairs: [
        { left: 'HDMI', right: 'Vídeo y audio en TV/monitor' },
        { left: 'DisplayPort', right: 'Vídeo PC con alta tasa de refresco' },
        { left: 'RJ45', right: 'Red por cable Ethernet' },
        { left: 'Jack 3.5mm verde', right: 'Auriculares y altavoces' }
      ],
      hint: 'Cada uno tiene su propósito principal.',
      explanation: 'HDMI es más universal; DP mejor para PC gaming; RJ45 es Ethernet; el jack verde es siempre salida de audio (auriculares).'
    },
    {
      id: 'ex7', type: 'tf', difficulty: 'medium', points: 20,
      prompt: 'Un teclado capacitivo / Hall Effect permite ajustar el punto de activación de cada tecla.',
      correct: true,
      hint: 'Usa sensores magnéticos.',
      explanation: 'VERDADERO. Los teclados Hall Effect (Wooting, SteelSeries Apex Pro) miden distancia con sensores magnéticos, permitiendo ajustar a qué profundidad activa cada tecla.'
    },
    {
      id: 'ex8', type: 'multi', difficulty: 'hard', points: 30,
      prompt: 'Tu SSD externo USB 3.1 (10 Gbps) lo conectas a un puerto USB 2.0. ¿Qué pasará?',
      options: ['Funcionará a 10 Gbps', 'Funcionará a 5 Gbps', 'Funcionará a ~480 Mbps', 'No funcionará'],
      correct: 2,
      hint: 'USB es retrocompatible pero limita por el puerto.',
      explanation: 'Funcionará a 480 Mbps (USB 2.0). USB es retrocompatible pero la velocidad cae al estándar del puerto/cable más lento. Tu SSD veloz será un caracol.'
    },
    {
      id: 'ex9', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué layout de teclado tiene la tecla Enter horizontal larga?',
      options: ['ANSI', 'ISO', 'JIS', 'KS'],
      correct: 0,
      hint: 'Es el americano.',
      explanation: 'ANSI (americano). Enter horizontal corto, sin tecla extra junto a Z. ISO (europeo) tiene Enter en forma de L invertida y tecla extra.'
    },
    {
      id: 'ex10', type: 'tf', difficulty: 'basic', points: 15,
      prompt: 'El jack rosa del PC es para el micrófono.',
      correct: true,
      hint: 'Cada color tiene su función.',
      explanation: 'VERDADERO. Estándar: verde = salida (auriculares), rosa = micro, azul = line-in, naranja = subwoofer/centro, negro = surround trasero.'
    }
  ],

  /* ============== PLACA BASE ============== */
  'placa-base': [
    {
      id: 'ex1', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Cuál es el factor de forma más grande de estos?',
      options: ['Mini-ITX', 'Micro-ATX', 'ATX', 'E-ATX'],
      correct: 3,
      hint: 'La E es de "Extended".',
      explanation: 'E-ATX (305×330 mm). Para workstations y HEDT. Le sigue ATX (305×244), Micro-ATX (244×244) y Mini-ITX (170×170, la más pequeña).'
    },
    {
      id: 'ex2', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿En qué socket van los procesadores Ryzen 7000?',
      options: ['AM4', 'AM5', 'LGA1700', 'LGA1851'],
      correct: 1,
      hint: 'Es la generación nueva de AMD.',
      explanation: 'AM5. Reemplaza al longevo AM4. Compatible con Ryzen 7000, 8000 y 9000. AMD prometió soporte AM5 hasta al menos 2027.'
    },
    {
      id: 'ex3', type: 'tf', difficulty: 'basic', points: 15,
      prompt: 'Una GPU PCIe 5.0 funciona perfectamente en una placa con slot PCIe 4.0.',
      correct: true,
      hint: 'PCIe es retrocompatible.',
      explanation: 'VERDADERO. PCIe es retrocompatible. La GPU funcionará a velocidad PCIe 4.0, lo que en gaming actual apenas se nota (la mayoría no satura ni Gen3 x16).'
    },
    {
      id: 'ex4', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué cable alimenta SOLO la CPU?',
      options: ['ATX 24-pin', 'EPS 8-pin', 'PCIe 8-pin', 'SATA'],
      correct: 1,
      hint: 'Va al socket superior izquierdo de la placa.',
      explanation: 'EPS 8-pin (o 4+4). El ATX 24-pin alimenta la placa entera, el PCIe 8-pin es para GPU, el SATA para discos. Olvidar el EPS = PC no arranca.'
    },
    {
      id: 'ex5', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué hace el chipset de una placa moderna?',
      options: ['Procesar gráficos', 'Gestionar memoria RAM', 'Coordinar I/O (USB, SATA, periféricos)', 'Generar imagen'],
      correct: 2,
      hint: 'Hace lo que hacía el "southbridge" tradicional.',
      explanation: 'Coordina E/S: USB, SATA, audio, red, etc. El northbridge antiguo (memoria, GPU) se integró en la propia CPU, dejando solo el "southbridge" como chipset.'
    },
    {
      id: 'ex6', type: 'match', difficulty: 'medium', points: 25,
      prompt: 'Empareja chipset con socket compatible:',
      pairs: [
        { left: 'Z890', right: 'Intel LGA1851' },
        { left: 'B760', right: 'Intel LGA1700' },
        { left: 'X870E', right: 'AMD AM5' },
        { left: 'B550', right: 'AMD AM4' }
      ],
      hint: 'Cada socket tiene sus chipsets compatibles.',
      explanation: 'Las generaciones cambian socket y chipsets. Comprar CPU sin verificar compatibilidad con la placa es el error más caro en la informática.'
    },
    {
      id: 'ex7', type: 'tf', difficulty: 'medium', points: 20,
      prompt: 'El BIOS Flashback permite actualizar la BIOS sin tener CPU instalada.',
      correct: true,
      hint: 'Botón en el panel trasero de placas premium.',
      explanation: 'VERDADERO. Es esencial para instalar CPUs nuevas en placas con BIOS antigua. Solo necesitas la PSU enchufada y un USB con el archivo.'
    },
    {
      id: 'ex8', type: 'multi', difficulty: 'hard', points: 30,
      prompt: 'Si quitas la pila CR2032 de la placa durante 2 minutos, ¿qué pasa?',
      options: ['Se rompe la BIOS', 'La placa se queda sin alimentación principal', 'Se resetea la BIOS a valores de fábrica', 'Pierdes el sistema operativo'],
      correct: 2,
      hint: 'La pila alimenta la memoria CMOS donde se guarda la configuración.',
      explanation: 'Resetea la BIOS. La pila alimenta la CMOS donde se almacena la configuración cuando el PC está apagado. Quitarla = reset. Útil cuando algo se "trabó".'
    },
    {
      id: 'ex9', type: 'multi', difficulty: 'hard', points: 30,
      prompt: '¿Para qué sirve el "Q-Code" o display LCD que tienen algunas placas premium?',
      options: ['Mostrar la temperatura del CPU', 'Mostrar códigos de error durante el POST', 'Mostrar la hora del sistema', 'Mostrar los FPS en juegos'],
      correct: 1,
      hint: 'Útil para diagnosticar averías.',
      explanation: 'Muestra códigos de error durante el POST. Si el PC no arranca, ese código hexadecimal te dice exactamente qué falla (RAM, CPU, GPU...).'
    },
    {
      id: 'ex10', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué slot M.2 da mayor velocidad para SSDs NVMe?',
      options: ['M.2 con SATA', 'M.2 PCIe 3.0 x4', 'M.2 PCIe 4.0 x4', 'M.2 PCIe 5.0 x4'],
      correct: 3,
      hint: 'La generación más nueva.',
      explanation: 'PCIe 5.0 x4 (~14 GB/s). Las generaciones suben: Gen3 (~3500 MB/s), Gen4 (~7000 MB/s), Gen5 (~14000 MB/s). Cuidado: Gen5 calienta mucho.'
    }
  ],

  /* ============== CPU ============== */
  'cpu': [
    {
      id: 'ex1', type: 'multi', difficulty: 'basic', points: 15,
      prompt: 'En "Intel Core i7-14700K", ¿qué indica la K?',
      options: ['Sin gráfica integrada', 'Multiplicador desbloqueado para overclock', 'Para portátil', 'Ultra bajo consumo'],
      correct: 1,
      hint: 'K = OK para overclock.',
      explanation: 'K = multiplicador desbloqueado para overclock. F = sin iGPU. U = ultra bajo consumo. H = portátil alto rendimiento. T = baja potencia sobremesa.'
    },
    {
      id: 'ex2', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Qué indica el sufijo "X3D" en AMD?',
      options: ['Versión refrigerada por agua', 'Triple caché L3', 'Tecnología 3D V-Cache apilada', 'Versión profesional'],
      correct: 2,
      hint: 'Apila caché L3 encima del chip.',
      explanation: '3D V-Cache. Tecnología que apila caché L3 verticalmente, triplicando la capacidad. Bestiales para gaming (los mejores procesadores gaming desde 2022).'
    },
    {
      id: 'ex3', type: 'tf', difficulty: 'basic', points: 15,
      prompt: 'Un procesador de 8 núcleos siempre es más rápido que uno de 6 núcleos.',
      correct: false,
      hint: 'Depende de generación, arquitectura, frecuencia...',
      explanation: 'FALSO. Un Ryzen 5 7600X (6 núcleos modernos) le da vueltas a un Ryzen 7 2700 (8 núcleos antiguos). Importa generación, IPC, frecuencia y caché.'
    },
    {
      id: 'ex4', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué significa "Hyper-Threading" o "SMT"?',
      options: ['Cada núcleo puede gestionar 2 hilos simultáneos', 'Doble velocidad de reloj', 'Doble caché L2', 'Doble GPU integrada'],
      correct: 0,
      hint: 'Más hilos lógicos que físicos.',
      explanation: 'Cada núcleo gestiona 2 hilos (threads) simultáneos. Una CPU 8c/16t tiene 8 núcleos físicos y 16 hilos lógicos. SMT es la tecnología AMD; HT la de Intel.'
    },
    {
      id: 'ex5', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué cores son nuevos en arquitecturas híbridas modernas?',
      options: ['Big-Little', 'P-cores y E-cores', 'High y Low cores', 'Master y Slave cores'],
      correct: 1,
      hint: 'Performance y Efficiency.',
      explanation: 'P-cores (Performance) y E-cores (Efficient). Intel los introdujo en 12ª gen. Los P-cores son potentes; los E-cores eficientes para tareas ligeras.'
    },
    {
      id: 'ex6', type: 'match', difficulty: 'medium', points: 25,
      prompt: 'Empareja sufijo Intel con su significado:',
      pairs: [
        { left: 'K', right: 'Overclockable' },
        { left: 'F', right: 'Sin gráfica integrada' },
        { left: 'U', right: 'Ultra bajo consumo' },
        { left: 'H', right: 'Portátil alto rendimiento' }
      ],
      hint: 'Cada letra dice algo del procesador.',
      explanation: 'Estos sufijos te dicen el segmento. Un i7-14700KF es sobremesa overclockable sin iGPU. Un i7-14700H es portátil de alto rendimiento.'
    },
    {
      id: 'ex7', type: 'tf', difficulty: 'medium', points: 20,
      prompt: 'La caché L3 es más rápida que la L1.',
      correct: false,
      hint: 'Cuanto más cerca del núcleo, más rápido.',
      explanation: 'FALSO. L1 es la más rápida pero pequeña (KB). L2 mediana. L3 mayor (MB) pero más lenta. Cuanto más cerca del núcleo, más rápida.'
    },
    {
      id: 'ex8', type: 'multi', difficulty: 'hard', points: 30,
      prompt: 'Quieres el mejor rendimiento gaming en 2026 sin importar el precio. ¿Qué eliges?',
      options: ['Intel Core i9-14900K', 'AMD Ryzen 9 9950X', 'AMD Ryzen 7 9800X3D', 'Intel Core Ultra 9 285K'],
      correct: 2,
      hint: 'X3D = gaming rey.',
      explanation: 'Ryzen 7 9800X3D. La caché V-Cache 3D hace magia en gaming. El 9950X3D es similar pero con más cores (mejor para creación + gaming). En GAMING puro, 9800X3D bate a todo.'
    },
    {
      id: 'ex9', type: 'multi', difficulty: 'hard', points: 30,
      prompt: '¿Qué es la NPU integrada en CPUs modernas?',
      options: ['Núcleo extra para gráficos', 'Procesador específico para IA local', 'Memoria de alto ancho', 'Sistema de refrigeración'],
      correct: 1,
      hint: 'N = Neural.',
      explanation: 'Neural Processing Unit. Acelera tareas de IA (Stable Diffusion, asistentes locales, Windows Copilot+). AMD Ryzen AI alcanza 50 TOPS, Intel ~13 TOPS.'
    },
    {
      id: 'ex10', type: 'multi', difficulty: 'medium', points: 20,
      prompt: 'Tu CPU dice "TDP 125W". ¿Qué significa esto?',
      options: ['Necesita exactamente 125W', 'Disipa 125W como calor en uso típico', 'Consume 125W siempre', 'Solo funciona con fuente de 125W'],
      correct: 1,
      hint: 'TDP = Thermal Design Power.',
      explanation: 'Disipa 125W como calor en uso típico. Es la guía para elegir refrigeración. En picos puede consumir más (PL2 / PPT). Sirve para dimensionar disipador y fuente.'
    }
  ],

  /* ============== RAM ============== */
  'ram': [
    {
      id: 'ex1', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Qué pasa con los datos de la RAM al apagar el PC?',
      options: ['Se guardan en el disco', 'Se borran', 'Se comprimen', 'Se cifran'],
      correct: 1,
      hint: 'La RAM es volátil.',
      explanation: 'Se borran. La RAM es VOLÁTIL: necesita corriente para mantener los datos. Por eso siempre debes guardar tu trabajo en disco antes de apagar.'
    },
    {
      id: 'ex2', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Cuál es el voltaje típico de DDR5?',
      options: ['1.5 V', '1.2 V', '1.1 V', '2.5 V'],
      correct: 2,
      hint: 'Cada generación reduce el voltaje.',
      explanation: '1.1 V (vs 1.2 V de DDR4, 1.5 V de DDR3). Menos voltaje = menos consumo y calor.'
    },
    {
      id: 'ex3', type: 'tf', difficulty: 'basic', points: 15,
      prompt: 'Puedes meter RAM DDR4 en un slot de DDR5.',
      correct: false,
      hint: 'Las muescas están en sitios distintos.',
      explanation: 'FALSO. Aunque parecen similares, las muescas (notch) están en posiciones diferentes para evitar errores. Ni encaja ni funciona.'
    },
    {
      id: 'ex4', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué tecnología activa el perfil de overclock automático en RAM con BIOS Intel?',
      options: ['DOCP', 'EXPO', 'XMP', 'JEDEC'],
      correct: 2,
      hint: 'X de eXtreme.',
      explanation: 'XMP (Extreme Memory Profile). EXPO es el equivalente AMD para DDR5. DOCP es como llamaba ASUS al XMP en placas AMD antes. JEDEC es el estándar conservador.'
    },
    {
      id: 'ex5', type: 'multi', difficulty: 'medium', points: 20,
      prompt: 'Tienes RAM DDR5-6000 CL30. ¿Cuál es la latencia real en nanosegundos?',
      options: ['5 ns', '8 ns', '10 ns', '30 ns'],
      correct: 2,
      hint: 'Fórmula: CL × 2000 / frecuencia',
      explanation: '10 ns. Fórmula: (CL × 2000) / frecuencia = (30 × 2000) / 6000 = 10 ns. Para comparar RAMs de distinta frecuencia, calcula esta latencia real.'
    },
    {
      id: 'ex6', type: 'tf', difficulty: 'medium', points: 20,
      prompt: 'Comprar 2 módulos de 16 GB es mejor que comprar 1 módulo de 32 GB.',
      correct: true,
      hint: 'Dual channel mejora el rendimiento.',
      explanation: 'VERDADERO. Dos módulos activan dual channel y ofrecen hasta 30% más ancho de banda en algunas tareas. Siempre compra RAM en kits de 2 (o 4).'
    },
    {
      id: 'ex7', type: 'match', difficulty: 'medium', points: 25,
      prompt: 'Empareja generación DDR con su voltaje:',
      pairs: [
        { left: 'DDR3', right: '1.5 V' },
        { left: 'DDR4', right: '1.2 V' },
        { left: 'DDR5', right: '1.1 V' }
      ],
      hint: 'Cada generación reduce el voltaje para ahorrar energía.',
      explanation: 'La reducción de voltaje en cada generación permite mayor frecuencia con menos calor y consumo.'
    },
    {
      id: 'ex8', type: 'multi', difficulty: 'hard', points: 30,
      prompt: '¿Cuál NO es VRAM moderna en GPUs?',
      options: ['GDDR6', 'GDDR6X', 'GDDR7', 'GDDR8'],
      correct: 3,
      hint: 'Una de ellas no existe (aún).',
      explanation: 'GDDR8 no existe (todavía). GDDR6 es estándar en RTX 30/40 mid y RX 6000-7000. GDDR6X es la versión NVIDIA. GDDR7 llegó con las RTX 50 (Blackwell).'
    },
    {
      id: 'ex9', type: 'multi', difficulty: 'hard', points: 30,
      prompt: 'Sin activar XMP, una RAM DDR5-6000 funciona a:',
      options: ['6000 MHz', '5600 MHz', '4800 MHz', '3200 MHz'],
      correct: 2,
      hint: 'JEDEC estándar para DDR5.',
      explanation: '4800 MHz (estándar JEDEC). Sin XMP/EXPO la RAM funciona conservadora. Activar XMP en BIOS es OBLIGATORIO para aprovechar tu compra.'
    },
    {
      id: 'ex10', type: 'fill', difficulty: 'medium', points: 20,
      prompt: '¿Cuántos pines tiene un DIMM DDR4?',
      correct: '288',
      acceptedAnswers: ['288'],
      hint: 'DDR3 tenía 240.',
      explanation: '288 pines (igual que DDR5). DDR3 tenía 240, DDR2 también 240, DDR original 184. Aunque DDR4 y DDR5 tienen mismo nº de pines, la muesca está en distinto sitio.'
    }
  ],

  /* ============== ALMACENAMIENTO ============== */
  'almacenamiento': [
    {
      id: 'ex1', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Cuál es más rápido?',
      options: ['HDD 7200 RPM', 'SSD SATA', 'SSD NVMe Gen4', 'Pendrive USB 2.0'],
      correct: 2,
      hint: 'PCIe directo, no SATA.',
      explanation: 'SSD NVMe Gen4 (~7000 MB/s). Mucho más rápido que SSD SATA (~550 MB/s) o HDD (~180 MB/s). Pendrive USB 2.0 es lentísimo (~30 MB/s).'
    },
    {
      id: 'ex2', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Qué conector usa un SSD NVMe?',
      options: ['SATA', 'M.2', 'IDE', 'USB'],
      correct: 1,
      hint: 'Slot directo en la placa base.',
      explanation: 'M.2. Conector pequeño tipo tarjeta que se inserta directamente en la placa base, usando líneas PCIe.'
    },
    {
      id: 'ex3', type: 'tf', difficulty: 'basic', points: 15,
      prompt: 'Debes desfragmentar regularmente tu SSD.',
      correct: false,
      hint: 'Los SSDs no tienen cabezas que muevan.',
      explanation: 'FALSO. NUNCA desfragmentes un SSD. Solo lo desgasta. Windows lo sabe y le hace TRIM automáticamente. La desfragmentación es solo para HDDs.'
    },
    {
      id: 'ex4', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué tecnología NAND es más duradera?',
      options: ['SLC', 'MLC', 'TLC', 'QLC'],
      correct: 0,
      hint: 'Menos bits por celda = más resistencia.',
      explanation: 'SLC (1 bit/celda). Menos bits = más durabilidad y velocidad, pero más caro. Hoy se usan TLC (gama media) y QLC (barato pero menos vida).'
    },
    {
      id: 'ex5', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué métrica indica la vida útil de un SSD?',
      options: ['IOPS', 'TBW (TeraBytes Written)', 'CL', 'TDP'],
      correct: 1,
      hint: 'Total de escrituras que aguanta.',
      explanation: 'TBW = TeraBytes Written. Un SSD de 1 TB suele tener 300-600 TBW (escribir 300 a 600 TB en su vida). Casi imposible alcanzarlo en uso doméstico normal.'
    },
    {
      id: 'ex6', type: 'match', difficulty: 'medium', points: 25,
      prompt: 'Empareja sistema de archivos con su SO nativo:',
      pairs: [
        { left: 'NTFS', right: 'Windows' },
        { left: 'APFS', right: 'macOS' },
        { left: 'ext4', right: 'Linux' },
        { left: 'exFAT', right: 'Universal USBs' }
      ],
      hint: 'Cada SO tiene su sistema preferido.',
      explanation: 'Para compartir entre sistemas usa exFAT. NTFS es el moderno Windows. APFS reemplazó a HFS+ en macOS. ext4 es el estándar Linux desde hace años.'
    },
    {
      id: 'ex7', type: 'multi', difficulty: 'hard', points: 30,
      prompt: 'Quieres pasar un video de 6 GB a un pendrive. ¿Qué formato debes usar?',
      options: ['FAT32', 'exFAT', 'NTFS', 'Cualquiera de los anteriores'],
      correct: 1,
      hint: 'FAT32 tiene límite de 4 GB por archivo.',
      explanation: 'exFAT. FAT32 no permite archivos >4 GB. NTFS no es 100% compatible para escritura en Mac/Linux. exFAT es universal y sin límites prácticos.'
    },
    {
      id: 'ex8', type: 'tf', difficulty: 'medium', points: 20,
      prompt: 'Un SSD NVMe Gen5 puede generar tanto calor que necesita disipador con ventilador.',
      correct: true,
      hint: '14 GB/s genera mucha temperatura.',
      explanation: 'VERDADERO. Los SSDs Gen5 calientan brutal. Algunos modelos (Crucial T705, Corsair MP700) traen ventilador integrado. Sin refrigeración, se "throttlean" en segundos.'
    },
    {
      id: 'ex9', type: 'multi', difficulty: 'hard', points: 30,
      prompt: '¿Qué tecnología permite que la GPU lea directamente del SSD NVMe sin pasar por la CPU?',
      options: ['DirectStorage', 'PrimeCache', 'NVMe Boost', 'RaidXpert'],
      correct: 0,
      hint: 'Tecnología Microsoft para juegos modernos.',
      explanation: 'DirectStorage. Reduce cargas de juegos drásticamente. Forspoken, Ratchet & Clank Rift Apart y otros lo usan. Necesita SSD NVMe y GPU compatible.'
    },
    {
      id: 'ex10', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Cuál es el tamaño M.2 más común?',
      options: ['2230', '2242', '2280', '22110'],
      correct: 2,
      hint: 'El número son medidas en mm (ancho × largo).',
      explanation: '2280 (22 mm ancho × 80 mm largo). Es el formato estándar para SSDs M.2 NVMe. Los 2230 son para Steam Deck/portátiles ultra-compactos.'
    }
  ],

  /* ============== GPU ============== */
  'gpu': [
    {
      id: 'ex1', type: 'multi', difficulty: 'basic', points: 15,
      prompt: 'En "GeForce RTX 4080", ¿qué indica la "8"?',
      options: ['Año de lanzamiento', 'Gama dentro de la generación', 'Núcleos CUDA', 'GB de VRAM'],
      correct: 1,
      hint: '60=media, 70=alta, 80=top, 90=entusiasta.',
      explanation: 'Gama: 60 (media), 70 (alta), 80 (top), 90 (entusiasta). El "40" indica la generación (RTX 40 = arquitectura Ada Lovelace, RTX 50 = Blackwell).'
    },
    {
      id: 'ex2', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Qué empresa creó CUDA?',
      options: ['AMD', 'NVIDIA', 'Intel', 'Apple'],
      correct: 1,
      hint: 'Es propietaria de la empresa de las GPUs verdes.',
      explanation: 'NVIDIA. CUDA (Compute Unified Device Architecture) es la razón por la que NVIDIA domina IA y supercomputación. AMD usa ROCm como alternativa.'
    },
    {
      id: 'ex3', type: 'tf', difficulty: 'basic', points: 15,
      prompt: 'Una RTX 4060 es más potente que una RTX 3080.',
      correct: false,
      hint: 'Compara benchmarks reales, no nombres.',
      explanation: 'FALSO. Una RTX 3080 supera a una RTX 4060 en la mayoría de juegos. El primer número (40 vs 30) no garantiza superioridad: importa la gama (60 vs 80).'
    },
    {
      id: 'ex4', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué tecnología "inventa" fotogramas mediante IA?',
      options: ['DLSS Super Resolution', 'Frame Generation', 'Ray Tracing', 'NVIDIA Reflex'],
      correct: 1,
      hint: 'No reescala, GENERA fotogramas.',
      explanation: 'Frame Generation (DLSS 3/4, FSR 3/4). La GPU genera fotogramas intermedios con IA, multiplicando los FPS hasta x4 en DLSS 4. Introduce algo de latencia.'
    },
    {
      id: 'ex5', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué memoria es típica en GPUs profesionales para IA?',
      options: ['GDDR6', 'GDDR6X', 'HBM3', 'DDR5'],
      correct: 2,
      hint: 'High Bandwidth Memory. Apilada.',
      explanation: 'HBM3 (High Bandwidth Memory). Memoria apilada con ancho de banda enorme. Usado en NVIDIA H100/B200 y AMD Instinct para IA y supercomputación.'
    },
    {
      id: 'ex6', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué es el "cuello de botella" en gaming?',
      options: ['Cable HDMI lento', 'Un componente limita a los demás', 'Demasiada RAM', 'Disco lleno'],
      correct: 1,
      hint: 'Si CPU al 100% y GPU al 50%...',
      explanation: 'Un componente más lento limita los más rápidos. CPU débil con GPU potente = CPU al 100%, GPU al 50%. Solución: equilibrar componentes.'
    },
    {
      id: 'ex7', type: 'tf', difficulty: 'medium', points: 20,
      prompt: 'FSR de AMD funciona también en GPUs NVIDIA.',
      correct: true,
      hint: 'Es estándar abierto.',
      explanation: 'VERDADERO. FSR es estándar abierto y funciona en NVIDIA, Intel y consolas. DLSS, en cambio, es exclusivo NVIDIA.'
    },
    {
      id: 'ex8', type: 'multi', difficulty: 'hard', points: 30,
      prompt: '¿Cuántos GB de VRAM mínimos para gaming 4K Ultra con texturas Ultra HD en 2026?',
      options: ['8 GB', '12 GB', '16 GB', '24 GB'],
      correct: 2,
      hint: 'Los juegos AAA modernos cada vez piden más.',
      explanation: '16 GB. Juegos como Indiana Jones, Alan Wake 2, Cyberpunk 2077 con texturas Ultra HD piden ya 14-15 GB en 4K. Margen: 16 GB. Para futuro: 20-24 GB.'
    },
    {
      id: 'ex9', type: 'multi', difficulty: 'hard', points: 30,
      prompt: '¿Qué problema ha tenido el conector 12VHPWR en RTX 4090s?',
      options: ['Tasa de fallo eléctrico', 'Casos de derretimiento por mala conexión', 'Calienta demasiado', 'Es demasiado largo'],
      correct: 1,
      hint: 'Lo viste en noticias en 2022-2023.',
      explanation: 'Derretimiento por mala conexión. Si el cable no entra a fondo (clic), genera mucho calor y se funde. La revisión 12V-2x6 es más segura.'
    },
    {
      id: 'ex10', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Quién fabrica las GPUs Arc?',
      options: ['NVIDIA', 'AMD', 'Intel', 'Qualcomm'],
      correct: 2,
      hint: 'El "tercer jugador" del mercado.',
      explanation: 'Intel. Series Alchemist (A380, A750, A770) y Battlemage (B580). Buena relación calidad/precio pero menos rendimiento que NVIDIA/AMD en gama alta.'
    }
  ],

  /* ============== FUENTE ============== */
  'fuente': [
    {
      id: 'ex1', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Qué hace una fuente de alimentación?',
      options: ['Genera electricidad', 'Convierte AC a DC', 'Almacena energía', 'Enfría el PC'],
      correct: 1,
      hint: 'AC = corriente alterna (pared), DC = corriente continua.',
      explanation: 'Convierte AC (corriente alterna de la pared, 230V) a DC (corriente continua a 12V, 5V, 3.3V) que necesitan los componentes.'
    },
    {
      id: 'ex2', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Qué certificación 80 Plus tiene mayor eficiencia?',
      options: ['Bronze', 'Gold', 'Platinum', 'Titanium'],
      correct: 3,
      hint: 'El más caro de los metales.',
      explanation: 'Titanium (~94% al 50% de carga). Orden: White < Bronze < Silver < Gold < Platinum < Titanium.'
    },
    {
      id: 'ex3', type: 'tf', difficulty: 'basic', points: 15,
      prompt: 'Es buena idea ahorrar en la fuente de alimentación.',
      correct: false,
      hint: 'Igor grita NO.',
      explanation: 'FALSO. Una fuente barata puede freír todos los componentes y, en casos extremos, provocar fuego. Mínimo: marca conocida + 80 Plus Bronze.'
    },
    {
      id: 'ex4', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué conector alimenta la CPU?',
      options: ['ATX 24-pin', 'EPS 4+4', 'PCIe 6+2', 'Molex'],
      correct: 1,
      hint: 'Va al lateral superior izquierdo de la placa.',
      explanation: 'EPS 4+4 (8 pines). Algunas placas premium tienen dos (EPS+EPS). Si no se conecta, la placa enciende pero la CPU no arranca: error #1 novato.'
    },
    {
      id: 'ex5', type: 'multi', difficulty: 'medium', points: 20,
      prompt: 'Tu build es: Ryzen 7 7800X3D + RTX 4070 Super. ¿Qué fuente eliges mínimo?',
      options: ['400W', '550W', '750W', '1000W'],
      correct: 2,
      hint: 'Suma TDP y añade 30% margen.',
      explanation: '750W (80 Plus Gold ideal). CPU ~120W + GPU ~220W + 100W resto ≈ 440W × 1.3 margen = 572W. Margen para futuro: 750W.'
    },
    {
      id: 'ex6', type: 'match', difficulty: 'medium', points: 25,
      prompt: 'Empareja conector con su uso:',
      pairs: [
        { left: 'ATX 24-pin', right: 'Placa base' },
        { left: 'EPS 8-pin', right: 'CPU' },
        { left: 'PCIe 6+2', right: 'GPU' },
        { left: 'SATA Power', right: 'SSD/HDD SATA' }
      ],
      hint: 'Cada componente necesita su cable específico.',
      explanation: 'Cada conector tiene su función. Confundirlos puede dañar componentes. Aprende a identificarlos por el número de pines y forma.'
    },
    {
      id: 'ex7', type: 'tf', difficulty: 'medium', points: 20,
      prompt: 'Una fuente "full modular" trae todos los cables desmontables.',
      correct: true,
      hint: 'Full = todos.',
      explanation: 'VERDADERO. Solo conectas los cables que necesitas. Cableado más limpio. Más cara que las semi-modulares (donde ATX y EPS van fijos).'
    },
    {
      id: 'ex8', type: 'multi', difficulty: 'hard', points: 30,
      prompt: '¿Cuál es el nuevo conector PCIe para GPUs gama alta en 2024-2026?',
      options: ['12-pin PCIe', '12VHPWR / 12V-2x6', 'EPS Plus', '24-pin GPU'],
      correct: 1,
      hint: 'Conector pequeño con 16 cables.',
      explanation: '12VHPWR (luego revisado a 12V-2x6). Soporta hasta 600W. Necesario en RTX 4080, 4090, 5070+. Las fuentes ATX 3.0/3.1 lo traen nativo.'
    },
    {
      id: 'ex9', type: 'multi', difficulty: 'hard', points: 30,
      prompt: 'Una fuente trabaja en su mejor punto al:',
      options: ['10% de carga', '25% de carga', '50% de carga', '100% de carga'],
      correct: 2,
      hint: 'No al máximo, no al mínimo.',
      explanation: '50% de carga. Las fuentes son más eficientes en el ~50%. Por eso sobredimensionar (700W para PC de 400W) es eficiente.'
    },
    {
      id: 'ex10', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué marca de fuente NO se considera "tier-1" (alta calidad)?',
      options: ['Seasonic', 'Super Flower', 'Corsair RM/HX', 'BlackPower 9000W'],
      correct: 3,
      hint: 'Si nunca la has oído y promete 9000W, sospecha.',
      explanation: 'BlackPower 9000W (marca ficticia/genérica). Fuentes "milagro" con potencias absurdas a precio bajo son siempre estafa. Stick a marcas conocidas.'
    }
  ],

  /* ============== REFRIGERACIÓN ============== */
  'refrigeracion': [
    {
      id: 'ex1', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Qué tipo de refrigeración es más fácil de instalar?',
      options: ['Aire (disipador + ventilador)', 'AIO líquida', 'Custom loop', 'Inmersión en aceite'],
      correct: 0,
      hint: 'Solo un par de tornillos.',
      explanation: 'Aire. Un disipador con ventilador se atornilla y conecta. AIO necesita radiador, conexiones, bomba. Custom loop es para expertos.'
    },
    {
      id: 'ex2', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Para qué sirve la pasta térmica?',
      options: ['Pegar el disipador', 'Mejorar transferencia de calor entre CPU y disipador', 'Aislar eléctricamente', 'Lubricar el ventilador'],
      correct: 1,
      hint: 'Rellena las microimperfecciones.',
      explanation: 'Mejora la conducción térmica entre CPU e IHS y disipador. Sin ella, el aire entre las superficies actúa como aislante térmico.'
    },
    {
      id: 'ex3', type: 'tf', difficulty: 'basic', points: 15,
      prompt: 'La refrigeración líquida siempre es mejor que la de aire.',
      correct: false,
      hint: 'Depende del tamaño y la calidad.',
      explanation: 'FALSO. Un buen disipador dual-tower (Noctua NH-D15) iguala o supera a un AIO 240 mm. Y es más fiable (sin bombas que fallen).'
    },
    {
      id: 'ex4', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Cuánta pasta térmica debes aplicar en la CPU?',
      options: ['Untar toda la superficie', 'Como un guisante en el centro', 'Llenar todo el IHS abundantemente', 'Una capa fina con tarjeta'],
      correct: 1,
      hint: 'Menos es más.',
      explanation: 'Un guisante (~tamaño de un grano de arroz) en el centro. Al apretar el disipador se reparte. Demasiada contamina el socket.'
    },
    {
      id: 'ex5', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué pasta térmica es PELIGROSA si gotea sobre la placa?',
      options: ['Arctic MX-6', 'Noctua NT-H2', 'Metal líquido (Conductonaut)', 'PTM 7950'],
      correct: 2,
      hint: 'Conduce electricidad.',
      explanation: 'Metal líquido. Es conductor: si gotea, cortocircuita componentes. Solo para usuarios expertos. Las otras pastas son no-conductivas y seguras.'
    },
    {
      id: 'ex6', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Cómo debe fluir el aire en una caja de PC?',
      options: ['Cualquier dirección sirve', 'Entrada delante/abajo, salida detrás/arriba', 'Entrada arriba, salida abajo', 'Todo entrada, sin salida'],
      correct: 1,
      hint: 'El aire caliente sube.',
      explanation: 'Entrada delante/abajo (aire frío), salida detrás/arriba (aire caliente sube). Mantén ligera presión positiva (más intake que exhaust) para evitar polvo.'
    },
    {
      id: 'ex7', type: 'tf', difficulty: 'medium', points: 20,
      prompt: 'Los ventiladores Noctua marrones son feos pero legendarios por silencio.',
      correct: true,
      hint: 'Pregunta cualquier veterano del PC.',
      explanation: 'VERDADERO. Color "marrón sucio" memorable, pero silencio y durabilidad superlativos. Tienen versiones negras (Chromax) si te ofende la estética.'
    },
    {
      id: 'ex8', type: 'multi', difficulty: 'hard', points: 30,
      prompt: '¿Qué es PTM 7950?',
      options: ['Ventilador silencioso', 'Pasta térmica de cambio de fase', 'Tipo de AIO', 'Modelo de RAM'],
      correct: 1,
      hint: 'Almohadilla térmica que cambia de fase con calor.',
      explanation: 'Almohadilla térmica de cambio de fase. A ~50°C se vuelve líquida y rellena imperfecciones. No se seca nunca. Moda 2024-2025.'
    },
    {
      id: 'ex9', type: 'multi', difficulty: 'hard', points: 30,
      prompt: 'Si tu CPU pasa de 95°C constantemente bajo carga, ¿qué sucede?',
      options: ['Se rompe inmediatamente', 'Throttling: baja velocidad para no fundirse', 'Aumenta el rendimiento', 'Apaga el ventilador'],
      correct: 1,
      hint: 'Mecanismo de auto-protección.',
      explanation: 'Throttling. La CPU baja frecuencia automáticamente para protegerse. Resultado: rendimiento bajo. Solución: mejor refrigeración o limpiar polvo.'
    },
    {
      id: 'ex10', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué tamaño de radiador AIO ofrece mejor refrigeración?',
      options: ['120 mm', '240 mm', '280 mm', '360 mm'],
      correct: 3,
      hint: 'Cuanto más grande, mejor disipa.',
      explanation: '360 mm (3 ventiladores 120 mm). Mayor superficie de disipación. Asegúrate que tu caja lo soporte. Para CPUs >150W TDP, recomendable.'
    }
  ],

  /* ============== BIOS ============== */
  'bios': [
    {
      id: 'ex1', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Cuál es la tecla más común para entrar a la BIOS en placas de sobremesa?',
      options: ['F2', 'F8', 'DEL/SUPR', 'F12'],
      correct: 2,
      hint: 'En ASUS, Gigabyte, MSI, ASRock.',
      explanation: 'DEL/SUPR. Los portátiles suelen usar F2 (Dell, ASUS) o F10 (HP). F12 abre el menú de boot directo sin entrar a la BIOS completa.'
    },
    {
      id: 'ex2', type: 'multi', difficulty: 'basic', points: 15,
      prompt: 'Para arrancar Windows 11 oficialmente necesitas:',
      options: ['BIOS Legacy', 'Solo UEFI', 'UEFI + Secure Boot + TPM 2.0', 'MBR'],
      correct: 2,
      hint: 'Microsoft impuso requisitos estrictos.',
      explanation: 'UEFI + Secure Boot + TPM 2.0. Por eso muchos PCs pre-2016 no pueden instalar Windows 11 oficialmente (aunque hay métodos no oficiales).'
    },
    {
      id: 'ex3', type: 'tf', difficulty: 'basic', points: 15,
      prompt: 'UEFI puede gestionar discos de más de 2 TB.',
      correct: true,
      hint: 'BIOS Legacy estaba limitada a 2 TB.',
      explanation: 'VERDADERO. UEFI usa GPT, que soporta hasta 9.4 ZB (zettabytes). BIOS Legacy con MBR está limitado a 2 TB por disco.'
    },
    {
      id: 'ex4', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Cuál es la principal función del CSM en una BIOS UEFI?',
      options: ['Acelerar el arranque', 'Permitir arrancar sistemas tipo BIOS Legacy', 'Activar Secure Boot', 'Compatibilidad con RAM antigua'],
      correct: 1,
      hint: 'CSM = Compatibility Support Module.',
      explanation: 'Permite arrancar SO antiguos en modo BIOS Legacy. Si tienes un disco con MBR o un Windows 7 que solo arranque en Legacy, activas CSM.'
    },
    {
      id: 'ex5', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué pasa si quitas la pila CR2032 de la placa durante 2 minutos?',
      options: ['La BIOS se borra completamente', 'Se resetea la BIOS a valores de fábrica', 'Pierdes el sistema operativo', 'Se rompe la placa'],
      correct: 1,
      hint: 'Reset CMOS.',
      explanation: 'Resetea la BIOS a valores por defecto. Útil cuando configuras algo mal (XMP fallido, overclock inestable). También puede hacerse con el jumper CLR_CMOS.'
    },
    {
      id: 'ex6', type: 'match', difficulty: 'medium', points: 25,
      prompt: 'Empareja característica con BIOS o UEFI:',
      pairs: [
        { left: 'MBR', right: 'BIOS Legacy' },
        { left: 'GPT', right: 'UEFI' },
        { left: 'Texto y teclado', right: 'BIOS Legacy' },
        { left: 'Gráfica con ratón', right: 'UEFI' }
      ],
      hint: 'BIOS es lo viejo, UEFI lo moderno.',
      explanation: 'UEFI es la modernización: gráfica, soporta GPT, ratón, faster boot, Secure Boot, TPM.'
    },
    {
      id: 'ex7', type: 'tf', difficulty: 'medium', points: 20,
      prompt: 'Activar XMP es obligatorio para que la RAM funcione a su velocidad anunciada.',
      correct: true,
      hint: 'Sin XMP, JEDEC estándar conservador.',
      explanation: 'VERDADERO. Sin XMP/EXPO la RAM funciona a velocidad JEDEC (4800 MHz en DDR5). Una RAM "DDR5-6000" sin XMP va a 4800. Activarlo es GRATIS.'
    },
    {
      id: 'ex8', type: 'multi', difficulty: 'hard', points: 30,
      prompt: '¿Qué es el BIOS Flashback?',
      options: ['Recuperar BIOS dañada', 'Actualizar BIOS sin CPU instalada', 'Hacer flashing visual', 'Volver a versión antigua'],
      correct: 1,
      hint: 'Botón externo en placa premium.',
      explanation: 'Permite actualizar BIOS solo con PSU y USB con archivo, sin CPU/RAM. Esencial para CPUs nuevas en placas con BIOS antigua.'
    },
    {
      id: 'ex9', type: 'multi', difficulty: 'hard', points: 30,
      prompt: '¿Qué es "Resizable BAR" / "SAM" en la BIOS?',
      options: ['Doble RAM', 'CPU puede acceder a toda la VRAM de la GPU', 'Auto-overclock', 'Sistema antivirus'],
      correct: 1,
      hint: 'Mejora rendimiento gaming ~5-10%.',
      explanation: 'Permite que la CPU acceda a toda la VRAM de golpe (no solo en bloques pequeños). Mejora rendimiento hasta 10% en juegos compatibles. AMD lo llama SAM.'
    },
    {
      id: 'ex10', type: 'tf', difficulty: 'hard', points: 30,
      prompt: 'Es seguro actualizar la BIOS durante una tormenta eléctrica.',
      correct: false,
      hint: 'Sin SAI = riesgo enorme.',
      explanation: 'FALSO. Si se corta la luz durante la actualización, la placa queda "bricked" (inservible). Sin SAI/UPS, NUNCA actualices BIOS en momentos críticos.'
    }
  ],

  /* ============== SISTEMA OPERATIVO ============== */
  'sistema-operativo': [
    {
      id: 'ex1', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Cuál NO es un sistema operativo?',
      options: ['Windows', 'macOS', 'Linux', 'Microsoft Office'],
      correct: 3,
      hint: 'Office es una suite de aplicaciones.',
      explanation: 'Microsoft Office es software de aplicación (Word, Excel, PowerPoint), no un sistema operativo.'
    },
    {
      id: 'ex2', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Qué sistema de archivos tiene un límite de 4 GB por archivo?',
      options: ['NTFS', 'exFAT', 'FAT32', 'APFS'],
      correct: 2,
      hint: 'Es antiguo pero universal.',
      explanation: 'FAT32. Límite de 4 GB por archivo. Para archivos grandes en USB, usa exFAT (universal sin ese límite).'
    },
    {
      id: 'ex3', type: 'tf', difficulty: 'basic', points: 15,
      prompt: 'Linux es gratis y de código abierto.',
      correct: true,
      hint: 'Linus Torvalds, 1991.',
      explanation: 'VERDADERO. El kernel Linux es libre. Las distros más populares (Ubuntu, Mint, Fedora) son completamente gratuitas.'
    },
    {
      id: 'ex4', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué esquema de partición permite más de 4 particiones primarias?',
      options: ['MBR', 'GPT', 'FAT', 'EXT4'],
      correct: 1,
      hint: 'El moderno permite 128.',
      explanation: 'GPT permite hasta 128 particiones por disco. MBR está limitado a 4 primarias (o 3 primarias + 1 extendida con lógicas).'
    },
    {
      id: 'ex5', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué sistema de archivos es nativo de macOS moderno?',
      options: ['HFS+', 'APFS', 'NTFS', 'ext4'],
      correct: 1,
      hint: 'Apple lo lanzó en 2017 con High Sierra.',
      explanation: 'APFS (Apple File System). Reemplazó a HFS+ en 2017. Optimizado para SSD, con snapshots, cifrado nativo, etc.'
    },
    {
      id: 'ex6', type: 'tf', difficulty: 'medium', points: 20,
      prompt: 'NTFS permite escritura nativa en macOS sin software extra.',
      correct: false,
      hint: 'macOS lee NTFS, pero...',
      explanation: 'FALSO. macOS LEE NTFS pero NO escribe nativamente. Para escritura necesitas software como Paragon NTFS o Microsoft NTFS for Mac.'
    },
    {
      id: 'ex7', type: 'multi', difficulty: 'medium', points: 20,
      prompt: 'Para compartir un disco entre Windows y Mac, ¿qué formato es mejor?',
      options: ['NTFS', 'APFS', 'exFAT', 'FAT32'],
      correct: 2,
      hint: 'Sin límite de 4GB, compatible con ambos.',
      explanation: 'exFAT. Compatible con Win/Mac/Linux (con paquetes extra) y sin límite de tamaño de archivo. Ideal para discos externos compartidos.'
    },
    {
      id: 'ex8', type: 'multi', difficulty: 'hard', points: 30,
      prompt: '¿Qué permite WSL2 en Windows?',
      options: ['Antivirus mejorado', 'Correr Linux dentro de Windows con buen rendimiento', 'Desactivar Defender', 'Acelerar gaming'],
      correct: 1,
      hint: 'Subsystem for Linux.',
      explanation: 'WSL2 (Windows Subsystem for Linux 2). Ejecuta Linux en Windows usando virtualización ligera. Imprescindible para dev que necesita herramientas Linux sin abandonar Windows.'
    },
    {
      id: 'ex9', type: 'multi', difficulty: 'hard', points: 30,
      prompt: '¿Qué tipo de licencia Windows está ligada al PC original?',
      options: ['Retail', 'OEM', 'Volume/KMS', 'MSDN'],
      correct: 1,
      hint: 'No transferible si cambias placa.',
      explanation: 'OEM. Una vez activada en un PC, queda ligada a su hardware (placa base). Cambiar placa = perder licencia. Retail es transferible.'
    },
    {
      id: 'ex10', type: 'tf', difficulty: 'medium', points: 20,
      prompt: 'KMSPico y similares son una buena forma de activar Windows.',
      correct: false,
      hint: 'Llevan malware y son ilegales.',
      explanation: 'FALSO. Suelen contener malware (mineros, troyanos). Microsoft los detecta. Una licencia OEM legal cuesta 10-20€ en sitios como Kinguin. No vale la pena el riesgo.'
    }
  ],

  /* ============== WINDOWS ============== */
  'windows': [
    {
      id: 'ex1', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Qué comando muestra la configuración de red en CMD?',
      options: ['ipconfig', 'ifconfig', 'netstat', 'tracert'],
      correct: 0,
      hint: 'Windows usa "ip".',
      explanation: 'ipconfig (Windows). ifconfig es para Linux/Mac antiguos (modernos usan "ip addr"). netstat muestra conexiones, tracert traza ruta.'
    },
    {
      id: 'ex2', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Qué hace "sfc /scannow"?',
      options: ['Borra archivos temporales', 'Repara archivos del sistema corruptos', 'Defragmenta el disco', 'Limpia el registro'],
      correct: 1,
      hint: 'System File Checker.',
      explanation: 'Verifica y repara archivos del sistema corruptos. Se ejecuta desde CMD como administrador. Si falla, prueba con DISM.'
    },
    {
      id: 'ex3', type: 'tf', difficulty: 'basic', points: 15,
      prompt: 'BitLocker viene en todas las ediciones de Windows.',
      correct: false,
      hint: 'Solo en Pro y superiores.',
      explanation: 'FALSO. BitLocker viene solo en Pro, Enterprise, Education. Windows Home tiene "Device Encryption" simple si tu hardware lo soporta y usas cuenta Microsoft.'
    },
    {
      id: 'ex4', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué comando limpia la caché DNS en Windows?',
      options: ['ipconfig /release', 'ipconfig /renew', 'ipconfig /flushdns', 'ipconfig /all'],
      correct: 2,
      hint: '"Flush" = vaciar.',
      explanation: 'ipconfig /flushdns. Útil cuando una web no carga porque el DNS está cacheado mal. /release libera IP, /renew pide nueva, /all muestra info detallada.'
    },
    {
      id: 'ex5', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué herramienta usa Microsoft para crear USB booteable de Windows?',
      options: ['Rufus', 'Ventoy', 'Media Creation Tool', 'Etcher'],
      correct: 2,
      hint: 'La oficial de Microsoft.',
      explanation: 'Media Creation Tool. La oficial. Rufus es una alternativa muy popular (más rápida y flexible). Ventoy permite multi-ISO. Etcher es multiplataforma.'
    },
    {
      id: 'ex6', type: 'match', difficulty: 'medium', points: 25,
      prompt: 'Empareja comando CMD con su función:',
      pairs: [
        { left: 'tasklist', right: 'Lista procesos' },
        { left: 'taskkill /PID', right: 'Mata un proceso' },
        { left: 'chkdsk C: /f', right: 'Comprueba disco' },
        { left: 'systeminfo', right: 'Info del sistema' }
      ],
      hint: 'Cada uno tiene su propósito específico.',
      explanation: 'Los comandos CMD son esenciales para administración. Memorízalos: te ahorran horas frente a interfaces gráficas.'
    },
    {
      id: 'ex7', type: 'tf', difficulty: 'medium', points: 20,
      prompt: 'Si pierdes la clave de recuperación de BitLocker y el TPM falla, tus datos están perdidos.',
      correct: true,
      hint: 'Sin clave, no hay descifrado.',
      explanation: 'VERDADERO. BitLocker es muy seguro = sin clave no hay forma de recuperar. SIEMPRE guarda la clave de recuperación en cuenta Microsoft o medio externo seguro.'
    },
    {
      id: 'ex8', type: 'multi', difficulty: 'hard', points: 30,
      prompt: '¿Qué herramienta de Sysinternals registra creación de procesos, conexiones de red y cambios?',
      options: ['Process Explorer', 'Sysmon', 'Autoruns', 'TCPView'],
      correct: 1,
      hint: 'System Monitor.',
      explanation: 'Sysmon. Genera eventos detallados que van al Visor de Eventos. Imprescindible en análisis forense. Configuración recomendada: SwiftOnSecurity en GitHub.'
    },
    {
      id: 'ex9', type: 'multi', difficulty: 'hard', points: 30,
      prompt: '¿Qué función polémica de Windows 11 24H2 hace capturas constantes?',
      options: ['Defender Recall', 'Windows Recall', 'Snapshot Pro', 'Screen Memory'],
      correct: 1,
      hint: 'Funciona con Copilot+.',
      explanation: 'Windows Recall. Forma parte de Copilot+ AI. Hace capturas continuas para que la IA "recuerde" lo que hiciste. Polémica por privacidad masiva en 2024.'
    },
    {
      id: 'ex10', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Qué atajo abre el historial del portapapeles en Windows 11?',
      options: ['Win + C', 'Win + V', 'Win + X', 'Win + Tab'],
      correct: 1,
      hint: 'V de "Vista" del portapapeles.',
      explanation: 'Win + V. Atajos útiles: Win + . (emojis), Win + Shift + S (captura), Win + X (menú avanzado), Win + Tab (vista de tareas).'
    }
  ],

  /* ============== VIRTUALBOX ============== */
  'virtualbox': [
    {
      id: 'ex1', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Para qué sirve principalmente VirtualBox?',
      options: ['Cifrar discos', 'Ejecutar SOs dentro de otro SO', 'Hacer backups', 'Acelerar internet'],
      correct: 1,
      hint: 'Virtualización.',
      explanation: 'Virtualización: ejecutar SOs dentro de otro SO (host). Útil para probar, aprender, aislar software peligroso.'
    },
    {
      id: 'ex2', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Qué pack añade USB 3.0 y RDP a VirtualBox?',
      options: ['Guest Additions', 'Extension Pack', 'Pro Pack', 'Network Pack'],
      correct: 1,
      hint: 'Se descarga del mismo sitio que VBox.',
      explanation: 'Extension Pack. Gratuito, se instala desde Preferencias → Extensiones. Habilita USB 2.0/3.0, RDP, cifrado de disco, PXE boot.'
    },
    {
      id: 'ex3', type: 'tf', difficulty: 'basic', points: 15,
      prompt: 'En modo NAT, la VM accede a internet a través del host.',
      correct: true,
      hint: 'Es el modo por defecto.',
      explanation: 'VERDADERO. NAT es el modo por defecto. La VM sale a internet pasando por el host, pero NO es accesible desde la red local.'
    },
    {
      id: 'ex4', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué modo de red hace que la VM aparezca en la LAN como un PC más?',
      options: ['NAT', 'Red NAT', 'Adaptador puente', 'Solo anfitrión'],
      correct: 2,
      hint: 'Como si tuvieras otro PC físico.',
      explanation: 'Adaptador puente (Bridge). La VM obtiene IP del router doméstico y puede ser accedida desde otros PCs de la red local.'
    },
    {
      id: 'ex5', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué hace un snapshot en VirtualBox?',
      options: ['Captura de pantalla', 'Guarda el estado de la VM para volver atrás', 'Crea un backup en la nube', 'Reinicia la VM'],
      correct: 1,
      hint: 'Punto de control reversible.',
      explanation: 'Guarda estado actual de la VM. Si algo sale mal, restauras al snapshot y vuelves al estado anterior. Muy útil antes de cambios arriesgados.'
    },
    {
      id: 'ex6', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué necesitas activar en BIOS para que la virtualización vaya bien?',
      options: ['Secure Boot', 'XMP', 'VT-x (Intel) o AMD-V', 'TPM'],
      correct: 2,
      hint: 'Extensiones de virtualización del procesador.',
      explanation: 'VT-x (Intel) o AMD-V. Sin ello, VirtualBox usa solo software (lentísimo). Casi siempre vienen activadas por defecto.'
    },
    {
      id: 'ex7', type: 'tf', difficulty: 'medium', points: 20,
      prompt: 'Asignar 8 GB de RAM a la VM cuando tu PC tiene 8 GB es buena idea.',
      correct: false,
      hint: 'Tu host también necesita RAM.',
      explanation: 'FALSO. Te quedas sin RAM en el host. Como mucho, asigna 50-60% de tu RAM total. Mejor tener 16 GB o más si vas a usar VBox seriamente.'
    },
    {
      id: 'ex8', type: 'multi', difficulty: 'hard', points: 30,
      prompt: '¿Qué virtualizador viene integrado en Windows 11 Pro?',
      options: ['VMware Player', 'VirtualBox', 'Hyper-V', 'QEMU'],
      correct: 2,
      hint: 'Microsoft.',
      explanation: 'Hyper-V. Disponible en Pro/Enterprise/Education. Es de tipo 1 (más eficiente que VirtualBox). Se activa desde Características de Windows.'
    },
    {
      id: 'ex9', type: 'multi', difficulty: 'hard', points: 30,
      prompt: '¿Qué hace tipo de disco virtual "reservado dinámicamente"?',
      options: ['Reserva todo el espacio al crear', 'Crece a demanda según se usa', 'Solo lectura', 'Comprimido siempre'],
      correct: 1,
      hint: 'Ahorra espacio hasta usarlo.',
      explanation: 'Crece a demanda. Si creas un VDI de 50 GB pero solo usas 10 GB, en disco real ocupa 10 GB. Más lento que tamaño fijo pero ahorra espacio.'
    },
    {
      id: 'ex10', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué mejoran las Guest Additions?',
      options: ['Velocidad de internet', 'Integración entre host y guest (cursor, portapapeles, resolución)', 'Tamaño del disco', 'Activación de Windows'],
      correct: 1,
      hint: 'Drivers especiales para VBox.',
      explanation: 'Integración: cursor compartido, portapapeles común, redimensionamiento dinámico de ventana, drag & drop, mejor rendimiento gráfico.'
    }
  ],

  /* ============== MONTAJE ============== */
  'montaje': [
    {
      id: 'ex1', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Qué debes hacer ANTES de tocar componentes?',
      options: ['Cargarte con electricidad', 'Descargar electricidad estática (tocar radiador)', 'Mojar las manos', 'Frotarte contra una alfombra'],
      correct: 1,
      hint: 'La estática mata componentes.',
      explanation: 'Descarga estática. Toca un radiador metálico o usa pulsera antiestática. Los componentes son sensibles a descargas ESD invisibles que los matan.'
    },
    {
      id: 'ex2', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿En qué orden montas un PC normalmente?',
      options: ['Caja primero, todo después', 'CPU+RAM+M.2 en placa, luego al chasis', 'GPU primero', 'Cables primero, después componentes'],
      correct: 1,
      hint: 'Más fácil con la placa fuera.',
      explanation: 'CPU, RAM, M.2 y disipador en la placa FUERA del chasis (más fácil acceso). Luego metes todo en la caja. La GPU se instala al final.'
    },
    {
      id: 'ex3', type: 'tf', difficulty: 'basic', points: 15,
      prompt: 'Si la CPU no entra en el socket, debes presionar más fuerte.',
      correct: false,
      hint: 'NO ENCAJA = MAL ALINEADA.',
      explanation: 'FALSO. NUNCA fuerces. Si no entra es porque no está alineada (mira las flechas). Forzar dobla los pines (en LGA) y te quedas sin placa/CPU.'
    },
    {
      id: 'ex4', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué conector se olvida más frecuentemente al montar y causa que el PC no arranque?',
      options: ['ATX 24-pin', 'EPS 8-pin (CPU)', 'PCIe GPU', 'SATA'],
      correct: 1,
      hint: 'El cable del CPU.',
      explanation: 'EPS 8-pin (CPU). Sin él, la placa enciende pero la CPU no arranca. Error #1 de novatos. Comprueba SIEMPRE este conector.'
    },
    {
      id: 'ex5', type: 'multi', difficulty: 'medium', points: 20,
      prompt: 'Si tu placa tiene 4 slots DIMM y vas a usar 2 módulos, ¿dónde los pones?',
      options: ['Slots 1 y 2', 'Slots 3 y 4', 'Slots A2 y B2 (normalmente 2 y 4)', 'Da igual'],
      correct: 2,
      hint: 'Para activar dual channel.',
      explanation: 'Slots A2 y B2 (suelen ser el 2º y 4º). Lo indica el manual de la placa. Otros slots no activarían dual channel correctamente.'
    },
    {
      id: 'ex6', type: 'order', difficulty: 'medium', points: 25,
      prompt: 'Ordena los pasos de montaje en orden lógico:',
      items: [
        'Conectar Power_SW y cables del frontal',
        'Instalar CPU y RAM en la placa',
        'Atornillar placa al chasis',
        'Instalar GPU y conectar PCIe',
        'Aplicar pasta térmica y disipador'
      ],
      correctOrder: [1, 4, 2, 3, 0],
      hint: 'Empieza con la placa fuera del chasis.',
      explanation: 'CPU+RAM → pasta+disipador → placa al chasis → GPU → cables frontales. Hacerlo en este orden minimiza esfuerzo y errores.'
    },
    {
      id: 'ex7', type: 'tf', difficulty: 'medium', points: 20,
      prompt: 'Apretar el disipador en cruz, alternando tornillos poco a poco, es la forma correcta.',
      correct: true,
      hint: 'Distribución uniforme de presión.',
      explanation: 'VERDADERO. Apretar todos los tornillos a la vez deforma el IHS de la CPU y empeora el contacto térmico. Cruz alternada y gradual.'
    },
    {
      id: 'ex8', type: 'multi', difficulty: 'hard', points: 30,
      prompt: 'Quitas el plástico de la pasta pre-aplicada del disipador y... ¿qué pasa si te olvidas?',
      options: ['Nada, es decorativo', 'La temperatura sube descontroladamente', 'El disipador no encaja', 'Se pega para siempre'],
      correct: 1,
      hint: 'El plástico aísla térmicamente.',
      explanation: 'Temperaturas absurdas. El plástico bloquea la transferencia de calor. CPU se "throttlea" inmediatamente. Comprueba SIEMPRE antes de montar.'
    },
    {
      id: 'ex9', type: 'multi', difficulty: 'hard', points: 30,
      prompt: '¿Cómo enciendes una placa fuera del chasis para probar componentes?',
      options: ['No se puede', 'Tocando los pines Power_SW con un destornillador', 'Con un cable USB', 'Apretando el chip BIOS'],
      correct: 1,
      hint: 'Cortocircuito breve de los pines POWER.',
      explanation: 'Tocando los dos pines POWER_SW con un destornillador metálico (cortocircuito breve). Es como pulsar el botón Power del chasis.'
    },
    {
      id: 'ex10', type: 'tf', difficulty: 'medium', points: 20,
      prompt: 'Es mejor montar el PC sobre una alfombra para amortiguar caídas.',
      correct: false,
      hint: 'Alfombra = estática asegurada.',
      explanation: 'FALSO. La alfombra genera muchísima estática. Trabaja sobre una mesa de madera o una superficie antiestática.'
    }
  ],

  /* ============== DIAGNÓSTICO ============== */
  'diagnostico': [
    {
      id: 'ex1', type: 'multi', difficulty: 'basic', points: 15,
      prompt: 'PC enciende pero no da imagen. Tienes GPU dedicada. ¿Primer check?',
      options: ['Cambiar la fuente', 'Verificar que el cable de monitor está en la GPU, NO en la placa', 'Cambiar la placa', 'Reinstalar Windows'],
      correct: 1,
      hint: 'Error muy común con GPUs dedicadas.',
      explanation: 'Si tienes GPU, debes conectar el monitor a las SALIDAS DE LA GPU, no a las de la placa. La iGPU está desactivada cuando hay GPU dedicada.'
    },
    {
      id: 'ex2', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Qué herramienta usas para testear RAM exhaustivamente?',
      options: ['CrystalDiskInfo', 'HWInfo', 'Memtest86+', 'CPU-Z'],
      correct: 2,
      hint: 'Se ejecuta desde USB sin SO.',
      explanation: 'Memtest86+. Se carga desde USB sin SO. Hace pasadas de horas testeando cada celda. Es LA herramienta definitiva para RAM.'
    },
    {
      id: 'ex3', type: 'tf', difficulty: 'basic', points: 15,
      prompt: 'Un BSOD MEMORY_MANAGEMENT suele indicar problema con la RAM.',
      correct: true,
      hint: 'El nombre es bastante claro.',
      explanation: 'VERDADERO. Memoria mal asentada, defectuosa, o XMP inestable. Prueba: reasentar, probar con un solo módulo, desactivar XMP, ejecutar Memtest86+.'
    },
    {
      id: 'ex4', type: 'multi', difficulty: 'medium', points: 20,
      prompt: 'CPU al 100%, GPU al 50%. ¿Qué pasa?',
      options: ['CPU es el cuello de botella', 'GPU es el cuello de botella', 'Todo correcto', 'Sobrecarga de red'],
      correct: 0,
      hint: 'El componente al 100% es el que limita.',
      explanation: 'CPU es el cuello de botella. Soluciones: bajar configuración CPU-intensive del juego (densidad de NPCs, distancia draw), actualizar CPU, subir RAM.'
    },
    {
      id: 'ex5', type: 'multi', difficulty: 'medium', points: 20,
      prompt: 'Tu PC se reinicia solo bajo carga gaming pero funciona en idle. ¿Qué culpable?',
      options: ['SSD', 'RAM', 'Fuente insuficiente o defectuosa', 'Pantalla'],
      correct: 2,
      hint: 'Bajo carga se exigen más watios.',
      explanation: 'Fuente. En idle, el PC consume ~80W. Bajo carga gaming, 400-600W. Si la PSU es débil o defectuosa, no aguanta los picos y reinicia.'
    },
    {
      id: 'ex6', type: 'match', difficulty: 'medium', points: 25,
      prompt: 'Empareja BSOD con causa:',
      pairs: [
        { left: 'MEMORY_MANAGEMENT', right: 'RAM defectuosa' },
        { left: 'IRQL_NOT_LESS_OR_EQUAL', right: 'Driver problemático' },
        { left: 'WHEA_UNCORRECTABLE_ERROR', right: 'Error de CPU/overclock' },
        { left: 'INACCESSIBLE_BOOT_DEVICE', right: 'Disco o config SATA' }
      ],
      hint: 'Cada BSOD tiene su causa típica.',
      explanation: 'Los BSOD son crípticos pero útiles. Aprender los más comunes ahorra horas de diagnóstico. Apunta el código y busca online.'
    },
    {
      id: 'ex7', type: 'tf', difficulty: 'medium', points: 20,
      prompt: 'Las placas modernas tienen LEDs de debug (CPU, DRAM, VGA, BOOT) que indican dónde falla el arranque.',
      correct: true,
      hint: 'Por turnos durante el POST.',
      explanation: 'VERDADERO. Durante el POST, los LEDs se van apagando según pasan las fases. El LED que se queda iluminado indica el problema.'
    },
    {
      id: 'ex8', type: 'multi', difficulty: 'hard', points: 30,
      prompt: 'Tu PC va lento sin razón. CPU temp 95°C constantes. ¿Diagnóstico?',
      options: ['CPU rota, comprar otra', 'Throttling térmico: revisa refrigeración', 'RAM defectuosa', 'Reinstalar Windows'],
      correct: 1,
      hint: 'A 95°C la CPU baja velocidad automáticamente.',
      explanation: 'Throttling térmico. CPU baja velocidad para no fundirse → todo va lento. Causas: pasta seca, disipador mal puesto, polvo, ventiladores muertos.'
    },
    {
      id: 'ex9', type: 'multi', difficulty: 'hard', points: 30,
      prompt: '¿Qué herramienta muestra overlay de FPS, temperaturas y uso de CPU/GPU en juegos?',
      options: ['CPU-Z', 'HWInfo', 'MSI Afterburner + RTSS', 'CrystalDiskInfo'],
      correct: 2,
      hint: 'Combinación clásica para gaming.',
      explanation: 'MSI Afterburner (control GPU) + Rivatuner Statistics Server (overlay). Gratuito. Te dice exactamente cómo se comporta cada componente en juegos.'
    },
    {
      id: 'ex10', type: 'multi', difficulty: 'medium', points: 20,
      prompt: 'Tu disco aparece "0 bytes" o no aparece en Windows. ¿Primera prueba?',
      options: ['Formatear', 'Comprobar en Administrador de discos', 'Tirar el disco', 'Reinstalar Windows'],
      correct: 1,
      hint: 'A veces falta asignar letra o inicializar.',
      explanation: 'Administrador de discos (diskmgmt.msc). Puede aparecer sin letra asignada o sin inicializar. Antes de panico, comprueba ahí.'
    }
  ],

  /* ============== COMPATIBILIDAD ============== */
  'compatibilidad': [
    {
      id: 'ex1', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Una placa AM4 acepta un Ryzen 9 9950X?',
      options: ['Sí, AMD es retrocompatible', 'No, AM5 es socket distinto', 'Sí, con adaptador', 'Solo con BIOS actualizada'],
      correct: 1,
      hint: 'Sockets diferentes = físicamente incompatibles.',
      explanation: 'No. Ryzen 9000 usa socket AM5, no AM4. Son físicamente distintos. Ningún adaptador resuelve esto.'
    },
    {
      id: 'ex2', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Qué pasa si compras DDR5 para una placa DDR4?',
      options: ['Funciona pero a velocidad DDR4', 'Funciona perfectamente', 'No encaja físicamente (muesca distinta)', 'Necesitas firmware update'],
      correct: 2,
      hint: 'Las muescas están en posiciones diferentes.',
      explanation: 'No encaja. Las muescas están en posiciones distintas. Por mucho que parezcan similares, no entran. Ni adaptadores.'
    },
    {
      id: 'ex3', type: 'tf', difficulty: 'basic', points: 15,
      prompt: 'Antes de comprar piezas, herramientas como PCPartPicker detectan automáticamente incompatibilidades.',
      correct: true,
      hint: 'Es exactamente para eso.',
      explanation: 'VERDADERO. PCPartPicker te avisa de incompatibilidades (socket, formato, potencia insuficiente, etc). Uso recomendado SIEMPRE antes de comprar.'
    },
    {
      id: 'ex4', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué es la "QVL" de una placa base?',
      options: ['Quality Verified List', 'Qualified Vendors List (RAM certificada)', 'Quick Voltage Limit', 'Quasi-Verified Listing'],
      correct: 1,
      hint: 'Lista de RAM probada por el fabricante.',
      explanation: 'Qualified Vendors List. El fabricante de la placa lista qué módulos de RAM ha probado y certifica como compatibles a su velocidad anunciada.'
    },
    {
      id: 'ex5', type: 'multi', difficulty: 'medium', points: 20,
      prompt: 'Tienes una placa B650 antigua y compras un Ryzen 9 9950X. ¿Qué necesitas?',
      options: ['Nada, funcionará', 'BIOS actualizada a versión soportada', 'Cambiar socket', 'Adaptador'],
      correct: 1,
      hint: 'Las placas viejas necesitan BIOS update para CPUs nuevas.',
      explanation: 'BIOS actualizada. Las primeras placas AM5 necesitan flash a una versión que soporte Ryzen 9000. Con BIOS Flashback puedes hacerlo sin CPU.'
    },
    {
      id: 'ex6', type: 'match', difficulty: 'medium', points: 25,
      prompt: 'Empareja socket con chipset compatible:',
      pairs: [
        { left: 'LGA1700', right: 'Z790' },
        { left: 'LGA1851', right: 'Z890' },
        { left: 'AM5', right: 'X870E' },
        { left: 'AM4', right: 'B550' }
      ],
      hint: 'Cada socket tiene su ecosistema.',
      explanation: 'Conocer estas correspondencias es básico. Comprar mal puede costar 300-500€ en piezas inútiles.'
    },
    {
      id: 'ex7', type: 'tf', difficulty: 'medium', points: 20,
      prompt: 'Una GPU PCIe 5.0 funciona en una placa con slot PCIe 3.0, aunque a velocidad reducida.',
      correct: true,
      hint: 'PCIe es retrocompatible.',
      explanation: 'VERDADERO. PCIe es retrocompatible. Funcionará a velocidad Gen3. En gaming, la diferencia es mínima (las GPU rara vez saturan ni Gen3 x16).'
    },
    {
      id: 'ex8', type: 'multi', difficulty: 'hard', points: 30,
      prompt: 'Quieres meter una RTX 4090 (336 mm) en una caja Mid-Tower. ¿Qué debes verificar?',
      options: ['Que tenga LEDs RGB', 'Que la longitud máxima GPU de la caja sea >336 mm', 'Que tenga ventilador trasero', 'El precio'],
      correct: 1,
      hint: 'Las RTX 4090 son enormes.',
      explanation: 'Longitud máxima de GPU soportada. Muchas Mid-Tower aceptan máx 320 mm. Una 4090 de 336 mm no entrará. Mide siempre antes.'
    },
    {
      id: 'ex9', type: 'multi', difficulty: 'hard', points: 30,
      prompt: '¿Qué fuente necesita una RTX 4090 + Ryzen 9 9950X3D?',
      options: ['650W Bronze', '850W Gold', '1000W Gold', '500W Platinum'],
      correct: 2,
      hint: 'La 4090 sola pide 850W mínimo.',
      explanation: '1000W Gold mínimo. CPU 250W + GPU 450W + 100W resto ≈ 800W × 1.3 = 1040W. Margen para picos: 1000W como mínimo seguro.'
    },
    {
      id: 'ex10', type: 'tf', difficulty: 'medium', points: 20,
      prompt: 'Todos los disipadores AM4 son compatibles con AM5 sin necesidad de bracket adicional.',
      correct: false,
      hint: 'Muchos sí, pero no todos.',
      explanation: 'FALSO. Algunos sí, otros necesitan bracket AM5 (muchos fabricantes lo regalan gratis si lo pides). Verifica compatibilidad del fabricante antes.'
    }
  ],

  /* ============== REDES ============== */
  'redes': [
    {
      id: 'ex1', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Qué tipo de red es tu Wi-Fi doméstico?',
      options: ['PAN', 'WLAN', 'WAN', 'MAN'],
      correct: 1,
      hint: 'Wireless LAN.',
      explanation: 'WLAN (Wireless LAN). PAN es Bluetooth-tamaño. LAN es por cable en casa. WAN es internet. MAN cubre ciudades.'
    },
    {
      id: 'ex2', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Cuál es una IP privada?',
      options: ['8.8.8.8', '192.168.1.1', '142.250.184.46', '52.5.32.10'],
      correct: 1,
      hint: 'Rangos: 10.x, 172.16-31.x, 192.168.x.',
      explanation: '192.168.1.1 (rango privado RFC 1918). 8.8.8.8 es DNS público de Google. Las otras son IPs públicas.'
    },
    {
      id: 'ex3', type: 'tf', difficulty: 'basic', points: 15,
      prompt: 'La dirección MAC de una tarjeta de red puede cambiarse a otra distinta físicamente.',
      correct: false,
      hint: 'Es asignada por el fabricante.',
      explanation: 'FALSO. La MAC física es inmutable (asignada por el fabricante). Puedes "spoofear" (cambiarla por software temporalmente) pero la física no cambia.'
    },
    {
      id: 'ex4', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué protocolo asigna IPs automáticamente?',
      options: ['DNS', 'DHCP', 'ARP', 'HTTP'],
      correct: 1,
      hint: 'Tu router lo ejecuta.',
      explanation: 'DHCP (Dynamic Host Configuration Protocol). Tu router asigna IPs automáticas a dispositivos. DNS resuelve nombres, ARP resuelve MACs.'
    },
    {
      id: 'ex5', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Cuál es la velocidad máxima de Wi-Fi 6?',
      options: ['600 Mbps', '3.5 Gbps', '9.6 Gbps', '46 Gbps'],
      correct: 2,
      hint: '802.11ax.',
      explanation: '9.6 Gbps teóricos. Wi-Fi 5 (ac) era 3.5 Gbps. Wi-Fi 7 (be) sube a 46 Gbps. Velocidades reales son siempre menores que las teóricas.'
    },
    {
      id: 'ex6', type: 'match', difficulty: 'medium', points: 25,
      prompt: 'Empareja protocolo con uso:',
      pairs: [
        { left: 'HTTPS', right: 'Web cifrada' },
        { left: 'SSH', right: 'Shell remoto seguro' },
        { left: 'DNS', right: 'Resolver nombres' },
        { left: 'SMTP', right: 'Envío de email' }
      ],
      hint: 'Cada protocolo para algo específico.',
      explanation: 'Internet funciona sobre múltiples protocolos. Conocer los básicos es esencial para entender redes y diagnosticar problemas.'
    },
    {
      id: 'ex7', type: 'tf', difficulty: 'medium', points: 20,
      prompt: 'Conexión por cable Ethernet siempre tiene menor latencia que Wi-Fi.',
      correct: true,
      hint: 'Por física del medio.',
      explanation: 'VERDADERO. Wi-Fi añade latencia por la modulación radio. Para gaming competitivo o servidores, cable SIEMPRE preferible.'
    },
    {
      id: 'ex8', type: 'multi', difficulty: 'hard', points: 30,
      prompt: '¿Qué máscara de subred indica una red /24?',
      options: ['255.0.0.0', '255.255.0.0', '255.255.255.0', '255.255.255.255'],
      correct: 2,
      hint: '24 bits "encendidos".',
      explanation: '255.255.255.0 = /24 (24 bits a 1). Permite 254 hosts. /16 = 255.255.0.0, /8 = 255.0.0.0.'
    },
    {
      id: 'ex9', type: 'multi', difficulty: 'hard', points: 30,
      prompt: '¿Qué comando muestra la tabla de rutas en Windows?',
      options: ['ipconfig', 'route print', 'tracert', 'nslookup'],
      correct: 1,
      hint: 'Tabla de cómo enrutar paquetes.',
      explanation: '"route print". Muestra las rutas conocidas. En Linux: "ip route" o "route -n".'
    },
    {
      id: 'ex10', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué DNS público pertenece a Cloudflare?',
      options: ['8.8.8.8', '1.1.1.1', '9.9.9.9', '4.4.4.4'],
      correct: 1,
      hint: 'Cuatro unos.',
      explanation: '1.1.1.1 (Cloudflare). 8.8.8.8 es Google, 9.9.9.9 es Quad9 (con filtrado de malware). Cambiar DNS suele acelerar la navegación.'
    }
  ],

  /* ============== SEGURIDAD ============== */
  'seguridad': [
    {
      id: 'ex1', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Qué tipo de malware cifra tus datos y pide rescate?',
      options: ['Spyware', 'Worm', 'Ransomware', 'Adware'],
      correct: 2,
      hint: '"Ransom" = rescate en inglés.',
      explanation: 'Ransomware. Cifra archivos y pide pago (en criptomonedas) para descifrarlos. Famosos: WannaCry, REvil, LockBit. Devastador en empresas.'
    },
    {
      id: 'ex2', type: 'multi', difficulty: 'basic', points: 15,
      prompt: '¿Qué hace un keylogger?',
      options: ['Bloquea el teclado', 'Captura todo lo que tecleas', 'Acelera el teclado', 'Sincroniza teclas'],
      correct: 1,
      hint: '"Key" = tecla, "logger" = registrador.',
      explanation: 'Captura todo lo que tecleas: contraseñas, números de tarjeta, mensajes. Puede ser software o incluso hardware (USB intermedio).'
    },
    {
      id: 'ex3', type: 'tf', difficulty: 'basic', points: 15,
      prompt: 'Es seguro tener Windows Defender y otro antivirus activos a la vez.',
      correct: false,
      hint: 'Se pisan entre sí.',
      explanation: 'FALSO. Dos antivirus se pelean: ralentizan el sistema, generan falsos positivos. Si instalas otro, Windows Defender se desactiva automáticamente.'
    },
    {
      id: 'ex4', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué estrategia mínima de backup recomienda Igor?',
      options: ['1-1-1', '2-2-2', '3-2-1', '5-3-2'],
      correct: 2,
      hint: '3 copias, 2 medios, 1 fuera de casa.',
      explanation: '3-2-1: 3 copias de datos, en 2 medios distintos, con 1 copia fuera de casa (nube o disco externo en otra ubicación).'
    },
    {
      id: 'ex5', type: 'multi', difficulty: 'medium', points: 20,
      prompt: '¿Qué estándar Wi-Fi actual es el más seguro?',
      options: ['WEP', 'WPA', 'WPA2', 'WPA3'],
      correct: 3,
      hint: 'El más nuevo.',
      explanation: 'WPA3. WEP está roto desde 2001 (se craquea en 5 minutos). WPA y WPA2 tienen vulnerabilidades. WPA3 es el estándar moderno.'
    },
    {
      id: 'ex6', type: 'match', difficulty: 'medium', points: 25,
      prompt: 'Empareja tipo de malware con descripción:',
      pairs: [
        { left: 'Troyano', right: 'Disfrazado de software legítimo' },
        { left: 'Worm', right: 'Se propaga por red sin acción usuario' },
        { left: 'Rootkit', right: 'Se oculta con privilegios máximos' },
        { left: 'Cryptojacker', right: 'Usa tu CPU/GPU para minar criptos' }
      ],
      hint: 'Cada tipo de malware tiene su modus operandi.',
      explanation: 'Conocer los tipos ayuda a detectar y prevenir. Cada uno requiere defensa diferente.'
    },
    {
      id: 'ex7', type: 'tf', difficulty: 'medium', points: 20,
      prompt: 'Si pierdes la clave de recuperación de BitLocker y el TPM falla, tus datos están perdidos para siempre.',
      correct: true,
      hint: 'Sin clave no hay descifrado.',
      explanation: 'VERDADERO. BitLocker es muy seguro precisamente por esto. Guarda SIEMPRE la clave en cuenta Microsoft, USB seguro o impresa.'
    },
    {
      id: 'ex8', type: 'multi', difficulty: 'hard', points: 30,
      prompt: '¿Qué función de Windows 11 Pro permite probar software sospechoso en entorno desechable?',
      options: ['Windows Recall', 'Windows Sandbox', 'Hyper-V', 'WSL2'],
      correct: 1,
      hint: 'Caja de arena = sandbox.',
      explanation: 'Windows Sandbox. Crea entorno limpio efímero. Al cerrarlo, todo se borra. Ideal para probar instaladores sospechosos sin contaminar tu sistema.'
    },
    {
      id: 'ex9', type: 'multi', difficulty: 'hard', points: 30,
      prompt: '¿Qué tipo de autenticación 2FA es MÁS segura?',
      options: ['SMS al móvil', 'Email', 'App authenticator (Authy, Microsoft Authenticator)', 'Llamada telefónica'],
      correct: 2,
      hint: 'SMS es vulnerable a SIM swap.',
      explanation: 'App authenticator (TOTP). SMS es vulnerable a SIM swapping (atacante "porta" tu número). Email puede ser comprometido. Las apps son las más seguras.'
    },
    {
      id: 'ex10', type: 'tf', difficulty: 'medium', points: 20,
      prompt: 'Borrar un archivo permanentemente con Shift+Supr es suficiente para que sea irrecuperable.',
      correct: false,
      hint: 'Solo elimina la entrada de tabla.',
      explanation: 'FALSO. Solo marca el espacio como libre. Herramientas como Recuva o R-Studio pueden recuperarlo. Para borrado seguro: DBAN, sdelete o destrucción física del disco.'
    }
  ]

};

