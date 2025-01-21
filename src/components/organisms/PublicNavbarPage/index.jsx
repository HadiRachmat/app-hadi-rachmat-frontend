import propTypes from "prop-types";

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

const PublicNavbarPage = () => {
  return (
    <>
      <section className="sticky top-5 bg-[#F5841A] sm:mx-20 p-2 rounded-full my-2" >
        <nav className=" sm:flex sm:justify-between">
          <h1 className="px-5 text-3xl font-medium uppercase"> Hadi Rachmat </h1>
          <ul className="flex gap-10 px-10 py-1">
            <li>
              <NavLink href="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink href="/services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink href="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default PublicNavbarPage;
