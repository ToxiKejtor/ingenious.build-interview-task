import { describe, expect, it } from "vitest";
import { getters } from "@/store/getters";
import { State } from "@/store/state";
import { Status } from "@/types";

describe("Vuex Getters", () => {
  const state: State = {
    status: Status.Loading,
    busLines: {
      1: {
        Narutowicza: { order: 2, times: ["16:01", "08:11", "08:01"] },
        Kopalina: { order: 1, times: ["16:02", "08:12", "08:02"] },
      },
      2: {
        Jeziorko: { order: 2, times: ["16:03", "08:13", "08:03"] },
        Bartnicza: { order: 1, times: ["16:04", "08:14", "08:04"] },
      },
    },
    allStops: [],
    selected: {
      line: 1,
      stop: "Kopalina",
      time: "",
    },
  };

  it("sortedStops returns sorted stops for the selected line", () => {
    const result = getters.sortedStops(state);
    expect(result).toEqual(["Kopalina", "Narutowicza"]);
  });

  it("sortedStops returns an empty array if no line is selected", () => {
    const stateWithoutLine = {
      ...state,
      selected: { ...state.selected, line: 0 },
    };
    const result = getters.sortedStops(stateWithoutLine);
    expect(result).toEqual([]);
  });

  it("sortedTimes returns sorted times for the selected stop", () => {
    const result = getters.sortedTimes(state);
    expect(result).toEqual(["08:02", "08:12", "16:02"]);
  });

  it("sortedTimes returns an empty array if no stop is selected", () => {
    const stateWithoutStop = {
      ...state,
      selected: { ...state.selected, stop: "" },
    };
    const result = getters.sortedTimes(stateWithoutStop);
    expect(result).toEqual([]);
  });

  it("sortedTimes returns an empty array if no line is selected", () => {
    const stateWithoutLine = {
      ...state,
      selected: { ...state.selected, line: 0 },
    };
    const result = getters.sortedTimes(stateWithoutLine);
    expect(result).toEqual([]);
  });
});
