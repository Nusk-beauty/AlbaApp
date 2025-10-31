'use client';

import { useState } from 'react';
import { ImageStyle, MusicGenre, GenerationParams } from '../types';
import StyleSelector from './StyleSelector';
import GenreSelector from './GenreSelector';

interface GeneratorProps {
  onGenerate: (params: GenerationParams) => void;
  isGenerating: boolean;
}

export default function Generator({ onGenerate, isGenerating }: GeneratorProps) {
  const [userPrompt, setUserPrompt] = useState('');
  const [imageStyle, setImageStyle] = useState<ImageStyle>('3d-pixar');
  const [musicGenre, setMusicGenre] = useState<MusicGenre>('aventura');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userPrompt.trim()) {
      onGenerate({ userPrompt, imageStyle, musicGenre });
    }
  };

  const examplePrompts = [
    '🦁 Un león valiente que aprende a compartir',
    '🌈 Un arcoíris mágico que canta',
    '🚂 Un tren que viaja por el mundo',
    '🐸 Una rana que enseña los números',
  ];

  return (
    <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-3xl shadow-2xl p-8 border-4 border-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
          🎵 Crea Tu Canción Mágica 🎵
        </h2>
        <p className="text-gray-600 font-medium">
          ¡Describe tu idea y crearemos una canción especial para ti!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-3">
          <label className="block text-lg font-bold text-pink-700">
            ✨ ¿Sobre qué quieres tu canción?
          </label>
          <textarea
            value={userPrompt}
            onChange={(e) => setUserPrompt(e.target.value)}
            placeholder="Ejemplo: Un dinosaurio que ama bailar y hacer amigos..."
            className="w-full p-4 rounded-2xl border-4 border-pink-300 focus:border-pink-500 focus:outline-none text-lg resize-none"
            rows={4}
            disabled={isGenerating}
          />
          <div className="flex flex-wrap gap-2">
            {examplePrompts.map((prompt, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setUserPrompt(prompt)}
                className="px-4 py-2 bg-white rounded-full text-sm font-bold text-gray-700 hover:bg-pink-100 border-2 border-pink-200 transition-all"
                disabled={isGenerating}
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        <StyleSelector selectedStyle={imageStyle} onStyleChange={setImageStyle} />
        
        <GenreSelector selectedGenre={musicGenre} onGenreChange={setMusicGenre} />

        <button
          type="submit"
          disabled={!userPrompt.trim() || isGenerating}
          className={`w-full py-5 rounded-2xl font-black text-2xl transition-all duration-300 ${
            !userPrompt.trim() || isGenerating
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white hover:shadow-2xl hover:scale-105 animate-pulse'
          }`}
        >
          {isGenerating ? '🎨 Creando tu canción mágica... ✨' : '🚀 ¡Crear Mi Canción! 🎵'}
        </button>
      </form>
    </div>
  );
}
