import React from 'react';
import { useSelector } from 'react-redux';

// Components
import { Badge, Paper, Stack, TextField } from '@mui/material';

// Selectores
import { selectPreguntaActual } from 'redux-reducers/sala.redux';
import { selectStatusPreguntas } from 'redux-reducers/preguntas.redux';

const QuestionsRecord: React.FC = () => {
  const punteroPregunta = useSelector(selectPreguntaActual);
  const estadoPreguntas = useSelector(selectStatusPreguntas);

  const getQuestionColor = (estado: EstadoRespuesta) => {
    let color = '#fdffff';
    if (estado === 'Correcta') color = '#47a025';
    if (estado === 'Error') color = '#ff0000';
    return color;
  };

  return (
    <div id="questions-record" style={{ height: '100%', width: '100%' }}>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        style={{ height: '100%', width: '100%' }}
      >
        <Paper elevation={12} style={{ backgroundColor: '#DAD7CD', width: '40vw', height: '100%' }}>
          <Stack direction="row" spacing={0} style={{ height: '100%', width: '100%' }}>
            {estadoPreguntas &&
              estadoPreguntas.map((s: EstadoRespuesta, index: number) => (
                <div key={`record-displayed-${index}`} style={{ height: '100%', width: '100%' }}>
                  <div
                    style={{
                      backgroundColor: getQuestionColor(s),
                      height: '65%',
                      width: '65%',
                      margin: '10%',
                      borderColor: '#fffff',
                      borderWidth: '2px',
                      borderRadius: '5px',
                      borderStyle: index === punteroPregunta ? 'dashed' : 'solid',
                    }}
                  />
                </div>
              ))}
          </Stack>
        </Paper>
      </Stack>
    </div>
  );
};

export default QuestionsRecord;
