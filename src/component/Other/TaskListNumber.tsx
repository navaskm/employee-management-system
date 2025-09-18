"use client"
import { useEffect,useState } from "react";
import { useAppSelector } from "@/app/lib/hooks";
import { LoggedInEmployee, Employee } from "@/types/types";

const TaskListNumber = () => {

  const [anEmployee,setAnEmployee]=useState<Employee>();

  const allEmployeesOfCompany = useAppSelector((state)=>state.company.employees);
  const employee:LoggedInEmployee = useAppSelector((state)=>state.company.user);

  const employeeProfile = allEmployeesOfCompany.find((e)=>e.email === employee.email);

  useEffect(()=>{
    if(employeeProfile){
      setAnEmployee(employeeProfile)
    }
  },[allEmployeesOfCompany,employee]);

  return (
   <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">

    {/* New Task container */}
    <div className="rounded-xl py-5 px-4 bg-red-400 break-words">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
        {anEmployee?.taskCount.newTask}
      </h2>
      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">
        New Task
      </h3>
    </div>

    {/* Accepted Task container */}
    <div className="rounded-xl py-5 px-4 bg-green-400 break-words">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
        {anEmployee?.taskCount.active}
      </h2>
      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">
        Accepted Task
      </h3>
    </div>

    {/* Failed Task container */}
    <div className="rounded-xl py-5 px-4 bg-yellow-400 break-words">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
        {anEmployee?.taskCount.failed}
      </h2>
      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">
        Failed Task
      </h3>
    </div>

    {/* Completed Task container */}
    <div className="rounded-xl py-5 px-4 bg-blue-400 break-words">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
        {anEmployee?.taskCount.completed}
      </h2>
      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">
        Completed Task
      </h3>
    </div>

  </div>
  )
}

export default TaskListNumber;