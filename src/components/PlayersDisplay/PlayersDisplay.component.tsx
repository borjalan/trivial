import { BorderAllRounded, BorderRight, Label } from '@mui/icons-material';
import { yellow } from '@mui/material/colors';
import { borderRadius } from '@mui/system';
import React from 'react';

// Components
import { Button, Stack, Typography } from '@mui/material';

// Constants
import { BUTTONS, TEXTS } from 'constants/mock.constants';

const PlayersDisplay: React.FC = () => {
    return (
        <div id="players-display" style={{ backgroundColor: "#A3B18A", height: "100%", width: "100%", border: "solid", borderRadius:"1vw", borderColor: "#000000" }}>
            <Stack direction="column" style={{ width: '100%', height: '100%'}}>
                <Typography textAlign="center" style={{ backgroundColor: "#588157", fontSize: "2vw", marginTop: "2vh"}} children={TEXTS.JUGADORES} />
                <Button children={BUTTONS.GO} style={{ backgroundColor: "#588157", color:"#DAD7CD", width: "14vw", height: '6vh', alignSelf: 'center', position: 'absolute', fontSize: "1vw", marginTop: "62vh" }}/>
            </Stack>
        </div>
    );
};

export default PlayersDisplay;
