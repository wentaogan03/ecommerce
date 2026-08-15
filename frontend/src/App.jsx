import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage, {Action as LoginAction} from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import MainLayout from "./pages/MainLayout";
import RegisterPage from "./pages/Register";

const router = createBrowserRouter([
  { 
    path: "/", element: <MainLayout />, children: [
      { index: true, element: <DashboardPage /> },
      { path: "login", element: <LoginPage />, action: LoginAction },
      { path: "register", element: <RegisterPage /> },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
