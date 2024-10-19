export interface Stop {
  line: number;
  stop: string;
  order: number;
  time: string;
}

export enum Status {
  Loading = "loading",
  Loaded = "loaded",
  Error = "error",
}

export type Line = number;

export interface BusLineStops {
  [stop: string]: string[];
}
export type BusLines = Record<Line, BusLineStops>;
