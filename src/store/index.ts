import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { Stop, BusLines } from "@/types";
import axios, { AxiosResponse } from "axios";

export interface State {
  busLines: BusLines;
  selectedLine: number;
  selectedStop: string;
}
export const key: InjectionKey<Store<State>> = Symbol();
export default createStore<State>({
  state: {
    busLines: {},
    selectedLine: 100,
    selectedStop: "",
  },
  getters: {},
  mutations: {
    setBusLines(state: State, busLines: BusLines) {
      state.busLines = busLines;
    },
    setSelectedLine(state: State, line: number) {
      state.selectedLine = line;
    },
  },
  actions: {
    fetchStops({ commit, dispatch }) {
      return axios
        .get("http://localhost:3000/stops")
        .then((response: AxiosResponse<Stop[]>) => {
          dispatch("getBusLines", response.data);
        });
    },
    getBusLines({ commit }, stops: Stop[]) {
      const busLines: BusLines = {};
      stops.forEach((stop) => {
        busLines[stop.line] = busLines[stop.line] || {};
        busLines[stop.line][stop.stop] = busLines[stop.line][stop.stop] || [];
        busLines[stop.line][stop.stop].push(stop.time);
      });
      commit("setBusLines", busLines);
    },
  },
  modules: {},
});
