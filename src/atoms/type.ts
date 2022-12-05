export type CategoryType = "TO_DO" | "DOING" | "DONE";

export interface ITodo {
  id: number;
  text: string;
  category: CategoryType;
}
