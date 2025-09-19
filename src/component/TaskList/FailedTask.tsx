import { Task } from "@/types/types";

const FailedTask = ({data}:{ data: Task }) => {
  return (
    <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl relative">

      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 text-sm rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>

      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>

      <div className="absolute bottom-5 left-5 right-5">
        <button className="w-full">Failed</button>
      </div>

    </div>
  )
}

export default FailedTask