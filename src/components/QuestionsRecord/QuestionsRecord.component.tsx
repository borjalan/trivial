import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// Components
import { Paper, Stack, } from '@mui/material';

// Selectores
import { selectPreguntaActualPointer } from 'redux-reducers/sala.redux';
import { selectStatusPreguntas } from 'redux-reducers/preguntas.redux';

const QuestionsRecord: React.FC = () => {
  const punteroPregunta = useSelector(selectPreguntaActualPointer);
  const estadoPreguntas = useSelector(selectStatusPreguntas);
  const [estado, setEstado] = useState<Array<EstadoRespuesta>>(estadoPreguntas)

  const getQuestionColor = (estado: EstadoRespuesta) => {
    let color = '#fdffff';
    if (estado === 'Correcta') color = '#47a025';
    if (estado === 'Error') color = '#ff0000';
    return color;
  };

  useEffect(() => {
    setEstado(estadoPreguntas);
  }, [estadoPreguntas]);

  return (
    <div id="questions-record" style={{ height: '100%', width: '100%' }}>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        style={{ height: '100%', width: '100%' }}
      >
        <Paper elevation={12} style={{ backgroundColor: '#A3B18A', width: '40vw', height: '100%', border: "solid", borderRadius: "1vw", borderColor: "#000000" }}>
          <Stack direction="row" spacing={0} style={{ height: '100%', width: '100%' }}>
            {estado &&
              estado.map((s: EstadoRespuesta, index: number) => (
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
