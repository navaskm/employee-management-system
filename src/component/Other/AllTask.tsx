"use client";
import { useAppSelector } from "@/app/lib/hooks";

const AllTask = () => {

  const userData = useAppSelector((state)=>state.company.employees);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded-xl text-white">
      {/* Header - Only visible on sm and up */}
      <div className="hidden sm:flex bg-gray-800 py-2 px-4 rounded mb-2 justify-between">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>

      {/* Body */}
      <div className="space-y-3">
        {userData.map((elem, i: number) => (
          <div
            key={i}
            className="border-2 border-emerald-500 p-4 rounded bg-gray-900 flex flex-col sm:flex-row sm:justify-between"
          >
            {/* Mobile View */}
            <div className="block sm:hidden text-center mb-3 font-bold text-lg">
              Employee Name: {elem.firstName}
            </div>

            <div className="hidden sm:block sm:w-1/5">{elem.firstName}</div>

            {/* Grid for tasks on mobile */}
            <div className="grid grid-cols-2 gap-3 sm:flex sm:justify-between sm:w-4/5">
              <div className="text-red-400">
                <span className="sm:hidden font-semibold">New Task: </span>
                {elem.taskCount.newTask}
              </div>
              <div className="text-green-500">
                <span className="sm:hidden font-semibold">Active Task: </span>
                {elem.taskCount.active}
              </div>
              <div className="text-blue-400">
                <span className="sm:hidden font-semibold">Completed: </span>
                {elem.taskCount.completed}
              </div>
              <div className="text-yellow-400">
                <span className="sm:hidden font-semibold">Failed: </span>
                {elem.taskCount.failed}
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTask;