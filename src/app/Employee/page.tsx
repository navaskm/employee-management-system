import { lazy,Suspense } from "react";
import Loading from "../loading";
const Header = lazy(()=>import('@/component/Other/Header'));
const TaskListNumber = lazy(()=>import('@/component/Other/TaskListNumber'));
const TaskList = lazy(()=>import('@/component/TaskList/TaskList'));

const EmployeeDashboard =  () => {

  return (
    <Suspense fallback={<Loading />}>
     <div className="p-10 bg-[#1c1c1c] h-screen">
        <Header />
        <TaskListNumber />
        <TaskList />
      </div>
    </Suspense>
  )
}

export default EmployeeDashboard;