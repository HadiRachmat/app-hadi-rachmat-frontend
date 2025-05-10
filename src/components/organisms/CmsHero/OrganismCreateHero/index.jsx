import { Form, Radio } from "antd";
import { useState } from "react";
import MoleculesFormCreate from "../../../molecules/MoleculesFormCreate";
import MoleculesTitle from "../../../molecules/MoleculesTitle";
import Button from "../../../molecules/MoleculesButton";
const OrganismCreateHero = () => {
  const [compenentSize, setComponentSize] = useState("large");
  const onChangeSizeComponent = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <div>
        <div>
          <MoleculesTitle />
        </div>
        <div>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            layout="horizontal"
            initialValues={{ size: compenentSize }}
            onValuesChange={onChangeSizeComponent}
            size={compenentSize}
            style={{ maxWidth: 600 }}
          >
            <Form.Item label="Form Size" name="size">
              <Radio.Group>
                <Radio.Button value="small">Small</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="large">Large</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <MoleculesFormCreate label="Title" title="Hero" />
            <MoleculesFormCreate label="Description" title="Description" />
          </Form>
        </div>
        <div className="flex justify-center">
          <Button label="Create New Data" href={"#"} isCurrent={true}/>
        </div>
      </div>
    </>
  );
};

export default OrganismCreateHero;
