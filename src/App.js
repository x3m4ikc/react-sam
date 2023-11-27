import Home from "./Components/home/Home";
import {Route, Routes} from "react-router-dom";
import AuthRoute from "./Components/auth/AuthRoute";
import PrivateRoute from "./utils/router/PrivateRoute";
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home/>}/>
        </Route>
        <Route path="login" element={<AuthRoute/>}/>
        <Route path="register" element={<AuthRoute/>}/>
      </Routes>
    </div>
  );
}

export default App;
