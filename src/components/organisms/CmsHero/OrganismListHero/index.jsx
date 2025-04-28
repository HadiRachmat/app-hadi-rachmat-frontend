import { Space, Table } from "antd";
import { useEffect, useState } from "react";
import { getAllHome } from "../../../../services/homePage";
import MoleculesTitle from "../../../molecules/MoleculesTitle";
import MoleculesCreateButton from "../../../molecules/MoleculesCreateButton";

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
    render: () => (
      <Space size={"middle"}>
        <a> Edit</a>
        <a> Delete</a>
      </Space>
    ),
  },
];

const OrganismListHero = () => {
  const [dataHero, setDataHero] = useState([]);

  useEffect(() => {
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
        console.log(e, "Gagal Memuat Data");
      }
    };

    fetchDataHome();
  }, []);
  return (
    <>
      <div className="flex justify-between my-5">
        <MoleculesTitle/>
        <MoleculesCreateButton/>
      </div>
      <div>
        <Table columns={columns} dataSource={dataHero} bordered />
      </div>
    </>
  );
};

export default OrganismListHero;
