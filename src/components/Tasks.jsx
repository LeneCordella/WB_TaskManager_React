import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onCheckClick, onDeleteClick }) {
  const navigate = useNavigate();

  if (!tasks || !Array.isArray(tasks)) {
    return <p>No tasks available</p>;
  }

  function onViewDetailsClick(task) {
    navigate(
      `/task-detail?title=${task.title}&description=${task.description}`
    );
  }

  return (
    <>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow-2xl">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onCheckClick(task.id)}
              className={`generic-button text-left p-5 ml-4 bg-slate-400 text-black flex- ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.title}
              {task.isCompleted ? " ✓ DONE" : " PENDING"}
            </button>
            <Button
              onClick={() => onViewDetailsClick(task)} // usa arrow function pois é necessário passar params
              aria-label="View task details"
            >
              <ChevronRightIcon size={20} />
            </Button>
            <Button
              onClick={() => onDeleteClick(task.id)}
              aria-label="View task details"
            >
              <TrashIcon size={20} />
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Tasks;
