# 🎤 ChatFlow — Chat con Karol G (La Bichota)

![Node](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ESModules-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Gemini](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)

---

## 🚀 Introducción del proyecto

**ChatFlow** es una Single Page Application (SPA) que te permite **chatear con la Bichota** 🎶: un chatbot con la personalidad de **Karol G**, la cantante y compositora colombiana de reguetón más influyente de la música urbana actual.

El proyecto nace como **Proyecto Integrador del Módulo 3** de Henry y pone en práctica conceptos clave de desarrollo frontend moderno: **SPA con router propio**, **arquitectura por capas (services / transform / engine / ui / views)**, **consumo de una API de IA (Google Gemini)** a través de una **serverless function de Vercel**, y **pruebas unitarias con Vitest**.

---

## 📖 Descripción del proyecto

ChatFlow integra un frontend 100% vanilla (sin frameworks) con la API de Google Gemini mediante una función serverless. Al entrar al chat, podés:

- 💬 Escribir mensajes y recibir respuestas con la personalidad de Karol G.
- 🎭 **Cambiar de personaje** (Ryan Castro, Maluma o J Balvin) desde un selector.
- 🪙 **Monitorear el consumo de tokens** de la sesión con una cuota simulada de 4000 tokens (modo free).
- 🔁 **Reintento automático** ante errores de rate limit (HTTP 429).
- ✂️ **Historial inteligente**: solo se envían los últimos 12 mensajes en cada request para cuidar el consumo.
- 🧪 **Modo de simulación** disponible en el código para probar el chat sin gastar cuota real.

La app está compuesta por un router casero, vistas renderizadas por JavaScript y un motor de chat que orquesta la API, la cuota, el estimador de tokens y el DOM.

---

## 🎤 Descripción del personaje elegido

**Karol G (Carolina Giraldo Navarro)** — *"La Bichota"* 🇨🇴

Cantante, compositora y productora colombiana de reguetón, pop urbano y música latina, y una de las artistas globales más influyentes de la música urbana contemporánea.

El chatbot replica su esencia a través de un **system prompt** (`SYSTEM_INSTRUCTION` en `src/services/prompts.js`) que define:

- **Personalidad:** auténtica, humilde, empoderada y resiliente; trata a sus seguidores como parte de su familia y expresa gratitud constante.
- **Muletillas:** *"Mor"*, *"Bichot@s"*, *"Bebesuqui"*, *"Qué chimba"*, *"Parce"*, *"Parcharnos"*, *"Vibrando bonito"*.
- **Reglas de formato:** respuestas de **máximo 3 líneas**, cerrando casi siempre con una frase enigmática o de sus canciones.
- **Límites:** no usa groserías fuertes y se aclara como chatbot de ficción ante temas médicos, legales o financieros.

También incorpora un banco de **frases icónicas** (`KAROLG_PHRASES`) como *"Mañana será bonito"* o *"Ella se cura con rumba y el amor pa' la tumba"*.

---

## 💻 Pasos para el despliegue local

### Prerrequisitos

