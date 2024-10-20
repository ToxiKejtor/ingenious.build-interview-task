import { GetterTree } from "vuex";
import { State } from "./state";

export type Getters = {
  sortedStops(state: State): string[];
  sortedTimes(state: State): string[];
};

export const getters: GetterTree<State, State> & Getters = {
  sortedStops: (state) =>
    state.selected.line
      ? Object.keys(state.busLines[state.selected.line]).sort()
      : [],
  sortedTimes(state: State): string[] {
    const selectedLine = state.selected.line;
    const selectedStop = state.selected.stop;
    if (!selectedLine || !selectedStop) return [];
    const times = state.busLines?.[selectedLine]?.[selectedStop] || [];
    return times.sort((a, b) => {
      const [hourA, minuteA] = a.split(":").map(Number);
      const [hourB, minuteB] = b.split(":").map(Number);
      return hourA - hourB || minuteA - minuteB;
    });
  },
};
