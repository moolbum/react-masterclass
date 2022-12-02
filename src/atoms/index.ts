import { atom } from "recoil";
import { ITodo } from "./type";

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});

export const toDoState = atom<ITodo[]>({
  key: "toDo",
  default: [],
});
