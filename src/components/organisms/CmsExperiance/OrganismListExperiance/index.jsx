import { Table, Space } from "antd";
import { useEffect, useState } from "react";
import { getAllExperiance } from "../../../../services/experiance";
import MoleculesCreateButton from "../../../molecules/MoleculesCreateButton";
import MoleculesTitle from "../../../molecules/MoleculesTitle";

const columns = [
  {
    title: "No",
    dataIndex: "key",
  },
  {
    title: "Institution",
    key: "institution",
    dataIndex: "institution",
  },
  {
    title: "Degree",
    key: "degree ",
    dataIndex: "degree",
  },
  {
    title: "Start Date",
    key: "start date",
    dataIndex: "start_date",
  },
  {
    title: "End Date",
    key: "start date",
    dataIndex: "end_date",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size={"middle"}>
        <a href="#">Edit</a>
        <a href="#">Delete</a>
      </Space>
    ),
  },
];

const OrganismListExperiance = () => {
  const [experiances, setExperiances] = useState([]);

  useEffect(() => {
    const fetchDataExperiance = async () => {
      try {
        const response = await getAllExperiance();
        const experianceData = response?.data?.experiences || [];

        const resultData = experianceData.map((experiance, index) => ({
          key: index + 1,
          ...experiance,
        }));

        setExperiances(resultData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataExperiance();
  }, []);
  return (
    <>
      <div>
        <div className="flex justify-between my-5">
          <MoleculesTitle />
          <MoleculesCreateButton />
        </div>
        <div>
          <Table columns={columns} dataSource={experiances} bordered />
        </div>
      </div>
    </>
  );
};

export default OrganismListExperiance;
