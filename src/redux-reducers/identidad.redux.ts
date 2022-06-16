import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Types
import { RootState } from 'redux-reducers';

const initialStateIdentidad: Jugador = {
  nombre: '',
  puntuacion: 0,
  isLeader: false,
};

const identidadSlice = createSlice({
  name: 'identidad',
  initialState: initialStateIdentidad,
  reducers: {
    setIdentity(_, action: PayloadAction<Jugador>) {
      return action.payload;
    },
  },
});

// Selectors
export const selectMiNombre = (state: RootState) => state.identidad.nombre;
export const selectMiPuntuacion = (state: RootState) => state.identidad.puntuacion;
export const selectIsLeader = (state: RootState) => state.identidad.puntuacion;

export const identidadReducer = identidadSlice.reducer;
export const { setIdentity } = identidadSlice.actions;
