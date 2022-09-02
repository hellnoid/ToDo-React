import { ADD_TODO, DELETE } from "./actionTypes";

const initState = {
  todo: [],
};

export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };

    case DELETE:
      const updatedTodo = state.todo.filter((el) => el.id != action.payload);
      return {
        ...state,
        todo: updatedTodo,
      };

    default:
      return state;
  }
};
