import React, { Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import { currentLoggedEmployee } from "../../features/auth/state/auth/authAction";
import { useDispatch } from "react-redux";
import PublicRoute from "../protectedRoutes/PublicRoute";
import ProtectedRoute from "../protectedRoutes/ProtectedRoute";
import RouteError from "../../shared/ui/pages/RouteError";
import { commonRoutes } from "./commonRoutes";
import { adminRoutes } from "./adminRoutes";
import { employeeRoute } from "./employeeRoute";
import RoleBasedRoute from "../../app/protectedRoutes/RoleBasedRoute";

const router = createBrowserRouter([
  {
    path: "/user",
    element: <PublicRoute />,
    errorElement: <RouteError />,
    children: [
      {
        path: "",
        element: <AuthLayout />,
        children: [
          {
            // Login
            path: "",
            lazy: async () => {
              const { default: Login } =
                await import("../../features/auth/ui/Login");
              return {
                Component: Login,
              };
            },
          },
          {
            // Register
            path: "register",
            lazy: async () => {
              const { default: Register } =
                await import("../../features/auth/ui/Register");
              return {
                Component: Register,
              };
            },
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    errorElement: <RouteError />,
    children: [
      {
        path: "",
        element: <DashboardLayout />,
        children: [
          ...commonRoutes,
          {
            element: <RoleBasedRoute allowedRoles={"admin"} />,
            children: adminRoutes,
          },
          {
            element: <RoleBasedRoute allowedRoles={"employee"} />,
            children: employeeRoute,
          },
        ],
      },
      {
        path: "/unauthorized",
        lazy: async () => {
          const { default: Unauthorized } =
            await import("../../shared/ui/pages/Unauthorized");
          return {
            Component: Unauthorized,
          };
        },
      },
    ],
  },
]);

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentLoggedEmployee());
  }, [dispatch]);

  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRoutes;
