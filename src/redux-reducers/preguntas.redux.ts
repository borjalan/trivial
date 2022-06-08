import { createSlice } from '@reduxjs/toolkit';

// Types
import { RootState } from 'redux-reducers';

// TODO: Cuando se termine el componente de PlayersDisplay hay que eliminar el mockJugadores
import { mockPreguntas } from 'constants/mock.constants';

const initialStatePreguntas: Preguntas = mockPreguntas;

const preguntasSlice = createSlice({
  name: 'preguntas',
  initialState: initialStatePreguntas,
  reducers: {},
});

// Selectors
export const selectPreguntas = (state: RootState) => state.preguntas;
export const selectStatusPreguntas = (state: RootState) => state.preguntas.map((p: Pregunta) => p.estado);

export const preguntasReducer = preguntasSlice.reducer;
