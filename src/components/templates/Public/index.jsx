import { Outlet } from "react-router-dom";

const PublicHomeLayout = () => {
  return (
    <section>
      <main>
        <Outlet />
      </main>
    </section>
  );
};

export default PublicHomeLayout;
