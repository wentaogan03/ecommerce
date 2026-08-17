import { Form } from "react-router-dom";
import axios from "../utils/axios";

export async function Action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const response = await axios.get(`/user/reset-password/${email}/`);
  if(response.status === 200) return alert('reset password link has been sent to your email');
}

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
                          <Form
                            className="form-outline mb-4"
                            action="/forgot-password"
                            method="post"
                          >
                            <label className="form-label" htmlFor="email">
                              Email Address
                            </label>
                            <input
                              type="text"
                              id="email"
                              name="email"
                              className="form-control"
                            />
                            <div className="text-center">
                              <button
                                className="btn btn-primary w-100 mt-4"
                                type="submit"
                              >
                                Reset Password
                              </button>
                            </div>
                          </Form>
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