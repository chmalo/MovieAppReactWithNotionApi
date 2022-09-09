import {MovieCard} from "./MovieCard";
import {useAxiosDataMovies} from "../hooks";
import {Grid} from "@mui/material";

export const MoviesList = () => {
    const { movies, loading } = useAxiosDataMovies()

    return (
        <div>
            <h1>Movies list</h1>

            {loading && <p className="animate__animated animate__flash">Loading</p>}

            {!loading && <Grid container sx={{ml: 2}}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} {...movie} />
                ))
                }
            </Grid>}
        </div>
    );
};