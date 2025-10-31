# 🔌 Guía de Integración con APIs Reales

Esta guía explica cómo integrar AlbaApp con APIs reales de generación de música e imágenes.

## 🎵 Integración con APIs de Música

### Opción 1: Suno AI (Recomendado)

Suno AI es una de las mejores plataformas para generación de música con IA.

```typescript
// app/services/musicService.ts
export async function generateMusic(prompt: string, genre: string) {
  const response = await fetch('https://api.suno.ai/v1/generate', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.SUNO_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: prompt,
      genre: genre,
      duration: 180, // 3 minutos
      style: 'children',
    }),
  });
  
  const data = await response.json();
  return data.audio_url;
}
```

### Opción 2: Mubert API

```typescript
export async function generateMusicMubert(prompt: string, duration: number) {
  const response = await fetch('https://api.mubert.com/v2/RecordTrack', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      method: 'RecordTrack',
      params: {
        pat: process.env.MUBERT_API_KEY,
        duration: duration,
        tags: prompt,
        mode: 'track',
      },
    }),
  });
  
  return await response.json();
}
```

### Opción 3: Soundraw

```typescript
export async function generateMusicSoundraw(params: MusicParams) {
  const response = await fetch('https://api.soundraw.io/v1/generate', {
    method: 'POST',
    headers: {
      'X-API-Key': process.env.SOUNDRAW_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      mood: params.mood,
      genre: params.genre,
      length: params.duration,
      tempo: params.tempo,
    }),
  });
  
  return await response.json();
}
```

## 🎨 Integración con APIs de Imágenes

### Opción 1: DALL-E 3 (OpenAI)

```typescript
// app/services/imageService.ts
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateImage(prompt: string, style: string) {
  const stylePrompts = {
    'plastilina': 'claymation style, colorful plasticine texture',
    'arcilla': 'clay sculpture, handcrafted pottery style',
    'anime': 'anime style, big expressive eyes, vibrant colors',
    'cartoon': 'western cartoon style, exaggerated features',
    '3d-pixar': 'Pixar 3D animation style, cinematic lighting',
    'realista': 'photorealistic, highly detailed',
    'cinematografico': 'cinematic composition, dramatic lighting',
  };

  const fullPrompt = `${prompt}, ${stylePrompts[style]}, child-friendly, colorful, safe for kids aged 3-6`;

  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: fullPrompt,
    n: 1,
    size: "1024x1024",
    quality: "hd",
  });

  return response.data[0].url;
}
```

### Opción 2: Midjourney (via API no oficial)

```typescript
export async function generateImageMidjourney(prompt: string, style: string) {
  const response = await fetch('https://api.midjourney.com/v1/imagine', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.MIDJOURNEY_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: `${prompt} --style ${style} --v 6 --ar 1:1`,
    }),
  });
  
  return await response.json();
}
```

### Opción 3: Stable Diffusion (Stability AI)

```typescript
export async function generateImageStableDiffusion(prompt: string, style: string) {
  const response = await fetch(
    'https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.STABILITY_API_KEY}`,
      },
      body: JSON.stringify({
        text_prompts: [
          {
            text: prompt,
            weight: 1,
          },
        ],
        cfg_scale: 7,
        height: 1024,
        width: 1024,
        samples: 1,
        steps: 30,
      }),
    }
  );

  const data = await response.json();
  return `data:image/png;base64,${data.artifacts[0].base64}`;
}
```

## 🔄 Actualizar el Hook useSongs

```typescript
// app/hooks/useSongs.ts
import { generateMusic } from '../services/musicService';
import { generateImage } from '../services/imageService';

