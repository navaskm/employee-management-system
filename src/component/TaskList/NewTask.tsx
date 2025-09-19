'use client';

import { useAppDispatch } from "@/app/lib/hooks";
import { handleAcceptButton } from "@/app/lib/features/company/companySlice";
import { Task } from "@/types/types";

const NewTask = ({ data }: { data: Task }) => {

  const dispatch = useAppDispatch();

  const handleAcceptBtn = ()=>{
    dispatch(handleAcceptButton(data.taskTitle));
  }

  return (
    <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl relative">

      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 text-sm rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>

      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <button onClick={handleAcceptBtn} id="accept-btn" className="bg-green-400 py-1 px-4 text-sm rounded">Accept Task</button>
      </div>
      
    </div>
  )
}

export default NewTask;