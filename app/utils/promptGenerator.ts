import { ImageStyle, MusicGenre } from '../types';

const styleDescriptions: Record<ImageStyle, string> = {
  'plastilina': 'con texturas de plastilina colorida y suave, formas redondeadas y brillantes',
  'arcilla': 'con texturas de arcilla artesanal, acabados mate y detalles esculpidos a mano',
  'anime': 'en estilo anime japonés con ojos grandes expresivos, colores vibrantes y líneas limpias',
  'cartoon': 'en estilo cartoon occidental con formas exageradas, colores brillantes y expresiones divertidas',
  '3d-pixar': 'en estilo 3D Pixar con iluminación cinematográfica, texturas realistas y personajes adorables',
  'realista': 'con estilo fotorrealista, iluminación natural y detalles precisos',
  'cinematografico': 'con composición cinematográfica, iluminación dramática y profundidad de campo'
};

const genreDescriptions: Record<MusicGenre, string> = {
  'cancion-de-cuna': 'melodía suave y relajante, tempo lento, instrumentos acústicos delicados como piano y cuerdas, perfecta para dormir',
  'educativa': 'ritmo alegre y pegajoso, letras que enseñan números, colores o el alfabeto, instrumentos divertidos como xilófono y flauta',
  'aventura': 'música épica y emocionante, percusión energética, trompetas heroicas, perfecta para imaginar grandes aventuras',
  'baile': 'ritmo bailable y contagioso, percusión latina, instrumentos alegres, tempo rápido para mover el cuerpo',
  'naturaleza': 'sonidos orgánicos, instrumentos de viento, melodías que evocan bosques, océanos y animales',
  'amistad': 'melodía cálida y emotiva, armonías dulces, letras sobre compartir y cuidar a los amigos'
};

export function generateElaboratedPrompt(
  userPrompt: string,
  imageStyle: ImageStyle,
  musicGenre: MusicGenre
): string {
  const styleDesc = styleDescriptions[imageStyle];
  const genreDesc = genreDescriptions[musicGenre];
  
  const elaboratedPrompt = `
Crea una canción infantil animada y divertida para niños de 3 a 6 años sobre: "${userPrompt}".

ESTILO MUSICAL:
- Género: ${musicGenre.replace('-', ' ')}
- Características: ${genreDesc}
- Duración: 2-3 minutos
- Voz: Cantante infantil alegre y expresivo
- Producción: Alta calidad, mezcla clara y balanceada

ESTILO VISUAL:
- Imagen ${styleDesc}
- Colores vibrantes y alegres apropiados para niños
- Personajes amigables y expresivos
- Composición centrada y atractiva

CONTENIDO:
- Tema principal: ${userPrompt}
- Letras simples, repetitivas y fáciles de recordar
- Mensaje positivo y educativo
- Vocabulario apropiado para edad preescolar
- Estructura: Intro, verso, coro pegajoso, verso, coro, outro

AMBIENTE:
- Alegre, seguro y estimulante
- Fomenta la imaginación y el aprendizaje
- Apropiado para reproducción en familia
`.trim();

  return elaboratedPrompt;
}

export function generateMockImageUrl(style: ImageStyle, seed: string): string {
  const colors = ['FF6B6B', 'FFD93D', '6BCB77', '4D96FF', 'A78BFA', 'FB923C'];
  const color = colors[seed.length % colors.length];
  return `https://placehold.co/800x800/${color}/white?text=${encodeURIComponent(style)}`;
}

export function generateMockAudioUrl(genre: MusicGenre): string {
  return `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${(genre.length % 8) + 1}.mp3`;
}
