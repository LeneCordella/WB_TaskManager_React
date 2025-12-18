import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <div className="flex flex-col space-y-4 p-6 bg-slate-200 rounded-md shadow-2xl">
        <Input
          type="text"
          placeholder="Type the title for your new task"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Input
          type="text"
          placeholder="Type the description for your new task"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button
          onClick={() => {
            if (!title.trim() || !description.trim()) {
              return alert("no title and/or description!");
            }
            onAddTaskSubmit(title, description);
            setTitle("");
            setDescription("");
          }}
        >
          Add Task
        </button>
      </div>
    </>
  );
}

export default AddTask;
