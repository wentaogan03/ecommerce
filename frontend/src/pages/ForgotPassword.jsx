const ForgotPasswordPage = () => {
  return (
    <section>
      <main className="">
        <div className="container">
          <section className="">
            <div className="row d-flex justify-content-center">
              <div className="col-xl-5 col-md-8">
                <div className="card rounded-5">
                  <div className="card-body p-4">
                    <h3 className="text-center">Forgot Password</h3>
                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="pills-login"
                        role="tabpanel"
                        aria-labelledby="tab-login"
                      >
                        <div>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="email">
                              Email Address
                            </label>
                            <input
                              type="text"
                              id="email"
                              name="email"
                              className="form-control"
                            />
                          </div>
                          <div className="text-center">
                            <button className="btn btn-primary w-100">
                              Reset Password
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </section>
  );
};

export default ForgotPasswordPage;