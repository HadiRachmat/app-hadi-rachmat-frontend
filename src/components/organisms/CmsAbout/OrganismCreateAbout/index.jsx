import { useState } from "react";
import MoleculesTitle from "../../../molecules/MoleculesTitle";
import MoleculesFormCreate from "../../../molecules/MoleculesFormCreate";
import { Form, Radio, message, Button } from "antd";
import { createAbout } from "../../../../services/aboutPage";
const OrganismCreateAbout = () => {
  const [compenentSize, setComponentSize] = useState("large");
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

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
      await createAbout(formData, {
        headers: {
          // "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      message.success("Data berhasil Dikirim");
      form.resetFields();
    } catch (error) {
      message.error("Gagal Mengirim Data");
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
          <div>
            <Form
              form={form}
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 20 }}
              layout="horizontal"
              initialValues={{ size: compenentSize }}
              onValuesChange={onChangeSizeComponent}
              size={compenentSize}
              style={{ maxWidth: 600 }}
              onFinish={onFinish}
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
                  {loading ? "Mengirim ..." : "Create New Data"}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganismCreateAbout;
