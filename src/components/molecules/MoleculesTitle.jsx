import { useLocation } from "react-router-dom";

const MoleculesTitle = () => {
  const location = useLocation();

  const generatePageTitle = () => {
    const path = location.pathname.split("/").filter(Boolean);

    const hasCreate = path.includes("create");
    const hasUpdate = path.includes("update");

    let titleEntity = "";

    if (hasCreate || hasUpdate) {
      // Ambil nama entity sebelum "create" atau "update"
      const index = path.findIndex((p) => p === "create" || p === "update");
      titleEntity = path[index - 1];
    } else {
      titleEntity = path[path.length - 1];
    }

    const capitalizedTitle =
      titleEntity.charAt(0).toUpperCase() + titleEntity.slice(1);

    if (hasCreate) {
      return `Create ${capitalizedTitle}`;
    } else if (hasUpdate) {
      return `Update ${capitalizedTitle}`;
    } else {
      return `List of ${capitalizedTitle}`;
    }
  };

  return (
    <div className="p-5 py-7">
      <h1 className="font-bold text-3xl uppercase">
        {generatePageTitle()} Management
      </h1>
    </div>
  );
};

export default MoleculesTitle;
