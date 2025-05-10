import { useState } from "react";
import MoleculesFormCreate from "../../../molecules/MoleculesFormCreate";
import MoleculesTitle from "../../../molecules/MoleculesTitle";
import {Form, Radio} from "antd"

const OraganismCreateExperiance = () => {
  const [componentSize, setComponentSize] = useState("large");
  const onChangeSizeComponent = ({size}) => {
    setComponentSize(size);
  }
  return (
    <>
      <div>
        <div>
          <MoleculesTitle />
        </div>
        <div>
          <Form 
          labelCol={{span: 5}}
          wrapperCol={{span: 20}}
          layout="horizontal"
          initialValues={{size: componentSize}}
          onValuesChange={onChangeSizeComponent}
          size={componentSize}
          style={{maxWidth: 600}}
          >
            <Form.Item label="Chose Form Size" name="size">
              <Radio.Group>
                <Radio.Button value={"small"}> Small </Radio.Button>
                <Radio.Button value={"default"}> Dafault </Radio.Button>
                <Radio.Button value={"large"}> Large </Radio.Button>
              </Radio.Group>
            </Form.Item>
            <MoleculesFormCreate label="institution" title="institution"/>
            <MoleculesFormCreate label="degree" title="degree"/>
            <MoleculesFormCreate label="start date" title="start date"/>
            <MoleculesFormCreate label="end date" title="end date"/>
          </Form>
        </div>
      </div>
    </>
  );
};

export default OraganismCreateExperiance;
