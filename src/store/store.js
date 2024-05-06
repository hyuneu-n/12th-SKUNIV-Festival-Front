import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useLoginStore = create(
  persist(
    (set) => ({
      pwd: '7777',
      isLogined: false,

      setIsLogined: (value) => set({ isLogined: value }),
    }),
    {
      name: 'login',
    }
  )
);
