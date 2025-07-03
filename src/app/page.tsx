"use client";

import { lazy, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/app/lib/hooks";
import { setUser,hydrateUser,hydrateAddTaskToEmployee } from "@/app/lib/features/company/companySlice";
import Loading from "./loading";
const Login = lazy(()=> import('@/component/Auth/Login'));
import { useAppSelector } from "./lib/hooks";

type User = {
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

type TaskCount= {
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
  tasks: Task[];
  taskCount: TaskCount;
};

export default function Home() {

  const dispatch = useAppDispatch();
  const router = useRouter();
  
  const allEmployeesOfCompany = useAppSelector((state)=>state.company.employees);
  const userProfile:User = useAppSelector((state)=>state.company.user);

  // first load time dat store in localStorage(user(employee or admin) and all employees of company)
  useEffect(() => {
    if (typeof window !== "undefined") {

      const storedUser = localStorage.getItem("loginLogOut");
      const storeEmployeesData = localStorage.getItem("employeesData");

      // set user in localStorage
      if (storedUser) {
        const logOut: User = JSON.parse(storedUser);
        if (logOut?.email && logOut?.password) {
          dispatch(hydrateUser(logOut));
        }
      }

      // set all employees in localStorage
      if (storeEmployeesData) {
        const employeesData = JSON.parse(storeEmployeesData);
        dispatch(hydrateAddTaskToEmployee(employeesData));
      }

    }

  }, [dispatch]);
  
  // if user already login
  useEffect(()=>{
    if(userProfile.email === 'admin@me.com' && userProfile.password === '123'){
    router.push('/Admin');
    }else if(userProfile.password === '123'){
      const employeeAvailable = allEmployeesOfCompany.find((e:Employee)=>userProfile.email === e.email && e.password === userProfile.password)
      if(employeeAvailable) {
        router.push('/Employee');
      }  
    }
  },[userProfile, allEmployeesOfCompany, router]);

  // login button click at the handle(this function pass in to login component)
  const handleLogin = (email:string,password:string)=>{

    if(email === 'admin@me.com' && password === "123"){
      router.push('/Admin');

    }else if (allEmployeesOfCompany.find((e:Employee)=>email === e.email && e.password === password)){
      router.push('/Employee');

    }else{
      alert('Invalid email or password. Please check your credentials and try again.');
    }

    // ser user in localStorage
    dispatch(setUser({
      email,
      password,
    }));
  };
  
  return (
    <Suspense fallback={<Loading/>}>
      <Login handleLogin={handleLogin}/>
    </Suspense>
  )
}