import { create } from 'zustand';

export const useSequenceProgressStore = create((set) => ({
  mainSq: 0,
  setMainSq: (newvalue) =>
    set((state) => ({ mainSq: state.mainSq !== newvalue ? newvalue : state.mainSq })),
  astronautSq1: 0,
  setAstronautSq1: (newvalue) =>
    set((state) => ({
      astronautSq1: state.astronautSq1 !== newvalue ? newvalue : state.astronautSq1,
    })),
}));
