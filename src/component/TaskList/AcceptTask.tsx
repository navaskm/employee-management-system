"use client";
import { useAppDispatch } from "@/app/lib/hooks";
import { handleMarkAsCompletedButton,handleMarkAsFailedButton } from "@/app/lib/features/company/companySlice";

type Task = {
  taskTitle: string;
  taskDescription: string;
  taskDate: string;
  category: string;
  active: boolean;
  newTask: boolean;
  completed: boolean;
  failed: boolean;
};

const AcceptTask = ({ data }: { data: Task }) => {

  const dispatch = useAppDispatch();

  const handleMarkAsCompletedBtn = ()=>{
    dispatch(handleMarkAsCompletedButton(data.taskTitle));
  };

  const handleMarkAsFailedBtn = ()=>{
    dispatch(handleMarkAsFailedButton(data.taskTitle));
  };

  return (
    <div className=" flex-shrink-0 h-full w-[300px] p-5  bg-green-400 rounded-xl relative">

      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 text-sm rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>

      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>

      <div className="flex justify-between absolute bottom-5 left-5 right-5">
        <button onClick={handleMarkAsCompletedBtn} className="bg-blue-400 py-1 px-2 text-sm rounded">Mark as Completed</button>
        <button onClick={handleMarkAsFailedBtn} className="bg-yellow-400 py-1 px-2 text-sm rounded">Mark as Failed</button>
      </div>

    </div>
  )
}

export default AcceptTask