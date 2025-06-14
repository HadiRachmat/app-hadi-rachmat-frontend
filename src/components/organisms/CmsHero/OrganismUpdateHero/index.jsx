import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Form, Button, message } from "antd";
import { getByIdHome, updateHome } from "../../../../services/homePage";
import PropTypes from "prop-types";
import MoleculesFormUpdate from "../../../molecules/MoleculesFormUpdate";

const OrganismUpdateHero = ({ id }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  // const [initialFields, setInitialFields] = useState(null);
  const [fileList, setFileList] = useState([]);

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

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        console.warn("ID belum tersedia");
        return;
      }
      try {
        const token = sessionStorage.getItem("accessToken");
        const res = await getByIdHome(id, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = res.data;
        form.setFieldsValue({
          title: data.data.home.title,
          description: data.data.home.description,
        });

        if (data.data.attachment?.link) {
          setFileList([
            {
              uid: "-1",
              name: "file",
              status: "done",
              url: data.data.attachment.link,
            },
          ]);
        }
      } catch (e) {
        message.error("gagal mengambil data ");
        console.log(e);
      }
    };
    fetchData();
  }, [id, form]);

  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    if (fileList.length > 0 && fileList[0].originFileObj) {
      formData.append("file", fileList[0].originFileObj);
    }
    try {
      setLoading(true);
      const token = sessionStorage.getItem("accessToken");
      await updateHome(id, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      message.success("Data Berhasil Di Update");
      navigate("/cms/hero")
    } catch (e) {
      console.log(e);
      message.error("data Gagal di Update");
    } finally {
      setLoading(false);
    }
  };

  const handleClickLocation = () => {
    navigate(`${location.pathname}`);
  };
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 600, margin: "0 auto" }}
    >
      {fields.map((field) => (
        <MoleculesFormUpdate
          key={field.name}
          label={field.label}
          title={field.title}
          type={field.type}
          name={field.name}
          fileList={fileList}
          setFileList={setFileList}
        />
      ))}

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          onClick={handleClickLocation}
        >
          Update
        </Button>
      </Form.Item>
    </Form>
  );
};
OrganismUpdateHero.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
export default OrganismUpdateHero;
