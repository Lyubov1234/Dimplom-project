import * as yup from 'yup';

export const signInValidationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(6, 'password is too short')
    .max(15, 'password is too long')
    .required(),
});
