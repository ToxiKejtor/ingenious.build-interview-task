import { Mutations, MutationTypes } from "@/store/mutations";
import axios, { AxiosResponse } from "axios";
import { BusLines, Stop } from "@/types";
import { ActionContext, ActionTree } from "vuex";
import { State } from "@/store/state";

export enum ActionTypes {
  FETCH_STOPS = "FETCH_STOPS",
  GET_BUS_LINES = "GET_BUS_LINES",
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

export interface Actions {
  [ActionTypes.FETCH_STOPS]({
    commit,
    dispatch,
  }: AugmentedActionContext): Promise<void>;
  [ActionTypes.GET_BUS_LINES](
    { commit }: AugmentedActionContext,
    stops: Stop[]
  ): void;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.FETCH_STOPS]({ commit, dispatch }) {
    return axios
      .get("http://localhost:3000/stops")
      .then((response: AxiosResponse<Stop[]>) => {
        dispatch(ActionTypes.GET_BUS_LINES, response.data);
      });
  },
  [ActionTypes.GET_BUS_LINES]({ commit }, stops: Stop[]) {
    const busLines: BusLines = {};
    stops.forEach((stop) => {
      busLines[stop.line] = busLines[stop.line] || {};
      busLines[stop.line][stop.stop] = busLines[stop.line][stop.stop] || [];
      busLines[stop.line][stop.stop].push(stop.time);
    });
    commit(MutationTypes.SET_BUS_LINES, busLines);
  },
};
