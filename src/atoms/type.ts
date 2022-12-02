export type CategoryType = "TO_DO" | "DOING" | "DONE";

export interface ITodo {
  text: string;
  id: number;
  category: CategoryType;
}
