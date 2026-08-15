import { Outlet } from "react-router-dom";
import PublicHeader from "../components/PublicHeader";

const MainLayout = () => {
  return (
    <div>
      <PublicHeader />
      <main>
        <Outlet />
      </main>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-body-secondary">
              © 2025 Company, Inc
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
