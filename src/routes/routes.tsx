import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths, facultyPaths, studentPaths } from "./admin.routes";

const router =  createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/admin",
        element: <App />,
        children:adminPaths
    },
    {
        path: "/faculty",
        element: <App />,
        children:facultyPaths
    },
   
    {
        path: "/student",
        element: <App />,
        children:studentPaths
    },
   
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
])

export default router;