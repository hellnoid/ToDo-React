import { ADD_TODO, DELETE } from "./actionTypes";

export const addTodo = (data) => ({
  type: ADD_TODO,
  payload: data,
});

export const del = (data) => ({
  type: DELETE,
  payload: data,
});
