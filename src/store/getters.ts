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
    const times =
      state.busLines[state.selected.line][state.selected.stop] || [];
    return times.sort((a, b) => {
      const [hourA, minuteA] = a.split(":").map(Number);
      const [hourB, minuteB] = b.split(":").map(Number);
      return hourA - hourB || minuteA - minuteB;
    });
  },
};
