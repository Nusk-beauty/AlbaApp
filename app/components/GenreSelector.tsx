'use client';

import { MusicGenre } from '../types';

interface GenreSelectorProps {
  selectedGenre: MusicGenre;
  onGenreChange: (genre: MusicGenre) => void;
}

const genres: { value: MusicGenre; label: string; emoji: string }[] = [
  { value: 'cancion-de-cuna', label: 'Canción de Cuna', emoji: '🌙' },
  { value: 'educativa', label: 'Educativa', emoji: '📚' },
  { value: 'aventura', label: 'Aventura', emoji: '🗺️' },
  { value: 'baile', label: 'Baile', emoji: '💃' },
  { value: 'naturaleza', label: 'Naturaleza', emoji: '🌳' },
  { value: 'amistad', label: 'Amistad', emoji: '🤝' },
];

export default function GenreSelector({ selectedGenre, onGenreChange }: GenreSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="block text-lg font-bold text-blue-700">
        🎵 Género Musical
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {genres.map((genre) => (
          <button
            key={genre.value}
            onClick={() => onGenreChange(genre.value)}
            className={`p-4 rounded-2xl border-4 transition-all duration-200 ${
              selectedGenre === genre.value
                ? 'border-blue-500 bg-blue-100 scale-105 shadow-lg'
                : 'border-gray-300 bg-white hover:border-blue-300 hover:scale-102'
            }`}
          >
            <div className="text-3xl mb-2">{genre.emoji}</div>
            <div className="text-sm font-bold text-gray-700">{genre.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
