import PublicHomePage from "../../../organisms/PublicHomePage";
import PublicNavbarPage from "../../../organisms/PublicNavbarPage";
import PublicAboutPage from "../../../organisms/PublicAboutPage";
import PublicServicePage from "../../../organisms/PublicServicePage";
import PublicContactPage from "../../../organisms/PublicContactPage";
import PublicFooterPage from "../../../organisms/PublicFooterPage";


const Home = () => {
  return (
    <>
      <PublicNavbarPage />
      <PublicHomePage />
      <PublicAboutPage />
      <PublicServicePage />
      <PublicContactPage />
      <PublicFooterPage />
    </>
  );
};

export default Home;
