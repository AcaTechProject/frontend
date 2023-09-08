import { atom } from "recoil";

export const telState = atom({
  key: "telState",
  default: "",
});
export const emailState = atom({
  key: "emailState",
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

export const subjectState = atom({
  key: "subjectState",
  defalut: "",
});
export const teacherState = atom({
  key: "teacherState",
  defalut: "",
});
export const textState = atom({
  key: "textState",
  defalut: "",
});

export const selectedDateState = atom({
  key: "selectedDate",
  default: new Date(),
});
