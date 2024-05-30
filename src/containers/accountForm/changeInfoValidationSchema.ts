import * as yup from 'yup';

export const changeInfoValidationSchema = yup.object({
  name: yup.string(),
  email: yup.string().email(),
  password: yup
    .string()
    .min(6, 'password is too short')
    .max(18, 'password is too long'),
  confirmedPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'your passwords do not match'),
});
