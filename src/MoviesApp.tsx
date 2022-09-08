import {MoviesAppTheme} from "./theme";
import {MoviesAppRoutes} from "./routes/MoviesAppRoutes";

export const MoviesApp = () => {
    return (
        <div>
            <MoviesAppTheme>
                <MoviesAppRoutes/>
            </MoviesAppTheme>
        </div>
    );
};