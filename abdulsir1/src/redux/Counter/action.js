import { DECREMENT, INCREMENT, RESET } from "./actionTypes";

export const increment = (data) => ({
  type: INCREMENT,
  payload: data,
});

export const decrement = (data) => ({
  type: DECREMENT,
  payload: data,
});

export const reset = () => ({
  type: RESET,
});
