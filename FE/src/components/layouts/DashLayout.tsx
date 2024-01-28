import React from "react";
import { Sider } from "../../pages/dashboard/Sider";
import { Outlet } from "react-router-dom";

export const DashLayout = () => {
  return (
    <div>
      <Sider />

      <div className="p-4 sm:ml-64">
        <Outlet />
      </div>
    </div>
  );
};
