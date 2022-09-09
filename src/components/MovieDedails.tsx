import {Navigate, useNavigate, useParams} from "react-router-dom";
import {Button, Grid} from "@mui/material";
import {getMovieById} from "../helpers/getMovieById";
import {useMemo, useState} from "react";
import {dataMovie} from "../data/dataMovie";

export const MovieDedails =  () => {
    const [state, setState] = useState({movie: dataMovie, loading: true});
    const {movieId} = useParams();
    const navigate = useNavigate()
    const {movie, loading} = state;

    useMemo(() => {
        getMovieById(movieId).then((movie) => {
            setState({
                movie: movie,
                loading: false,
            })
        });
    }, [movieId]);

    if (!movie) {
        return <Navigate to={"/"} />
    }
    const imagePath = `../assets/${movieId}.jpg`;

    const onNavigateBack = () => {
        navigate(-1);
    }

    return (
        <Grid container sx={{  mt: 5, ml: 1}} >
            {loading && <p className="animate__animated animate__flash">Loading</p>}

            {!loading && <div className="col-4">
                <img
                    src={imagePath}
                    alt=""
                    className="img-thumbnail"
                />
            </div>}
            {!loading && <div className="col-8">
                <h3>{movie.tituloMovie}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{movie.descripcionMovie}</li>
                    <li className="list-group-item">genero</li>
                    <li className="list-group-item">{movie.anioMovie}</li>
                    <li className="list-group-item">{movie.puntuacionMovie}</li>
                    <li className="list-group-item">idioma</li>
                    <li className="list-group-item">{movie.duracionMovie}</li>
                </ul>

                <Button onClick={onNavigateBack}>
                    Regresar
                </Button>
            </div>}
        </Grid>
    );
};