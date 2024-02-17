import { useState } from "react";
import "./App.css";
import MainBox from "./MainBox";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

export default function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <MainBox />
        </ThemeProvider>
    );
}
