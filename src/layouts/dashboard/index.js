import { Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

const DashboardLayout = () => {
  return (
    <Stack direction={"row"}>
      {/* side nav */}
      <SideNav />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
