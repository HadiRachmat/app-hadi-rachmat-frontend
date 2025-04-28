import { Outlet } from "react-router-dom";
import CmsSideBar from "../../organisms/CmsSideBar";
import CmsHeader from "../../organisms/CmsHeader";
const CmsLayout = () => {
  return (
    <>
      <div className="flex overflow-hidden">
        <CmsSideBar />
        <div className="bg-gray-900 opacity-50 fixed z-10" />
        <div className=" flex flex-col h-screen w-full bg-[#FCFCFD] ml-72 p-4">
          <CmsHeader />
          <main className="flex-1 mt-5 overflow-y-auto pb-10">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default CmsLayout;
