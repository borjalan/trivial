type EstadoRespuesta = 'Correcta' | 'Error' | 'Sin responder';

interface Pregunta {
  _id: string;
  enunciado: string;
  respuestas: FixedArray<string, 4>;
  estado: EstadoRespuesta;
  recompensa: number;
}

type Preguntas = FixedArray<Pregunta, 10>;
