import { BusLines, Status } from "@/types";

export interface State {
  status: Status;
  busLines: BusLines;
  allStops: string[];
  selected: {
    line: number;
    stop: string;
    time: string;
  };
}

export const state: State = {
  status: Status.Loading,
  busLines: {},
  allStops: [],
  selected: {
    line: 0,
    stop: "",
    time: "",
  },
};
