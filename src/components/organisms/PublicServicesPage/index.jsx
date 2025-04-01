import propTypes from "prop-types";
import Button from "../../molecules/MoleculesButton";
import { IoArrowForwardCircle, IoLogoAndroid, IoLogoDesignernews, IoLogoWebComponent } from "react-icons/io5";
import { useEffect, useState } from "react";
import { getSpesificData } from "../../../services/servicesPage";

const CardService = ({ children, icon: Icon, imageUrl }) => (
  <div className="bg-gray-200 m-16 py-10 px-6 rounded-3xl border border-gray-400">
    {Icon && (
      <Icon className="text-9xl text-green-900 mb-4 bg-white p-3 rounded-full" />
    )}
    {imageUrl && (
      <img
        src={imageUrl}
        alt="service image"
        className="w-40 h-40 object-cover mx-auto mb-4 rounded-xl"
      />
    )}
    {children}
  </div>
);

CardService.propTypes = {
  children: propTypes.node.isRequired,
  icon: propTypes.elementType,
  imageUrl: propTypes.string,
};

const icon = {
  9: IoLogoAndroid,
  10: IoLogoWebComponent,
  11: IoLogoDesignernews
}

const PublicServicePage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getSpesificData();
        console.log(response.data);

        const servicesData = response?.data || [];
        const attahments = Array.isArray(response?.data?.attachments)
          ? response?.data?.attachments
          : [];

        const getAllData = servicesData.map((services) => ({
          ...services,
          attachments:
            attahments.find((att) => att.attachmentable_id === services.id) ||
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
      <section className="container mx-auto min-h-screen">
        <div>
          <div className="sm:flex place-content-center justify-around -mx-20 text-center sm:text-left">
            <div>
              <h1 className="py-2 text-xl tracking-wider"> Services</h1>
              <h1 className="sm:text-5xl text-4xl font-medium tracking-wide">
                
                What I Can Serve
              </h1>
            </div>
            <div className=" flex place-items-end justify-center mt-5 sm:mt-0">
              <Button
                label="Learn More"
                href="https://instagram.com"
                isCurrent={false}
                className="px-12 py-2.5 rounded-full uppercase text-xl text-white"
              />
              <IoArrowForwardCircle className="text-5xl text-orange-500" />
            </div>
          </div>
        </div>
        <div className="sm:flex justify-around my-3">
          {services.length > 0 ? (
            services.map((service) => {
              return (
                <CardService key={service.id} icon={icon[service.id]}>
                  <h2 className="text-2xl py-2 font-semibold">
                    {service.title}
                  </h2>
                  <p className="text-lg py-2 tracking-wide">
                    {service.description}
                  </p>
                  <Button
                    label="Learn More"
                    href="https://github.com"
                    isCurrent={true}
                    className="mt-5"
                  />
                </CardService>
              );
            })
          ) : (
            <div className="flex place-content-center justify-center items-center h-screen">
              <h1 className="text-5xl text-gray-600">No services found</h1>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PublicServicePage;