- [Node.js](https://nodejs.org) **20 o superior** instalado.
- Una **API Key de Google Gemini** ([aistudio.google.com](https://aistudio.google.com/apikey)).

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/contrerasrdianac406/ProyectoIntegradorM3.git
cd ProyectoIntegradorM3
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Configurar variables de entorno

Copiá el archivo de ejemplo y completalo con tu API key:

```bash
cp .env.example .env
```

Editalo:

```env
GEMINI_API_KEY=tu_clave_gemini_aqui
```

> ⚠️ **Importante:** el `.env` está en `.gitignore`. Nunca lo subas al repositorio.

### 4️⃣ Ejecutar los tests (opcional)

```bash
npm test
```

### 5️⃣ Levantar el servidor local

El frontend es estático, por lo que podés servirlo con cualquier servidor de archivos estáticos. Por ejemplo, con `npx`:

```bash
npx serve .
```

O, si querés simular el entorno de producción de Vercel localmente:

```bash
npx vercel dev
```

Abrí **http://localhost:3000** (o el puerto que indique la consola) en tu navegador.

> 📌 Nota: la ruta relativa `/api/chat` es resuelta por Vercel tanto en producción como con `vercel dev`. Si usás `npx serve`, la llamada a la API fallará porque no existe la función serverless localmente (en ese caso se recomienda el modo mock).

---

## ▲ Pasos para el despliegue en Vercel

### Opción A — Desde la web (recomendada)

1. Subí el repositorio a GitHub.
2. Ingresá a [vercel.com](https://vercel.com) → **Add New Project**.
3. Importá el repositorio `ProyectoIntegradorM3`.
4. En la sección **Environment Variables**, agregá:

   | Name              | Value              |
   | ----------------- | ------------------ |
   | `GEMINI_API_KEY`  | `tu_clave_gemini`  |

5. Hacé clic en **Deploy**. Vercel detecta automáticamente la carpeta `api/` y crea la serverless function.

### Opción B — Desde la terminal (CLI)

```bash
# Instalar el CLI de Vercel
npm i -g vercel

# Iniciar sesión
vercel login

# Desplegar en preview
vercel

# Promover a producción
vercel --prod
```

> 💡 No es necesario crear un `vercel.json`: Vercel detecta automáticamente que es un proyecto estático con funciones serverless en `api/`.

---

## 🌐 Link de Vercel en ambiente productivo

👉 **https://proyecto-integrador-m3.vercel.app**

> Si tu deployment usa otro alias, reemplazá la URL por la que Vercel te indique en la pestaña *Domains* de tu proyecto.

---

## 📁 Scaffolding (estructura del proyecto)

```
ProyectoIntegradorM3/
├── .env.example              # Plantilla de variables de entorno
├── .gitignore                # Archivos ignorados por git
├── index.html                # HTML raíz de la SPA
├── package.json              # Configuración del proyecto y scripts
├── package-lock.json         # Lockfile de dependencias
├── api/
│   └── chat.js               # Serverless function que llama a Gemini
├── src/
│   ├── main.js               # Bootstrap: router + eventos de navegación
│   ├── css/
│   │   └── styles.css        # Estilos de toda la aplicación
│   ├── engine/
│   │   └── chatEngine.js     # Orquestador del chat (enviar, reintentar, historial)
│   ├── router/
│   │   └── router.js         # Router casero (pushState + popstate)
│   ├── services/
│   │   ├── geminiApi.js      # Cliente HTTP hacia /api/chat
│   │   ├── mockGeminiApi.js  # Simulación de la API (latencia, 429, frases)
│   │   ├── prompts.js        # System prompts, PERSONAS y frases de Karol G
│   │   ├── quotaSimulator.js # Cuota simulada de tokens de la sesión
│   │   └── tokenEstimator.js # Estimador de tokens (~4 chars/token)
│   ├── transform/
│   │   └── chatPayload.js    # Build del payload y normalización de respuestas
│   ├── ui/
│   │   └── render.js         # Render del DOM, estados y mensajes
│   ├── views/
│   │   ├── home.js           # Vista Home
│   │   ├── chat.js           # Vista del chat
│   │   ├── about.js          # Vista "Acerca de Karol G"
│   │   └── noFound.js        # Vista 404
│   └── img/
│       ├── KarolG.jpg        # Imagen de fondo
│       └── noFound.jpg       # Imagen de la vista 404
└── test/
    ├── chatEngine.test.js    # Tests del motor de chat (429 y reintento)
    ├── chatPayload.test.js   # Tests del transform de payload
    ├── quotaSimulato.test.js # Tests de la cuota simulada
    └── tokenEstimator.test.js# Tests del estimador de tokens
```

---

## 🧪 Descripción de cómo generar los tests

Los tests están escritos con **Vitest** y cubren las capas de lógica pura (sin dependencia del DOM).

### Ejecutar todos los tests

```bash
npm test
```

### Ejecutar un archivo específico

```bash
npx vitest run test/tokenEstimator.test.js
```

### Ejecutar en modo watch

```bash
npx vitest
```

### Cómo se escriben los tests

Se usa el patrón `describe / it / expect` de Vitest:

- **Lógica pura** (payload, estimador, cuota): se importa el módulo y se testean funciones directamente con `expect(...).toBe(...)`.
- **Efectos externos** (red y DOM): se usa `vi.mock()` para simular `geminiApi` y `render`, y se valida con `toHaveBeenCalled`, `mockRejectedValueOnce` y `mockResolvedValueOnce`.
- **Tiempo**: en los tests de reintento (429) se usa `vi.useFakeTimers()` + `vi.advanceTimersByTimeAsync()` para saltar los `wait()` sin esperar en tiempo real.
- **Aislamiento**: cada test arranca desde cero con `beforeEach` + `resetSessionUsage()` y `vi.clearAllMocks()`.

### Qué se testea

| Archivo                  | Qué cubre                                                        |
| ------------------------ | ---------------------------------------------------------------- |
| `chatEngine.test.js`     | Manejo de 429: reintento exitoso, doble fallo y errores no-429.   |
| `chatPayload.test.js`    | Forma del payload y normalización de respuestas de Gemini.        |
| `quotaSimulato.test.js`  | Límite de la cuota (4000 tokens), acumulación y estados.          |
| `tokenEstimator.test.js` | Redondeo del estimador (~4 caracteres por token).                 |

### Agregar un test nuevo

1. Creá el archivo en `test/` con el nombre `*.test.js`.
2. Importá las funciones del módulo a testear.
3. Usá `describe` para agrupar y `it` para cada caso.
4. Si el módulo toca red o DOM, mockealo con `vi.mock()`.
5. Ejecutalo con `npx vitest run test/miArchivo.test.js`.

---

## 📸 Capturas de Pantalla o GIFs (Demo)

> ⚠️ Reemplazá estos placeholders con las capturas reales de tu app y subilas a una carpeta `screenshots/` (o usá URLs de hosting de imágenes).

### Vista Home 🏠

![Home](./src/img/Home.png)

### Chat con Karol G 💬

![Chat](./src/img/Chat.png)

### Vista About 📖

![About](./src/img/About.png)

### No found 📖
![No found](./src/img/NoFound.png)


**GIF de la demo:**

![Demo](src/img/demo.gif)

---

## 🛠️ Tecnologías utilizadas

| Tecnología          | Uso                                                              |
| ------------------- | ---------------------------------------------------------------- |
| **JavaScript (ESM)**| Lenguaje principal, módulos ES (`import` / `export`).            |
| **HTML5 + CSS3**    | Estructura y estilos de la SPA.                                  |
| **Google Gemini API** (`@google/genai`) | Generación de las respuestas del chat.            |
| **Vercel**          | Hosting de producción y serverless functions (`api/`).           |
| **Node.js**         | Entorno de ejecución.                                            |
| **Vitest**          | Framework de testing.                                            |
| **SPA Router propio**| Navegación sin recargas con `history.pushState`.                 |

---

## 🔐 Variables de Entorno explicadas

| Variable          | Obligatoria | Descripción                                                        |
| ----------------- | ----------- | ------------------------------------------------------------------ |
| `GEMINI_API_KEY`  | ✅ Sí       | API key de Google AI Studio usada por la serverless function `api/chat.js`. |
| `GEMINI_MODEL`    | ❌ No       | Modelo de Gemini a usar (por defecto `gemini-3.5-flash-lite`).      |

📌 La única variable configurable que se consume en producción es `GEMINI_API_KEY`. El resto de los parámetros (temperatura, máx. tokens, historial) son constantes de configuración dentro del código.

---

## 🔗 Link de GitHub del proyecto

👉 **https://github.com/contrerasrdianac406/ProyectoIntegradorM3**

---

## 🧠 Prompts usados

### System prompt principal — Personalidad de Karol G

El siguiente prompt se define en `src/services/prompts.js` como `SYSTEM_INSTRUCTION` y se envía como `systemInstruction` en cada request:

```
Eres Karol G, una cantante, compositora y productora colombiana de reguetón, pop urbano y música latina. Es una de las artistas globales más influyentes de la música urbana contemporánea.

PERSONALIDAD:
- Auténtica y humilde: Mantiene sus raíces paisas muy presentes.
- Empoderada y resiliente: Promueve la confianza, la superación personal y el liderazgo femenino.
- Afectuosa y espontánea: Se muestra natural, alegre y sin poses en sus interacciones.
- Trata a sus seguidores como si fueran sus mejores amigos o parte de su propia familia. Suele referirse a ellos con mucho cariño, escucha sus historias en sus conciertos, interactúa constantemente en redes y expresa profunda gratitud por su apoyo.
- Usas tus muletillas: "Mor", "Bichot@s", "Bebesuqui", "Qué chimba", "Parce", "Parcharnos", "Vibrando bonito", "familia", "Me entendes".
- Hablas de música y regueton como si fueran la misma disciplina, con total autoridad.

REGLAS DE FORMATO:
- Respondes en MÁXIMO 3 líneas. El éxito no es cuestión de suerte, es cuestión de trabajo duro y persistencia.
- Terminás casi siempre con una frase enigmática o con alguna frase de la letra de sus canciones.
- cuando expliques algo técnico, lo enmarcás como una frase motivacional.
- Si el usuario insiste en algo trivial, se lo remarcás con positivismo y con una frase paisa.

LÍMITES:
- No insultás con groserías fuertes.
- Si te preguntan algo médico, legal o financiero serio, salís del personaje brevemente y aclarás que sos un chatbot de ficción.
```

### Prompts de los personajes alternativos

Definidos en el objeto `PERSONAS` de `src/services/prompts.js`:

| Personaje    | Prompt resumido                                                                 |
| ------------ | ------------------------------------------------------------------------------- |
| **Ryan Castro** | "Cantante de música urbana que representa la cultura del barrio, dancehall y rap. Máximo 3 líneas. Sin markdown." |
| **Maluma**      | "Cantante de reguetón y pop latino. Máximo 2 líneas."                            |
| **J Balvin**    | "El príncipe del reguetón, géneros R&B, hip hop y dancehall. Máximo 3 líneas."   |

---

## 📄 Licencia

Proyecto educativo bajo licencia **ISC**. Realizado como Proyecto Integrador del **Módulo 3 de Henry**.
