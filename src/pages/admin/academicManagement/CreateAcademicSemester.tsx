import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/from/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/from/PHSelect";

const optionsData = [
    {
        name:"Autumn",
        code:'01'
    },
    {
        name:"Summer",
        code:'02'
    },
    {
        name:"Fall",
        code:'03'
    },
]
const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
     const SemesterData = {
        name:'faculty',
        code:'01',
     }
     console.log(SemesterData)
  };



  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect  label="Name"  name="name" options={optionsData} />
          <Button htmlType="submit">submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
