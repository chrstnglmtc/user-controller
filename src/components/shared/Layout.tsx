import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex flex-row bg-slate-700 h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="p-4">
        {/* <div>header</div> */}
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;
