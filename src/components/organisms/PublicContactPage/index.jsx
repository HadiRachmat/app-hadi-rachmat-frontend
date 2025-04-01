import IconComponent from "../../molecules/MoleculesIcon";
import {
  IoCallOutline,
  IoMailOutline,
  IoLogoInstagram,
  IoLocateOutline,
} from "react-icons/io5";
import {InputFields, TextAreaFields} from "../../molecules/MoleculesForm";
import Button from "../../molecules/MoleculesButton";
const PublicContactPage = () => {
  return (
    <>
      <section className="min-h-fit container place-content-center mx-auto sm:my-16">
        <div className="sm:grid sm:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex flex-col place-items-center sm:place-items-start ">
              <h3 className="flex items-center text-3xl tracking-wider">
                <hr className="bg-black h-0.5 w-10 mx-2 " />
                Contact
                <hr className="bg-black h-0.5 w-10 mx-2 sm:hidden" />
              </h3>
            </div>
            <h1 className="sm:text-6xl text-5xl text-center sm:text-left text-orange-500"> Let`s Talk with </h1>
            <h1 className="sm:text-6xl text-3xl text-center sm:text-left"> Hadi Rachmat Supindar </h1>
            <p className="tracking-wide my-5 text-center sm:text-left mx-4 sm:mx-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
              culpa ipsum voluptatum facilis? Maxime ad accusamus ea amet,
              distinctio provident.
            </p>
            <div className=" my-5 grid grid-cols-2">
              <IconComponent
                icons={IoCallOutline}
                href="https://wa.me/085283330849"
              >
                WhatsApp
              </IconComponent>
              <IconComponent
                href="mailto:hadi@example.com"
                icons={IoMailOutline}
              >
                hadi@example.com
              </IconComponent>
              <IconComponent
                icons={IoLogoInstagram}
                href="https://instagram.com"
              >
                hadi.rachmat01
              </IconComponent>
              <IconComponent
                icons={IoLocateOutline}
                href={"https://google.maps"}
              >
                Sukabumi, West Java
              </IconComponent>
            </div>
          </div>
          <div className="max-w-4xl place-content-center">
            <form
              action=""
              method="post"
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 mx-2"
            >
              <InputFields label="Subject" placeholder="Enter Your Subject" isCurrent />
              <InputFields label="Email" placeholder="Enter Your Email" isCurrent />
              <InputFields label="FullName" placeholder="Enter Your Full Name" isCurrent />
              <InputFields label="Phone" placeholder="Enter Your Number phone" isCurrent />
              <div className="col-span-2">
                <TextAreaFields label="Message" placeholder="input your message here" isCurrent/>
              </div>
            </form>
          <Button label="submit" isCurrent={true} className="mt-3"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default PublicContactPage;
