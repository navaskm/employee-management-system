"use client";
import { useEffect,useState } from "react";
import { useAppSelector } from "@/app/lib/hooks";

type LoggedInEmployee = {
  email: string;
  password: string;
};

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

type TaskCount = {
  active: number;
  newTask: number;
  completed: number;
  failed: number;
};

type Employee = {
  id: number;
  firstName: string;
  email: string;
  password: string;
  taskCount: TaskCount;
  tasks: Task[];
};

import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = () => {

  const [anEmployee,setEnEmployee] = useState<Employee>();

  const allEmployeesOfCompany = useAppSelector((state)=>state.company.employees);
  const employee:LoggedInEmployee = useAppSelector((state)=>state.company.user);

  const employeeProfile = allEmployeesOfCompany.find((e)=>e.email === employee.email);

  useEffect(()=>{
    if(employeeProfile){
      setEnEmployee(employeeProfile)
    }
  },[allEmployeesOfCompany,employee])

  return (
    <div id="tasklist" className="h-[55%] w-full py-5 mt-10 flex items-center justify-start gap-10 flex-nowrap overflow-x-auto">

      {anEmployee?.tasks?.map((elem,i:number)=>{

        if(elem.newTask){
          return <NewTask key={i} data={elem}/>
        }

        if(elem.active){
          return <AcceptTask key={i} data={elem}/>
        }

        if(elem.failed){
          return <FailedTask key={i} data={elem}/>
        }

        if(elem.completed){
          return <CompleteTask key={i} data={elem}/>
        }

        return null;

      })}
    </div>
  )
}

export default TaskList