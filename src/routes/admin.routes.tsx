import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";



type TSidebarItem = {
    key:string; 
    label: ReactNode;
    children?: TSidebarItem[];
}




export const adminPaths = [
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
            },
            {
                name:'Create Member',
                path:'create-member',
                element:<CreateStudent/>,
            }
        ]
    },

]

export const adminSidebarItem= adminPaths.reduce((acc:TSidebarItem[], item) => {
    if(item.path && item.name){
       acc.push({
           key: item.name,
           label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
       });
    }
   
     if(item.children){
      
         acc.push({
           key: item.name,
           label: item.name,
           children: item.children.map( (child) => ({
               key: child.name,
               label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
           }))
         }) 
     }
   
       return acc;
   
   },[])
