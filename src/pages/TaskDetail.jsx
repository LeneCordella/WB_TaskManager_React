import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskDetail() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  function onBackClick() {
    navigate(-1);
  }
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
          <button
            onClick={onBackClick}
            className="absolute left-0 top-0 bottom-0"
          >
            <ChevronLeftIcon />
          </button>

          <Title>Task Details</Title>
        </div>
        <div className="bg-slate-200 p-6 rounded-md">
          <h2 className="text-3xl text-slate-600 font-bold text-center">
            {title}
          </h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskDetail;