export function useSongs() {
  // ... código existente ...

  const generateSong = async (params: GenerationParams) => {
    setIsGenerating(true);
    
    try {
      const elaboratedPrompt = generateElaboratedPrompt(
        params.userPrompt,
        params.imageStyle,
        params.musicGenre
      );

      // Generar imagen y música en paralelo
      const [imageUrl, audioUrl] = await Promise.all([
        generateImage(elaboratedPrompt, params.imageStyle),
        generateMusic(elaboratedPrompt, params.musicGenre),
      ]);

      const newSong: GeneratedSong = {
        id: Date.now().toString(),
        title: params.userPrompt.slice(0, 50),
        prompt: params.userPrompt,
        elaboratedPrompt,
        imageStyle: params.imageStyle,
        musicGenre: params.musicGenre,
        imageUrl,
        audioUrl,
        createdAt: new Date(),
        isFavorite: false,
      };

      setSongs(prev => [newSong, ...prev]);
    } catch (error) {
      console.error('Error generating song:', error);
      alert('Hubo un error al generar la canción. Por favor intenta de nuevo.');
    } finally {
      setIsGenerating(false);
    }
  };

  // ... resto del código ...
}
```

## 🔐 Configurar Variables de Entorno

Crea un archivo `.env.local`:

```bash
# OpenAI (DALL-E)
OPENAI_API_KEY=sk-...

# Suno AI
SUNO_API_KEY=...

# Stability AI
STABILITY_API_KEY=sk-...

# Mubert
MUBERT_API_KEY=...

# Soundraw
SOUNDRAW_API_KEY=...
```

En Vercel, agrega estas variables en:
**Settings → Environment Variables**

## 💰 Costos Estimados

### APIs de Imágenes
- **DALL-E 3**: ~$0.04 por imagen (1024x1024)
- **Midjourney**: ~$10/mes (plan básico, ~200 imágenes)
- **Stable Diffusion**: ~$0.002 por imagen

### APIs de Música
- **Suno AI**: Varía según plan
- **Mubert**: Desde $14/mes
- **Soundraw**: Desde $16.99/mes

## 🎯 Implementación por Fases

### Fase 1: Solo Imágenes Reales
1. Integra DALL-E o Stable Diffusion
2. Mantén audio simulado
3. Prueba con usuarios

### Fase 2: Música Real
1. Integra Suno AI o Mubert
2. Mantén imágenes de Fase 1
3. Optimiza prompts

### Fase 3: Sistema Completo
1. Ambas APIs funcionando
2. Sistema de caché para reducir costos
3. Queue system para manejar múltiples solicitudes

## 🚀 Optimizaciones

### Caché de Resultados

```typescript
// app/services/cacheService.ts
const cache = new Map<string, CachedResult>();

export async function getCachedOrGenerate(
  key: string,
  generator: () => Promise<string>
): Promise<string> {
  if (cache.has(key)) {
    const cached = cache.get(key)!;
    if (Date.now() - cached.timestamp < 3600000) { // 1 hora
      return cached.value;
    }
  }

  const value = await generator();
  cache.set(key, { value, timestamp: Date.now() });
  return value;
}
```

### Rate Limiting

```typescript
// app/middleware/rateLimit.ts
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '1 h'),
});

export async function checkRateLimit(userId: string) {
  const { success } = await ratelimit.limit(userId);
  return success;
}
```

## 📊 Monitoreo

```typescript
// app/services/analytics.ts
export function trackGeneration(params: {
  style: string;
  genre: string;
  success: boolean;
  duration: number;
}) {
  // Integra con tu servicio de analytics
  console.log('Generation tracked:', params);
}
```

## 🔒 Seguridad

1. **Nunca expongas API keys en el cliente**
2. **Usa API Routes de Next.js** para llamadas al servidor
3. **Implementa rate limiting**
4. **Valida y sanitiza inputs del usuario**
5. **Usa HTTPS siempre**

## 📝 Ejemplo Completo: API Route

```typescript
// app/api/generate/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { generateImage } from '@/app/services/imageService';
import { generateMusic } from '@/app/services/musicService';

export async function POST(request: NextRequest) {
  try {
    const { prompt, imageStyle, musicGenre } = await request.json();

    // Validación
    if (!prompt || !imageStyle || !musicGenre) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    // Generar contenido
    const [imageUrl, audioUrl] = await Promise.all([
      generateImage(prompt, imageStyle),
      generateMusic(prompt, musicGenre),
    ]);

    return NextResponse.json({
      success: true,
      imageUrl,
      audioUrl,
    });
  } catch (error) {
    console.error('Generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    );
  }
}
```

---

¿Necesitas ayuda con la integración? Consulta la documentación de cada API:
- [OpenAI API](https://platform.openai.com/docs)
- [Stability AI](https://platform.stability.ai/docs)
- [Suno AI](https://suno.ai/docs)
