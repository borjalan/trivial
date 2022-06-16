import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

// Components
import { ParticlesBakground, PlayersDisplay, QuestionDisplay, AnswerPicker, QuestionsRecord, RoomDisplay } from 'components';
import { Grid, Stack } from '@mui/material';

// Actions y selectors
import { setPreguntas } from 'redux-reducers/preguntas.redux';

// Servicios
import { getPreguntas as getPreguntasService } from '../../services/roomGetters.services';


const GamePage: React.FC = () => {
    const dispatch = useDispatch();
    const { idSala } = useParams();
    const navigate = useNavigate();

    // Obtener preguntas
    useEffect(() => {
        const getPreguntas = async () => {
            if (!idSala) {
                navigate('/');
                return;
            }
            const preguntas = await getPreguntasService(idSala);
            if (preguntas && preguntas.length > 0) dispatch(setPreguntas(preguntas));
        }

        getPreguntas();
    }, [dispatch, idSala, navigate]);

    return (
        <div id="game-page" className="page">
            <ParticlesBakground />
            <Stack direction="column" justifyContent="space-between" alignItems="stretch" spacing={5} style={{ padding: "3vh 3vw", height: "94vh" }} >
                <Grid container direction="row" justifyContent="space-between" alignItems="center" style={{ width: "94vw" }}>
                    <Grid item xs={3} style={{ height: "70vh" }}>
                        <PlayersDisplay />
                    </Grid>
                    <Grid container direction="column" justifyContent="space-between" item xs={8.8} style={{ height: "70vh" }}>
                        <Grid item xs={1}>
                            <RoomDisplay />
                        </Grid>
                        <Grid item xs={1}>
                            <QuestionsRecord />
                        </Grid>
                        <Grid item xs={9}>
                            <QuestionDisplay />
                        </Grid>
                    </Grid>
                </Grid>
                <AnswerPicker />
            </Stack>

        </div>
    );
};

export default GamePage;
