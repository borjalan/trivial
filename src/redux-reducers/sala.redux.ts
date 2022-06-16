import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Helpers
import { cloneDeep, concat } from 'lodash';

// Types
import { RootState } from 'redux-reducers';

const initialStateSala: Sala = {
  idSala: '',
  jugadores: [],
  estado: 'Iniciando',
  preguntaActual: 0,
  segundosSiguientePregunta: 0,
};

const salaSlice = createSlice({
  name: 'sala',
  initialState: initialStateSala,
  reducers: {
    addPlayers(state, action: PayloadAction<Array<Jugador>>) {
      return { ...state, jugadores: concat(state.jugadores, action.payload) };
    },
    siguientePregunta(state) {
      const newState = cloneDeep(state);
      if (newState.preguntaActual < 9) newState.preguntaActual += 1;
      else {
        newState.estado = 'Puntuaciones';
        newState.preguntaActual = 10;
      }
      return newState;
    },
    iniciarJuego(state) {
      return { ...state, estado: 'Jugando' };
    },
    finalizarJuego(state) {
      return { ...state, estado: 'Puntuaciones' };
    },
    setSegundosSiguientePregunta(state) {
      return { ...state, segundosSiguientePregunta: Date.now() + 1500 };
    },
    addPuntosPlayer(state, action: PayloadAction<number>) {
      const newJugadores = cloneDeep(state.jugadores);
      newJugadores[newJugadores.length - 1].puntuacion =
        newJugadores[newJugadores.length - 1].puntuacion + action.payload;
      return { ...state, jugadores: newJugadores };
    },
  },
});

// Selectors
export const selectIdSala = (state: RootState) => state.sala.idSala;
export const selectJugadores = (state: RootState) => state.sala.jugadores;
export const selectEstadoPartida = (state: RootState) => state.sala.estado;
export const selectPreguntaActualPointer = (state: RootState) => state.sala.preguntaActual;

export const salaReducer = salaSlice.reducer;
export const {
  addPlayers,
  finalizarJuego,
  iniciarJuego,
  siguientePregunta,
  setSegundosSiguientePregunta,
  addPuntosPlayer,
} = salaSlice.actions;
