import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage, {Action as LoginAction} from "./pages/Login";
import DashboardPage from "./pages/Dashboard";

const router = createBrowserRouter([
  { path: "login", element: <LoginPage />, action: LoginAction },
  { path: "/", element: <DashboardPage /> }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
