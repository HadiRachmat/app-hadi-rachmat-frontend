import { Form, message, Radio, Button } from "antd";
import { useState } from "react";
import MoleculesFormCreate from "../../../molecules/MoleculesFormCreate";
import MoleculesTitle from "../../../molecules/MoleculesTitle";
import { createHome } from "../../../../services/homePage";
import { useNavigate } from "react-router-dom";
const OrganismCreateHero = () => {
  const [compenentSize, setComponentSize] = useState("large");
  const [formHome] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const fields = [
    { label: "title", title: "title", type: "text", name: "title" },
    {
      label: "description",
      title: "description",
      type: "text",
      name: "description",
    },
    {
      label: "attachment",
      title: "attachment",
      type: "file",
      name: "attachment",
    },
  ];

  const onFinish = async (values) => {
    setLoading(true);
    const formData = new FormData();

    formData.append("title", values.title);
    formData.append("description", values.description);

    const file = values.attachment?.[0]?.originFileObj;
    if (file) {
      formData.append("attachment", file);
    }
    const token = sessionStorage.getItem("accessToken");
    try {
      await createHome(formData, {
        headers: {
          Authorization:`Bearer ${token}`,
           'Content-Type': 'multipart/form-data'
        },
      });
      message.success("Data Berhasil Terkirim");
      formHome.resetFields();
      navigate("/cms/hero")
    } catch (error) {
      message.error("gagal Mengirim Data");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
            form={formHome}
            onFinish={onFinish}
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
            {fields.map((field) => (
              <MoleculesFormCreate
                key={field.name}
                label={field.label}
                title={field.title}
                type={field.type}
                name={field.name}
              />
            ))}
            <div className="flex justify-center">
              <Button type="primary" htmlType={"submit"} disabled={loading}>
                {loading ? "Mengirim...." : "Create New Data"}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default OrganismCreateHero;
