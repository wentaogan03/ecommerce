import { NavLink, Link } from "react-router-dom";

const AuthenticatedHeader = () => {
  return (
    <header className="p-3 mb-3 border-bottom fixed-top">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto justify-content-center mb-2 mb-md-0">
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
          </ul>
          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
          <div className="dropdown text-end">
            <NavLink
              to="#"
              className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </NavLink>
            <ul className="dropdown-menu text-small">
              <li>
                <Link className="dropdown-item" to="">
                  Settings
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="">
                  Profile
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="">
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AuthenticatedHeader;
