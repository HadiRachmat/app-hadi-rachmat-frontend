import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "antd";

const MoleculesCreateButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleCraeteButton = () => {
    const locationPath = location.pathname;
    navigate(`${locationPath}/create`);
  };

  return (
    <>
      <div>
        <Button
          onClick={handleCraeteButton}
          className="px-6 p-5 bg-blue-600 text-white uppercase hover:!bg-orange-500 hover:!text-black delay-150 duration-500"
          size="middle"
        >
          Create
        </Button>
      </div>
    </>
  );
};

export default MoleculesCreateButton;
