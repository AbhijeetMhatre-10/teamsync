import Home from "../../features/dashboard/ui/Home"
import Chat from "../../features/chat/ui/Chat";
import Settings from "../../features/settings/ui/pages/Settings"

export const commonRoutes = [
    {
        path: "",
        element: <Home/>
    },
    {
        path: "chat",
        element: <Chat/>
    },
    {
        path: "settings",
        element: <Settings/>
    },
]