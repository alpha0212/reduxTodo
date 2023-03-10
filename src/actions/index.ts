export const addTodo = (data: string) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteTodo = (id: any) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};

export const removeTodo = () => {
  return {
    type: "REMOVE_TODO",
  };
};

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}
