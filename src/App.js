import Home from "./Components/home/Home";
import {Route, Routes} from "react-router-dom";
import AuthRoute from "./Components/auth/AuthRoute";
import PrivateRoute from "./utils/router/PrivateRoute";
import './App.css';
import { ColorModeContext, useMode } from "./Theme/Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "./Components/Layout/Layout";

const App = () => {

const [colorMode, theme] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider thene={theme}>
        <CssBaseline />
        <Layout>
        <div className="app">
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home/>}/>
            </Route>
            <Route path="login" element={<AuthRoute/>}/>
            <Route path="register" element={<AuthRoute/>}/>
          </Routes>
        </div>
        </Layout>

    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
