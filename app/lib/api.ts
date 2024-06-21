import tmdbClient from "./tmdbClient";

export const getMovies = async (page: number) => {
  try {
      const { data: { results } } = await tmdbClient.get(`/movie/popular?page=${page}`);
      return results
  } catch (error) {
      console.log(error);
  }
};

export const getGenres = async () => {
  try {
      const { data: { genres } } = await tmdbClient.get(`/genre/movie/list`);
      return genres
  } catch (error) {
      console.log(error);
  }
};

export const getMovie = async (id: number) => {
  try {
      const { data } = await tmdbClient.get(`/movie/${id}`);
      return data
  } catch (error) {
      console.log(error);
  }
};