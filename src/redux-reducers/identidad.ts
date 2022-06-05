import { createSlice } from '@reduxjs/toolkit';

// Types
import { RootState } from 'redux-reducers';

// TODO: Cuando se termine el componente de PlayersDisplay hay que eliminar el mockJugadores
import { mockJugadores } from 'constants/mock.constants';

const initialStateIdentidad: Jugador = mockJugadores[0];

const identidadSlice = createSlice({
  name: 'identidad',
  initialState: initialStateIdentidad,
  reducers: {},
});

// Selectors
export const selectMiNombre = (state: RootState) => state.identidad.nombre;
export const selectMiPuntuacion = (state: RootState) => state.identidad.puntuacion;
export const selectIsLeader = (state: RootState) => state.identidad.puntuacion;

export const identidadReducer = identidadSlice.reducer;
