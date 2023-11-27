import { useLocation } from "react-router-dom";
import LoginPage from "./LoginPage";
import Register from "./Register";
import './AuthRoute.css';
import { Box } from "@mui/material";

const AuthRoute = () => {

    const location = useLocation();

    return (
        <div className="root">
            <div className="form">
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    maxWidth={640}
                    margin='auto'
                    padding={5}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                >
                {location.pathname === '/login' ? <LoginPage /> : location.pathname === '/register' ? <Register /> : null}
                </Box>
            </div>
        </div>
    )
}

export default AuthRoute;