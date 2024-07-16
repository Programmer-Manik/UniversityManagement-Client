import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import AcademicSemester from "../pages/admin/academicManagement/academicSemester";

export const adminPaths = [
    {
        name:"Dashboard",
        path:"/admin/dashboard",
        element: <AdminDashboard/>,
    },
    {
        name: "Academic Management",
        children:[
            {
                name:'Academic Semester',
                path:'academic-semester',
                element:<AcademicSemester/>,
            }
        ]
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

