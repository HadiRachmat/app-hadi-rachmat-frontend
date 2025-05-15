import { Space, Table } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllAbout } from "../../../../services/aboutPage";
import MoleculesTitle from "../../../molecules/MoleculesTitle";
import MoleculesCreateButton from "../../../molecules/MoleculesCreateButton";



const OrganismListAbout = () => {
  const [dataAbout, setAbout] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();


  const fetchDataAbout = async () => {
    try {
      const response = await getAllAbout();
      const aboutData = response?.data?.about || [];

      const getAllAboutData = aboutData.map((about, index) => ({
        key: index + 1,
        ...about,
      }));

      setAbout(getAllAboutData);
    } catch (error) {
      window.alert(error, "Gagal Memuat Data")
    }
  };

  useEffect(() => {
    fetchDataAbout();
  }, []);

  const handleUpdateAbout = async (id) => {
    navigate(`${location.pathname}/update/${id}`)
  }

  const columns = [
    {
      title: " no ",
      dataIndex: "key",
    },
    {
      title: "Title",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "Description",
      key: "description",
      dataIndex: "description",
      ellipsis: {
        showTitle: false,
      },
      render: (text) => <span title={text}>{text}</span>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size={"middle"}>
          <a onClick={() => handleUpdateAbout(record.id)}>Edit</a>
          <a href="http://">Delete</a>
        </Space>
      ),
    },
  ];
  return (
    <>
      <div className="flex justify-between my-5">
        <MoleculesTitle/>
        <MoleculesCreateButton/>
      </div>
      <div>
        <Table
          columns={columns}
          dataSource={dataAbout}
          pagination={{ pageSize: 10 }}
          bordered
        />
      </div>
    </>
  );
};

export default OrganismListAbout;
