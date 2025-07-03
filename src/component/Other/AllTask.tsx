"use client";
import { useAppSelector } from "@/app/lib/hooks";

const AllTask = () => {

  const userData = useAppSelector((state)=>state.company.employees);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded-xl">

      <div className="bg-gray-800 py-2 px-4 rounded mb-2 flex justify-between text-white">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>

     <div className="">
      {userData.map((elem,i:number)=>{
        return (
            <div className="border-2 border-emerald-500 py-2 px-4 rounded mb-2 flex justify-between" key={i}>
              <h2 className="w-1/5">{elem.firstName}</h2>
              <h3 className="text-lg font-medium w-1/5  text-red-400">{elem.taskCount.newTask}</h3>
              <h5 className="text-lg font-medium w-1/5 text-green-500">{elem.taskCount.active}</h5>
              <h5 className="text-lg font-medium w-1/5 text-blue-400">{elem.taskCount.completed}</h5>
              <h5 className="text-lg font-medium w-1/5 text-yellow-400">{elem.taskCount.failed}</h5>
            </div>
          );
        })}
      </div>

    </div>
  )
}

export default AllTask;