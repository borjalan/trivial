import { createSlice } from '@reduxjs/toolkit';

// Helpers
import { cloneDeep } from 'lodash';

// Types
import { RootState } from 'redux-reducers';

// TODO: Cuando se termine el componente de PlayersDisplay hay que eliminar el mockJugadores
import { mockJugadores, idSala } from 'constants/mock.constants';

const initialStateSala: Sala = {
  idSala: idSala,
  jugadores: mockJugadores,
  partidaIniciada: false,
  preguntaActual: 3,
};

const salaSlice = createSlice({
  name: 'sala',
  initialState: initialStateSala,
  reducers: {
    siguientePregunta(state) {
      const newState = cloneDeep(state);
      if (newState.preguntaActual < 10) newState.preguntaActual += 1;
      return newState;
    },
  },
});

// Selectors
export const selectIdSala = (state: RootState) => state.sala.idSala;
export const selectJugadores = (state: RootState) => state.sala.jugadores;
export const selectPartidaIniciada = (state: RootState) => state.sala.partidaIniciada;
export const selectPreguntaActual = (state: RootState) => state.sala.preguntaActual;

export const salaReducer = salaSlice.reducer;
export const { siguientePregunta } = salaSlice.actions;
