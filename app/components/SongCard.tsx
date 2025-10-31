'use client';

import { GeneratedSong } from '../types';
import { useState } from 'react';
import Image from 'next/image';

interface SongCardProps {
  song: GeneratedSong;
  onToggleFavorite: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function SongCard({ song, onToggleFavorite, onDelete }: SongCardProps) {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:scale-102">
      <div className="relative">
        <Image
          src={song.imageUrl}
          alt={song.title}
          width={800}
          height={800}
          className="w-full h-48 object-cover"
          unoptimized
        />
        <button
          onClick={() => onToggleFavorite(song.id)}
          className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
        >
          <span className="text-2xl">{song.isFavorite ? '❤️' : '🤍'}</span>
        </button>
      </div>
      
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold text-gray-800 line-clamp-2">
          {song.title}
        </h3>
        
        <div className="flex gap-2 flex-wrap">
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold">
            {song.imageStyle}
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
            {song.musicGenre}
          </span>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2">
          {song.prompt}
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => setShowPrompt(!showPrompt)}
            className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-xl font-bold hover:shadow-lg transition-all"
          >
            {showPrompt ? '🔼 Ocultar' : '🔽 Ver Prompt'}
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex-1 bg-gradient-to-r from-green-500 to-teal-500 text-white py-2 px-4 rounded-xl font-bold hover:shadow-lg transition-all"
          >
            {isPlaying ? '⏸️ Pausar' : '▶️ Reproducir'}
          </button>
          <button
            onClick={() => onDelete(song.id)}
            className="bg-red-500 text-white py-2 px-4 rounded-xl font-bold hover:shadow-lg transition-all"
          >
            🗑️
          </button>
        </div>

        {showPrompt && (
          <div className="mt-3 p-4 bg-gray-50 rounded-xl border-2 border-gray-200">
            <p className="text-xs text-gray-700 whitespace-pre-line">
              {song.elaboratedPrompt}
            </p>
          </div>
        )}

        {isPlaying && (
          <div className="mt-3 p-4 bg-gradient-to-r from-green-100 to-teal-100 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-1 h-8 bg-green-500 rounded animate-pulse"></div>
                <div className="w-1 h-6 bg-green-500 rounded animate-pulse delay-75"></div>
                <div className="w-1 h-10 bg-green-500 rounded animate-pulse delay-150"></div>
                <div className="w-1 h-7 bg-green-500 rounded animate-pulse"></div>
              </div>
              <p className="text-sm font-bold text-green-700">
                🎵 Reproduciendo música...
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
