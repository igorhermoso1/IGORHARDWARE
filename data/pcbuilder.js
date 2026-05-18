/* ============================================
   PC BUILDER SIMULATOR — Catálogo y clientes
   ============================================ */

/* CATÁLOGO DE PIEZAS (precios aproximados en €) */
const PC_CATALOG = {

  cpu: [
    /* INTEL */
    { id: 'cpu-i3-12100', name: 'Intel Core i3-12100', socket: 'LGA1700', price: 110, tdp: 60, gen: 12, igpu: true, cores: 4, threads: 8, perfGaming: 35, perfWork: 38, tier: 'low', brand: 'Intel' },
    { id: 'cpu-i3-14100', name: 'Intel Core i3-14100', socket: 'LGA1700', price: 145, tdp: 60, gen: 14, igpu: true, cores: 4, threads: 8, perfGaming: 42, perfWork: 45, tier: 'low', brand: 'Intel' },
    { id: 'cpu-i5-12400', name: 'Intel Core i5-12400', socket: 'LGA1700', price: 165, tdp: 65, gen: 12, igpu: true, cores: 6, threads: 12, perfGaming: 55, perfWork: 58, tier: 'mid', brand: 'Intel' },
    { id: 'cpu-i5-14400f', name: 'Intel Core i5-14400F', socket: 'LGA1700', price: 195, tdp: 65, gen: 14, igpu: false, cores: 10, threads: 16, perfGaming: 62, perfWork: 66, tier: 'mid', brand: 'Intel' },
    { id: 'cpu-i5-14600k', name: 'Intel Core i5-14600K', socket: 'LGA1700', price: 290, tdp: 125, gen: 14, igpu: true, cores: 14, threads: 20, perfGaming: 78, perfWork: 80, tier: 'high', brand: 'Intel' },
    { id: 'cpu-i7-14700k', name: 'Intel Core i7-14700K', socket: 'LGA1700', price: 410, tdp: 125, gen: 14, igpu: true, cores: 20, threads: 28, perfGaming: 86, perfWork: 90, tier: 'high', brand: 'Intel' },
    { id: 'cpu-i9-14900k', name: 'Intel Core i9-14900K', socket: 'LGA1700', price: 560, tdp: 125, gen: 14, igpu: true, cores: 24, threads: 32, perfGaming: 92, perfWork: 96, tier: 'top', brand: 'Intel' },
    { id: 'cpu-ult9-285k', name: 'Intel Core Ultra 9 285K', socket: 'LGA1851', price: 680, tdp: 125, gen: 15, igpu: true, cores: 24, threads: 24, perfGaming: 90, perfWork: 98, tier: 'top', brand: 'Intel' },
    /* AMD */
    { id: 'cpu-r3-5600g', name: 'AMD Ryzen 3 5600G', socket: 'AM4', price: 115, tdp: 65, gen: 5, igpu: true, cores: 6, threads: 12, perfGaming: 45, perfWork: 50, tier: 'low', brand: 'AMD' },
    { id: 'cpu-r5-5600', name: 'AMD Ryzen 5 5600', socket: 'AM4', price: 130, tdp: 65, gen: 5, igpu: false, cores: 6, threads: 12, perfGaming: 56, perfWork: 58, tier: 'low', brand: 'AMD' },
    { id: 'cpu-r5-7600', name: 'AMD Ryzen 5 7600', socket: 'AM5', price: 200, tdp: 65, gen: 7, igpu: true, cores: 6, threads: 12, perfGaming: 70, perfWork: 70, tier: 'mid', brand: 'AMD' },
    { id: 'cpu-r5-7600x3d', name: 'AMD Ryzen 5 7600X3D', socket: 'AM5', price: 320, tdp: 65, gen: 7, igpu: true, cores: 6, threads: 12, perfGaming: 84, perfWork: 70, tier: 'mid', brand: 'AMD' },
    { id: 'cpu-r7-7800x3d', name: 'AMD Ryzen 7 7800X3D', socket: 'AM5', price: 420, tdp: 120, gen: 7, igpu: true, cores: 8, threads: 16, perfGaming: 94, perfWork: 80, tier: 'high', brand: 'AMD' },
    { id: 'cpu-r7-9700x', name: 'AMD Ryzen 7 9700X', socket: 'AM5', price: 380, tdp: 65, gen: 9, igpu: true, cores: 8, threads: 16, perfGaming: 80, perfWork: 84, tier: 'high', brand: 'AMD' },
    { id: 'cpu-r7-9800x3d', name: 'AMD Ryzen 7 9800X3D', socket: 'AM5', price: 530, tdp: 120, gen: 9, igpu: true, cores: 8, threads: 16, perfGaming: 100, perfWork: 86, tier: 'top', brand: 'AMD' },
    { id: 'cpu-r9-9950x', name: 'AMD Ryzen 9 9950X', socket: 'AM5', price: 660, tdp: 170, gen: 9, igpu: true, cores: 16, threads: 32, perfGaming: 88, perfWork: 100, tier: 'top', brand: 'AMD' }
  ],

  mobo: [
    /* LGA1700 */
    { id: 'mb-h610m', name: 'ASRock H610M-HVS DDR4', socket: 'LGA1700', chipset: 'H610', ram: 'DDR4', maxRam: 64, factor: 'mATX', price: 75, m2: 1, sata: 4, tier: 'low' },
    { id: 'mb-b660m-d4', name: 'MSI PRO B660M-A DDR4', socket: 'LGA1700', chipset: 'B660', ram: 'DDR4', maxRam: 128, factor: 'mATX', price: 115, m2: 2, sata: 4, tier: 'low' },
    { id: 'mb-b760-d5', name: 'Gigabyte B760 GAMING X DDR5', socket: 'LGA1700', chipset: 'B760', ram: 'DDR5', maxRam: 192, factor: 'ATX', price: 170, m2: 3, sata: 4, tier: 'mid' },
    { id: 'mb-z790-tomahawk', name: 'MSI MAG Z790 TOMAHAWK WIFI', socket: 'LGA1700', chipset: 'Z790', ram: 'DDR5', maxRam: 192, factor: 'ATX', price: 285, m2: 4, sata: 6, tier: 'high', wifi: true },
    /* LGA1851 */
    { id: 'mb-z890-hero', name: 'ASUS ROG MAXIMUS Z890 HERO', socket: 'LGA1851', chipset: 'Z890', ram: 'DDR5', maxRam: 256, factor: 'ATX', price: 720, m2: 5, sata: 6, tier: 'top', wifi: true },
    /* AM4 */
    { id: 'mb-a520m', name: 'MSI A520M-A PRO', socket: 'AM4', chipset: 'A520', ram: 'DDR4', maxRam: 64, factor: 'mATX', price: 65, m2: 1, sata: 4, tier: 'low' },
    { id: 'mb-b550-tuf', name: 'ASUS TUF GAMING B550-PLUS', socket: 'AM4', chipset: 'B550', ram: 'DDR4', maxRam: 128, factor: 'ATX', price: 130, m2: 2, sata: 6, tier: 'mid' },
    /* AM5 */
    { id: 'mb-a620m', name: 'ASRock A620M-HDV/M.2', socket: 'AM5', chipset: 'A620', ram: 'DDR5', maxRam: 128, factor: 'mATX', price: 110, m2: 1, sata: 4, tier: 'low' },
    { id: 'mb-b650-tomahawk', name: 'MSI MAG B650 TOMAHAWK WIFI', socket: 'AM5', chipset: 'B650', ram: 'DDR5', maxRam: 192, factor: 'ATX', price: 220, m2: 3, sata: 6, tier: 'mid', wifi: true },
    { id: 'mb-x670e-hero', name: 'ASUS ROG CROSSHAIR X670E HERO', socket: 'AM5', chipset: 'X670E', ram: 'DDR5', maxRam: 192, factor: 'ATX', price: 580, m2: 5, sata: 6, tier: 'high', wifi: true },
    { id: 'mb-x870-master', name: 'Gigabyte X870 AORUS MASTER', socket: 'AM5', chipset: 'X870', ram: 'DDR5', maxRam: 256, factor: 'ATX', price: 480, m2: 4, sata: 6, tier: 'top', wifi: true }
  ],

  ram: [
    /* DDR4 */
    { id: 'ram-cv-8-3200', name: 'Corsair Vengeance LPX 8GB DDR4-3200', type: 'DDR4', size: 8, speed: 3200, modules: 1, price: 25, tier: 'low' },
    { id: 'ram-cv-16-3200-2x8', name: 'Corsair Vengeance LPX 16GB (2×8) DDR4-3200', type: 'DDR4', size: 16, speed: 3200, modules: 2, price: 48, tier: 'low' },
    { id: 'ram-trz-32-3600', name: 'G.Skill Trident Z 32GB (2×16) DDR4-3600 CL16', type: 'DDR4', size: 32, speed: 3600, modules: 2, price: 95, tier: 'mid' },
    /* DDR5 */
    { id: 'ram-fury-16-5600', name: 'Kingston Fury Beast 16GB (2×8) DDR5-5600', type: 'DDR5', size: 16, speed: 5600, modules: 2, price: 75, tier: 'low' },
    { id: 'ram-fury-32-6000', name: 'Kingston Fury Beast 32GB (2×16) DDR5-6000 CL30', type: 'DDR5', size: 32, speed: 6000, modules: 2, price: 130, tier: 'mid' },
    { id: 'ram-tz-32-6400', name: 'G.Skill Trident Z5 RGB 32GB (2×16) DDR5-6400 CL32', type: 'DDR5', size: 32, speed: 6400, modules: 2, price: 175, tier: 'mid' },
    { id: 'ram-tz-64-6000', name: 'G.Skill Trident Z5 64GB (2×32) DDR5-6000', type: 'DDR5', size: 64, speed: 6000, modules: 2, price: 280, tier: 'high' },
    { id: 'ram-tz-96-6400', name: 'G.Skill Trident Z5 96GB (2×48) DDR5-6400', type: 'DDR5', size: 96, speed: 6400, modules: 2, price: 460, tier: 'top' }
  ],

  storage: [
    { id: 'st-hdd-1tb', name: 'Seagate Barracuda 1TB HDD 7200rpm', type: 'HDD', size: 1000, conn: 'SATA', speed: 200, price: 45, tier: 'low' },
    { id: 'st-hdd-4tb', name: 'WD Blue 4TB HDD 5400rpm', type: 'HDD', size: 4000, conn: 'SATA', speed: 180, price: 95, tier: 'low' },
    { id: 'st-sata-500', name: 'Crucial MX500 500GB SATA SSD', type: 'SSD-SATA', size: 500, conn: 'SATA', speed: 550, price: 50, tier: 'low' },
    { id: 'st-sata-1tb', name: 'Samsung 870 EVO 1TB SATA SSD', type: 'SSD-SATA', size: 1000, conn: 'SATA', speed: 560, price: 90, tier: 'low' },
    { id: 'st-nvme3-500', name: 'Kingston NV2 500GB NVMe PCIe 3.0', type: 'NVMe-Gen3', size: 500, conn: 'M.2', speed: 3500, price: 45, tier: 'low' },
    { id: 'st-nvme4-1tb', name: 'Samsung 980 PRO 1TB NVMe PCIe 4.0', type: 'NVMe-Gen4', size: 1000, conn: 'M.2', speed: 7000, price: 110, tier: 'mid' },
    { id: 'st-nvme4-2tb', name: 'WD Black SN850X 2TB NVMe PCIe 4.0', type: 'NVMe-Gen4', size: 2000, conn: 'M.2', speed: 7300, price: 190, tier: 'mid' },
    { id: 'st-nvme5-2tb', name: 'Crucial T705 2TB NVMe PCIe 5.0', type: 'NVMe-Gen5', size: 2000, conn: 'M.2', speed: 14000, price: 330, tier: 'high' },
    { id: 'st-nvme4-4tb', name: 'Samsung 990 PRO 4TB NVMe PCIe 4.0', type: 'NVMe-Gen4', size: 4000, conn: 'M.2', speed: 7450, price: 380, tier: 'high' }
  ],

  gpu: [
    /* iGPU para mostrar como "sin gráfica dedicada" */
    { id: 'gpu-none', name: '(Sin GPU dedicada — usar iGPU del procesador)', vram: 0, tdp: 0, length: 0, price: 0, perfGaming: 0, tier: 'none' },
    /* NVIDIA */
    { id: 'gpu-rtx4060', name: 'NVIDIA GeForce RTX 4060 8GB', brand: 'NVIDIA', vram: 8, tdp: 115, length: 240, price: 320, perfGaming: 55, tier: 'low' },
    { id: 'gpu-rtx4060ti', name: 'NVIDIA GeForce RTX 4060 Ti 16GB', brand: 'NVIDIA', vram: 16, tdp: 165, length: 280, price: 470, perfGaming: 65, tier: 'mid' },
    { id: 'gpu-rtx4070', name: 'NVIDIA GeForce RTX 4070 12GB', brand: 'NVIDIA', vram: 12, tdp: 200, length: 290, price: 600, perfGaming: 75, tier: 'mid' },
    { id: 'gpu-rtx4070tisuper', name: 'NVIDIA GeForce RTX 4070 Ti Super 16GB', brand: 'NVIDIA', vram: 16, tdp: 285, length: 305, price: 850, perfGaming: 85, tier: 'high' },
    { id: 'gpu-rtx4080super', name: 'NVIDIA GeForce RTX 4080 Super 16GB', brand: 'NVIDIA', vram: 16, tdp: 320, length: 320, price: 1100, perfGaming: 92, tier: 'high' },
    { id: 'gpu-rtx5080', name: 'NVIDIA GeForce RTX 5080 16GB', brand: 'NVIDIA', vram: 16, tdp: 360, length: 320, price: 1350, perfGaming: 96, tier: 'top' },
    { id: 'gpu-rtx5090', name: 'NVIDIA GeForce RTX 5090 32GB', brand: 'NVIDIA', vram: 32, tdp: 575, length: 360, price: 2400, perfGaming: 100, tier: 'top' },
    /* AMD */
    { id: 'gpu-rx7600', name: 'AMD Radeon RX 7600 8GB', brand: 'AMD', vram: 8, tdp: 165, length: 240, price: 270, perfGaming: 50, tier: 'low' },
    { id: 'gpu-rx7700xt', name: 'AMD Radeon RX 7700 XT 12GB', brand: 'AMD', vram: 12, tdp: 245, length: 280, price: 450, perfGaming: 70, tier: 'mid' },
    { id: 'gpu-rx7800xt', name: 'AMD Radeon RX 7800 XT 16GB', brand: 'AMD', vram: 16, tdp: 263, length: 290, price: 550, perfGaming: 78, tier: 'mid' },
    { id: 'gpu-rx7900xtx', name: 'AMD Radeon RX 7900 XTX 24GB', brand: 'AMD', vram: 24, tdp: 355, length: 320, price: 950, perfGaming: 90, tier: 'high' },
    /* Intel */
    { id: 'gpu-b580', name: 'Intel Arc B580 12GB', brand: 'Intel', vram: 12, tdp: 190, length: 250, price: 280, perfGaming: 55, tier: 'low' }
  ],

  psu: [
    { id: 'psu-450b', name: 'Be Quiet! System Power 10 450W 80+ Bronze', watt: 450, cert: 'Bronze', modular: 'no', price: 55, tier: 'low' },
    { id: 'psu-550b', name: 'Corsair CV550 550W 80+ Bronze', watt: 550, cert: 'Bronze', modular: 'no', price: 65, tier: 'low' },
    { id: 'psu-650g-semi', name: 'EVGA SuperNOVA 650 GT 650W 80+ Gold Semi', watt: 650, cert: 'Gold', modular: 'semi', price: 95, tier: 'mid' },
    { id: 'psu-750g-mod', name: 'Corsair RM750e 750W 80+ Gold Full Modular ATX 3.1', watt: 750, cert: 'Gold', modular: 'full', price: 130, tier: 'mid' },
    { id: 'psu-850g-mod', name: 'Be Quiet! Pure Power 12 M 850W 80+ Gold ATX 3.0', watt: 850, cert: 'Gold', modular: 'full', price: 155, tier: 'high' },
    { id: 'psu-1000p-mod', name: 'Seasonic PRIME PX-1000 1000W 80+ Platinum', watt: 1000, cert: 'Platinum', modular: 'full', price: 240, tier: 'high' },
    { id: 'psu-1200p-mod', name: 'Corsair HX1200 1200W 80+ Platinum ATX 3.1', watt: 1200, cert: 'Platinum', modular: 'full', price: 290, tier: 'top' },
    { id: 'psu-1600t-mod', name: 'Seasonic PRIME TX-1600 1600W 80+ Titanium', watt: 1600, cert: 'Titanium', modular: 'full', price: 480, tier: 'top' }
  ],

  cooler: [
    { id: 'cl-stock', name: '(Disipador stock incluido con la CPU)', type: 'air', tdpMax: 65, height: 50, price: 0, tier: 'none' },
    { id: 'cl-arctic36', name: 'Arctic Freezer 36 (aire, single tower)', type: 'air', tdpMax: 200, height: 159, price: 32, tier: 'low' },
    { id: 'cl-peerless', name: 'Thermalright Peerless Assassin 120 SE', type: 'air', tdpMax: 245, height: 157, price: 40, tier: 'mid' },
    { id: 'cl-nhd15', name: 'Noctua NH-D15 chromax (aire dual tower)', type: 'air', tdpMax: 250, height: 165, price: 110, tier: 'high' },
    { id: 'cl-aio240', name: 'Arctic Liquid Freezer III 240mm (AIO)', type: 'aio', tdpMax: 280, height: 38, radSize: 240, price: 90, tier: 'mid' },
    { id: 'cl-aio280', name: 'NZXT Kraken 280 RGB (AIO)', type: 'aio', tdpMax: 300, height: 30, radSize: 280, price: 170, tier: 'high' },
    { id: 'cl-aio360', name: 'Lian Li Galahad II Trinity 360 (AIO)', type: 'aio', tdpMax: 350, height: 30, radSize: 360, price: 200, tier: 'top' }
  ],

  case: [
    { id: 'ch-h510', name: 'NZXT H510 Flow (mid tower, mATX/ATX)', factor: ['ATX', 'mATX', 'ITX'], maxGpuLen: 381, maxCoolerH: 165, maxRad: 280, price: 90, tier: 'low' },
    { id: 'ch-4000d', name: 'Corsair 4000D Airflow (mid tower, ATX)', factor: ['ATX', 'mATX', 'ITX'], maxGpuLen: 360, maxCoolerH: 170, maxRad: 360, price: 110, tier: 'mid' },
    { id: 'ch-pop-air', name: 'Fractal Design Pop Air RGB', factor: ['ATX', 'mATX', 'ITX'], maxGpuLen: 405, maxCoolerH: 170, maxRad: 360, price: 95, tier: 'mid' },
    { id: 'ch-meshify-2', name: 'Fractal Design Meshify 2 Compact', factor: ['ATX', 'mATX', 'ITX'], maxGpuLen: 360, maxCoolerH: 169, maxRad: 360, price: 145, tier: 'high' },
    { id: 'ch-o11d', name: 'Lian Li O11 Dynamic EVO', factor: ['ATX', 'mATX', 'ITX'], maxGpuLen: 422, maxCoolerH: 167, maxRad: 420, price: 180, tier: 'high' },
    { id: 'ch-itx-q58', name: 'Cooler Master NR200P (Mini-ITX)', factor: ['ITX'], maxGpuLen: 330, maxCoolerH: 155, maxRad: 280, price: 110, tier: 'mid' }
  ]

};

