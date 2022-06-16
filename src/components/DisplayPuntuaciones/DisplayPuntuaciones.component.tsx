import { useSelector } from "react-redux";
import { sortBy } from "lodash";

import { Typography } from "@mui/material";
import { selectJugadores } from "redux-reducers/sala.redux";


const DisplayPuntuaciones: React.FC = () => {
    const jugadores = useSelector(selectJugadores);

    return <Typography variant='h3' align='center' children={`El ganador es: ${sortBy(jugadores, ['puntuacion'])[jugadores.length-1].nombre} (con ${sortBy(jugadores, ['puntuacion'])[jugadores.length-1].puntuacion} puntos).`} />;
};

export default DisplayPuntuaciones;
