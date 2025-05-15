import { Routes, Route } from "react-router-dom";
import CmsLayout from "../components/templates/Cms";
import CmsDashboard from "../components/pages/Cms/CmsDashboard";
import ListHeroManagement from "../components/pages/Cms/Hero/List";
import ListAboutManagement from "../components/pages/Cms/About/List";
import ListExperiance from "../components/pages/Cms/Experiance/List";
import ListContact from "../components/pages/Cms/Contact/List";
import CreateExperiance from "../components/pages/Cms/Experiance/Create";
import CreateAboutManagement from "../components/pages/Cms/About/Create";
import CreateHeroManagement from "../components/pages/Cms/Hero/Create";
import ProtectedRoute from "../components/pages/Cms/Protected";
import UpdateHero from "../components/pages/Cms/Hero/Update";
import UpdateAboutManagement from "../components/pages/Cms/About/Update";

const CmsRoutes = () => (
  <>
    <Routes>
      <Route element={
        <ProtectedRoute>
          <CmsLayout />
        </ProtectedRoute>
      }>
        <Route path="/dashboard" element={<CmsDashboard />} />
        <Route path="/hero" element={<ListHeroManagement />} />
        <Route path="/hero/create" element={<CreateHeroManagement />} />
        <Route path="/hero/update/:id" element={<UpdateHero />} />
        <Route path="/about" element={<ListAboutManagement />} />
        <Route path="/about/create" element={<CreateAboutManagement />} />
        <Route path="/about/update/:id" element={<UpdateAboutManagement />} />
        <Route path="/experiance" element={<ListExperiance/>} />
        <Route path="/experiance/create" element={<CreateExperiance />} />
        <Route path="/experiance/update" element={<CmsDashboard />} />
        <Route path="/contact" element={<ListContact />} />
      </Route>
    </Routes>
  </>
);

export default CmsRoutes;