import { useEffect, useState } from "react";
import Button from "../../molecules/MoleculesButton";
import { getAllAbout } from "../../../services/aboutPage";
import { IoCaretForwardCircle, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";
import { Alert } from "antd";

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
const PublicAboutPage = () => {
  const [getAbout, setGetAbout] = useState([]);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await getAllAbout();

        const aboutData = response?.data?.about || [];
        const aboutAttachment = Array.isArray(response?.data?.attachment)
          ? response?.data?.attachment
          : [];

        const getAllData = aboutData.map((about) => ({
          ...about,
          attachment:
            aboutAttachment.find((att) => att.attachmentable_id === about.id) ||
            null,
        }));

        setGetAbout(getAllData);
      } catch (e) {
       window.alert(e, "gagal Memuat Data")
      }
    };

    fetchAbout();
  }, []);

  const handleClick = () => (
    <Alert> are you sure want to download the file </Alert>
  );
  return (
    <>
      {getAbout.length > 0 ? (
        getAbout.map((about) => {
          const imageUrl = about.attachment?.file_path
            ? `${BASE_URL}${about.attachment.file_path}`
            : undefined;
          return (
            <section
              className="min-h-fit bg-orange-500 sm:grid sm:grid-cols-2 my-10 sm:my-0"
              key={about.id}
            >
              <div className="sm:my-5 flex justify-center items-center pt-14 ">
                <img
                  className="w-[50%] h-[90%] sm:w-[60%] sm:h-[50%] lg:h-[70%] rounded-t-[30%] rounded-b-lg object-cover"
                  src={imageUrl}
                  alt={about.attachments?.file_name}
                />
              </div>
              <div className="my-10 content-center sm:text-left text-center">
                <div className="flex flex-col">
                  <h5 className=" flex items-center sm:justify-start justify-center gap-3 text-2xl font-light py-5">
                    <hr className="h-1 bg-black w-10" />
                    About Me
                    <hr className="h-1 bg-black w-10" />
                  </h5>
                  <h1 className="text-5xl">Hadi Rachmat S</h1>
                  <p className="font-light py-2 my-2 tracking-wider sm:mr-20 mx-4 sm:mx-0 text-xl">
                    {about.description}
                  </p>
                  <div className="flex place-items-center sm:justify-between mx-auto md:mx-0 my-4 bg-sky-600 xl:w-[30%] md:w-[64%] rounded-full">
                    <Button
                      label="Download Cv"
                      href="https://instagram.com"
                      onclick={handleClick}
                      isCurrent={true}
                    />
                    <IoCaretForwardCircle className="text-5xl items-center" />
                  </div>
                </div>
                <div className="flex place-items-center justify-evenly mx-auto md:mx-0 my-4 xl:w-[30%] md:w-[64%] text-4xl rounded-full">
                  <IoLogoGithub/>
                  <IoLogoWhatsapp/>
                  <IoLogoInstagram/>
                  <IoLogoLinkedin/>
                </div>
              </div>
            </section>
          );
        })
      ) : (
        <div className="flex place-content-center justify-center items-center h-screen">
          <h1 className="text-5xl text-gray-600">No about me found</h1>
        </div>
      )}
    </>
  );
};

export default PublicAboutPage;
