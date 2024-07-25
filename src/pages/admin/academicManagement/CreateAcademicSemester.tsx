import {  FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/from/PHForm";
import PHInput from "../../../components/from/PHInput";
import { Button } from "antd";

const CreateAcademicSemester = () => {
    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        console.log(data);
    }
  return (
    <PHForm onSubmit={onSubmit}>
      <PHInput type="text" name="name"/>
      <Button htmlType="submit">submit</Button>
    </PHForm>
  );
};

export default CreateAcademicSemester;
