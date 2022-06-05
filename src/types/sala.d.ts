interface Jugador {
  nombre: string;
  puntuacion: number;
  isLeader: boolean;
}

interface Sala {
  idSala: string;
  jugadores: Array<Judador>;
  partidaIniciada: boolean;
  preguntaActual: number;
}
