import { BusLines } from "@/types";

export interface State {
  busLines: BusLines;
  selectedLine: number;
  selectedStop: string;
  selectedTime: string;
  stopsSortAsc: boolean;
  timesSortAsc: boolean;
  allStops: string[];
}

export const state: State = {
  busLines: {},
  selectedLine: 0,
  selectedStop: "",
  selectedTime: "",
  stopsSortAsc: true,
  timesSortAsc: true,
  allStops: [],
};
