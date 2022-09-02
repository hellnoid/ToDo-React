import { ADD_TODO, INCREMENT } from "./ActionTypes";

const initState = {
  count: 0,
  todos: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };

    default:
      return state;
  }
};
