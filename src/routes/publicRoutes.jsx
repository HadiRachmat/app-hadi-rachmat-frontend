import { Routes, Route } from "react-router-dom";
import PublicHomeLayout from "../components/templates/Public";
import Home from "../components/pages/Public/Home";

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<PublicHomeLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default PublicRoutes;
