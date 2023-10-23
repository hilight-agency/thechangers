import { create } from 'zustand';

export const useStarsStore = create((set) => ({
  show: false,
  setShow: (value) =>
    set(() => ({
      show: value,
    })),
}));
