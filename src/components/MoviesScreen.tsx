import {MoviesMenu} from "./MoviesMenu";
import {MoviesList} from "./MoviesList";
import {Box, Grid, Typography} from "@mui/material";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";

export const MoviesScreen = () => {
    return (
        <Box>
            <Grid container
                  alignItems="center"
                  justifyContent="center"
            >
                <MovieFilterIcon sx={{ fontSize: 100 }} />
                <Typography variant='h2' align="center">
                    SuperPelisHD
                </Typography>
            </Grid>
            <MoviesMenu />

            <MoviesList />
        </Box>
    );
};