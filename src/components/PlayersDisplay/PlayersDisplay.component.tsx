import { BorderAllRounded, BorderRight, Label } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import React from 'react';

// Components
import { Button, Stack, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

// Selectores y Acciones
import { selectMiNombre, selectMiPuntuacion, selectIsLeader } from 'redux-reducers/identidad.redux';

// Constants
import { BUTTONS, TEXTS } from 'constants/mock.constants';
import { selectJugadores } from 'redux-reducers/sala.redux';

const PlayersDisplay: React.FC = () => {
    const jugadores = useSelector(selectJugadores);
    const puntuaciones = useSelector(selectMiPuntuacion);
    return (
        <div id="players-display" style={{ backgroundColor: "#A3B18A", height: "100%", width: "100%", border: "solid", borderRadius: "1vw", borderColor: "#000000" }}>
            <Stack direction="column" style={{ width: '100%', height: '100%' }}>
                <Typography textAlign="center" style={{ backgroundColor: "#588157", fontSize: "2vw", marginTop: "2vh" }} children={TEXTS.JUGADORES} />
                <Stack direction="column" justifyContent="flex-start" alignItems="stretch" spacing={2} style={{padding: "3rem"}}>
                    {jugadores.map((jugador, index) => {
                        return (
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="stretch"
                                spacing={1}

                            >
                                <Typography key={`player-${index}`} variant='h6' children={jugador.nombre} />
                                <Typography key={`player-score-${index}`} variant='h6' color="black" children={jugador.puntuacion} />
                                {jugador.isLeader && <StarIcon style={{color: "yellow"}}/>}
                            </Stack>
                        )
                    })
                    }
                </Stack>

                <Button children={BUTTONS.GO} style={{ backgroundColor: "#588157", color: "#DAD7CD", width: "14vw", height: '6vh', alignSelf: 'center', position: 'absolute', fontSize: "1vw", marginTop: "62vh" }} />
            </Stack>
        </div>
    );
};

export default PlayersDisplay;
