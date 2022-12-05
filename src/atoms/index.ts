import { atom, selector } from "recoil";
import { ITodo } from "./type";

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});

export const toDoState = atom<ITodo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((item) => item.category === "DOING"),
      toDos.filter((item) => item.category === "DONE"),
      toDos.filter((item) => item.category === "TO_DO"),
    ];
  },
});
