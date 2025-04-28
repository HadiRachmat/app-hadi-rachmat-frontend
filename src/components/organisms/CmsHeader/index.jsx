import { IoPersonCircleSharp } from "react-icons/io5";
import { Dropdown } from "antd";
import { useLocation } from "react-router-dom";

const menu = [
  {
    key : "1",
    label : <a href="/profile"> profile </a>
  },
  {
    key : "2",
    label : <a href="/Settings"> Settings </a>
  },
  {
    key : "3",
    label : <a href="/Logout"> Logout </a>
  }
]

const CmsHeader = () => {
  const location = useLocation();
  const headerTitle = [
    {path:"/cms/dashboard", title:"Hadi - Dashboard"},
    {path:"/cms/hero", title:"Hadi - Hero Management"},
    {path:"/cms/about", title:"Hadi - About Management"},
    {path:"/cms/experiance", title:"Hadi - Experiance Management"},
    {path:"/cms/contact", title:"Hadi - Contact Management"},
  ]

  const currentHeaderTitle = () => {
    const match = headerTitle.find((page) => location.pathname.startsWith(page.path));
    return match ? match.title : "dashboard"
  }


  return (
    <header className="bg-orange-500 w-full p-3 px-4 flex justify-between rounded-xl">
      <div className="flex justify-center items-center">
        <span className="font-semibold text-[#163020]">
          {currentHeaderTitle()}
        </span>
      </div>

      <div className="flex cursor-pointer">
        <Dropdown menu={{items: menu}} trigger={["hover"]}>
          <div className="flex items-center">
            <div className="flex justify-center items-center mr-2">
              <IoPersonCircleSharp size={25} />
            </div>
            <div>Hi, User</div>
          </div>
        </Dropdown>
      </div>
    </header>
  );
};

export default CmsHeader;
