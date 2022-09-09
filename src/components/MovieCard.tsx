import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {getMovies} from "../helpers/getMovies";
import {Link} from "react-router-dom";

export const MovieCard = ({tituloMovie, id, descripcionMovie}: {tituloMovie: string, id: string, descripcionMovie: string}) => {
    const imagePath = `../assets/${id}.jpg`

    return (
        <div className="card animate__animated animate__fadeIn">
            <Card sx={{ maxWidth: 400, mt: 2, ml: 4 }}>
                <CardMedia
                    component="img"
                    alt={tituloMovie}
                    height="200"
                    image={imagePath}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {tituloMovie}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {descripcionMovie}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/movie/${id}`}>Ver pelicula</Link>
                </CardActions>
            </Card>
        </div>
    );
}