import {
  IoHomeOutline,
  IoLogoWebComponent,
  IoManOutline,
  IoSettingsOutline,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { Link } from "react-router-dom";

const CmsSideBar = () => {
  const dataMenu = [
    {
      title: "Dashboard",
      link: "/cms/Dashboard",
      icon: <IoHomeOutline />,
    },
    {
      title: "Hero Management",
      children: [
        {
          title: "Header",
          icon: <IoLogoWebComponent />,
          link: "/cms/hero",
        },
      ],
    },
    {
      title: "About Management",
      children: [
        {
          title: "About",
          icon: <IoManOutline />,
          link: "/cms/about",
        },
      ],
    },
    {
      title: "Experiance Management",
      children: [
        {
          title: "Experiance",
          icon: <IoSettingsOutline />,
          link: "/cms/experiance",
        },
      ],
    },
    {
      title: "Contact Management",
      children: [
        {
          title: "Contact",
          icon: <IoLogoWhatsapp />,
          link: "/cms/contact",
        },
      ],
    },
  ];

  return (
    <>
      <aside className="bg-orange-600 h-full fixed w-72 flex lg:flex flex-col flex-shrink-0">
        <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200  pt-0">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex flex-row px-5 mb-5">
              <div className="text-lg font-bold text-black mb-4">
                <h4>Hadi Rachmat S</h4>
              </div>
            </div>
            <div className="flex-1 px-3 divide-y space-y-1">
              <ul className="space-y-2 pb-2">
                {dataMenu.map((item, index) => (
                  <li key={index}>
                    <div className="">
                      {item.icon ? (
                        <Link
                          to={item.link}
                          className="flex font-bold items-center p-2 text-black"
                        >
                          {item.icon}
                          <span className="ml-3 text-lg">{item.title}</span>
                        </Link>
                      ) : (
                        <div>
                          <span className="font-bold text-black text-lg">{item.title}</span>
                        </div>
                      )}
                      <ul className="space-y-2">
                        {item.children?.map((child, chilIndex) => (
                          <li key={chilIndex}>
                            {!child.children ? (
                              <Link
                                to={child.link}
                                className="flex text-lg items-center text-black rounded-lg font-bold group p-2"
                              >
                                {child.icon}
                                <span className="ml-3 text-black">{child.title}</span>
                              </Link>
                            ) : (
                              <div></div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default CmsSideBar;
