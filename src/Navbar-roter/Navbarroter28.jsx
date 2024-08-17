import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { TextField, Button, Snackbar, Alert, Typography, Box, Link, InputAdornment } from '@mui/material';
import './Navbar-roter1.css';

const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
};

const FormComponent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [captcha, setCaptcha] = useState(generateCaptcha());
    const [captchaInput, setCaptchaInput] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('success');

    const onSubmit = (data) => {
        if (!captchaInput || captchaInput !== captcha) {
            setMessage('CAPTCHA noto\'g\'ri yoki kiritilmagan!');
            setSeverity('error');
        } else {
            console.log('Yuborilgan ma\'lumotlar:', data);
            setMessage('Muvaffaqiyatli yuborildi!');
            setSeverity('success');
        }

        setOpen(true);
        setCaptcha(generateCaptcha());
        setCaptchaInput('');
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <>
        <br />
            <Box component="article" className='sahifalar' mt={4}>
           
                <h1>O'xshash sahifalar</h1>
                <a className='H3' href="/">Bosh sahifaga qaytish</a>
                <Box mt={2}>
                    <Link component={NavLink} to='/General-Pages/Talim_dasturlari'>
                        <Typography variant="h6" className='H3'>Ochiq eshiklar kuni</Typography>
                    </Link>
                    <Link component={NavLink} to='/General-Pages/Bakalavriyatga_qabul'>
                        <Typography variant="h6" className='H3'>Bakalavriyatga qabul</Typography>
                    </Link>
                    <Link component={NavLink} to='/General-Pages/Xorijiy_fuqarolar_qabuli'>
                        <Typography variant="h6" className='H3'>Xorijiy fuqarolar qabuli</Typography>
                    </Link>
                    <Link component={NavLink} to='/General-Pages/Qabul_komissiyasi'>
                        <Typography variant="h6" className='H3'>Qabul komissiyasi bilan bog'lanish</Typography>
                    </Link>
                    <Link component={NavLink} to='/General-Pages/Murojaat'>
                        <Typography variant="h6" className='H3'>Murojaat qilish</Typography>
                    </Link>
                    <Link component={NavLink} to='/General-Pages/Qushma_talim_dasturlari'>
                        <Typography variant="h6" className='H3'>Qo'shma ta'lim dasturlari</Typography>
                    </Link>
                </Box>
            </Box>

            <Box className="form-container" mt={4}>
                <Typography variant="h5" component="h2">Bizga murojaat qiling!</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box mb={2}>
                        <TextField
                            label="Ism"
                            variant="outlined"
                            fullWidth
                            {...register('ism', { required: true, minLength: 7 })}
                            error={!!errors.ism}
                            helperText={errors.ism && "Ism kamida 7 harfli bo'lishi kerak."}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            label="Familiya"
                            variant="outlined"
                            fullWidth
                            {...register('familiya', { required: true, pattern: /^[A-Z]/ })}
                            error={!!errors.familiya}
                            helperText={errors.familiya && "Familiya bosh harfi katta bo'lishi kerak."}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            label="Elektron pochta"
                            variant="outlined"
                            fullWidth
                            {...register('email', { required: true, pattern: /@/ })}
                            error={!!errors.email}
                            helperText={errors.email && "Emailda @ belgisi bo'lishi kerak."}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            label="Telefon raqam"
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                startAdornment: <InputAdornment position="start">+998</InputAdornment>,
                            }}
                            {...register('telefon', { 
                                required: true, 
                                pattern: /^\d{9}$/, 
                                validate: (value) => value.length === 9 
                            })}
                            error={!!errors.telefon}
                            helperText={errors.telefon && "Telefon raqami +998 bilan boshlangan holda 9 ta raqamdan iborat bo'lishi kerak."}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            label="Savol"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            {...register('savol')}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            label={`CAPTCHA: ${captcha}`}
                            variant="outlined"
                            fullWidth
                            value={captchaInput}
                            onChange={(e) => setCaptchaInput(e.target.value)}
                            error={!captchaInput}
                            helperText={!captchaInput && "CAPTCHA kiritilishi kerak."}
                        />
                    </Box>
                    <Button variant="contained" color="primary" type="submit">
                        Jo'natish
                    </Button>
                </form>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                        {message}
                    </Alert>
                </Snackbar>
            </Box>
        </>
    );
};

export default FormComponent;
