export interface Stop {
  line: number;
  stop: string;
  order: number;
  time: string;
}

export interface Selected {
  line?: number;
  stop?: string;
  time?: string;
}
export enum Status {
  Loading = "loading",
  Loaded = "loaded",
  Error = "error",
}

export interface BusLineStops {
  [stop: string]: {
    order: number;
    times: string[];
  };
}
export type BusLines = Record<number, BusLineStops>;
