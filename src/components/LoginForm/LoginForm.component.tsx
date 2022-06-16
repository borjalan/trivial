import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from "formik";
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

// Components
import { Button, Paper, Stack, TextField, Typography } from '@mui/material';

// Helpers
import { loginFormValidationSchema } from 'helpers';

// Selectores y Actions
import { addPlayers } from 'redux-reducers/sala.redux';
import { setIdentity } from 'redux-reducers/identidad.redux';

// Constants
import { BUTTONS, TEXTS } from 'constants/Login.constants';


const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const initialValue = { nombre: '', idSala: '' };

    const submit = (values: any) => {
        let idSala = values.idSala;

        if (idSala === '') idSala = 'salaCon2PlayersDentro123';//uuidv4(); // Si no tenemos id de la sala generamos uno nuevo

        // TODO: Buscar en backend si existe sala values.idSala
        if (idSala === 'salaCon2PlayersDentro123') {
            const { uniqueNamesGenerator, adjectives, animals } = require('unique-names-generator');
            const date = Date.now();
            const randomNumber = date % 8;
            const numberPlayers = randomNumber === 0 ? 1 : randomNumber
            let players: Array<Jugador> = [];
            for (let i = 0; i < numberPlayers; i++) {
                players.push({
                    nombre: uniqueNamesGenerator({
                        dictionaries: [adjectives, animals],
                        length: 2
                    }),
                    puntuacion: 0,
                    isLeader: i === 0
                });
            }
            dispatch(setIdentity({
                nombre: values.nombre,
                puntuacion: 0,
                isLeader: false
            }));
            dispatch(addPlayers([...players, {
                nombre: values.nombre,
                puntuacion: 0,
                isLeader: false
            }]))
        }
        // TODO: Si hay la sala ya existe y tiene menos del limite de jugadores te añade con leader a false
        // TODO: Si la sala existe, comprobar si values.name ya existe en la sala
        // TODO: Ver si la partida no ha empezado aún
        // TODO: Si todo está ok, añadimos values.name a la sala con 0 puntos

        // if (idSala === '') idSala = uuidv4(); // Si no tenemos id de la sala generamos uno nuevo
        navigate(`/game/${idSala}`);
    }

    return (
        <div id="login-form">
            <Formik initialValues={initialValue} onSubmit={submit} validationSchema={loginFormValidationSchema}>
                {({ values, touched, handleChange, handleSubmit, errors }) => (
                    <Paper elevation={12} style={{ backgroundColor: "#dad7cd", padding: '3rem' }}>
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
                                <Button type="submit" variant="contained" children={values.idSala !== '' ? BUTTONS.UNIRSE : BUTTONS.CREAR} />
                            </Stack>
                        </form>
                    </Paper>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;
