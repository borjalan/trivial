interface Jugador {
  nombre: string;
  puntuacion: number;
  isLeader: boolean;
}

type EstadoSala = 'Iniciando' | 'Jugando' | 'Puntuaciones';

interface Sala {
  idSala: string;
  jugadores: Array<Judador>;
  estado: EstadoSala;
  preguntaActual: number;
  segundosSiguientePregunta: number;
}
