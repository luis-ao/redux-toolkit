import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
  },
];

// aquí es como usar el useState
export const taskSlice = createSlice({
  name: "tasks",
  //  podemos resumir "initialState: initialState," de la siguiente forma:
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      /*  
      En React y redux podemos empujar frecuentemente datos en un arreglo con push ya que son inmutables por lo que tenemos que copiar el estado y luego añadir el action.paylod [...state, action.payload] pero con redux toolkit si es posible realizarlo (el estado sigue siendo inmutable pero toolkit simplifica el código) */
    },
    editTask: (state, action) => {
      // extraemos del payload cada dato y luego buscamos la tarea (foundTask) para asignar cada dato
      const { id, title, description } = action.payload;

      const foundTask = state.find((task) => task.id === id);

      if (foundTask) {
        foundTask.title = title;
        foundTask.description = description;
      }
    },

    deleteTask: (state, action) => {
      //primero comparamos que coincida el id de la tarea
      const taskFound = state.find((task) => task.id === action.payload);
      // Si el taskFound ha sido encontrado vamos a quitarlo del arreglo
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
      // splice recibe 2 parametros "el indice" y "la cantidad de elementos a eliminar"
    },
  },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
