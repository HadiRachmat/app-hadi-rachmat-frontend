import PublicHomePage from "../../../organisms/PublicHomePage";
import PublicNavbarPage from "../../../organisms/PublicNavbarPage";
import PublicAboutPage from "../../../organisms/PublicAboutPage";
import PublicServicePage from "../../../organisms/PublicServicesPage";
import PublicFavoritTools from "../../../organisms/PublicToolPage";
import PublicContactPage from "../../../organisms/PublicContactPage";
import PublicFooterPage from "../../../organisms/PublicFooterPage";
import PublicEducationPage from "../../../organisms/PublicEducationPage";

const Home = () => {
  return (
    <>
      <PublicNavbarPage />
      <PublicHomePage />
      <PublicServicePage />
      <PublicAboutPage />
      <PublicFavoritTools />
      <PublicEducationPage/>
      <PublicContactPage />
      <PublicFooterPage />
    </>
  );
};

export default Home;
