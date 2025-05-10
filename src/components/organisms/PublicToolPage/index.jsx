import { Swiper, SwiperSlide } from "swiper/react";
import propTypes from "prop-types";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { useState } from "react";
import { useEffect } from "react";
// import {getPaginationServices } from "../../../services/servicesPage";
// import { getAllExperiance } from "../../../services/experiance";
import { getFilteredData } from "../../../services/servicesPage";

const CardService = ({ children }) => (
  <div className="">
    <Swiper
      modules={[FreeMode, Pagination, Autoplay]}
      spaceBetween={0}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      speed={1000}
      slidesPerView={4}
      freeMode={true}
      loop={true}
      pagination={{ clickable: true }}
    >
      {children}
    </Swiper>
  </div>
);

CardService.propTypes = {
  children: propTypes.node.isRequired,
};

const CardSlide = ({ children, isCurrent = false }) => (
  <div className={` rounded-xl ${isCurrent ? "" : ""}`}>{children}</div>
);

CardSlide.propTypes = {
  children: propTypes.node.isRequired,
  isCurrent: propTypes.bool,
};

const CardContent = ({ children }) => (
  <div className=" object-cover rounded-xl p-7">{children}</div>
);

CardContent.propTypes = {
  children: propTypes.node.isRequired,
};

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
const PublicFavoritTools = () => {

  const [service, setServices] = useState([]);
  
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getFilteredData();

        const servicesData = response?.data || [];
        const attachments = Array.isArray(response?.data?.attachments)
        ? response?.data?.attachments
        : [];
        
        const getAllData = servicesData.map((services) => ({
          ...services,
          attachments:
          attachments.find((att) => att.attachmentable_id === services.id) ||
          null,
        }));

        setServices(getAllData);
      } catch (e) {
        window.alert("Gagal mengambil data services", e);
      }
    };
    
    fetchServices();
  }, []);
  return (
    <>
      {service.length > 0 ? (
        <section className="sm:h-screen flex flex-col place-content-center gap-10">
          <div className="text-center sm:mx-10">
            <h1 className="text-2xl tracking-wider font-normal uppercase my-5">
              Favorit Tools
            </h1>
            <h2 className="sm:text-7xl text-4xl text-orange-500">
              Exploring The Tools
              <span className="font-bold tracking-wide text-black">
                <br /> In My Development
              </span>
            </h2>
          </div>
          <CardService>
            {service.map((serve) => {
              const imageUrl = serve.attachment?.[0]?.file_path
                ? `${BASE_URL}${serve.attachment[0].file_path}`
                : undefined;

              return (
                <SwiperSlide key={serve.id}>
                  <CardSlide>
                    <CardContent>
                      <img
                        className="lg:w-full lg:h-60 sm:h-[100px] h-[60px] object-cover"
                        src={imageUrl}
                        alt={serve.title}
                      />
                      <h3 className="sm:text-2xl text-xl sm:font-medium">
                        {serve.title}
                      </h3>
                    </CardContent>
                  </CardSlide>
                </SwiperSlide>
              );
            })}
          </CardService>
        </section>
      ) : (
        <h1 className="text-4xl text-center">Data services kosong</h1>
      )}
    </>
  )  
}
export default PublicFavoritTools;
