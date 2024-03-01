import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root/Root";
import { playbooksRoutes } from "./routes/playbooks/routes";
import AuthProvider from "./components/AuthProvider/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [...playbooksRoutes],
  },
]);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />;
    </AuthProvider>
  );
}
