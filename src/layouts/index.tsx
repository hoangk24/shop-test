import { Outlet } from "react-router-dom";
import Header from "./Header";
import Siderbar from "./Siderbar";

export default function AppLayout() {
  return (
    <div className="flex h-screen ">
      <div className="w-[80%] px-4 bg-white">
        <Header />
        <div className="h-[90%] overflow-y-auto px-2  ">
          <Outlet />
        </div>
      </div>
      <Siderbar />
    </div>
  );
}
