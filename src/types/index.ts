export type Time = string;
export interface Stop {
  line: number;
  stop: string;
  order: number;
  time: string;
}

export type Line = number;

export interface BusLineStops {
  [stop: string]: Time[];
}
export type BusLines = Record<Line, BusLineStops>;
