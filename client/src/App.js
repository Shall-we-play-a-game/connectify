import "./index.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { HomePage, LoginPage, ProfilePage } from "./pages";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token))
  return (
    <div className="app">
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/home" element={isAuth ? <HomePage />: <Navigate to="/" />} />
            <Route exact path="/profile/:userId" element={isAuth ? <ProfilePage /> : <Navigate />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
