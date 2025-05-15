import { message, Space, Table, Popconfirm} from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllAbout, removeAbout } from "../../../../services/aboutPage";
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

  const handleRemoveDataAbout = async (id) => {
    try {
      const token = sessionStorage.getItem("accessToken");
      await removeAbout(id, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      message.success("selamat Data About Berhasil dihapus")
      fetchDataAbout();
    } catch (e) {
      console.log(e)
      message.error("gagal Memuat Data")
      
    }
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
          <Popconfirm
           title="yakin ingin menghapus data"
           onConfirm={() => handleRemoveDataAbout(record.id)}
           okText="Ya"
           cancelText="Tidak"
          >
            <a>Delete</a>
          </Popconfirm>
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
