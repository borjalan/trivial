import React from 'react';
import { Formik } from "formik";

// Components
import { Button, Stack, TextField, Typography } from '@mui/material';

// Helpers
import { loginFormValidationSchema } from '../../helpers/LoginForm.helper';

// Constants
import { BUTTONS, TEXTS } from '../../constants/Login.constants';


const LoginForm: React.FC = () => {
    const initialValue = { nombre: '', idSala: '' }

    const submit = (values: any) => {
        
        // TODO: Buscar en backend si existe sala values.idSala
        // TODO: Si la sala existe, comprobar si values.name ya existe en la sala existe
        // TODO: Ver si la partida no ha empezado aún
        // TODO: Si todo está ok, añadimos values.name a la sala si la partida no ha empezado con 0 puntos

    }

    return (
        <div id="login-form">
            <Formik initialValues={initialValue} onSubmit={submit} validationSchema={loginFormValidationSchema}>
                {({ values, touched, handleChange, handleSubmit, errors }) => (
                    <form onSubmit={handleSubmit}>
                        <Stack direction="column" justifyContent="space-around" alignItems="stretch" style={{ width: '30vw', height: '50vh' }}>
                            <Typography variant="h1" align='center' children={TEXTS.TITLE} />
                            <TextField
                                label={TEXTS.LABEL_NOMBRE}
                                variant="outlined"
                                name={"nombre"}
                                value={values.nombre}
                                onChange={handleChange}
                                error={!!touched.nombre && !!errors.nombre}
                                helperText={touched.nombre && errors.nombre}
                            />
                            <TextField
                                label={TEXTS.LABEL_ID}
                                variant="outlined"
                                name={"idSala"}
                                value={values.idSala}
                                onChange={handleChange}
                                error={!!touched.idSala && !!errors.idSala}
                                helperText={touched.idSala && errors.idSala}
                            />
                            <Button type="submit" variant="contained" fullWidth children={values.idSala !== '' ? BUTTONS.UNIRSE : BUTTONS.CREAR} />
                        </Stack>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;
