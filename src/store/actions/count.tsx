export type Count = typeof INCREASE | typeof DECREASE;

export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

export const INCREASE_ASYNC = "INCREASE_ASYNC";
export const DECREASE_ASYNC = "DECREASE_ASYNC";

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });
