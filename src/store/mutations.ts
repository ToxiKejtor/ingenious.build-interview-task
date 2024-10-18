import { MutationTree } from "vuex";
import { State } from "./state";
import { BusLines } from "@/types";

export enum MutationTypes {
  SET_BUS_LINES = "SET_BUS_LINES",
  SET_ALL_STOPS = "SET_ALL_STOPS",
  SET_SELECTED = "SET_SELECTED",
}

export type Mutations<S = State> = {
  [MutationTypes.SET_BUS_LINES](state: S, payload: BusLines): void;
  [MutationTypes.SET_ALL_STOPS](state: S, payload: string[]): void;
  [MutationTypes.SET_SELECTED](
    state: S,
    payload: { line?: number; stop?: string; time?: string }
  ): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_BUS_LINES](state, payload: BusLines) {
    state.busLines = payload;
  },
  [MutationTypes.SET_ALL_STOPS](state, payload: string[]) {
    state.allStops = payload;
  },
  [MutationTypes.SET_SELECTED](state, payload) {
    state.selected = { ...state.selected, ...payload };
  },
};
