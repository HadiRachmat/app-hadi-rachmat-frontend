import { Space, Table, Popconfirm, message } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllHome, removeHome } from "../../../../services/homePage";
import MoleculesTitle from "../../../molecules/MoleculesTitle";
import MoleculesCreateButton from "../../../molecules/MoleculesCreateButton";

const OrganismListHero = () => {
  const [dataHero, setDataHero] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // fetch ulang data setelah delete
  const fetchDataHome = async () => {
    try {
      const response = await getAllHome();
      const heroData = response?.data.home || [];

      const getAllData = heroData.map((home, index) => ({
        key: index + 1,
        ...home,
      }));

      setDataHero(getAllData);
    } catch (e) {
      window.alert("Gagal Memuat Data");
      console.log(e)
    }
  };

  useEffect(() => {
    fetchDataHome();
  }, []);

  // navigasi update
  const handleUpdate = (id) => {
    navigate(`${location.pathname}/update/${id}`);
  };


  const handleRemoveData = async (id) => {
    try {
      const token = sessionStorage.getItem("accessToken");
      await removeHome(id, {
        headers: {
          Authorization:`Bearer ${token}`
        }
      })
      message.success("Selamat, Behasil Menghapus Data")
      fetchDataHome();
    } catch (e) {
      message.error("gagal Menghapus Data ")
      console.log(e)
    }
  }

  const columns = [
    {
      title: "No",
      dataIndex: "key",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <Space size={"middle"}>
          <a onClick={() => handleUpdate(record.id)}>Edit</a>
          <Popconfirm
            title="Yakin ingin menghapus?"
            onConfirm={() => handleRemoveData(record.id)}
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
        <MoleculesTitle />
        <MoleculesCreateButton />
      </div>
      <div>
        <Table columns={columns} dataSource={dataHero} bordered />
      </div>
    </>
  );
};

export default OrganismListHero;
