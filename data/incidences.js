/* ============================================
   RESOLUTORIO DE INCIDENCIAS
   Cada incidencia es una secuencia de pasos.
   En cada paso se ofrecen 2-4 acciones.
   Una es la correcta (suma puntos),
   otras son aceptables o erróneas.
   ============================================ */

const INCIDENCES = [

  /* ============== INCIDENCIA 1: NO ENCIENDE ============== */
  {
    id: 'inc-no-enciende',
    icon: '🔌',
    title: 'PC que no enciende',
    difficulty: 'basic',
    rewardBase: 50,
    customer: '👨 Roberto',
    presentation: 'Mi PC ayer iba perfecto. Hoy lo enciendo y nada. Ningún ruido, ningún LED. Lo enchufo y al darle al botón... muerto. Ayúdame.',
    steps: [
      {
        situation: '🤔 Estás frente al PC. Pulsas el botón de encendido: nada. Ni ventiladores, ni LEDs. ¿Por dónde empezarías?',
        options: [
          { text: 'Abrir directamente la caja y mirar la placa base', verdict: 'wrong', feedback: 'Saltarte la inspección externa es perder tiempo y puede ser peligroso. Antes hay que descartar lo simple.' },
          { text: 'Verificar que el cable de alimentación esté bien conectado y el interruptor trasero de la PSU en ON', verdict: 'correct', feedback: '✅ Correcto. Siempre se empieza por lo más simple: cable de pared, interruptor de la fuente y regleta. El 30% de las "averías" son cables sueltos.' },
          { text: 'Cambiar la fuente de alimentación directamente', verdict: 'wrong', feedback: 'Sustituir piezas sin diagnosticar es lo peor que puedes hacer. Pierdes tiempo y dinero.' },
          { text: 'Reformatear el disco duro', verdict: 'wrong', feedback: '😅 Si no enciende, el disco es lo de menos. Imposible formatear algo apagado.' }
        ]
      },
      {
        situation: '✓ El cable está bien y el interruptor en ON. Sigue muerto. ¿Siguiente paso?',
        options: [
          { text: 'Probar otra toma de corriente y otro cable de alimentación', verdict: 'correct', feedback: '✅ Bien pensado. Una toma con falsa fase o un cable IEC C13 roto puede dar este síntoma. Toma 30 segundos descartarlo.' },
          { text: 'Cambiar la placa base inmediatamente', verdict: 'wrong', feedback: 'No descartamos primero alimentación. Es prematuro.' },
          { text: 'Conectar el PC a un monitor diferente', verdict: 'wrong', feedback: 'No enciende: ningún monitor te va a mostrar nada.' }
        ]
      },
      {
        situation: '✓ Con otro cable y otra toma, sigue sin dar señal. Abres el lateral. ¿Qué miras primero?',
        options: [
          { text: 'Verificar que el conector ATX 24-pin y el EPS 8-pin estén bien insertados', verdict: 'correct', feedback: '✅ Perfecto. El EPS 8-pin (alimentación CPU) es el OLVIDADO más común. Sin él, el PC no arranca aunque la placa parpadee.' },
          { text: 'Quitar la RAM y mirarla con lupa', verdict: 'wrong', feedback: 'No tiene sentido en este punto. Sin alimentación, la RAM da igual.' },
          { text: 'Quitar la GPU primero', verdict: 'wrong', feedback: 'No es prioritario. Primero alimentación, después componentes.' }
        ]
      },
      {
        situation: '✓ Cables ATX y EPS bien. ¿Cómo verificas si la FUENTE realmente funciona?',
        options: [
          { text: 'Hacer el "paperclip test": cortocircuitar el pin verde con un negro del ATX 24-pin', verdict: 'correct', feedback: '✅ Genial. Si los ventiladores de la fuente arrancan al cortocircuitar verde-negro, la PSU enciende. Si no, está muerta.' },
          { text: 'Conectar la fuente a un secador para probar la potencia', verdict: 'wrong', feedback: '😱 NO. Eso quemaría el secador, la fuente o tu mano.' },
          { text: 'Medir el voltaje de la pared con un multímetro', verdict: 'wrong', feedback: 'Ya descartamos pared antes. Ahora toca la fuente.' }
        ]
      },
      {
        situation: '✓ La fuente SÍ arranca con el paperclip. El problema no es la PSU. ¿Qué pruebas ahora?',
        options: [
          { text: 'Probar Clear CMOS: quitar la pila CR2032 unos 60 segundos', verdict: 'correct', feedback: '✅ Buena. Una BIOS corrupta o configuración mala puede impedir arranque. Clear CMOS devuelve a valores de fábrica.' },
          { text: 'Llamar al cliente y decir que es la placa, hay que cambiarla', verdict: 'wrong', feedback: 'No hay diagnóstico aún. Solo decir "la placa" sin pruebas es chapuza.' },
          { text: 'Aplicar pasta térmica nueva', verdict: 'wrong', feedback: 'No tiene sentido aún. Y la pasta no se cambia por capricho.' }
        ]
      },
      {
        situation: '✓ Clear CMOS hecho. Reconectas todo. Al pulsar Power... ¡Bingo! Arranca normalmente. ¿Qué le dirías al cliente?',
        options: [
          { text: '"Era la BIOS, le he hecho un Clear CMOS. Mire que las configuraciones de XMP/overclock estén bien si configuró algo recientemente."', verdict: 'correct', feedback: '✅ Excelente diagnóstico. Comunicas el problema y explicas cómo evitar que se repita.' },
          { text: '"Esto es magia, no me pregunte."', verdict: 'wrong', feedback: 'Un técnico no es brujo. Hay que comunicar.' },
          { text: '"Le he cambiado la placa base." (sin haberla cambiado)', verdict: 'wrong', feedback: 'NUNCA mientas al cliente. Es ilegal y rompe la confianza.' }
        ]
      }
    ]
  },

  /* ============== INCIDENCIA 2: BSOD ============== */
  {
    id: 'inc-bsod',
    icon: '💀',
    title: 'Pantallazos azules aleatorios',
    difficulty: 'medium',
    rewardBase: 70,
    customer: '👩 Marta',
    presentation: 'Mi PC va bien, pero CADA POCO me sale el pantallazo azul. A veces juego una hora y se cuelga. A veces solo navegando. Esto pasa desde hace 3 semanas. ¿Qué hago?',
    steps: [
      {
        situation: '¿Qué pides al cliente para empezar el diagnóstico?',
        options: [
          { text: 'El código del BSOD que aparece en pantalla (ej. MEMORY_MANAGEMENT)', verdict: 'correct', feedback: '✅ Imprescindible. Cada código apunta a un origen probable: RAM, drivers, kernel, disco...' },
          { text: 'Una foto del techo de su casa', verdict: 'wrong', feedback: 'Igor está orgulloso de tu creatividad pero esto no.' },
          { text: 'Que reinstale Windows ya', verdict: 'wrong', feedback: 'Formato directo sin diagnóstico = chapuza. Y a veces no soluciona nada si es hardware.' },
          { text: 'Que apague el PC y no lo use más', verdict: 'wrong', feedback: 'Resolutorio significa resolver, no esconder.' }
        ]
      },
      {
        situation: 'Marta dice: "Pone MEMORY_MANAGEMENT". ¿Qué herramienta usarías para confirmar fallo de RAM?',
        options: [
          { text: 'Memtest86+ desde USB durante mínimo 1 pasada completa', verdict: 'correct', feedback: '✅ El test de RAM definitivo. Funciona sin SO, fuera de Windows. Detecta el 99% de errores de memoria.' },
          { text: 'Comprobador de memoria de Windows (mdsched.exe)', verdict: 'acceptable', feedback: '👍 Aceptable. Es menos riguroso que Memtest86+ pero hace una primera comprobación rápida sin USB.' },
          { text: 'CrystalDiskInfo', verdict: 'wrong', feedback: 'CrystalDiskInfo es para SSDs/HDDs, no RAM.' },
          { text: 'Ejecutar Furmark', verdict: 'wrong', feedback: 'Furmark prueba la GPU. Aquí queremos RAM.' }
        ]
      },
      {
        situation: 'Memtest86+ detecta MUCHOS errores en una de las dos barritas de RAM. ¿Cuál es el siguiente paso?',
        options: [
          { text: 'Identificar qué módulo falla: probar cada uno por separado en el slot A2', verdict: 'correct', feedback: '✅ Procedimiento correcto. Confirmas qué módulo (de 2) tiene el problema antes de pedir RMA o sustituirlo.' },
          { text: 'Reinstalar Windows', verdict: 'wrong', feedback: 'No arregla RAM defectuosa.' },
          { text: 'Cambiar pasta térmica', verdict: 'wrong', feedback: 'No relacionado.' },
          { text: 'Subir voltaje de RAM a 1.5V', verdict: 'wrong', feedback: 'Eso puede dañar más. Y no soluciona un módulo defectuoso.' }
        ]
      },
      {
        situation: 'Confirmado: una barra de RAM está defectuosa. ¿Qué le ofreces al cliente?',
        options: [
          { text: 'RMA / cambio de la barra defectuosa con la marca (suele tener garantía de por vida)', verdict: 'correct', feedback: '✅ Casi todas las RAM gaming (Corsair, Kingston, G.Skill, Crucial) tienen garantía de 10 años o vitalicia. El cambio es gratis.' },
          { text: 'Quitar la barra y dejarlo con 16GB en lugar de 32GB', verdict: 'acceptable', feedback: '👍 Solución provisional si tiene urgencia. Pero pierde dual channel y RAM. Mejor RMA.' },
          { text: 'Comprar un kit nuevo de DDR5 sin más', verdict: 'wrong', feedback: 'Carísimo y sin necesidad si hay garantía vigente.' },
          { text: 'Echar la culpa al windows update', verdict: 'wrong', feedback: 'No.' }
        ]
      },
      {
        situation: '¿Qué le dejas dicho al cliente para PREVENIR fallos similares?',
        options: [
          { text: 'Que envíe el módulo a garantía, mantenga Windows actualizado y haga backups regulares', verdict: 'correct', feedback: '✅ Buen cierre. El backup es la red de seguridad ante CUALQUIER fallo futuro de hardware.' },
          { text: 'Que no use nunca más el PC para jugar', verdict: 'wrong', feedback: 'Innecesario. La RAM falla por ser defectuosa, no por jugar.' },
          { text: 'Que apague el PC cada hora durante 10 minutos', verdict: 'wrong', feedback: 'Mito sin base. Los PCs modernos no necesitan eso.' }
        ]
      }
    ]
  },

  /* ============== INCIDENCIA 3: SE CALIENTA ============== */
  {
    id: 'inc-calienta',
    icon: '🌡',
    title: 'PC se cuelga y se apaga por temperatura',
    difficulty: 'medium',
    rewardBase: 65,
    customer: '👨‍🦰 Manolo',
    presentation: 'Estoy jugando y al rato el PC se reinicia solo. Lo enciendo y a los pocos minutos se vuelve a apagar de golpe. No hay BSOD. ¿Qué le pasa?',
    steps: [
      {
        situation: 'Apagado abrupto sin BSOD durante carga. ¿Cuál es la PRIMERA hipótesis?',
        options: [
          { text: 'Sobrecalentamiento → corte térmico de protección', verdict: 'correct', feedback: '✅ El apagado SIN BSOD bajo carga es señal clásica de protección térmica de CPU o GPU. La máquina se apaga para no quemarse.' },
          { text: 'Virus', verdict: 'wrong', feedback: 'Un virus daría síntomas distintos: lentitud, popups, no apagado abrupto.' },
          { text: 'Disco duro lleno', verdict: 'wrong', feedback: 'Eso da lentitud, no apagados.' },
          { text: 'Problema de drivers de gráfica', verdict: 'acceptable', feedback: '👍 Posible pero menos probable. Suele dar BSOD o pantalla negra con recovery, no apagado total.' }
        ]
      },
      {
        situation: '¿Qué herramienta usarías para monitorizar temperaturas en tiempo real durante la carga?',
        options: [
          { text: 'HWInfo64 (Sensors-only mode)', verdict: 'correct', feedback: '✅ Es la herramienta más completa: lee todos los sensores, te muestra max/min/avg.' },
          { text: 'CPU-Z', verdict: 'acceptable', feedback: '👍 Muestra info de CPU pero no es la mejor para temperaturas en tiempo real.' },
          { text: 'CCleaner', verdict: 'wrong', feedback: 'CCleaner limpia archivos, no mide temperaturas.' },
          { text: 'Visor de eventos de Windows', verdict: 'wrong', feedback: 'No da temperaturas.' }
        ]
      },
      {
        situation: 'HWInfo muestra: CPU 98°C en idle (sin hacer nada). ¿Qué significa?',
        options: [
          { text: 'Problema GRAVE de refrigeración: disipador mal montado, pasta térmica seca, o ventilador parado', verdict: 'correct', feedback: '✅ Una CPU en idle no debería pasar de 40-50°C. 98°C en idle = el disipador no está haciendo NADA su trabajo.' },
          { text: 'Es normal en verano', verdict: 'wrong', feedback: 'No. Nunca es normal pasar de 90°C en idle.' },
          { text: 'La CPU está envejeciendo', verdict: 'wrong', feedback: 'Las CPUs no "envejecen" así. Esto es problema mecánico.' }
        ]
      },
      {
        situation: 'Abres la caja para inspeccionar. ¿Qué revisas primero?',
        options: [
          { text: 'Si el ventilador del disipador de CPU está girando y bien conectado a CPU_FAN', verdict: 'correct', feedback: '✅ Si el ventilador no gira, la CPU se cocina en segundos. Revisar conexión a CPU_FAN.' },
          { text: 'Si la fuente está conectada', verdict: 'wrong', feedback: 'Si lo estuviera ya no encendería. Vamos al ventilador.' },
          { text: 'Si la RAM está bien insertada', verdict: 'wrong', feedback: 'No es lo prioritario.' }
        ]
      },
      {
        situation: 'El ventilador SÍ gira, pero el disipador se nota suelto (se mueve un poco al tocarlo). Diagnóstico:',
        options: [
          { text: 'Tornillos del disipador flojos o backplate suelto: la presión sobre la CPU es insuficiente', verdict: 'correct', feedback: '✅ Sin presión uniforme entre disipador y CPU, la pasta térmica no transfiere bien el calor. Hay que reapretar.' },
          { text: 'La placa base está rota', verdict: 'wrong', feedback: 'Apretar es la primera prueba.' },
          { text: 'Hay que cambiar la CPU', verdict: 'wrong', feedback: '😱 La CPU casi seguro está bien. Aprieta los tornillos primero.' }
        ]
      },
      {
        situation: '¿Cómo aprietas correctamente el disipador?',
        options: [
          { text: 'En diagonal, alternando tornillos opuestos, en varias pasadas hasta firme', verdict: 'correct', feedback: '✅ La presión debe ser UNIFORME. Apretar uno a tope y luego el siguiente deforma el IHS y empeora el contacto.' },
          { text: 'Un tornillo a tope, luego el siguiente, etc.', verdict: 'wrong', feedback: 'Deforma el bloque. Mal.' },
          { text: 'Sin tornillos, usar pegamento térmico', verdict: 'wrong', feedback: '😱 No, no, NO. La fijación mecánica es esencial.' }
        ]
      },
      {
        situation: 'Apretado correctamente. Vuelves a HWInfo: CPU 38°C idle, 75°C bajo carga. ¿Qué más recomendarías?',
        options: [
          { text: 'Aprovechar para limpiar polvo del disipador y caja con aire comprimido', verdict: 'correct', feedback: '✅ Mantenimiento preventivo. Polvo acumulado reduce eficiencia 10-15°C fácilmente.' },
          { text: 'Bajar el reloj de la CPU para siempre', verdict: 'wrong', feedback: 'No es necesario si la refrigeración funciona.' },
          { text: 'Mantener la caja sin laterales para ventilar mejor', verdict: 'wrong', feedback: 'Mito. El airflow diseñado funciona MEJOR con la caja cerrada.' }
        ]
      }
    ]
  },

  /* ============== INCIDENCIA 4: LENTO ============== */
  {
    id: 'inc-lento',
    icon: '🐢',
    title: 'Windows tarda 5 minutos en arrancar',
    difficulty: 'basic',
    rewardBase: 55,
    customer: '👵 Doña Carmen',
    presentation: 'Hijo, mi ordenador antes era rapidísimo. Ahora tarda como 5 minutos en encenderse. Y todo va lento. ¿Me lo puedes arreglar?',
    steps: [
      {
        situation: '¿Qué le preguntas para entender el contexto?',
        options: [
          { text: '"¿En qué unidad está instalado Windows: HDD mecánico o SSD?"', verdict: 'correct', feedback: '✅ Pregunta clave. Si Windows está en HDD, esa es el 80% del problema. SSD lo arregla en minutos.' },
          { text: '"¿Cuánto tiempo lleva encendido?"', verdict: 'wrong', feedback: 'No es tan relevante para este síntoma.' },
          { text: '"¿Ha tocado la BIOS?"', verdict: 'acceptable', feedback: '👍 Podría haber XMP mal o boot raros, pero no es la primera pregunta.' }
        ]
      },
      {
        situation: 'Carmen: "Pues no sé, hijo, mira tú". Abres el Administrador de tareas. Ves disco al 100% constante. ¿Qué deduces?',
        options: [
          { text: 'El cuello de botella es el almacenamiento. Casi seguro es un HDD.', verdict: 'correct', feedback: '✅ "Disco al 100%" durante minutos en arranque es el síntoma clásico de HDD lento + Windows pesado.' },
          { text: 'Hay un virus minando criptomonedas', verdict: 'wrong', feedback: 'Eso daría CPU al 100%, no disco.' },
          { text: 'Falta RAM', verdict: 'wrong', feedback: 'Falta de RAM se vería como uso de memoria al 90%+ y swap. No es el caso aquí.' }
        ]
      },
      {
        situation: 'Confirmas: tiene HDD de 1TB de 2014. ¿Qué le ofreces?',
        options: [
          { text: 'Clonar Windows a un SSD nuevo (SATA o NVMe según placa) con Macrium Reflect Free', verdict: 'correct', feedback: '✅ Clonar es rápido y NO pierde datos ni configuración. El cliente notará un PC nuevo.' },
          { text: 'Formatear y reinstalar Windows en el mismo HDD', verdict: 'wrong', feedback: 'Mejora algo, pero sigue siendo HDD. No soluciona el problema raíz.' },
          { text: 'Decirle que se compre un PC nuevo', verdict: 'wrong', feedback: 'Un SSD de 60€ revive un PC viejo. No hay que tirarlo.' },
          { text: 'Desfragmentar el HDD', verdict: 'acceptable', feedback: '👍 Algo ayudaría, pero el cambio a SSD es la solución de verdad.' }
        ]
      },
      {
        situation: 'Doña Carmen acepta. Tras clonar Windows al SSD, el PC arranca en 12 segundos. ¿Qué haces con el HDD viejo?',
        options: [
          { text: 'Dejarlo como almacenamiento secundario (D:) tras formatearlo', verdict: 'correct', feedback: '✅ Aprovechas 1TB para fotos, documentos, backups. Mejor que tirarlo.' },
          { text: 'Tirarlo a la basura', verdict: 'wrong', feedback: 'No funciona, contamina y aún tiene utilidad. Si lo vas a tirar, RAEE.' },
          { text: 'Dejarlo conectado pero ignorarlo', verdict: 'wrong', feedback: 'Ocupa espacio y consume electricidad sin función. Reformatéalo.' }
        ]
      },
      {
        situation: '¿Algo más antes de devolver el PC?',
        options: [
          { text: 'Limpiar polvo, comprobar SMART del SSD y dejarle creada una imagen del sistema en el HDD por si acaso', verdict: 'correct', feedback: '✅ Mantenimiento completo + backup automático. Un servicio impecable.' },
          { text: 'Instalar 10 programas que ella no ha pedido', verdict: 'wrong', feedback: 'Bloatware = enemigo.' },
          { text: 'Subir todos sus datos a tu nube personal', verdict: 'wrong', feedback: '😱 Eso es ilegal y antiético. NUNCA.' }
        ]
      }
    ]
  },

  /* ============== INCIDENCIA 5: NO HAY IMAGEN ============== */
  {
    id: 'inc-no-imagen',
    icon: '📺',
    title: 'PC enciende pero no da imagen',
    difficulty: 'medium',
    rewardBase: 60,
    customer: '👩‍🦱 Vero',
    presentation: 'El PC enciende, escucho ventiladores girando, pero el monitor sigue en negro. ¿No será la pantalla?',
    steps: [
      {
        situation: '¿Cuál es lo PRIMERO que verificas?',
        options: [
          { text: 'Que el cable de vídeo vaya conectado a la salida de la GPU dedicada (no a la placa)', verdict: 'correct', feedback: '✅ Error #1 con GPU dedicada: conectar al HDMI/DP de la placa base. La iGPU está desactivada cuando hay GPU dedicada.' },
          { text: 'Cambiar la pasta térmica', verdict: 'wrong', feedback: 'Nada que ver con el síntoma.' },
          { text: 'Llamar a Microsoft', verdict: 'wrong', feedback: 'Microsoft no arregla hardware.' }
        ]
      },
      {
        situation: '✓ Cable conectado correctamente a la GPU. Sigue sin imagen. ¿Siguiente?',
        options: [
          { text: 'Probar otro cable (HDMI o DisplayPort) y verificar input del monitor', verdict: 'correct', feedback: '✅ Descartas cable y monitor. El monitor puede estar en input HDMI 2 cuando el PC va al HDMI 1.' },
          { text: 'Cambiar la GPU', verdict: 'wrong', feedback: 'Demasiado pronto. Primero descartar lo simple.' },
          { text: 'Reinstalar Windows desde un USB', verdict: 'wrong', feedback: 'Sin imagen no puedes ver el instalador.' }
        ]
      },
      {
        situation: 'Cable y monitor descartados. Abres el lateral. ¿Qué buscas?',
        options: [
          { text: 'LEDs de debug en la placa (CPU/DRAM/VGA/BOOT) o el Q-Code en placas premium', verdict: 'correct', feedback: '✅ Los LEDs de debug te dicen EXACTAMENTE qué subsistema falla. Si queda iluminado VGA: problema GPU. Si DRAM: RAM. Si CPU: CPU.' },
          { text: 'Si la GPU está completamente insertada y con su cable PCIe 8-pin o 12VHPWR conectado', verdict: 'correct', feedback: '✅ Una GPU sin alimentación PCIe da pantalla negra. También conviene reasentar la GPU.' },
          { text: 'Cambiar la fuente', verdict: 'wrong', feedback: 'No descartas eso aún.' },
          { text: 'Cortocircuitar la BIOS con una moneda', verdict: 'wrong', feedback: '😱 NO HAGAS ESO NUNCA. Eso freiría la placa.' }
        ],
        multi: true
      },
      {
        situation: 'El LED de DRAM queda iluminado fijo. ¿Qué significa?',
        options: [
          { text: 'La placa no detecta la RAM correctamente', verdict: 'correct', feedback: '✅ DRAM LED encendido = error de detección de RAM. Posibles causas: módulo mal asentado, sucio, defectuoso, en slot equivocado.' },
          { text: 'La GPU está rota', verdict: 'wrong', feedback: 'El LED VGA cubriría eso.' },
          { text: 'Falta alimentación', verdict: 'wrong', feedback: 'Eso lo cubriría el LED CPU o BOOT.' }
        ]
      },
      {
        situation: '¿Qué intentas para la RAM?',
        options: [
          { text: 'Quitar todos los módulos, limpiar contactos con goma de borrar blanca, y reasentar uno solo en el slot A2', verdict: 'correct', feedback: '✅ Procedimiento estándar. Limpiar contactos + probar con UN solo módulo te dice si es problema de contacto, slot o módulo.' },
          { text: 'Cambiar la placa', verdict: 'wrong', feedback: 'Muy prematuro.' },
          { text: 'Aumentar voltaje VDIMM en BIOS', verdict: 'wrong', feedback: 'Sin imagen no puedes acceder a BIOS. Y subir voltaje no soluciona contactos sucios.' }
        ]
      },
      {
        situation: 'Con un solo módulo en A2 ya arranca y da imagen. ¿Qué deduces?',
        options: [
          { text: 'El otro módulo o el slot pueden estar defectuosos. Probar el segundo módulo SOLO en A2 para diferenciar', verdict: 'correct', feedback: '✅ Procedimiento divide y vencerás. Identificas si el problema es el módulo o el slot.' },
          { text: 'Quedarse con un módulo y ya', verdict: 'acceptable', feedback: '👍 Solución parcial: pierdes capacidad y dual channel. Mejor identificar exactamente qué falla.' },
          { text: 'Reinstalar Windows', verdict: 'wrong', feedback: 'No es de software.' }
        ]
      }
    ]
  },

  /* ============== INCIDENCIA 6: RANSOMWARE ============== */
  {
    id: 'inc-ransomware',
    icon: '🔐',
    title: 'Posible ransomware: archivos cifrados',
    difficulty: 'hard',
    rewardBase: 90,
    customer: '👨‍💼 José Luis',
    presentation: 'Encendí el PC esta mañana y todos mis archivos tienen extensión rara (.LOCKED). Hay un README pidiéndome 1500€ en Bitcoin. ¿Qué hago?',
    steps: [
      {
        situation: '¿Qué es lo PRIMERO que haces nada más recibir la llamada?',
        options: [
          { text: 'Pedir que DESCONECTE el cable de red INMEDIATAMENTE (cable o Wi-Fi)', verdict: 'correct', feedback: '✅ Aislar el equipo para evitar que el ransomware se propague a otros equipos de la red local (NAS, compañeros, servidor).' },
          { text: 'Pedir que pague el rescate rápido para recuperar', verdict: 'wrong', feedback: '😱 NUNCA pagar. No garantiza recuperación, financia más ataques y te marca como pagador para futuros ataques.' },
          { text: 'Pedir que apague el PC tirando del cable', verdict: 'wrong', feedback: 'Tirar del cable puede empeorar la corrupción. Mejor apagar normal, o forzar con botón si urge.' },
          { text: 'Pedir que reinstale Windows YA', verdict: 'wrong', feedback: 'Si formateas pierdes evidencia y la posibilidad de descifrar.' }
        ]
      },
      {
        situation: 'PC aislado. ¿Cuál es el siguiente paso?',
        options: [
          { text: 'Identificar la cepa del ransomware mediante la extensión, README y servicios como NoMoreRansom.org', verdict: 'correct', feedback: '✅ Algunas cepas tienen descifrador GRATUITO publicado por las fuerzas de seguridad (No More Ransom es proyecto de Europol).' },
          { text: 'Negociar con los atacantes para bajar el precio', verdict: 'wrong', feedback: 'Nunca negociar. Ya lo dijimos.' },
          { text: 'Reinstalar Windows directamente', verdict: 'wrong', feedback: 'Sin antes intentar recuperar archivos. Pierdes datos.' }
        ]
      },
      {
        situation: 'La cepa NO tiene descifrador conocido. ¿Cómo proceder?',
        options: [
          { text: 'Verificar si hay BACKUPS recientes (locales, cloud, Volume Shadow Copies de Windows)', verdict: 'correct', feedback: '✅ El backup salva la vida en estos casos. Volume Shadow Copies a veces sobreviven si el ransomware no las borró.' },
          { text: 'Pagar el rescate', verdict: 'wrong', feedback: 'NO.' },
          { text: 'Decir al cliente que ha perdido todo', verdict: 'wrong', feedback: 'Aún no. Hay opciones.' }
        ]
      },
      {
        situation: 'José Luis tiene un backup en disco externo de hace 5 días. ¿Cómo procedes?',
        options: [
          { text: 'Formatear el SSD del PC infectado, reinstalar Windows desde cero, restaurar el backup VERIFICADO en el equipo limpio', verdict: 'correct', feedback: '✅ Reinstalación completa garantiza que no queda nada del malware. Verificar backup antes de conectar disco externo.' },
          { text: 'Restaurar el backup encima del Windows infectado', verdict: 'wrong', feedback: 'El malware puede sobrevivir y volver a cifrar todo, incluyendo el backup recién restaurado.' },
          { text: 'Conectar el disco externo al PC infectado para copiar', verdict: 'wrong', feedback: '😱 NUNCA conectes el backup a un PC infectado. Lo cifrarías también.' }
        ]
      },
      {
        situation: '¿Cómo evitas que vuelva a ocurrir? Recomendaciones al cliente:',
        options: [
          { text: 'Backups 3-2-1, Windows Defender activo, NO abrir adjuntos sospechosos, NO usar KMSPico ni cracks', verdict: 'correct', feedback: '✅ La regla 3-2-1: 3 copias, 2 medios, 1 fuera de casa. Más higiene digital. Imprescindible.' },
          { text: 'Comprar antivirus carísimo de la marca X', verdict: 'wrong', feedback: 'Windows Defender es de los mejores en 2026 y es gratis. No hace falta gastar.' },
          { text: 'Desconectarse de internet para siempre', verdict: 'wrong', feedback: 'No es práctico.' }
        ]
      },
      {
        situation: '¿Hay que avisar a alguna autoridad?',
        options: [
          { text: 'Denunciar a Policía Nacional / Guardia Civil. Si afecta datos de terceros (empresa), notificar a la AEPD en 72h', verdict: 'correct', feedback: '✅ El RGPD obliga a notificar brechas de seguridad. Y la denuncia ayuda a perseguir a los criminales.' },
          { text: 'No avisar a nadie', verdict: 'wrong', feedback: 'Si hay datos de terceros, es ilegal NO notificar.' },
          { text: 'Publicarlo en Twitter para que la gente sepa', verdict: 'wrong', feedback: 'Innecesario y posible mal asunto reputacional.' }
        ]
      }
    ]
  },

  /* ============== INCIDENCIA 7: WIFI ============== */
  {
    id: 'inc-wifi',
    icon: '📶',
    title: 'Internet va lento solo en un PC',
    difficulty: 'basic',
    rewardBase: 45,
    customer: '👦 Hugo',
    presentation: 'Mi PC va lentísimo por internet. Sin embargo, en el móvil voy a 400 Mbps. ¿Qué pasa con mi PC?',
    steps: [
      {
        situation: '¿Qué le preguntas primero?',
        options: [
          { text: '¿Estás conectado por cable Ethernet o Wi-Fi?', verdict: 'correct', feedback: '✅ Esta es la pregunta clave. La diferencia entre cable y Wi-Fi puede ser brutal.' },
          { text: '¿Has reiniciado el router?', verdict: 'acceptable', feedback: '👍 Buena pregunta de troubleshooting básico, pero antes hay que conocer el contexto.' },
          { text: '¿Has llamado a Movistar?', verdict: 'wrong', feedback: 'Si el móvil va a 400, la línea va bien. No es problema del proveedor.' }
        ]
      },
      {
        situation: 'Hugo: "Por Wi-Fi". ¿Qué compruebas con cmd?',
        options: [
          { text: 'Ejecutar speedtest.net y, en cmd, "netsh wlan show interfaces" para ver la velocidad de conexión real al router', verdict: 'correct', feedback: '✅ El "Receive Rate" en netsh te dice la velocidad real negociada con el AP. Si va a 72 Mbps, ahí está el límite.' },
          { text: 'Reinstalar Windows', verdict: 'wrong', feedback: 'Excesivo.' },
          { text: 'Cambiar la GPU', verdict: 'wrong', feedback: '¿Qué tiene que ver?' }
        ]
      },
      {
        situation: 'netsh muestra: "Receive Rate: 72 Mbps". Sin embargo el router es Wi-Fi 6. ¿Por qué?',
        options: [
          { text: 'La tarjeta Wi-Fi del PC es antigua (Wi-Fi 4) o conectada a banda 2.4 GHz', verdict: 'correct', feedback: '✅ A 72 Mbps suena a Wi-Fi 4/n. El PC se está enganchando al 2.4 GHz aunque el router emita 5 GHz/6 GHz.' },
          { text: 'El router está roto', verdict: 'wrong', feedback: 'No, el móvil va a 400. El router está bien.' },
          { text: 'Falta RAM', verdict: 'wrong', feedback: 'No tiene que ver.' }
        ]
      },
      {
        situation: '¿Cuál es la mejor solución?',
        options: [
          { text: 'Conectar por cable Ethernet (Cat5e o superior)', verdict: 'correct', feedback: '✅ Cable Ethernet siempre será más rápido, más estable y con menos latencia que Wi-Fi.' },
          { text: 'Cambiar la tarjeta Wi-Fi por una Wi-Fi 6/7 con antenas externas', verdict: 'acceptable', feedback: '👍 Buena alternativa si no puede llevar cable. Hay PCIe Wi-Fi 6E/7 por ~30-50€.' },
          { text: 'Hacer un repetidor con un router viejo', verdict: 'acceptable', feedback: '👍 Solución posible pero engorrosa. Mejor el cable o la tarjeta nueva.' },
          { text: 'Cambiar el ordenador entero', verdict: 'wrong', feedback: '😅 Por una tarjeta de red no se cambia un PC.' }
        ]
      },
      {
        situation: '¿Alguna recomendación adicional?',
        options: [
          { text: 'Si tiene que ir por Wi-Fi: asegurarse de conectar a la red de 5 GHz (o 6 GHz si Wi-Fi 6E) y mover el PC más cerca del router si es posible', verdict: 'correct', feedback: '✅ La banda 5/6 GHz es mucho más rápida pero tiene menos alcance. El cable sigue siendo lo ideal.' },
          { text: 'Apagar el Wi-Fi del móvil', verdict: 'wrong', feedback: 'No tiene sentido.' },
          { text: 'Cambiar el SSID a "PRESTAME WIFI"', verdict: 'wrong', feedback: 'Igor no entiende eso.' }
        ]
      }
    ]
  }

];
