import { Routes, Route } from "react-router-dom";
import CmsLayout from "../components/templates/Cms";
import CmsDashboard from "../components/pages/Cms/CmsDashboard";
import ListHeroManagement from "../components/pages/Cms/Hero/List";
import ListAboutManagement from "../components/pages/Cms/About/List";
import ListExperiance from "../components/pages/Cms/Experiance/List";
import ListContact from "../components/pages/Cms/Contact/List";
import CreateExperiance from "../components/pages/Cms/Experiance/Create";

const CmsRoutes = () => (
  <>
    <Routes>
      <Route element={<CmsLayout />}>
        <Route path="/dashboard" element={<CmsDashboard />} />
        <Route path="/hero" element={<ListHeroManagement />} />
        <Route path="/hero/create" element={<ListHeroManagement />} />
        <Route path="/hero/update" element={<ListHeroManagement />} />
        <Route path="/about" element={<ListAboutManagement />} />
        <Route path="/about/create" element={<ListAboutManagement />} />
        <Route path="/about/update" element={<ListAboutManagement />} />
        <Route path="/experiance" element={<ListExperiance/>} />
        <Route path="/experiance/create" element={<CreateExperiance />} />
        <Route path="/experiance/update" element={<CmsDashboard />} />
        <Route path="/contact" element={<ListContact />} />
      </Route>
    </Routes>
  </>
);

export default CmsRoutes;