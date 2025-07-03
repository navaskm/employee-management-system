"use client"
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import { setUser,hydrateUser,hydrateAddTaskToEmployee } from "@/app/lib/features/company/companySlice";
import { useAppSelector,useAppDispatch } from "@/app/lib/hooks";

type LoggedInEmployee = {
  email: string;
  password: string;
};

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
    <div className='flex items-end justify-between'>
      <h1 className="text-2xl font-medium">hello <br />
        <span className="text-3xl font-semibold">{userName} 👋</span>
      </h1>
      <button onClick={logOutUser} className="bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium">Log Out</button>
    </div>
  )
}

export default Header