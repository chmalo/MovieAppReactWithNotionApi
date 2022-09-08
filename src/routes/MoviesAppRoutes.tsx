import {Navigate, Route, Routes} from "react-router-dom";
import {MovieDedails, MoviesScreen} from "../components";

export const MoviesAppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MoviesScreen />}/>
            <Route path="movie/:movieId" element={<MovieDedails/>}/>

            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
};