// import { Fragment } from 'react';
import './LoginPage.css';
import { TextField, Button, Typography } from '@mui/material';

const LoginPage = (props) => {
    
    const {setPassword, setUsername} = props

    return (
        <>
            <Typography variant="h2" fontFamily='Popins' textAlign='center'>Авторизация</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Popins' textAlign='center'>Введите ваш логин и пароль</Typography>
            <TextField fullWidth={true} margin='normal' label="Логин" variant="outlined" placeholder='Введите ваш логин' onChange={(e) => setUsername(e.target.value)}/>
            <TextField type='password' fullWidth={true} margin='normal' label="Пароль" variant="outlined" placeholder='Введите ваш пароль' onChange={(e) => setPassword(e.target.value)}/>
            <Button type='sumbit' sx={{fontFamily:'Popins', marginTop: 2, marginBottom: 2,width: '60%'}}  variant="contained">Войти</Button>
            <Typography variant="body1" sx={{fontFamily: 'Popins', }}>У вас нет аккаунта?<span className='insideText'>Регистрация</span></Typography>
        </>
    )
}

export default LoginPage;
