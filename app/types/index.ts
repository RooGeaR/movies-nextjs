export type Movie = {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  genre_ids: number[];
  genres?: Genre[];
  vote_average: number;
  vote_count: number;
};

export type Genre = {
  id: number;
  name: string;
}

export type MovieContextType = {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void; 
  genres: Genre[];
  setGenres: (genre: Genre[]) => void;
  selectedMovie: Movie|null;
  setSelectedMovie: (movie: Movie) => void;
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
};