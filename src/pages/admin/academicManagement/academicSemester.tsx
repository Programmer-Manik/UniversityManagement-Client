import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagementApi";

const AcademicSemester = () => {
    const {data} = useGetAllSemesterQuery(undefined);
    console.log(data)
    return (
    <div>
      <h2>Welcome to the AcademicSemester page</h2>
    </div>
  );
};

export default AcademicSemester;