'use client';

import { ImageStyle } from '../types';

interface StyleSelectorProps {
  selectedStyle: ImageStyle;
  onStyleChange: (style: ImageStyle) => void;
}

const styles: { value: ImageStyle; label: string; emoji: string }[] = [
  { value: 'plastilina', label: 'Plastilina', emoji: '🎨' },
  { value: 'arcilla', label: 'Arcilla', emoji: '🏺' },
  { value: 'anime', label: 'Anime', emoji: '✨' },
  { value: 'cartoon', label: 'Cartoon', emoji: '🎭' },
  { value: '3d-pixar', label: '3D Pixar', emoji: '🎬' },
  { value: 'realista', label: 'Realista', emoji: '📸' },
  { value: 'cinematografico', label: 'Cinematográfico', emoji: '🎥' },
];

export default function StyleSelector({ selectedStyle, onStyleChange }: StyleSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="block text-lg font-bold text-purple-700">
        🎨 Estilo de Imagen
      </label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {styles.map((style) => (
          <button
            key={style.value}
            onClick={() => onStyleChange(style.value)}
            className={`p-4 rounded-2xl border-4 transition-all duration-200 ${
              selectedStyle === style.value
                ? 'border-purple-500 bg-purple-100 scale-105 shadow-lg'
                : 'border-gray-300 bg-white hover:border-purple-300 hover:scale-102'
            }`}
          >
            <div className="text-3xl mb-2">{style.emoji}</div>
            <div className="text-sm font-bold text-gray-700">{style.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
