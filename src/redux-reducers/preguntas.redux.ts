import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';

// Types
import { RootState } from 'redux-reducers';

const initialStatePreguntas: Preguntas = [];

const preguntasSlice = createSlice({
  name: 'preguntas',
  initialState: initialStatePreguntas,
  reducers: {
    setPreguntas(_, action: PayloadAction<Preguntas>) {
      return action.payload;
    },
    setPreguntaCorrecta(state, action: PayloadAction<number>) {
      const newPreguntas = cloneDeep(state);
      newPreguntas[action.payload].estado = 'Correcta';
      return newPreguntas;
    },
    setPreguntaIncorrecta(state, action: PayloadAction<number>) {
      const newPreguntas = cloneDeep(state);
      newPreguntas[action.payload].estado = 'Error';
      return newPreguntas;
    },
  },
});

// Selectors
export const selectPreguntas = (state: RootState) => state.preguntas;
export const selectStatusPreguntas = (state: RootState) =>
  state.preguntas.map((p: Pregunta) => p.estado);
export const selectPreguntaActual = (state: RootState) =>
  state.preguntas[state.sala.preguntaActual];

export const preguntasReducer = preguntasSlice.reducer;
export const { setPreguntas, setPreguntaCorrecta, setPreguntaIncorrecta } = preguntasSlice.actions;
