import { Form, redirect, Link } from 'react-router-dom';
import { login} from '../utils/auth';

export async function Action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  await login(email, password);
}

export default function LoginPage() {
  return (
    <main className="d-flex justify-content-center min-vh-100">
      <Form className="w-25 m-auto" method="post" action="/login">
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
            <input
              name="email"
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              name="password"
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="btn btn-primary w-100 py-2 mt-4" type="submit">
            Sign in
          </button>
          <div className="text-center">
            <p className='mt-4'>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
            <p className='mt-0'>
                <Link to="/" className='text-danger'>Forgot Password?</Link>
            </p>
          </div>
        </Form>
    </main>
  );
};