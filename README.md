# 🔧 IGORHARDWARE

Plataforma gamificada para aprender **Sistemas Microinformáticos y Redes (SMR)** de la mano de Igor.

## Cómo usarla

### Opción 1: Abrir directamente
Doble click en `index.html`. Tu progreso se guarda en el navegador (LocalStorage).

### Opción 2: Servidor local
```bash
cd igorhardware
python3 -m http.server 8000
```
Luego abre http://localhost:8000 en tu navegador.

### Opción 3: GitHub Pages
1. Sube esta carpeta a un repo de GitHub.
2. Settings → Pages → Source: Deploy from a branch → main / root.
3. Listo: tu plataforma estará en `https://TU-USUARIO.github.io/TU-REPO/`.

## Estructura

```
igorhardware/
├── index.html          # Punto de entrada
├── css/
│   └── style.css       # Estilos cozy (tonos tierra)
├── data/
│   ├── content.js      # Teoría módulos 1-4
│   ├── content2.js     # Teoría módulos 5-7
│   ├── content3.js     # Teoría módulos 8-14
│   ├── content4.js     # Teoría módulos 15-17
│   ├── exercises.js    # 201 ejercicios variados
│   └── lab.js          # 10 artículos del laboratorio 2026
└── js/
    ├── state.js        # Niveles, recompensas, logros, LocalStorage
    ├── ui.js           # Renderizado de páginas
    ├── exercises.js    # Lógica de ejercicios
    ├── router.js       # Navegación hash
    └── app.js          # Bootstrap
```

## Contenido

### 20 módulos
**Fundamentos:** Unidades, Hardware, Monitores, Periféricos
**Componentes:** Placa base, CPU, RAM, Almacenamiento, GPU, Fuente, Refrigeración
**Sistema:** BIOS/UEFI, SO, Windows, VirtualBox
**Avanzado:** Montaje, Diagnóstico, Compatibilidad, Redes, Seguridad

### Cada módulo incluye
- Introducción
- Bloques de teoría con ejemplos
- Frase humorística de Igor
- 🔮 "Lo que nadie suele contarte" (3+ secretos)
- 💡 Tips prácticos
- ⚠️ Errores comunes
- 6-9 ejercicios variados

### 8 tipos de ejercicios
- Opción múltiple
- Verdadero/Falso
- Rellena el hueco
- Empareja parejas
- Ordena pasos
- Drag & drop
- Builder (selección múltiple)
- Diagnostica

### Gamificación
- **IgorCoins:** moneda virtual (15/20-25/30 por ejercicio según dificultad)
- **7 niveles:** Amante → Secretario → Máquina → Narval → Titán → Mecinah → Pirámide Aristotélica
- **5 recompensas absurdas:**
  - 🚶‍♂️ Paseo por el lago con Igor (100)
  - 🎣 Ir a pescar con Igor (250)
  - 🎤 Concierto e invitar a todo Igor (500)
  - 💋 Un beso fuerte con Igor (900)
  - 🐕 Adoptar un perro y ponerle Igor (1500)
- **26 logros** desbloqueables
- **Racha** de aciertos consecutivos
- **Confetti** al subir de nivel o conseguir logros

### Extras
- 🃏 **Flashcards:** tarjetas con secretos y tips de cada módulo
- ⚗️ **Laboratorio 2026:** 10 artículos sobre tecnologías punteras (NPU, Wi-Fi 7, DDR5/6, DLSS 4, ARM en PC...)
- ⚔️ **Reto Final:** 20 preguntas aleatorias de todos los módulos

## Personalización

### Cambiar puntos por ejercicio
Edita los `points` en `data/exercises.js`.

### Añadir un módulo nuevo
1. Añade un objeto a `MODULES` en `data/content.js`.
2. Crea su contenido en cualquier `content*.js` con `Object.assign(MODULE_CONTENT, { 'tu-id': {...} })`.
3. Añade sus ejercicios a `EXERCISES['tu-id']` en `data/exercises.js`.

### Añadir una recompensa
Edita el array `REWARDS` en `js/state.js`.

### Cambiar paleta
Edita las variables CSS en `:root` al inicio de `css/style.css`.

## Reset

Botón "Reiniciar progreso" en la barra lateral. Borra TODO el progreso de LocalStorage.

---

Hecho con cariño para Igor. *"Don't make cabesa a mess"* 🧔
