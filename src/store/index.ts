import { createStore } from "vuex";
import { Stop, BusLines } from "@/types";
import axios, { AxiosResponse } from "axios";

export interface State {
  busLines: BusLines;
}
export default createStore<State>({
  state: {
    busLines: {},
  },
  getters: {},
  mutations: {
    setBusLines(state: State, busLines: BusLines) {
      state.busLines = busLines;
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
