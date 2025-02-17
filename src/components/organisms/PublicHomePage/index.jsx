import propTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import { getAllHome } from "../../../services/homePage";
const HeaderName = ({ children, isCurrent = false }) => (
  <h1
    className={`sm:text-5xl font-semibold ${
      isCurrent ? "text-orange-600 underline" : "text-black text-3xl"
    }`}
  >
    {children}
  </h1>
);

HeaderName.propTypes = {
  children: propTypes.node.isRequired,
  isCurrent: propTypes.bool,
};

const Button = ({ children, href, isCurrent = false }) => (
  <a href={href}>
    <button
      className={`text-2xl font-sans rounded-full mx-2 my-2 hover:bg-transparent ${
        isCurrent
          ? "py-4 px-5 bg-orange-600 border hover:border-orange-600 delay-200 duration-500"
          : "py-4 px-4 bg-blue-600 hover:bg-transparent border hover:border-blue-600 delay-200 duration-500"
      }`}
    >
      {children}
    </button>
  </a>
);

Button.propTypes = {
  children: propTypes.node.isRequired,
  href: propTypes.string.isRequired,
  isCurrent: propTypes.bool,
};

const PublicHomePage = () => {
  const [home, setHome] = useState([]);

  useEffect(() => {
    const fetchHome = async () => {
      try {
        const response = await getAllHome();
        console.log("Data Dari API Backend:", response.data); // Debugging

        // Ambil data yang benar dari response
        const homeData = response?.data?.home || [];
        const homeAttachment = response?.data?.attachment || [];

        // Gabungkan home dengan attachment
        const getAllData = homeData.map((home) => ({
          ...home,
          attachment:
            homeAttachment.find((att) => att.attachmentable_id === home.id) ||
            null,
        }));

        setHome(getAllData);
      } catch (e) {
        console.log("Gagal mengambil data home", e);
        alert("Couldn't fetch");
      }
    };

    fetchHome();
  }, []);
  return (
    <>
      {home.map((home) => (
        <header key={home.id} className="lg:grid lg:grid-cols-2 h-screen">
          <div className="lg:my-auto mx-2 sm:mx-24 lg:text-left text-center my-5">
            <h3 className="text-2xl font-normal py-4"> Hallo Everyone...</h3>
            <div>
              <HeaderName> {home.title} </HeaderName>
              <HeaderName> {home.description} </HeaderName>
            </div>
            <p className="py-10 text-xl tracking-wider">
              Hi, I am a programmer with expertise in React.js and Node.js. I
              have experience in building modern web applications, both on the
              frontend and backend, with a focus on efficiency, scalability, and
              optimal user experience.
            </p>
            <Button href="/" isCurrent>
              View my Portfolio
            </Button>
            <Button href="/"> Hire Me</Button>
          </div>
          {/* <div className='bg-fit bg-center bg-no-repeat' style={{backgroundImage:`url(${image})`}}> */}
          <div
            className="bg-cover bg-top lg:w-[500px] lg:h-[500px] sm:w-[350px] sm:h-[350px] w-[350px] h-[350px] my-10 lg:my-auto mx-auto rounded-full shadow-xl shadow-black"
            style={{
              backgroundImage: `url(${import.meta.env.VITE_APP_API_BASE_URL}${
                home.attachment?.file_path
              })`,
            }}
          ></div>
        </header>
      ))}
    </>
  );
};

export default PublicHomePage;
