export type CategoryType = "TO_DO" | "DOING" | "DONE" | "ALL";
export enum Categorys {
  TODO = "TO_DO",
  DOING = "DOING",
  DONE = "DONE",
  ALL = "ALL",
  DELETE = "DELETE",
}

export interface ITodo {
  id: number;
  text: string;
  category: CategoryType;
}
