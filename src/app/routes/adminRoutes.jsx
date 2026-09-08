import Employees from "../../features/adminModule/employees/ui/pages/Employee";
import Tasks from "../../features/adminModule/tasks/ui/pages/Tasks";
import Departments from "../../features/adminModule/departments/ui/pages/Department";
import Documents from "../../features/adminModule/documents/ui/pages/Documents";

export const adminRoutes = [
  {
    path: "employees",
    element: <Employees />,
  },
  {
    path: "tasks",
    element: <Tasks />,
  },
  {
    path: "departments",
    element: <Departments />,
  },
  {
    path: "documents",
    element: <Documents />,
  },
];
