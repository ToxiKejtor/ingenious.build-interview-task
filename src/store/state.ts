import { BusLines } from "@/types";

export interface State {
  busLines: BusLines;
  selectedLine: number;
  selectedStop: string;
  selectedTime: string;
  stopsSortAsc: boolean;
  timesSortAsc: boolean;
  allStops: string[];
  selected: {
    line: number;
    stop: string;
    time: string;
  };
}

export const state: State = {
  busLines: {},
  selectedLine: 0,
  selectedStop: "",
  selectedTime: "",
  stopsSortAsc: true,
  timesSortAsc: true,
  allStops: [],
  selected: {
    line: 0,
    stop: "",
    time: "",
  },
};
