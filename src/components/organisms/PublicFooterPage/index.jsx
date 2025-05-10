import propTypes from "prop-types";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoMailOutline,
  
} from "react-icons/io5";

const FooterList = ({ links, className = "", isCurrent = false }) => {
  return (
    <ul
      className={`${
        isCurrent ? "flex space-x-3 mt-5" : "space-y-3"
      } ${className}`}
    >
      {links.map((items, index) => (
        <li key={index}>
          <a
            href={items.link}
            className={`
              ${className}
              ${
                items.isCurrent
                  ? "text-3xl text-black bg-orange-500 flex flex-wrap p-2 rounded-full "
                  : " text-white"
              }`}
          >
            {items.icon}
            {items.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

FooterList.propTypes = {
  links: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      icon: propTypes.element,
      link: propTypes.string,
      isCurrent: propTypes.bool,
    })
  ),
  isCurrent: propTypes.bool,
  className: propTypes.string,
};

const PublicFooterPage = () => {
  const linksIcon = [
    { name: "", icon: <IoLogoInstagram />, link: "#", isCurrent: true },
    { name: "", icon: <IoLogoWhatsapp />, link: "#", isCurrent: true },
    { name: "", icon: <IoLogoGithub />, link: "#", isCurrent: true },
    { name: "", icon: <IoMailOutline />, link: "#", isCurrent: true },
  ];

  const linkNavigation = [
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Services", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Contact", link: "#" },
  ];

  const linkContact = [
    { name: "+6285283330849", link: "#" },
    { name: "Mail", link: "#" },
    { name: "hadiRachmat.com", link: "#" },
    { name: "Git Hub", link: "#" },
    { name: "Linkend", link: "#" },
  ];
  return (
    <footer>
      <div className="py-5 bg-green-900 min-h-fit">
        <div className="container mx-auto">
          <h1 className="sm:text-5xl text-4xl text-center sm:text-left font-medium">
            let`s <span className="italic text-orange-500">Talk </span> There
            .... !
          </h1>
          <hr className=" w-full border-black my-4" />
        </div>
        <div className="container sm:mx-auto grid sm:grid-cols-3 grid-cols-2 sm:space-x-16 justify-items-center">
          <div className="col-span-5 sm:col-span-1 py-5 place-items-center sm:place-items-start">
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-orange-500 w-10 h-10 flex items-center justify-center rounded-full font-semibold">
                H
              </div>
              <h1 className="font-medium text-xl text-black">
                {" "}
                Hadi Rachmat.{" "}
              </h1>
            </div>
            <p className="mt-5 text-white text-center sm:text-left">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
              perspiciatis eveniet sed laboriosam unde quod.
            </p>
            <div className="">
              <FooterList links={linksIcon} isCurrent={true} />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-black"> Navigation </h1>
            <FooterList
              links={linkNavigation}
              isCurrent={false}
              className="my-2"
            />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-black">Contact</h1>
            <FooterList
              links={linkContact}
              isCurrent={false}
              className="my-2"
            />
          </div>
        </div>
      </div>
      <div className="text-center text-white bg-orange-500 py-3">
        <p>
          &copy; {new Date().getFullYear()} Hadi Rachmat. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default PublicFooterPage;
