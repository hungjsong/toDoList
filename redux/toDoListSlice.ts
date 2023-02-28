import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface TeamBuilderState {
  toDoItems: {id: number; itemTitle: string}[];
  completedItems: {id: number; itemTitle: string}[];
}

const initialState: TeamBuilderState = {
  toDoItems: [{id: 0, itemTitle: 'Go Running'}],
  completedItems: [],
};

const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    addToDoItem: (state, action: PayloadAction<{itemTitle: string}>) => {
      const {itemTitle} = action.payload;
      const newToDoItems = [...state.toDoItems];
      newToDoItems.push({
        id: newToDoItems.length,
        itemTitle: itemTitle,
      });
      console.log(newToDoItems);
      state.toDoItems = newToDoItems;
    },
    deleteToDoItem: (state, action: PayloadAction<{index: number}>) => {
      const {index} = action.payload;
      const newToDoItems = [...state.toDoItems];
      newToDoItems.splice(index, 1);
      state.toDoItems = newToDoItems;
    },
    updateToDoItem: (
      state,
      action: PayloadAction<{index: number; updatedTitle: string}>,
    ) => {
      const {index, updatedTitle} = action.payload;
      const newToDoItems = [...state.toDoItems];
      newToDoItems[index].itemTitle = updatedTitle;
    },
    completeToDoItem: (state, action: PayloadAction<{index: number}>) => {
      const {index} = action.payload;
      const newToDoItems = [...state.toDoItems];
      state.completedItems = newToDoItems.splice(index, 1);
      state.toDoItems = newToDoItems;
    },
    restoreItem: (state, action: PayloadAction<{index: number}>) => {
      const {index} = action.payload;
      const newCompletedItems = [...state.completedItems];
      state.toDoItems = newCompletedItems.splice(index, 1);
      state.completedItems = newCompletedItems;
    },
  },
});

export const {
  addToDoItem,
  deleteToDoItem,
  updateToDoItem,
  completeToDoItem,
  restoreItem,
} = toDoListSlice.actions;
export default toDoListSlice.reducer;