/* ============================================
   CLIENTES — Petición + presupuesto + contexto
   ============================================ */

const PC_CLIENTS = [
  {
    id: 'cli-ofi-1',
    avatar: '👩‍💼',
    name: 'Marisa',
    age: 47,
    context: 'Oficina',
    job: 'Administrativa de gestoría',
    budget: 600,
    needs: 'Quiero un PC para Microsoft Office, gestiones online, contabilidad y videollamadas. Nada de juegos.',
    longText: 'Hola, soy Marisa. En la gestoría trabajamos con Excel todo el día, alguna videollamada con clientes, y a veces tenemos 30 pestañas del navegador abiertas a la vez con AEAT, Seguridad Social, banco... Nada raro. NO juego a videojuegos. Tampoco necesito que sea bonito por dentro. Solo que vaya rápido y aguante 5 años sin quejarse.',
    requirements: {
      maxBudget: 650,
      minRam: 16,
      minStorage: 500,
      needsGPU: false,
      preferIGPU: true,
      noisePreference: 'silent',
      formFactor: ['mATX', 'ATX'],
      hint: 'No necesita GPU dedicada. Un i5 con iGPU + 16GB + SSD NVMe es la mezcla perfecta. Ahorra en el resto.'
    }
  },
  {
    id: 'cli-stud-1',
    avatar: '👨‍🎓',
    name: 'Aitor',
    age: 17,
    context: 'Personal / Estudiante',
    job: 'Estudiante de 2º Bachillerato',
    budget: 900,
    needs: 'Quiero jugar a Fortnite, Valorant y Counter-Strike a 144 FPS en 1080p. Y a veces editar vídeos cortos para TikTok.',
    longText: 'Bro, necesito que vaya bien para mis games. Lo único: Fortnite, Valorant y CS competitivo, así que necesito MUCHOS FPS, mínimo 144. También subo cosillas a TikTok así que algo de edición en CapCut. No necesito 4K, con 1080p sirve. Mi padre me ha dado 900€ y me va a matar si me paso. Help.',
    requirements: {
      maxBudget: 950,
      minRam: 16,
      minStorage: 1000,
      needsGPU: true,
      minGpuPerf: 50,
      noisePreference: 'normal',
      formFactor: ['ATX', 'mATX'],
      hint: 'Gaming competitivo 1080p: prioriza FPS. Una RTX 4060 / RX 7600 + Ryzen 5 7600 / i5-14400F + 16GB DDR5 es ideal. SSD NVMe de 1TB.'
    }
  },
  {
    id: 'cli-gamer-1',
    avatar: '🧑‍💻',
    name: 'Cristian',
    age: 28,
    context: 'Gaming Hardcore',
    job: 'Streamer ocasional',
    budget: 2200,
    needs: 'Quiero un PC top para gaming 1440p Ultra a 144Hz y streamear sin lag. Es para los próximos 6-7 años.',
    longText: 'Lo quiero TOP. Voy a jugar a 1440p Ultra (Cyberpunk, Hogwarts Legacy, lo que salga), a 144 FPS mínimo. Quiero hacer streaming en Twitch sin que se note caídas. No me importa el ruido. Quiero que aguante mínimo 6 años sin tener que tocar nada. Tengo 2200€ y la idea es no pasarme mucho.',
    requirements: {
      maxBudget: 2300,
      minRam: 32,
      minStorage: 2000,
      needsGPU: true,
      minGpuPerf: 80,
      noisePreference: 'normal',
      formFactor: ['ATX'],
      hint: 'Streamer + 1440p Ultra: Ryzen 7 7800X3D / 9800X3D + RTX 4070 Ti Super / 4080 + 32GB DDR5 + NVMe Gen4 2TB. AIO 280/360 para mantener temperatura baja.'
    }
  },
  {
    id: 'cli-pro-1',
    avatar: '🎨',
    name: 'Sandra',
    age: 35,
    context: 'Trabajo Creativo',
    job: 'Diseñadora gráfica y editora de vídeo 4K',
    budget: 2800,
    needs: 'Necesito un PC para edición de vídeo 4K en DaVinci Resolve y Premiere Pro. Algo de modelado 3D ocasional.',
    longText: 'Trabajo en Premiere y DaVinci todo el día con material 4K, multipista, color grading. También uso Blender para algunos proyectos. Necesito MUCHA RAM (64 GB), muchos núcleos en CPU, GPU con bastante VRAM y un SSD super rápido para los scratch disks. No me importa el ruido, está en mi estudio.',
    requirements: {
      maxBudget: 2900,
      minRam: 64,
      minStorage: 2000,
      needsGPU: true,
      minGpuPerf: 75,
      minCores: 12,
      noisePreference: 'normal',
      formFactor: ['ATX'],
      hint: 'Producción 4K: Ryzen 9 9950X / i7-14700K + 64GB DDR5 + RTX 4070 Ti Super (CUDA acelera Adobe) + NVMe Gen4 2TB+. PSU 850-1000W Gold.'
    }
  },
  {
    id: 'cli-edu-1',
    avatar: '👨‍🏫',
    name: 'Don Bartolo',
    age: 58,
    context: 'Aula de Informática',
    job: 'Profesor de SMR',
    budget: 750,
    needs: 'PC para aula de FP que tenga buena CPU multihilo (los alumnos virtualizan mucho) y suficiente RAM. Sin GPU dedicada.',
    longText: 'Compañero, mira: tengo que comprar 20 PCs para mi aula. Cada alumno virtualiza 2-3 VMs simultáneamente (VirtualBox, Hyper-V). No necesitan jugar a nada, pero quiero MUCHOS NÚCLEOS para virtualización. 750€ por equipo. Que vaya silencioso, los chavales son ya bastante ruidosos.',
    requirements: {
      maxBudget: 800,
      minRam: 32,
      minStorage: 500,
      needsGPU: false,
      preferIGPU: true,
      minCores: 8,
      noisePreference: 'silent',
      formFactor: ['mATX', 'ATX'],
      hint: 'Virtualización: necesitas núcleos y RAM. Ryzen 7 7700 / i5-14600K + 32GB + iGPU es ideal. Skip GPU dedicada, ahorra dinero.'
    }
  },
  {
    id: 'cli-htpc-1',
    avatar: '🛋',
    name: 'Quique',
    age: 41,
    context: 'Personal / Salón',
    job: 'Padre de familia',
    budget: 550,
    needs: 'PC para el salón que sirva como Plex/Jellyfin server y para Netflix/Disney+ en 4K HDR.',
    longText: 'Quiero algo que vaya en el mueble del salón, no muy ruidoso. Lo principal: servirá pelis 4K HDR a la tele por Plex y a veces correrá Jellyfin. Que sea pequeño (Mini-ITX si puede ser), eficiente en consumo (consume 24/7) y que NO haga ruido. No juego.',
    requirements: {
      maxBudget: 600,
      minRam: 16,
      minStorage: 2000,
      needsGPU: false,
      preferIGPU: true,
      noisePreference: 'silent',
      formFactor: ['ITX', 'mATX'],
      hint: 'HTPC silencioso: Mini-ITX + Ryzen 5 7600 (iGPU AMD soporta AV1) + 16GB + HDD grande para Plex + caja ITX. Fuente 450-550W silenciosa.'
    }
  },
  {
    id: 'cli-ia-1',
    avatar: '🤖',
    name: 'Iván',
    age: 31,
    context: 'IA / Machine Learning',
    job: 'Ingeniero de ML',
    budget: 3500,
    needs: 'Entreno modelos de IA y corro LLMs locales (Llama 70B). Necesito MUCHÍSIMA VRAM y CPU potente.',
    longText: 'Necesito un PC para entrenar redes neuronales y servir LLMs como Llama 70B en local. Lo crítico: VRAM (mínimo 24GB en GPU), RAM 64GB, CPU multihilo. Y un SSD enorme y rápido para datasets. No me importa el precio si está bien gastado.',
    requirements: {
      maxBudget: 3600,
      minRam: 64,
      minStorage: 2000,
      needsGPU: true,
      minVRAM: 24,
      minGpuPerf: 88,
      minCores: 12,
      noisePreference: 'normal',
      formFactor: ['ATX'],
      hint: 'IA local exige VRAM. RTX 4090/5090 (24-32GB), Ryzen 9 9950X o i9-14900K, 64GB DDR5, NVMe Gen5. PSU 1000W+.'
    }
  },
  {
    id: 'cli-cafe-1',
    avatar: '☕',
    name: 'Lola',
    age: 52,
    context: 'Pequeño negocio',
    job: 'Dueña de cafetería',
    budget: 400,
    needs: 'PC para el TPV de mi cafetería. Solo necesita ir bien con un software de gestión y poco más.',
    longText: 'Mi PC del bar tiene 12 años y ya petardea. Solo lo uso para el TPV (un programa muy básico de Microsoft que gestiona ventas), imprimir tickets y poco más. No tengo presupuesto para fardar. Que sea barato pero que no se rompa en 2 años.',
    requirements: {
      maxBudget: 450,
      minRam: 8,
      minStorage: 240,
      needsGPU: false,
      preferIGPU: true,
      noisePreference: 'silent',
      formFactor: ['mATX', 'ITX'],
      hint: 'Equipo TPV: lo más básico. i3-12100 / Ryzen 3 5600G + 8-16GB + SSD SATA 500GB. Fuente Bronze de 450W. Sin GPU.'
    }
  }
];
