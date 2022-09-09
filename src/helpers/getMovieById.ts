import axios from "axios";

export const getMovieById = async (id: string = "") => {
  const url = `http://localhost:8000/`;

  const response = await axios.get(url);
  const {data} = await response.data;

  return data.find((movie: any) => movie.id === id)
}