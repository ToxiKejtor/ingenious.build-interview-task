import { mutations } from "@/store/mutations";
import { state as initialState } from "@/store/state";
import { describe, expect, it } from "vitest";
import { Status, BusLines, Selected } from "@/types";

describe("mutations.ts", () => {
  it("SET_STATUS", () => {
    const state = { ...initialState };
    mutations.SET_STATUS(state, Status.Loading);
    expect(state.status).toBe(Status.Loading);
  });

  it("SET_BUS_LINES", () => {
    const state = { ...initialState };
    const payload: BusLines = {
      1: {
        Narutowicza: {
          order: 2,
          times: ["10:00", "11:00"],
        },
      },
    };
    mutations.SET_BUS_LINES(state, payload);
    expect(state.busLines).toEqual(payload);
  });

  it("SET_ALL_STOPS", () => {
    const state = { ...initialState };
    const payload = ["Aleja Przyjaźni", "Narutowicza"];
    mutations.SET_ALL_STOPS(state, payload);
    expect(state.allStops).toEqual(payload);
  });

  it("SET_SELECTED", () => {
    const state = { ...initialState };
    const payload: Selected = { line: 1, stop: "1", time: "10:00" };
    mutations.SET_SELECTED(state, payload);
    expect(state.selected).toEqual(payload);
  });
});
