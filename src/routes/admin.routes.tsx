import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import { ReactNode } from "react";
type TRoute = {
    path:string;
    element:ReactNode;
}
const adminPaths = [
    {
        name:"Dashboard",
        path:"/admin/dashboard",
        element: <AdminDashboard/>,
    },
    {
        name:'User Management',
        children:[
            {
                name:'Create Admin',
                path:'create-admin',
                element:<CreateAdmin/>
            },
            {
                name:'Create Faculty',
                path:'create-faculty',
                element:<CreateFaculty/>,
            },
            {
                name:'Create Student',
                path:'create-student',
                element:<CreateStudent/>,
            }
        ]
    },

]

// Pragmatical way of crating 
export const adminRoutes = adminPaths.reduce((acc:TRoute[], item) => {
 if(item.path && item.element){
    acc.push({
        path: item.path,
        element: item.element,
    });
 }

  if(item.children){
    item.children.forEach((child) => {
        acc.push({
            path: child.path,
            element: child.element,
        })
    });
  }

    return acc;

},[])




//hard code way

// export const adminPaths = [
//     {
//         path: "dashboard",
//         element: <AdminDashboard />
//     },
//     {
//         path: "create-student",
//         element: <CreateStudent />
//     },
//     {
//         path: "create-admin",
//         element: <CreateAdmin />
//     },
//     {
//         path: "create-faculty",
//         element: <CreateFaculty />
//     },
// ]

