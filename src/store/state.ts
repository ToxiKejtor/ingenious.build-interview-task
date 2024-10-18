import { BusLines } from "@/types";

export interface State {
  busLines: BusLines;
  allStops: string[];
  selected: {
    line: number;
    stop: string;
    time: string;
  };
}

export const state: State = {
  busLines: {},
  allStops: [],
  selected: {
    line: 0,
    stop: "",
    time: "",
  },
};
