import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// Componentes
import { Paper, Stack, Typography } from '@mui/material';

// Selectores y Acciones
import { selectPreguntaActual } from 'redux-reducers/sala.redux';
import { selectPreguntas } from 'redux-reducers/preguntas.redux';


const QuestionDisplay: React.FC = () => {
    const punteroPregunta = useSelector(selectPreguntaActual); // Aqui guardo el número de la pregunta
    const preguntas = useSelector(selectPreguntas); // Aqui guardo el array de preguntas
    // En esta variable guardo el valor de la pregunta para mostrar en un estado
    const [preguntaActual, setPreguntaActual] = useState<Pregunta>(preguntas[punteroPregunta]);

    return (
        <div id="question-display" style={{ height: "100%", width: "100%" }}>
            <Paper elevation={12} style={{ backgroundColor: "#dad7cd", height: "100%" }}>
                <Stack direction="column" justifyContent="space-evenly" alignItems="stretch" spacing={0} style={{ height: "100%" }}>
                    <Typography variant='h6' align='center' children={`Pregunta ${punteroPregunta + 1}`} />
                    <Typography variant='h5' align='center' children={preguntaActual.enunciado} />
                    <Typography variant='h6' align='center' children={`Tiempo restante: `} />
                </Stack>
            </Paper>
        </div>
    );
};

export default QuestionDisplay;
