import axios from "axios";
import {dataMovie} from "../data/dataMovie";

export const getMovies = async () => {
    const url = `http://localhost:8000/`;

    const response = await axios.get(url);
    const {data} = await response.data;

    const movies = data.map((movie: any) => {
        return {...dataMovie, ...movie}
    })

    return movies;
}