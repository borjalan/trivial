type EstadoRespuesta = 'Correcta' | 'Error' | 'Sin responder';

interface Pregunta {
  enunciado: string;
  respuestas: FixedArray<string, 4>;
  estado: EstadoRespuesta;
}

type Preguntas = FixedArray<Pregunta, 10>;
