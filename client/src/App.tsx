import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { themeSettings } from "./theme";
import { Dashboard } from "@/scenes";
import { NavBar } from "@/components";
import { GLOBAL_CONSTANTS } from "@/constants/global";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <NavBar />
            <Routes>
              <Route
                path={GLOBAL_CONSTANTS.APP_URL.DASHBOARD}
                element={<Dashboard />}
              />
              <Route
                path={GLOBAL_CONSTANTS.APP_URL.PREDICTIONS}
                element={<div>Prediction</div>}
              />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
