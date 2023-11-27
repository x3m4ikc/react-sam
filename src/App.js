import './App.css'
import Home from "./Components/home/Home";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./Components/auth/LoginPage"
import PrivateRoute from "./utils/router/PrivateRoute";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home/>}/>
        </Route>
        <Route path="login" element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
