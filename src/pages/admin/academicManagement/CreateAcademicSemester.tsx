import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/from/PHForm";
import PHInput from "../../../components/from/PHInput";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/from/PHSelect";

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHInput type="text" name="name" label="Name" />
          <PHInput type="text" name="name" label="Years" />
          <PHSelect label="name" />
          <Button htmlType="submit">submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
