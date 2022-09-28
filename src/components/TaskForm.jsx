import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice.js";
import { v4 as uuid } from "uuid"; // biblioteca para generar id´s únicos
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }

    navigate("/");
  };

  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    // si existe un id vamos recorrer el arreglo hasta encontrar el mismo id para agregar al estado y reflejarlo en el form
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params.id, task]);

  return (
    <form className="bg-zinc-800 max-w-sm p-4" onSubmit={handleSubmit}>
      <label htmlFor="title" className="block text-sm font-bold mb-2">
        Task:
      </label>
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChange}
        value={task.title}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      />
      <label htmlFor="description" className="block text-sm font-bold mb-2">
        Description:
      </label>
      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={task.description}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      />
      <button className="bg-indigo-600 px-2 py-1 rounded-md">Save</button>
    </form>
  );
}

export default TaskForm;
