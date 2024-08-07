import {API} from '../api';
import useAuthStore from './authStore';

export const signIn = async (params) => {
  try {
    let obj = {
      username: params.username,
      password: params.password,
    };
    console.log('obj authService', obj);
    const response = await API.post('auth/login', obj);
    console.log('respone: authService', response);

    const user = await response.data;
    console.log('data authService: ', user);
    useAuthStore.getState().updatedUserData(user.data);
  } catch (error) {
    console.log('error during login:', error);
  }
};
