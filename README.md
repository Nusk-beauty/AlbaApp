# 🎵 AlbaApp - Generador de Música Infantil con IA 🎨

Una aplicación web moderna para generar canciones animadas y divertidas para niños de 3 a 6 años, con imágenes en múltiples estilos artísticos.

## ✨ Características

- 🎵 **Generación de Canciones**: Crea canciones infantiles personalizadas con IA
- 🎨 **7 Estilos de Imagen**: Plastilina, Arcilla, Anime, Cartoon, 3D Pixar, Realista, Cinematográfico
- 🎭 **6 Géneros Musicales**: Canción de cuna, Educativa, Aventura, Baile, Naturaleza, Amistad
- 💾 **Persistencia Local**: Guarda tus canciones en el navegador
- ❤️ **Sistema de Favoritos**: Marca tus canciones preferidas
- 📱 **Diseño Responsivo**: Funciona perfectamente en móviles, tablets y desktop
- 🌈 **Interfaz Colorida**: Diseño amigable y atractivo para niños

## 🚀 Tecnologías

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Type safety y mejor experiencia de desarrollo
- **Tailwind CSS 4** - Estilos modernos y responsivos
- **React Hooks** - Manejo de estado y efectos
- **LocalStorage** - Persistencia de datos en el navegador

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar en producción
npm start
```

## 🎯 Uso

1. **Describe tu canción**: Escribe sobre qué quieres que sea tu canción (ej: "Un dinosaurio que ama bailar")
2. **Selecciona el estilo visual**: Elige entre 7 estilos diferentes de imagen
3. **Elige el género musical**: Selecciona el tipo de música que prefieres
4. **¡Crea tu canción!**: Haz clic en el botón y espera la magia ✨

## 🎨 Estilos Disponibles

- 🎨 **Plastilina**: Texturas coloridas y suaves
- 🏺 **Arcilla**: Acabados artesanales mate
- ✨ **Anime**: Estilo japonés con ojos grandes
- 🎭 **Cartoon**: Formas exageradas y divertidas
- 🎬 **3D Pixar**: Iluminación cinematográfica
- 📸 **Realista**: Fotorrealismo detallado
- 🎥 **Cinematográfico**: Composición dramática

## 🎵 Géneros Musicales

- 🌙 **Canción de Cuna**: Melodías suaves para dormir
- 📚 **Educativa**: Aprende números, colores y más
- 🗺️ **Aventura**: Música épica y emocionante
- 💃 **Baile**: Ritmos contagiosos para moverse
- 🌳 **Naturaleza**: Sonidos orgánicos y relajantes
- 🤝 **Amistad**: Melodías cálidas sobre compartir

## 📁 Estructura del Proyecto

```
/vercel/sandbox/
├── app/
│   ├── components/
│   │   ├── Generator.tsx       # Formulario de generación
│   │   ├── StyleSelector.tsx   # Selector de estilos
│   │   ├── GenreSelector.tsx   # Selector de géneros
│   │   ├── SongCard.tsx        # Tarjeta de canción
│   │   └── SongGallery.tsx     # Galería de canciones
│   ├── hooks/
│   │   └── useSongs.ts         # Hook para manejo de canciones
│   ├── types/
│   │   └── index.ts            # Tipos TypeScript
│   ├── utils/
│   │   └── promptGenerator.ts  # Generador de prompts
│   ├── layout.tsx              # Layout principal
│   ├── page.tsx                # Página principal
│   └── globals.css             # Estilos globales
├── public/                     # Archivos estáticos
├── package.json
└── README.md
```

## 🌐 Despliegue en Vercel

Esta aplicación está optimizada para desplegarse en Vercel:

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente Next.js
3. Haz clic en "Deploy"
4. ¡Tu aplicación estará en línea en minutos!

## 🔧 Configuración

La aplicación funciona sin configuración adicional. Los datos se guardan localmente en el navegador del usuario.

## 📝 Notas

- Esta es una aplicación de demostración que simula la generación de música e imágenes
- Para producción, integra APIs reales de generación de música (como Suno AI) e imágenes (como DALL-E, Midjourney, etc.)
- Los prompts elaborados están optimizados para obtener los mejores resultados con modelos de IA

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias o mejoras.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

Hecho con ❤️ para niños de 3 a 6 años
