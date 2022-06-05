import { configureStore } from '@reduxjs/toolkit';

// Reducers
import { salaReducer } from './sala.redux';
import { identidadReducer } from './identidad';

const store = configureStore({
  reducer: {
    sala: salaReducer,
    identidad: identidadReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
