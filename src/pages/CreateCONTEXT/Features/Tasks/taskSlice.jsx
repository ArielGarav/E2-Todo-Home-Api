import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: 1,
    name: " Ejemplo de tarea ahora has las tuyas :)    ",
  },
];
export const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },

    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
  },
});
export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
