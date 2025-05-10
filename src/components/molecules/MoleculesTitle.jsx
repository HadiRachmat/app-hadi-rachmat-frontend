import { useLocation } from "react-router-dom";

const MoleculesTitle = () => {
  const location = useLocation();

  const generatePageTitle = () => {
    const path = location.pathname.split("/").filter(Boolean);
    const lastPath = path[path.length - 1];
    const secondLastPath = path[path.length - 2];

    if (lastPath === "create") {
      const title =
        secondLastPath?.charAt(0).toUpperCase() + secondLastPath?.slice(1);
      return `Create ${title}`;
    } else {
      const title = lastPath.charAt(0).toUpperCase() + lastPath.slice(1);
      return ` List of ${title}`;
    }
    /**( title update page is not yet to do) */
  };
  return (
    <>
    <div className="p-5 py-7">
      <h1 className="font-bold text-3xl uppercase">{generatePageTitle()} Management</h1>
    </div>
    </>
  );
};

export default MoleculesTitle;
