import React, { useEffect, useState } from 'react';
import { selectPreguntaActual } from 'redux-reducers/sala.redux';

// Components
import { Button, Grid, Paper } from '@mui/material';

// Selectores y Acciones
import { useSelector } from 'react-redux';
import { selectPreguntas } from 'redux-reducers/preguntas.redux';

// Helper
import { map } from 'lodash';


const AnswerPicker: React.FC = () => {
    const punteroPregunta = useSelector(selectPreguntaActual); // Aqui guardo el número de la pregunta
    const preguntas = useSelector(selectPreguntas); // Aqui guardo el array de preguntas
    // En esta variable guardo el valor de la pregunta para mostrar en un estado
    const [preguntaActual, setPreguntaActual] = useState<Pregunta>(preguntas[punteroPregunta]);
    const [peguntaSeleccionada, setPreguntaSeleccionada] = useState<number>(-1);

    useEffect(() => {
        setPreguntaActual(preguntas[punteroPregunta]);
    }, [punteroPregunta]);

    const handlePress = (i: number) => setPreguntaSeleccionada(i);

    return (
        <div id="question-picker">
            <Paper elevation={12} style={{ backgroundColor: "#dad7cd", height: '20vh' }}>
                <Grid container direction="row" justifyContent="space-between" alignItems="stretch">
                    {map(preguntaActual.respuestas, (respuesta: string, index: number) => (
                        <Grid item xs={6} key={`respuesta-${index}`} style={{ height: '10vh', padding: '1%' }}>
                            <Button
                                variant={peguntaSeleccionada === index ? 'contained' : 'outlined'}
                                children={respuesta}
                                onClick={() => handlePress(index)}
                                style={{ height: "100%", width: "100%" }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </div>
    );
};

export default AnswerPicker;
