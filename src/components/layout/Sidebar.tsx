
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { SidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student"
  };


const Sidebar = () => {
const role   = 'faculty';
let sidebarItems;
switch (role) {
    case userRole.ADMIN:
        sidebarItems = SidebarItemsGenerator(adminPaths, userRole.ADMIN);
        break;
    case userRole.FACULTY:
        sidebarItems = SidebarItemsGenerator(facultyPaths, userRole.FACULTY);
        break;
    case userRole.STUDENT:
        sidebarItems = SidebarItemsGenerator(studentPaths, userRole.STUDENT); 
        break;
    default:

        break;
}
  return (
    <Sider
    breakpoint="lg"
    collapsedWidth="0">
    <div
      style={{
        color: "white",
        height:'4rem',
        display: "flex",
        justifyContent: "center",
        alignItems:'center'
      }}
    >
      <h1>MH Uni</h1>
    </div>
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["4"]}
      items={sidebarItems}
    />
  </Sider>
  );
};

export default Sidebar;