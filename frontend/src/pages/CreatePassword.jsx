import { useSearchParams, Form, redirect } from "react-router-dom";
import axios from "../utils/axios";

const CreatePasswordPage = () => {
  const [searchParams] = useSearchParams();
  const uid = searchParams.get("uid");
  const resetToken = searchParams.get("reset_token");
  return (
    <main className="d-flex align-items-center min-vh-100">
      <div className="container">
        <section className="">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-5 col-md-8">
              <div className="card rounded-5">
                <div className="card-body p-4">
                  <h3 className="text-center">Create New Password</h3>
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="pills-login"
                      role="tabpanel"
                      aria-labelledby="tab-login"
                    >
                      <Form
                        action={`?reset_token=${resetToken}&uid=${uid}`}
                        method="put"
                      >
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="password">
                            Enter New Password
                          </label>
                          <input
                            type="password"
                            id="password"
                            required
                            name="password"
                            className="form-control"
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="password2">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            id="password2"
                            required
                            name="password2"
                            className="form-control"
                          />
                        </div>
                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-primary w-100"
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
        </section>
      </div>
    </main>
  );
};

export default CreatePasswordPage;

export const Action = async ({ request }) => {
  const formData = await request.formData();
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const password = formData.get("password");
  const password2 = formData.get("password2");
  const uid = searchParams.get("uid");
  const reset_token = searchParams.get("reset_token");
  if (password != password2) return alert("Password not match");
  try {
    const response = await axios.put("/user/password-change/", {
      password,
      password2,
      uid,
      reset_token,
    });
    return alert(response.data.message);
  } catch (error) {
    return alert(error.response.data.message);
  }
};
