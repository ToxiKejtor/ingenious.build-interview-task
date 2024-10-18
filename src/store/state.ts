import { BusLines } from "@/types";

export interface State {
  busLines: BusLines;
  selectedLine: number;
  selectedStop: string;
  selectedTime: string;
  stopsSortAsc: boolean;
}

export const state: State = {
  busLines: {},
  selectedLine: 0,
  selectedStop: "",
  selectedTime: "",
  stopsSortAsc: true,
};
