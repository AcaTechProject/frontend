import { atom } from "recoil";

export const telState = atom({
  key: "telState",
  default: "",
});

export const parentState = atom({
  key: "parentState",
  default: "",
});

export const valueState = atom({
  key: "valueState",
  default: [],
});
export const resultState = atom({
  key: "resultState",
  default: [],
});

export const inputAtom = atom({
  key: "inputAtom",
  default: "",
});

export const selectedDateState = atom({
  key: "selectedDate",
  default: new Date(),
});
