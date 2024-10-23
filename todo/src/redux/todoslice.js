import { createSlice, nanoid } from "@reduxjs/toolkit";

// const todoSlice = createSlice({
//   name: "todo",
//   initialState: [],
//   reducers: {
//     addTodo: (state, action) => {
//       state.push({ title: action.payload, id: Date.now() });
//     },
//     editTodo: (state, action) => {
//       state.map((todos) => {
//         if (todos.id == action.payload.id) {
//           return (todos.title = action.payload.title);
//         }
//       });
//     },
//     deleteTodo: (state, action) =>
//       state.filter((todos) => todos.id !== action.payload),
//   },
// });

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      // console.log(action);

      state.push({ id: nanoid(), text: action.payload });
    },
    deleteTodo: (state, action) =>
      state.filter((todos) => todos.id !== action.payload),

    editTodo: (state, action) => {
      state = state.map((todos) => {
        // console.log(action.payload, todos.id);
        if (todos.id === action.payload.id) {
          return (todos.text = action.payload.text);
        }
        return todos;
      });
    },
  },
});
export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
