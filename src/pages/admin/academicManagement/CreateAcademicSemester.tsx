import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/from/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/from/PHSelect";

const optionsData = [
    {
        value:'01',
        label:"Autumn",
    },
    {
        value:'02',
        label:"Summer"
    },
    {
        value:'03',
        label:"Fall"
    },
]


const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));


const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = optionsData[Number(data?.name)-1]?.label;
     const SemesterData = {
        name,
        code:data.name,
        year:data.year
     }
     console.log(SemesterData)
  };



  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect  label="Name"  name="name" options={optionsData} />
          <PHSelect label="Year" name="year" options={yearOptions} />
          <PHSelect
            label="Start Month"
            name="startMonth"
            options={optionsData}
          />
          <PHSelect label="End Month" name="endMonth" options={optionsData} />
          <Button htmlType="submit">submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
