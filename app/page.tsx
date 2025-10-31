'use client';

import { useState } from 'react';
import Generator from './components/Generator';
import SongGallery from './components/SongGallery';
import { useSongs } from './hooks/useSongs';

export default function Home() {
  const { songs, isGenerating, generateSong, toggleFavorite, deleteSong, clearAll } = useSongs();
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const favoriteCount = songs.filter(s => s.isFavorite).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="text-center mb-12">
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mb-4 drop-shadow-lg">
            🎵 AlbaApp 🎨
          </h1>
          <p className="text-2xl font-bold text-gray-700 mb-2">
            ¡Crea Canciones Mágicas con IA!
          </p>
          <p className="text-lg text-gray-600">
            Canciones animadas y divertidas para niños de 3 a 6 años
          </p>
        </header>

        <div className="mb-12">
          <Generator onGenerate={generateSong} isGenerating={isGenerating} />
        </div>

        {songs.length > 0 && (
          <div className="mb-8">
            <div className="bg-white rounded-3xl shadow-xl p-6 border-4 border-purple-200">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl font-black text-gray-800">
                    {showOnlyFavorites ? '❤️ Mis Favoritas' : '🎵 Mis Canciones'}
                  </h2>
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-bold">
                    {showOnlyFavorites ? favoriteCount : songs.length} canciones
                  </span>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
                    className={`px-6 py-3 rounded-xl font-bold transition-all ${
                      showOnlyFavorites
                        ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {showOnlyFavorites ? '❤️ Favoritas' : '🤍 Ver Favoritas'}
                  </button>
                  
                  {!showOnlyFavorites && (
                    <button
                      onClick={clearAll}
                      className="px-6 py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition-all"
                    >
                      🗑️ Limpiar Todo
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <SongGallery
          songs={songs}
          onToggleFavorite={toggleFavorite}
          onDelete={deleteSong}
          showOnlyFavorites={showOnlyFavorites}
        />

        <footer className="mt-16 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-purple-200">
            <p className="text-gray-600 font-medium mb-4">
              🎨 AlbaApp - Generador de Música Infantil con IA
            </p>
            <p className="text-sm text-gray-500">
              Crea canciones animadas y divertidas con imágenes en diferentes estilos
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold">
                Plastilina
              </span>
              <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-bold">
                Arcilla
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
                Anime
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                Cartoon
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold">
                3D Pixar
              </span>
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">
                Realista
              </span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold">
                Cinematográfico
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
