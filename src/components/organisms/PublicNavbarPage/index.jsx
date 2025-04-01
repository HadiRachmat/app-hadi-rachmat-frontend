import propTypes from "prop-types";
import { useState } from "react";
import {
  IoHomeOutline,
  IoList,
  IoPaperPlaneOutline,
  IoPersonCircleOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import { Drawer } from "antd";

const NavLink = ({ href, children, isCurrent = false }) => (
  <a
    href={href}
    className={`hover:bg-white hover:rounded-full font-medium text-xl p-2 m-2${
      isCurrent ? "text-white bg-yellow-700" : ""
    }`}
    aria-current={isCurrent ? "page" : undefined}
  >
    {children}
  </a>
);

NavLink.propTypes = {
  href: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
  isCurrent: propTypes.bool,
};

const NavList = ({ children, isCurrent = false, icons: Icon }) => (
  <li
    className={`flex items-center gap-3 ${
      isCurrent ? "text-left py-3" : "text-center"
    }`}
  >
    {Icon && <Icon className="text-2xl" />}
    {children}
  </li>
);

NavList.propTypes = {
  children: propTypes.node.isRequired,
  isCurrent: propTypes.bool,
  icons: propTypes.elementType,
};

const PublicNavbarPage = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [loading, setLoading] = useState(true);
  const showNavbar = () => {
    setOpenNavbar(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <section className="sticky top-5 bg-[#F5841A] sm:mx-20 p-4 rounded-full sm:my-2 sm:block hidden z-20">
        <nav className=" sm:flex sm:justify-between">
          <h1 className="px-5 text-3xl font-medium uppercase">
            {" "}
            Hadi Rachmat{" "}
          </h1>
          <ul className="flex gap-10 px-10 py-1">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/about">About</NavLink>
            </li>
            <li>
              <NavLink href="/services">Services</NavLink>
            </li>
            <li>
              <NavLink href="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </section>
      <section className="sticky bg-[#F5841A] sm:hidden py-2">
        <nav className="flex justify-between">
          <h1 className="px-5 text-3xl font-medium">Hadi Rachmat</h1>
          <button className="mx-5 text-2xl" onClick={showNavbar}>
            <IoList className="text-2xl" />
          </button>

          <Drawer
            title="Hadi Rachmat"
            onClose={() => setOpenNavbar(false)}
            open={openNavbar}
            loading={loading}
            closable
          >
            <ul>
              <NavList isCurrent icons={IoHomeOutline}>
                <NavLink href="/">Home</NavLink>
              </NavList>
              <NavList isCurrent icons={IoPersonCircleOutline}>
                <NavLink href="/about">About</NavLink>
              </NavList>
              <NavList isCurrent icons={IoPaperPlaneOutline}>
                <NavLink href="/services">Services</NavLink>
              </NavList>
              <NavList isCurrent icons={IoPhonePortraitOutline}>
                <NavLink href="/contact">Contact</NavLink>
              </NavList>
            </ul>
          </Drawer>
        </nav>
      </section>
    </>
  );
};

export default PublicNavbarPage;
