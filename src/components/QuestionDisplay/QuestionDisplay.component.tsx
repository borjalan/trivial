import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// Componentes
import { Paper, Stack, Typography } from '@mui/material';

// Selectores y Acciones
import { selectPreguntaActual } from 'redux-reducers/preguntas.redux';


const QuestionDisplay: React.FC = () => {
    const pregunta = useSelector(selectPreguntaActual);
    const preguntaCounter = useSelector(selectPreguntaActual);
    const [preguntaActual, setPreguntaActual] = useState<Pregunta>(pregunta);

    useEffect(() => {
        setPreguntaActual(pregunta);
    }, [pregunta]);

    return (
        <div id="question-display" style={{ height: "100%", width: "100%" }}>
            <Paper elevation={12} style={{ backgroundColor: "#dad7cd", height: "100%" }}>
                <Stack direction="column" justifyContent="space-evenly" alignItems="stretch" spacing={0} style={{ height: "100%" }}>
                    <Typography variant='h6' align='center' children={`Pregunta ${preguntaCounter + 1}`} />
                    <Typography variant='h5' align='center' children={preguntaActual.enunciado} />
                    <Typography variant='h6' align='center' children={`Tiempo restante: `} />
                </Stack>
            </Paper>
        </div>
    );
};

export default QuestionDisplay;
