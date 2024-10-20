import { describe, it, expect, vi, Mock } from "vitest";
import { actions, ActionTypes, AugmentedActionContext } from "@/store/actions";
import { MutationTypes } from "@/store/mutations";
import { Status, Stop } from "@/types";
import axios from "axios";
import { state as initialState } from "@/store/state";

vi.mock("axios");

describe("Vuex Actions", () => {
  const commit = vi.fn();
  const dispatch = vi.fn();
  const state = { ...initialState };
  const getters = {};
  const rootState = { ...initialState };
  const rootGetters = {};
  const stops: Stop[] = [
    { line: 1, stop: "A", time: "08:00", order: 1 },
    { line: 1, stop: "B", time: "08:10", order: 2 },
    { line: 2, stop: "A", time: "09:00", order: 3 },
  ];

  const mockContext: AugmentedActionContext = {
    commit,
    dispatch,
    state,
    getters,
    rootState,
    rootGetters,
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("FETCH_STOPS action commits SET_STATUS and dispatches GET_BUS_LINES and GET_ALL_STOPS", async () => {
    (axios.get as Mock).mockResolvedValue({ data: stops });

    await actions[ActionTypes.FETCH_STOPS](mockContext);

    expect(dispatch).toHaveBeenCalledWith(ActionTypes.GET_BUS_LINES, stops);
    expect(dispatch).toHaveBeenCalledWith(ActionTypes.GET_ALL_STOPS, stops);
    expect(commit).toHaveBeenCalledWith(
      MutationTypes.SET_STATUS,
      Status.Loaded
    );
  });

  it("FETCH_STOPS action commits SET_STATUS with Error on failure", async () => {
    (axios.get as Mock).mockRejectedValue(new Error("Network Error"));

    await actions[ActionTypes.FETCH_STOPS](mockContext);

    expect(commit).toHaveBeenCalledWith(MutationTypes.SET_STATUS, Status.Error);
  });

  it("GET_BUS_LINES action commits SET_BUS_LINES", () => {
    actions[ActionTypes.GET_BUS_LINES](mockContext, stops);

    const expectedBusLines = {
      1: { A: ["08:00"], B: ["08:10"] },
      2: { A: ["09:00"] },
    };

    expect(commit).toHaveBeenCalledWith(
      MutationTypes.SET_BUS_LINES,
      expectedBusLines
    );
  });

  it("GET_ALL_STOPS action commits SET_ALL_STOPS", () => {
    actions[ActionTypes.GET_ALL_STOPS](mockContext, stops);

    const expectedStops = ["A", "B"];

    expect(commit).toHaveBeenCalledWith(
      MutationTypes.SET_ALL_STOPS,
      expectedStops
    );
  });
});
