import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <main className="min-vh-100 align-items-center d-flex">
      <div className="container">
        <section className="">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-5 col-md-8">
              <div className="card rounded-5">
                <div className="card-body p-4">
                  <h3 className="text-center">Register Account</h3>
                  <br />
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="pills-login"
                      role="tabpanel"
                      aria-labelledby="tab-login"
                    >
                      <form>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="username">
                            Username
                          </label>
                          <input
                            type="text"
                            id="username"
                            placeholder="Username"
                            required
                            className="form-control"
                            name="username"
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="email">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            placeholder="Email Address"
                            required
                            className="form-control"
                            name="email"
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="phone">
                            Mobile Number
                          </label>
                          <input
                            type="text"
                            id="phone"
                            placeholder="Mobile Number"
                            required
                            className="form-control"
                            name="phone"
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                          <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            className="form-control"
                            name="password"
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="confirm-password">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            id="confirm-password"
                            placeholder="Confirm Password"
                            required
                            className="form-control"
                            name="password2"
                          />
                        </div>
                        <button className="btn btn-primary w-100" type="submit">
                          <span className="mr-2">Sign Up</span>
                          <i className="fas fa-user-plus" />
                        </button>
                        <div className="text-center">
                          <p className="mt-4">
                            Already have an account?{" "}
                            <Link to="/login">Login</Link>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default RegisterPage;
