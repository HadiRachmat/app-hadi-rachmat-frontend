import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Form, Button, message } from "antd";
import { getByIdAbout, updateAbout } from "../../../../services/aboutPage";
import MoleculesFormUpdate from "../../../molecules/MoleculesFormUpdate";
import PropTypes from "prop-types";

const OrganismUpdateAbout = ({ id }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
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
    const fetchDataAbout = async () => {
      if (!id) {
        message.error("id belum tersedia");
        //   navigate("/cms/about");
      }

      try {
        const token = sessionStorage.getItem("accessToken");
        const response = await getByIdAbout(id, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = response.data;
        form.setFieldValue({
          title: data.data.about.title,
          description: data.data.about.description,
        });

        if (data.data.attachment?.link) {
          setFileList([
           { uid: "-1",
            name: "file",
            status: "done",
            url: data.data.attachment.link,}
          ]);
        }
      } catch (e) {
        message.error("gagal mengambil data");
        console.log(e);
      }
    };
    fetchDataAbout();
  }, [id, form]);

  const onFinish = async (values) => {
    const formDataAbout = new FormData();
    formDataAbout.append("title", values.title);
    formDataAbout.append("description", values.description);
    if (fileList.length > 0 && fileList[0].originFileObj) {
      formDataAbout.append("attachment", fileList[0].originFileObj);
    }

    try {
      setLoading(true);
      const token = sessionStorage.getItem("accessToken");
      await updateAbout(id, formDataAbout, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      message.success("Data Berhasil Di Update ");
      navigate("/cms/about");
    } catch (e) {
      console.log(e);
      message.error("gagal Update Data ");
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
      {fields.map((ssss) => (
        <MoleculesFormUpdate
          key={ssss.name}
          label={ssss.label}
          title={ssss.title}
          type={ssss.type}
          name={ssss.name}
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
OrganismUpdateAbout.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
export default OrganismUpdateAbout;
