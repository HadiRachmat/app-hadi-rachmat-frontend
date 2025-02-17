import { Swiper, SwiperSlide } from "swiper/react";
import propTypes from "prop-types";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { useState } from "react";
import { useEffect } from "react";
import { getAllServices } from "../../../services/servicesPage";

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
  <div className={` rounded-xl ${isCurrent ? "" : ""}`}>
    {children}
  </div>
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
const PublicServicePage = () => {
  const [service, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getAllServices();

        const servicesData = response?.data?.services || [];
        const attachments = Array.isArray(response?.data?.attachments)
          ? response.data.attachments
          : [];

        const getAllData = servicesData.map((services) => ({
          ...services,
          attachments:
            attachments.find((att) => att.attachmentable_id === services.id) ||
            null,
        }));
        

        setServices(getAllData);
      } catch (e) {
        console.log("Gagal mengambil data services", e);
        alert("Couldn't fetch");
      }
    };

    fetchServices();
  }, []);
  return (
    <>
      <section className="">
        <div className=" text-center mx-10 ">
          <h1 className="text-3xl font-medium uppercase">Services</h1>
          <p className="text-lg">
            I provide a wide range of services to help you achieve your goals.
          </p>
        </div>
        <CardService>
          {service.map((services) => {
            const imageUrl = services.attachments?.file_path
              ? `${BASE_URL}${services.attachments.file_path}`
              : undefined;
            return (
              <SwiperSlide key={services.id}>
                <CardSlide>
                  <CardContent>
                    <img
                      className="lg:w-full lg:h-60 sm:h-[100px] h-[60px] object-cover"
                      src={imageUrl}
                      alt={services.title}
                    />
                    <h3 className="sm:text-2xl text-xl sm:font-medium">{services.title}</h3>
                  </CardContent>
                </CardSlide>
              </SwiperSlide>
            );
          })}
        </CardService>
      </section>
    </>
  );
};

export default PublicServicePage;
