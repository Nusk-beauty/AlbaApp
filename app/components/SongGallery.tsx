'use client';

import { GeneratedSong } from '../types';
import SongCard from './SongCard';

interface SongGalleryProps {
  songs: GeneratedSong[];
  onToggleFavorite: (id: string) => void;
  onDelete: (id: string) => void;
  showOnlyFavorites: boolean;
}

export default function SongGallery({ 
  songs, 
  onToggleFavorite, 
  onDelete,
  showOnlyFavorites 
}: SongGalleryProps) {
  const displaySongs = showOnlyFavorites 
    ? songs.filter(song => song.isFavorite)
    : songs;

  if (displaySongs.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-8xl mb-4">
          {showOnlyFavorites ? '💔' : '🎵'}
        </div>
        <h3 className="text-2xl font-bold text-gray-600 mb-2">
          {showOnlyFavorites 
            ? '¡Aún no tienes canciones favoritas!' 
            : '¡Aún no has creado ninguna canción!'}
        </h3>
        <p className="text-gray-500">
          {showOnlyFavorites
            ? 'Marca tus canciones favoritas con ❤️'
            : 'Crea tu primera canción mágica arriba ✨'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displaySongs.map((song) => (
        <SongCard
          key={song.id}
          song={song}
          onToggleFavorite={onToggleFavorite}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
