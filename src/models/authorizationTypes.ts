export type SingUpDataType = {
  name: string;
  email: string;
  password: string;
  confirmedPassword: string;
};

export type SignInDataType = {
  email: string;
  password: string;
};

export type UserType = {
  passwordHash: string;
  email: string;
  id: string;
  name: string;
};
