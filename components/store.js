import create from 'zustand';

const useStore = create((set) => ({
  cells: {}, // Your initial cell data
  history: [],
  redoHistory: [],
  setCells: (newCells) =>
    set((state) => ({
      cells: newCells,
      history: [...state.history, state.cells], // Save current state to history
      redoHistory: [], // Clear redo history when a new action is performed
    })),
  undo: () =>
    set((state) => {
      if (state.history.length === 0) return state;
      const previousState = state.history[state.history.length - 1];
      return {
        cells: previousState,
        history: state.history.slice(0, -1),
        redoHistory: [state.cells, ...state.redoHistory], // Save current state to redo history
      };
    }),
  redo: () =>
    set((state) => {
      if (state.redoHistory.length === 0) return state;
      const nextState = state.redoHistory[0];
      return {
        cells: nextState,
        history: [...state.history, state.cells], // Save current state to history
        redoHistory: state.redoHistory.slice(1),
      };
    }),
}));

export { useStore };
