import { GetterTree } from "vuex";
import { State } from "./state";

export type Getters = {
  sortedStops(state: State): string[];
  sortedTimes(state: State): string[];
  sortedAllStops(state: State): string[];
};

export const getters: GetterTree<State, State> & Getters = {
  sortedStops: (state) =>
    state.selected.line
      ? state.stopsSortAsc
        ? Object.keys(state.busLines[state.selected.line]).sort()
        : Object.keys(state.busLines[state.selected.line]).sort().reverse()
      : [],
  sortedTimes(state: State): string[] {
    const times =
      state.busLines[state.selected.line][state.selected.stop] || [];
    const sortedTimes = times.sort((a, b) => {
      const [hourA, minuteA] = a.split(":").map(Number);
      const [hourB, minuteB] = b.split(":").map(Number);
      return hourA - hourB || minuteA - minuteB;
    });
    return state.timesSortAsc ? sortedTimes : sortedTimes.reverse();
  },
  sortedAllStops: (state) =>
    state.stopsSortAsc
      ? state.allStops.sort()
      : state.allStops.sort().reverse(),
};
