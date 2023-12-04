import { useLocation } from "react-router-dom";
import LoginPage from "./LoginPage";
import Register from "./Register";
import './AuthRoute.css';
import { Box } from "@mui/material";
import { useState } from "react";

const AuthRoute = () => {
    
    const [username, setUsername ] = useState('');
    const [password, setPassword ] = useState('');
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
    }

    return (
        <div className="root">
            <form className="form" onSubmit={handleSubmit}>
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
                {location.pathname === '/login' ? <LoginPage setUsername={setUsername} setPassword={setPassword}/> : location.pathname === '/register' ? <Register /> : null}
                </Box>
            </form>
        </div>
    )
}

export default AuthRoute;