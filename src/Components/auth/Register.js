import './Register.css';
import { TextField, Button, Typography } from '@mui/material';

const Register = () => {
    return (
        <>
            <Typography variant="h2" fontFamily='Popins' textAlign='center'>Регистрация</Typography>
            <Typography variant="body1" marginBottom={3} fontFamily='Popins' textAlign='center'>Введите данные для регистрации</Typography>
            <TextField fullWidth={true} margin='normal' label="Логин" variant="outlined" placeholder='Введите ваш логин'/>
            <TextField type='password' fullWidth={true} margin='normal' label="Пароль" variant="outlined" placeholder='Введите ваш пароль'/>
            <TextField type='password' fullWidth={true} margin='normal' label="Пароль" variant="outlined" placeholder='Повторите пароль'/>
            <Button sx={{fontFamily:'Popins', marginTop: 2, marginBottom: 2,width: '60%'}}  variant="contained">Зарегистрироваться</Button>
            <Typography variant="body1" sx={{fontFamily: 'Popins', }}>У вас есть аккаунт?<span className='insideText'>Авторизация</span></Typography>
        </>
    )
}

export default Register;
