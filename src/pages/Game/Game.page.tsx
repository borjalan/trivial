import React from 'react';

// Components
import { ParticlesBakground, PlayersDisplay, QuestionDisplay, AnswerPicker, QuestionsRecord, RoomDisplay } from 'components';
import { Grid, Stack } from '@mui/material';


const GamePage: React.FC = () => {
    return (
        <div id="game-page" className="page">
            <ParticlesBakground />
            <Stack direction="column" justifyContent="space-between" alignItems="stretch" spacing={5} style={{ padding: "3vh 3vw", height: "94vh" }} >
                <Grid container direction="row" justifyContent="space-between" alignItems="center" style={{ width: "94vw" }}>
                    <Grid item xs={2} style={{ height: "70vh" }}>
                        <PlayersDisplay />
                    </Grid>
                    <Grid container direction="column" justifyContent="space-between" item xs={9} style={{ height: "70vh" }}>
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
