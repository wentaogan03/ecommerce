import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/Login";

const router = createBrowserRouter([{ path: "login", element: <LoginPage /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
