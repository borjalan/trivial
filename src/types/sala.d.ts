interface Jugador {
  nombre: string;
  puntuacion: number;
  isLeader: boolean;
}

type EstadoSala = 'Iniciando' | 'Jugando' | 'Puntuaciones';

interface Sala {
  idSala: string;
  jugadores: Array<Judador>;
  partidaIniciada: EstadoSala;
  preguntaActual: number;
}
