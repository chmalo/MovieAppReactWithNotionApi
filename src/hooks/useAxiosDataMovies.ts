import {useEffect, useState} from "react";
import {getMovies} from "../helpers/getMovies";
import {dataMovie} from "../data/dataMovie";

export const useAxiosDataMovies = () => {
    const [state, setState] = useState({movies: [dataMovie], loading: true});

    useEffect(() => {
        getMovies().then((movies) => {
            setState({
                movies: movies,
                loading: false,
            })
        });
    }, []);

    return state;
}