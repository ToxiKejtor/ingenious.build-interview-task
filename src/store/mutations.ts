import { MutationTree } from "vuex";
import { State } from "./state";
import { BusLines } from "@/types";

export enum MutationTypes {
  SET_BUS_LINES = "SET_BUS_LINES",
  SET_SELECTED_LINE = "SET_SELECTED_LINE",
  SET_SELECTED_STOP = "SET_SELECTED_STOP",
  SET_SELECTED_TIME = "SET_SELECTED_TIME",
}

export type Mutations<S = State> = {
  [MutationTypes.SET_BUS_LINES](state: S, payload: BusLines): void;
  [MutationTypes.SET_SELECTED_LINE](state: S, payload: number): void;
  [MutationTypes.SET_SELECTED_STOP](state: S, payload: string): void;
  [MutationTypes.SET_SELECTED_TIME](state: S, payload: string): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_SELECTED_LINE](state, payload: number) {
    state.selectedLine = payload;
  },
  [MutationTypes.SET_SELECTED_STOP](state, payload: string) {
    state.selectedStop = payload;
  },
  [MutationTypes.SET_SELECTED_TIME](state, payload: string) {
    state.selectedStop = payload;
  },
  [MutationTypes.SET_BUS_LINES](state, payload: BusLines) {
    state.busLines = payload;
  },
};
