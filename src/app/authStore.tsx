import {create} from 'zustand';
import {createJSONStorage, devtools, persist} from 'zustand/middleware';
import {zustandStorage} from './mmkv';

const authStore = set => ({
  userData: {},
  updatedUserData: user => {
    set(state => ({
      userData: user,
    }));
  },
  logout: () => {
    set(state => ({
      userData: {},
    }));
  },
});

const useAuthStore = create(
  devtools(
    persist(authStore, {
      name: 'userData',
      storage: createJSONStorage(() => zustandStorage),
    }),
  ),
);

export default useAuthStore;
