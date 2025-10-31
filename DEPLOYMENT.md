# 🚀 Guía de Despliegue - AlbaApp

Esta guía te ayudará a desplegar AlbaApp en Vercel de manera rápida y sencilla.

## 📋 Requisitos Previos

- Una cuenta en [Vercel](https://vercel.com) (gratis)
- Tu código en un repositorio Git (GitHub, GitLab, o Bitbucket)

## 🌐 Opción 1: Despliegue desde GitHub (Recomendado)

### Paso 1: Subir el código a GitHub

```bash
# Inicializar repositorio Git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Initial commit: AlbaApp - Generador de Música Infantil"

# Conectar con tu repositorio remoto
git remote add origin https://github.com/tu-usuario/albaapp.git

# Subir el código
git push -u origin main
```

### Paso 2: Importar en Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Haz clic en **"Add New Project"**
3. Selecciona **"Import Git Repository"**
4. Elige tu repositorio de AlbaApp
5. Vercel detectará automáticamente que es un proyecto Next.js
6. Haz clic en **"Deploy"**

¡Listo! Tu aplicación estará en línea en 1-2 minutos.

## 🔧 Opción 2: Despliegue con Vercel CLI

### Instalación de Vercel CLI

```bash
npm install -g vercel
```

### Despliegue

```bash
# Desde el directorio del proyecto
cd /vercel/sandbox

# Login en Vercel
vercel login

# Desplegar (primera vez)
vercel

# Desplegar a producción
vercel --prod
```

## ⚙️ Configuración Automática

Vercel detectará automáticamente:
- ✅ Framework: Next.js 14
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `.next`
- ✅ Install Command: `npm install`

No necesitas configurar nada adicional.

## 🌍 Dominio Personalizado

### Agregar un dominio propio

1. Ve a tu proyecto en Vercel Dashboard
2. Haz clic en **"Settings"** → **"Domains"**
3. Agrega tu dominio personalizado
4. Sigue las instrucciones para configurar los DNS

Vercel proporciona automáticamente:
- 🔒 Certificado SSL/HTTPS
- 🌐 CDN global
- ⚡ Edge Network

## 📊 Variables de Entorno (Opcional)

Si en el futuro integras APIs reales:

1. Ve a **"Settings"** → **"Environment Variables"**
2. Agrega tus variables:
   - `MUSIC_API_KEY`: Tu API key para generación de música
   - `IMAGE_API_KEY`: Tu API key para generación de imágenes

## 🔄 Actualizaciones Automáticas

Una vez conectado con GitHub:
- Cada `git push` a la rama `main` desplegará automáticamente
- Los pull requests crearán previews automáticos
- Rollback instantáneo a versiones anteriores

## 📈 Monitoreo

Vercel proporciona:
- 📊 Analytics de uso
- 🐛 Error tracking
- ⚡ Performance metrics
- 📱 Real User Monitoring

## 🎯 URLs de Ejemplo

Después del despliegue, tu app estará disponible en:
- **Producción**: `https://albaapp.vercel.app`
- **Preview**: `https://albaapp-git-branch.vercel.app`

## 🔍 Verificación Post-Despliegue

Verifica que todo funcione:
1. ✅ La página principal carga correctamente
2. ✅ Puedes crear una canción
3. ✅ Los estilos se aplican correctamente
4. ✅ Las canciones se guardan en localStorage
5. ✅ El sistema de favoritos funciona
6. ✅ La interfaz es responsiva en móvil

## 🆘 Solución de Problemas

### Error: Build Failed

```bash
# Verifica que compile localmente
npm run build

# Si hay errores, revisa los logs
npm run lint
```

### Error: Module Not Found

```bash
# Reinstala dependencias
rm -rf node_modules package-lock.json
npm install
```

### La aplicación no carga

- Verifica que `package.json` tenga todas las dependencias
- Revisa los logs en Vercel Dashboard
- Asegúrate de que no haya errores de TypeScript

## 📱 Optimizaciones Incluidas

AlbaApp ya incluye:
- ✅ Server-Side Rendering (SSR)
- ✅ Optimización automática de imágenes
- ✅ Code splitting
- ✅ Compresión Gzip/Brotli
- ✅ Caché inteligente
- ✅ Edge Functions

## 🎉 ¡Listo!

Tu aplicación AlbaApp está ahora desplegada y lista para crear canciones mágicas para niños.

### Próximos Pasos

1. Comparte el link con tus usuarios
2. Monitorea el uso en Vercel Analytics
3. Considera integrar APIs reales de generación
4. Agrega más estilos y géneros musicales

---

¿Necesitas ayuda? Consulta la [documentación de Vercel](https://vercel.com/docs)
