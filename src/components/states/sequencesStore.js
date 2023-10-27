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
  astronautSq2: 0,
  setAstronautSq2: (newvalue) =>
    set((state) => ({
      astronautSq2: state.astronautSq2 !== newvalue ? newvalue : state.astronautSq2,
    })),
}));
