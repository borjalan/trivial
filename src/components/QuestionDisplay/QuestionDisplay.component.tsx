import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Componentes
import { Paper, Stack, Typography } from '@mui/material';
import DisplayPuntuaciones from 'components/DisplayPuntuaciones/DisplayPuntuaciones.component';
import CountDownTimer from 'components/CountDownTimer/CountDownTimer.component';

// Selectores y Acciones
import { selectPreguntaActual } from 'redux-reducers/preguntas.redux';
import { finalizarJuego, selectEstadoPartida, selectPreguntaActualPointer, siguientePregunta } from 'redux-reducers/sala.redux';


const QuestionDisplay: React.FC = () => {
    const dispatch = useDispatch();
    const pregunta = useSelector(selectPreguntaActual);
    const estado = useSelector(selectEstadoPartida);
    const preguntaCounter = useSelector(selectPreguntaActualPointer);
    const [preguntaActual, setPreguntaActual] = useState<Pregunta>(pregunta);
    const [timer, setTimer] = useState<NodeJS.Timeout | undefined>(undefined);
    const [targetDate, setTargetDate] = useState(new Date().getTime());
    const interval = 15000;

    const setNewCountDown = () => {
        setTargetDate(new Date().getTime() + interval);
    }

    useEffect(() => {
        const nextQuestionHandler = () => {
            dispatch(siguientePregunta());
        }

        if (!timer && estado === 'Jugando') {
            setTimer(setInterval(nextQuestionHandler, interval));
        }
        else if (timer && estado === 'Puntuaciones') {
            clearInterval(timer);
        }
        else if (preguntaCounter === 9) {
            dispatch(finalizarJuego);
        }

    }, [dispatch, estado, preguntaCounter, timer]);

    useEffect(() => {
        setPreguntaActual(pregunta);
        setNewCountDown();
    }, [pregunta]);

    useEffect(() => {
        if (estado === 'Jugando') setNewCountDown();
    }, [estado]);


    return (
        <div id="question-display" style={{ height: "100%", width: "100%" }}>
            <Paper elevation={12} style={{ backgroundColor: "#dad7cd", height: "100%" }}>
                <Stack direction="column" justifyContent="space-evenly" alignItems="stretch" spacing={0} style={{ height: "100%" }}>
                    {estado === 'Iniciando' && <Typography variant='h4' align='center' children={`Esperando a que se inicie la partida`} />}
                    {estado === 'Jugando' && <Typography variant='h3' align='center' children={`Pregunta ${preguntaCounter + 1}`} />}
                    {estado === 'Jugando' && <Typography variant='h2' align='center' children={(preguntaActual && preguntaActual.enunciado) || 'Trivial'} />}
                    {estado === 'Jugando' && <CountDownTimer targetDate={targetDate} />}
                    {estado === 'Puntuaciones' && <DisplayPuntuaciones />}
                </Stack>
            </Paper>
        </div>
    );
};

export default QuestionDisplay;
