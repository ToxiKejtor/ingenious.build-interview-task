import { BusLines, Status, Selected } from "@/types";

export interface State {
  status: Status;
  busLines: BusLines;
  allStops: string[];
  selected: Selected;
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
