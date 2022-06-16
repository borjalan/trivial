import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

// Components
import { Button, Stack, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

// Selectores y Acciones
import { iniciarJuego, selectEstadoPartida, selectJugadores } from 'redux-reducers/sala.redux';

// Constants
import { BUTTONS, TEXTS } from 'constants/PlayersDisplay.constants';


const PlayersDisplay: React.FC = () => {
    const dispatch = useDispatch();
    const jugadores = useSelector(selectJugadores);
    const estado = useSelector(selectEstadoPartida);

    const initGame = () => {
        dispatch(iniciarJuego());
    }

    return (
        <div id="players-display" style={{ backgroundColor: "#A3B18A", height: "100%", width: "100%", border: "solid", borderRadius: "1vw", borderColor: "#000000" }}>
            <Stack direction="column" style={{ width: '100%', height: '100%' }}>
                <Typography textAlign="center" style={{ backgroundColor: "#588157", fontSize: "2vw", marginTop: "2vh" }} children={TEXTS.JUGADORES} />
                <Stack direction="column" justifyContent="flex-start" alignItems="stretch" spacing={2} style={{ padding: "3rem" }}>
                    {jugadores.map((jugador, index) => {
                        return (
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="stretch"
                                spacing={1}
                                key={`player-displayer-${index}`}
                            >
                                <Typography key={`player-${index}`} variant='h6'>
                                    {jugador.isLeader ? <div>{jugador.nombre}<StarIcon style={{ color: "yellow" }} /></div> : jugador.nombre}
                                </Typography>
                                <Typography key={`player-score-${index}`} variant='h6' color="black" children={jugador.puntuacion} />
                            </Stack>
                        )
                    })
                    }
                </Stack>
                {estado === 'Iniciando' &&
                    <Button
                        children={BUTTONS.GO}
                        style={{ backgroundColor: "#588157", color: "#DAD7CD", width: "14vw", height: '6vh', alignSelf: 'center', position: 'absolute', fontSize: "1vw", marginTop: "62vh" }}
                        onClick={initGame}
                    />}
            </Stack>
        </div>
    );
};

export default PlayersDisplay;
