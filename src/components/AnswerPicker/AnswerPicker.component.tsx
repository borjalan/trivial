import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import { Button, Grid, Paper } from '@mui/material';

// Selectores y Acciones
import { addPuntosPlayer, selectEstadoPartida } from 'redux-reducers/sala.redux';
import { selectPreguntaActual, setPreguntaCorrecta, setPreguntaIncorrecta } from 'redux-reducers/preguntas.redux';

// Helper
import { findIndex, map } from 'lodash';

// Constants
import { mockPreguntas, mockRespuestas } from 'constants/Mocks';


const AnswerPicker: React.FC = () => {
    const dispatch = useDispatch();
    const pregunta = useSelector(selectPreguntaActual);
    const estado = useSelector(selectEstadoPartida);
    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<string | undefined>(undefined);
    const [anteriorPregunta, setAnteriorPregunta] = useState<Pregunta>(pregunta);

    useEffect(() => {
        if ((anteriorPregunta && pregunta && pregunta.enunciado !== anteriorPregunta.enunciado) ||
            (!pregunta && anteriorPregunta && anteriorPregunta._id === '9')) {
            const index = findIndex(mockPreguntas, (p: any) => p.enunciado === anteriorPregunta.enunciado);
            const respuestaCorrecta = mockRespuestas[index];

            if (respuestaCorrecta === respuestaSeleccionada) {
                dispatch(addPuntosPlayer(anteriorPregunta.recompensa));
                dispatch(setPreguntaCorrecta(index));
            } else dispatch(setPreguntaIncorrecta(index));

            setRespuestaSeleccionada('');
            if (anteriorPregunta._id !== '9') setAnteriorPregunta(pregunta);
        } else if (pregunta && pregunta.enunciado) {
            setAnteriorPregunta(pregunta);
        }
    }, [pregunta]);

    const handlePress = (r: string) => setRespuestaSeleccionada(r);

    return (
        <div id="question-picker">
            <Paper elevation={12} style={{ backgroundColor: "#dad7cd", height: '20vh' }}>
                {pregunta && estado === 'Jugando' &&
                    <Grid container direction="row" justifyContent="space-between" alignItems="stretch">
                        {map(pregunta.respuestas, (respuesta: string, index: number) => (
                            <Grid item xs={6} key={`respuesta-${index}`} style={{ height: '10vh', padding: '1%' }}>
                                <Button
                                    variant={respuestaSeleccionada === respuesta ? 'contained' : 'outlined'}
                                    children={respuesta}
                                    onClick={() => handlePress(respuesta)}
                                    style={{ height: "100%", width: "100%" }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                }
            </Paper>
        </div>
    );
};

export default AnswerPicker;
