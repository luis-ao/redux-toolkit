import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask } from "../features/tasks/taskSlice.js";
import { Link } from "react-router-dom";

// useDispatch son las funciones que queremos llamar para actualizar el el estado

// useSelector es la forma en la que podemos traer los datos desde del estado

function TasksList() {
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1>TASKs {tasks.length}</h1>
        <Link
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
          to="/create-task"
        >
          Create Task
        </Link>
      </header>

      <div className="grid grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div className="bg-neutral-800 p-4 rounded-md" key={task.id}>
            <header className="flex justify-between">
              <h3>{task.title}</h3>
              <div className="flex gap-x-2">
              <Link className="bg-zinc-600 px-2 py-1 text-xs rounded-md" to={`/edit-task/${task.id}`}>Edit</Link>

                <button
                  className="bg-red-500 px-2 py-1 text-xs  rounded-md"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TasksList;
