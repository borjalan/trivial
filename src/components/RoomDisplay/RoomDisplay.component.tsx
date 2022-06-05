import React from 'react';
import { useSelector } from 'react-redux';

// Components
import { Paper, Stack, Typography } from '@mui/material';

// Selectors & Actions
import { selectIdSala } from 'redux-reducers/sala.redux';


const RoomDisplay: React.FC = () => {
    const idSala = useSelector(selectIdSala);

    return (
        <div id="room-display" style={{ height: "100%", width: "100%" }}>
            <Stack direction="row" justifyContent="flex-end" alignItems="center" style={{ height: "100%", width: "100%" }}>
                <Paper elevation={12} style={{ backgroundColor: "#dad7cd", width: '30vw', height: "100%" }}>
                    <Stack direction="row" justifyContent="center" alignItems="center" style={{ height: "100%", width: "100%" }}>
                        <Typography variant='h6' children={'Id Sala: ' + idSala} />
                    </Stack>
                </Paper>
            </Stack>
        </div>
    );
};

export default RoomDisplay;
