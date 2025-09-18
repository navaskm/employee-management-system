"use client"
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import { setUser,hydrateUser,hydrateAddTaskToEmployee } from "@/app/lib/features/company/companySlice";
import { useAppSelector,useAppDispatch } from "@/app/lib/hooks";
import { LoggedInEmployee } from "@/types/types";

const Header = () => {

  const dispatch = useAppDispatch();
  const router = useRouter();

  const allEmployeesOfCompany = useAppSelector((state)=>state.company.employees);
  const employee:LoggedInEmployee = useAppSelector((state)=>state.company.user);

  const [userName,setUserName] = useState('');

  // first load time dat store in localStorage(user(employee or admin) and all employees of company)
  useEffect(() => {
    if (typeof window !== "undefined") {

      const storedUser = localStorage.getItem("loginLogOut");
      const storeEmployeesData = localStorage.getItem("employeesData");

      // set user in localStorage
      if (storedUser) {
        const logOut = JSON.parse(storedUser);
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


  useEffect(()=>{
    const employeeProfile = allEmployeesOfCompany.find((e)=>e.email === employee.email);
    if(employeeProfile){
      setUserName(employeeProfile.firstName)
    }else{
      setUserName('Admin');
    }
  },[allEmployeesOfCompany, employee]);

  const logOutUser = ()=>{
    dispatch(setUser({
      email:'',
      password:'',
    }))
    router.push('/');
  }

  return (
   <div className="flex flex-col sm:flex-row justify-between w-full">
    <div className="flex justify-between items-start w-full">
      <h1 className="text-xl sm:text-2xl font-medium">
        hello <br />
        <span className="text-2xl sm:text-3xl font-semibold">{userName} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-white px-4 sm:px-5 py-2 rounded-sm text-base sm:text-lg font-medium"
      >
        Log Out
      </button>
    </div>
  </div>
  )
}

export default Header;