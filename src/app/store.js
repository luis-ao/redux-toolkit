import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice";

// dentro del reducer podemos tener dintintos slice segun lo requiera nuestra aplicación. Por ejemplo en uno para manejar los datos del usuario, otro para manejar las compras, etc.

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
