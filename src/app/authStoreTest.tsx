import {create} from 'zustand';
import {createJSONStorage, devtools, persist} from 'zustand/middleware';
import {zustandStorage} from './mmkv';

const authStoreTest = set => ({
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

const useAuthStoreTest = create(
  devtools(
    persist(authStoreTest, {
      name: 'userData',
      storage: createJSONStorage(() => zustandStorage),
    }),
  ),
);

export default useAuthStoreTest;
