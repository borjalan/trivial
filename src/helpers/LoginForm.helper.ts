import * as yup from 'yup';

// Constants
import { ERRORS } from 'constants/Login.constants';

export const loginFormValidationSchema = yup.object({
  nombre: yup
    .string()
    .min(5, ERRORS.NOMBRE_NECESARIO)
    .max(10, ERRORS.NOMBRE_LARGO)
    .required(ERRORS.NOMBRE_NECESARIO),
  idSala: yup.string().min(24, ERRORS.ID_INVALIDO).max(24, ERRORS.ID_INVALIDO),
});
