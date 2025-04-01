import propTypes from "prop-types";
import { useEffect, useState } from "react";
import { IoSchoolOutline } from "react-icons/io5";
import { getAllExperiance } from "../../../services/experiance";

const CardTitle = ({ children, icon: Icon }) => (
  <div>
    <div className="flex flex-row-reverse justify-center items-center gap-5 ">
      <h1 className="text-4xl">{children}</h1>
      {Icon && (
        <Icon className="text-5xl text-gray-600 bg-orange-500 rounded-full p-2" />
      )}
    </div>
  </div>
);

CardTitle.propTypes = {
  children: propTypes.node.isRequired,
  icon: propTypes.elementType.isRequired,
};

const PublicEducationPage = () => {
  const [getExperiance, setExperiance] = useState([]);

  useEffect(() => {
    const fetchExperiance = async () => {
      try {
        const response = await getAllExperiance();
        console.log(response);

        const experianceData = response?.data?.experiences || [];
        console.log(experianceData);

        const getAllData = experianceData.map((experiences) => ({
          ...experiences,
        }));

        setExperiance(getAllData);
      } catch (e) {
        console.log("Gagal mengambil data experiences", e);
      }
    };
    fetchExperiance();
  }, []);
  return (
    <>
      <section className=" container min-h-screen sm:place-content-center mx-auto my-10 sm:my-0">
        <div className="mb-16">
          <h5 className="flex justify-center items-center text-3xl">
            <hr className="w-4 border-black mr-2" />
            Education & Experiance
          </h5>
          <h1 className="text-center text-5xl">
            My Education & Experiance Jurney
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div className="bg-gray-300 rounded-lg w-full p-20">
            <CardTitle icon={IoSchoolOutline}>Education Experiance</CardTitle>
            <div>
              <hr className=" my-5 h-0.5 w-full bg-black" />
              {getExperiance.map((experience) => {
                return (
                  <div
                    key={experience.id}
                    className="h-auto border-l-2 border-gray-500"
                  >
                    <div className=" my-6 mx-4">
                      <h2>
                        {experience.start_date} - {experience.end_date}
                      </h2>
                      <p className="sm:text-3xl text-xl tracking-wide">
                        {experience.institution}
                      </p>
                      <p className="text-2xl tracking-wider">
                        {experience.degree}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gray-300 rounded-lg w-full p-20">
            <CardTitle icon={IoSchoolOutline}>Work Experiance</CardTitle>
            <div>
              <hr className=" my-5 h-0.5 w-full bg-black" />
              <div className="h-80 border-l-2 border-gray-500">
                <div className="flex flex-col my-6 mx-4">
                  <h2>2021 - Present</h2>
                  <p className="sm:text-3xl text-xl tracking-wide">
                    Your High School Name
                  </p>
                  <p className="text-2xl tracking-wider">Your Major</p>
                </div>
                <div className="flex flex-col my-6 mx-4">
                  <h2>2017 - 2021</h2>
                  <p className="sm:text-3xl tracking-wide">
                    Your College text-xl Name
                  </p>
                  <p className="text-2xl tracking-wider">Your Degree</p>
                </div>
                <div className="flex flex-col my-6 mx-4">
                  <h2>2013 - 2017</h2>
                  <p className="sm:text-3xl tracking-wide">
                    Your University text-xl Name
                  </p>
                  <p className="text-2xl tracking-wider">Your Degree</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PublicEducationPage;
