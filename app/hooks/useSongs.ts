'use client';

import { useState, useEffect } from 'react';
import { GeneratedSong, GenerationParams } from '../types';
import { generateElaboratedPrompt, generateMockImageUrl, generateMockAudioUrl } from '../utils/promptGenerator';

const STORAGE_KEY = 'albaapp-songs';

export function useSongs() {
  const [songs, setSongs] = useState<GeneratedSong[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          return parsed.map((song: GeneratedSong) => ({
            ...song,
            createdAt: new Date(song.createdAt)
          }));
        } catch (error) {
          console.error('Error loading songs:', error);
        }
      }
    }
    return [];
  });
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (songs.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(songs));
    }
  }, [songs]);

  const generateSong = async (params: GenerationParams) => {
    setIsGenerating(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));

    const elaboratedPrompt = generateElaboratedPrompt(
      params.userPrompt,
      params.imageStyle,
      params.musicGenre
    );

    const newSong: GeneratedSong = {
      id: Date.now().toString(),
      title: params.userPrompt.slice(0, 50),
      prompt: params.userPrompt,
      elaboratedPrompt,
      imageStyle: params.imageStyle,
      musicGenre: params.musicGenre,
      imageUrl: generateMockImageUrl(params.imageStyle, params.userPrompt),
      audioUrl: generateMockAudioUrl(params.musicGenre),
      createdAt: new Date(),
      isFavorite: false,
    };

    setSongs(prev => [newSong, ...prev]);
    setIsGenerating(false);
  };

  const toggleFavorite = (id: string) => {
    setSongs(prev =>
      prev.map(song =>
        song.id === id ? { ...song, isFavorite: !song.isFavorite } : song
      )
    );
  };

  const deleteSong = (id: string) => {
    setSongs(prev => prev.filter(song => song.id !== id));
  };

  const clearAll = () => {
    if (confirm('¿Estás seguro de que quieres eliminar todas las canciones?')) {
      setSongs([]);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return {
    songs,
    isGenerating,
    generateSong,
    toggleFavorite,
    deleteSong,
    clearAll,
  };
}
