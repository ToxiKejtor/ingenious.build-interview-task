import { GetterTree } from "vuex";
import { State } from "./state";

export type Getters = {
  sortedStops(state: State): number;
};

export const getters: GetterTree<State, State> & Getters = {
  sortedStops: (state) => 1,
};
