export type ImageStyle = 
  | 'plastilina'
  | 'arcilla'
  | 'anime'
  | 'cartoon'
  | '3d-pixar'
  | 'realista'
  | 'cinematografico';

export type MusicGenre = 
  | 'cancion-de-cuna'
  | 'educativa'
  | 'aventura'
  | 'baile'
  | 'naturaleza'
  | 'amistad';

export interface GeneratedSong {
  id: string;
  title: string;
  prompt: string;
  elaboratedPrompt: string;
  imageStyle: ImageStyle;
  musicGenre: MusicGenre;
  imageUrl: string;
  audioUrl: string;
  createdAt: Date;
  isFavorite: boolean;
}

export interface GenerationParams {
  userPrompt: string;
  imageStyle: ImageStyle;
  musicGenre: MusicGenre;
}
