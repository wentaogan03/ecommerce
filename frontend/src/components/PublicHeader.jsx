import { NavLink } from "react-router-dom";

const PublicHeader = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "nav-link px-2 link-secondary"
                  : "nav-link px-2 link-body-emphasis"
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive
                  ? "nav-link px-2 link-secondary"
                  : "nav-link px-2 link-body-emphasis"
              }
            >
              Link 1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive
                  ? "nav-link px-2 link-secondary"
                  : "nav-link px-2 link-body-emphasis"
              }
            >
              Link 2
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive
                  ? "nav-link px-2 link-secondary"
                  : "nav-link px-2 link-body-emphasis"
              }
            >
              Link 3
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive
                  ? "nav-link px-2 link-secondary"
                  : "nav-link px-2 link-body-emphasis"
              }
            >
              Link 4
            </NavLink>
          </li>
        </ul>
        <div className="col-md-3 text-end">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "nav-link px-2 link-secondary"
                : "nav-link px-2 link-body-emphasis"
            }
          >
            Login
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default PublicHeader;
