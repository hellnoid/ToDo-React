import { ADD_TODO, INCREMENT } from "./ActionTypes";

export const addTodo = (data) => ({
  type: ADD_TODO,
  payload: data,
});

export const increment = (data) => ({
  type: INCREMENT,
  payload: data,
});
