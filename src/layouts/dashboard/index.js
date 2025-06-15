import { Stack } from "@mui/material";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import SideNav from "./SideNav";

const isAuthenticated = true; // Replace with actual authentication logic

const DashboardLayout = () => {
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }
  return (
    <Stack direction={"row"}>
      {/* side nav */}
      <SideNav />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
