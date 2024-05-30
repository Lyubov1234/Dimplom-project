import md5 from 'md5';
import { useAppDispatch } from '#store/store';
import { setActiveUser } from '#store/reducers/userReducer';
import {
  SignInDataType,
  UserType,
  SingUpDataType,
} from '#models/authorizationTypes';

type AuthMethodsReturnType = {
  isSuccess: boolean;
  error?: string;
};

const useAuth = () => {
  const authUsers: UserType[] = JSON.parse(
    localStorage.getItem('allUsers') || '[]'
  );

  const dispatch = useAppDispatch();

  const signUp = (data: SingUpDataType): AuthMethodsReturnType => {
    const dataHash: UserType = {
      passwordHash: md5(data.password),
      email: data.email,
      name: data.name,
      id: md5(data.password).concat(Date.now().toString()),
    };

    if (authUsers.find((userHash) => userHash.email === dataHash.email)) {
      return { isSuccess: false, error: 'user with same email already exist' };
    }

    localStorage.setItem('allUsers', JSON.stringify([...authUsers, dataHash]));
    return { isSuccess: true };
  };

  const signIn = (data: SignInDataType): AuthMethodsReturnType => {
    const foundUserFromStorage = authUsers.find(
      (user) => user.email === data.email
    );

    if (foundUserFromStorage) {
      if (md5(data.password) === foundUserFromStorage.passwordHash) {
        const userData: UserType = {
          passwordHash: md5(data.password),
          email: data.email,
          name: foundUserFromStorage.name,
          id: foundUserFromStorage.id,
        };
        dispatch(setActiveUser(userData));
        return { isSuccess: true };
      } else {
        return { isSuccess: false, error: 'The entered password is incorrect' };
      }
    }

    return { isSuccess: false, error: 'This user was not found' };
  };

  const changeInfo = (data: UserType): AuthMethodsReturnType => {
    const foundUserFromStorage = authUsers.find((user) => user.id === data.id);
    console.log('foundUserFromStorage', foundUserFromStorage);

    if (foundUserFromStorage) {
      const restUsers = authUsers.filter((user) => user.id !== data.id);

      if (restUsers.find((userHash) => userHash.email === data.email)) {
        return {
          isSuccess: false,
          error: 'user with this email address already exists',
        };
      }

      const editedUser: UserType = {
        id: data.id,
        name: data.name,
        passwordHash: data.passwordHash,
        email: data.email,
      };

      dispatch(setActiveUser(editedUser));
      localStorage.setItem(
        'allUsers',
        JSON.stringify([...restUsers, editedUser])
      );
      return { isSuccess: true };
    } else {
      return { isSuccess: false, error: 'user not found' };
    }
  };

  return { signIn, signUp, changeInfo };
};

export default useAuth;
