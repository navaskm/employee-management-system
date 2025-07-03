import { lazy,Suspense } from "react";
import Loading from "../loading";
const Header = lazy(() => import("@/component/Other/Header"));
const CreateTaskList = lazy(()=> import("@/component/Other/CreateTaskList"));
const AllTask = lazy(()=>import("@/component/Other/AllTask"));

const AdminDashboard = () => {

  return (
    <Suspense fallback={<Loading/>}>
       <div className="min-h-screen w-full p-7">
        <Header />
        <CreateTaskList/>
        <AllTask/>
      </div>
    </Suspense>
  );
};

export default AdminDashboard;