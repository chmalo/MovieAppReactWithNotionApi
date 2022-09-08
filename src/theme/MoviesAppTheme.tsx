import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { blueTheme } from "./blueTheme"

interface Props {
    children: React.ReactNode
}

export const MoviesAppTheme = ({ children }: Props) => {
    return (
        <ThemeProvider theme={blueTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};