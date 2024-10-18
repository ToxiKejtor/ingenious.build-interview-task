import { Mutations, MutationTypes } from "@/store/mutations";
import axios, { AxiosResponse } from "axios";
import { BusLines, Stop } from "@/types";
import { ActionContext, ActionTree } from "vuex";
import { State } from "@/store/state";

export enum ActionTypes {
  FETCH_STOPS = "FETCH_STOPS",
  GET_BUS_LINES = "GET_BUS_LINES",
  GET_ALL_STOPS = "GET_ALL_STOPS",
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
  [ActionTypes.GET_ALL_STOPS](
    { commit }: AugmentedActionContext,
    stops: Stop[]
  ): void;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.FETCH_STOPS]({ dispatch }) {
    return axios
      .get("http://localhost:3000/stops")
      .then((response: AxiosResponse<Stop[]>) => {
        dispatch(ActionTypes.GET_BUS_LINES, response.data);
        dispatch(ActionTypes.GET_ALL_STOPS, response.data);
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
  [ActionTypes.GET_ALL_STOPS]({ commit }, stops: Stop[]) {
    const uniqueStops = Array.from([
      ...new Set(stops.map((item) => item.stop)),
    ]).sort();
    commit(MutationTypes.SET_ALL_STOPS, uniqueStops);
  },
};
