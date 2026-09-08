import Attendance from "../../features/employeeModule/attendance/ui/pages/Attendance"
import MyTasks from "../../features/employeeModule/MyTasks/ui/pages/MyTasks"
import Profile from "../../features/employeeModule/Profile/ui/pages/Profile"

export const employeeRoute = [
    {
        path: "attendance",
        element: <Attendance/>
    },
    {
        path: "myTasks",
        element: <MyTasks/>
    },
    {
        path: "profile",
        element: <Profile/>
    },
]