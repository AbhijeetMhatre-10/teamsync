import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  LayoutGrid,
  MessageSquare,
  Settings,
  ClipboardList,
  Users,
  Building2,
  FileText,
  CalendarCheck,
  UserCircle,
} from "lucide-react";

const commonNavItems = {
  dashboard: {
    name: "Dashboard",
    icon: LayoutGrid,
    path: "/",
  },

  chat: {
    name: "Chat",
    icon: MessageSquare,
    path: "/chat",
  },

  settings: {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
};

const adminNavItems = [
  commonNavItems.dashboard,

  {
    name: "Tasks",
    icon: ClipboardList,
    path: "/tasks",
  },

  commonNavItems.chat,

  {
    name: "Employees",
    icon: Users,
    path: "/employees",
  },

  {
    name: "Departments",
    icon: Building2,
    path: "/departments",
  },

  {
    name: "Documents",
    icon: FileText,
    path: "/documents",
  },

  commonNavItems.settings,
];

const employeeNavItems = [
  commonNavItems.dashboard,

  {
    name: "My Tasks",
    icon: ClipboardList,
    path: "/myTasks",
  },

  commonNavItems.chat,

  {
    name: "Attendance",
    icon: CalendarCheck,
    path: "/attendance",
  },

  {
    name: "Profile",
    icon: UserCircle,
    path: "/profile",
  },

  commonNavItems.settings,
];

export const useAsideNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const role = useSelector((store) => store.auth.employee?.role);

  const navItems =
    role === "admin" ? adminNavItems : employeeNavItems;

  const handleNavClick = (path) => {
    navigate(path);
  };

  return {
    navItems,
    activePath: location.pathname,
    handleNavClick,
    navigate
  };
};