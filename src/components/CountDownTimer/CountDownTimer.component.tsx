import { useCountDown } from "hooks/useCountdown";

import { Typography } from "@mui/material";


interface CountDownTimerProps {
    targetDate: any;
}

const CountDownTimer: React.FC<CountDownTimerProps> = ({ targetDate }) => {
    const [seconds] = useCountDown(targetDate);
    return <Typography variant='h5' align='center' color={seconds <= 5 ? 'error' : 'primary'} children={`${seconds > 0 ? seconds : 0} segundos`} style={{}} />
};

export default CountDownTimer;
