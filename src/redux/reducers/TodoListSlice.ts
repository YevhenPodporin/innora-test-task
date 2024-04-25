import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoListItem {
  id: number;
  title: string;
  description: string;
}

const initialState: { all: TodoListItem[]; deleted: TodoListItem[] } = {
  all: [],
  deleted: [],
};

export const todoListSlice = createSlice({
  name: "getUsers",
  initialState,
  reducers: {
    setTodoList(state, action: PayloadAction<TodoListItem[]>) {
      state.all = action.payload;
    },

    remove(state, action: PayloadAction<TodoListItem["id"]>) {
      const foundElement = state.all.find((item) => item.id === action.payload);
      if (foundElement) {
        state.all = state.all.filter(
          (listItem) => listItem.id !== action.payload,
        );
        state.deleted.push(foundElement);
      } else {
        console.log("Element not found");
      }
    },

    restore(state, action: PayloadAction<TodoListItem["id"]>) {
      const foundElement = state.deleted.find(
        (item) => item.id === action.payload,
      );
      if (foundElement) {
        state.deleted = state.deleted.filter(
          (listItem) => listItem.id !== action.payload,
        );
        state.all.push(foundElement);
      } else {
        console.log("Element not found");
      }
    },
  },
});

export default todoListSlice.reducer;
