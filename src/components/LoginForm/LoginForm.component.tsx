import React from 'react';
import { Formik } from "formik";

// Components
import { Button, Stack, TextField, Typography } from '@mui/material';

// Constants
import { BUTTONS, TEXTS } from '../../constants/Login.constants';

const LoginForm: React.FC = () => {
    const initialValue = { nombre: '', idSala: '' }

    const submit = (values: any) => {
        alert(JSON.stringify(values, null, 2));
    }

    return (
        <div id="login-form">
            <Formik initialValues={initialValue} onSubmit={submit}>
                {({ values, touched, handleChange, handleSubmit, errors }) => (
                    <form onSubmit={handleSubmit}>
                        <Stack direction="column" justifyContent="space-around" alignItems="stretch" style={{ width: '30vw', height: '50vh' }}>
                            <Typography variant="h1" align='center' children={TEXTS.TITLE} />
                            <TextField name={TEXTS.NOMBRE} label={TEXTS.LABEL_NOMBRE} variant="outlined" value={values.nombre} onChange={handleChange} />
                            <TextField name={TEXTS.ID} label={TEXTS.LABEL_ID} variant="outlined" value={values.idSala} onChange={handleChange} />
                            <Button type="submit" variant="contained" fullWidth children={values.idSala !== '' ? BUTTONS.UNIRSE : BUTTONS.CREAR} />
                        </Stack>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;
