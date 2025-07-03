"use client";
import { useState,useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { addTaskToEmployee,removeWrongEmployee } from "@/app/lib/features/company/companySlice";

const CreateTaskList = () => {

  const wrongEmployee = useAppSelector((state)=>state.company.wrongEmployee);
  const dispatch = useAppDispatch();

  const [taskTitle, setTaskTitle] = useState<string>('');
  const [taskDate, setTaskDate] = useState<string>('');
  const [taskAssignTo, setTaskAssignTo] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [taskDescription, setTaskDescription] = useState<string>('');

  // admin task assign to employee name is wrong
  useEffect(() => {
  if (wrongEmployee) {
    alert('Employee not found');
    dispatch(removeWrongEmployee());
  }
  }, [wrongEmployee]);

  // submit form
  const submitHandler = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    };

    dispatch(addTaskToEmployee({
      firstName: taskAssignTo,
      task,
    }));

    // remove all value
    setTaskTitle('');
    setTaskDate('');
    setTaskAssignTo('');
    setCategory('');
    setTaskDescription('');
  }

  return (
    <div className="mt-5 bg-[#1c1c1c] p-5 rounded">
      <h2 className="text-2xl font-bold mb-6">Create New Task</h2>
      <form 
      onSubmit={submitHandler}
      className="flex flex-wrap w-full items-start justify-between">

        {/* Left side form inputs */}
        <div className="w-1/2">

          {/* task title section*/}
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">
              Task Title
            </h3>
            <input
              value={taskTitle}
              onChange={(e)=>setTaskTitle(e.target.value)}
              type="text"
              placeholder="Make a UI design"
              required
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>

          {/* <div>
            <h3 className="text-sm mb-0.5">
              Date
            </h3>
            <input
              type="date"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 filter invert" 
            />
          </div> */}
          {/*create date section*/}
          <div className="relative w-4/5">
            <h3 className="text-sm mb-0.5 text-white">Date</h3>
            <input
              value={taskDate}
              onChange={(e)=>setTaskDate(e.target.value)}
              type="date"
              required
              className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400 mb-4 text-white appearance-none pr-10"
            />
            {/* Custom calendar icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-5 h-5 absolute right-10 top-7 pointer-events-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>

            {/* Assign to employee section*/}
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">
              Assign To
            </h3>
            <input
              value={taskAssignTo}
              onChange={(e)=>setTaskAssignTo(e.target.value)}
              type="text"
              placeholder="Employee name"
              required
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>

            {/* category  section*/}
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">
              Category
            </h3>
            <input
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              type="text"
              placeholder="Design, Development, etc"
              required
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            />
          </div>

        </div>

          {/* write description section*/}
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">
            Description
          </h3>
          <textarea
            value={taskDescription}
            onChange={(e)=>setTaskDescription(e.target.value)}
            placeholder="Describe the task details..."
            rows={10}
            required
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
          ></textarea>
          {/* Submit button */}
          <button
            type="submit"
            className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full"
          >
            Create Task
          </button>
        </div>

      </form>
    </div>
  )
}

export default CreateTaskList