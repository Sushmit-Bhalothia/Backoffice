// import { Dialog } from "@headlessui/react";
import { lazy, Suspense } from "react";
import {
  Outlet,
  useRoutes,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";

import Footer from "./footer";
import Navbar from "./Navbar";
import SignIn from "../screens/Signin";
import ForgotPassword from "../screens/forgotpassword";
import Home from "../screens/main";
const Loading = () => <p>Loading...</p>;
const Page404Screen = lazy(() => import("../screens/404"));
const PrivateRoute = ({ path, element: Element, isAuthenticated }) => {
  const navigate = useNavigate();

  if (!isAuthenticated && path === "/") {
    navigate("/signin");
    return null;
  }

  return Element;
};

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};

const InnerRouter = () => {
  const isAuthenticated = true;
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <PrivateRoute
              path="/"
              element={<Home />}
              isAuthenticated={isAuthenticated}
            />
          ),
        },
        {
          path: "/sign-in",
          element: <SignIn />,
        },
        {
          path: "/forgot-password",
          element: <ForgotPassword />,
        },

        {
          path: "*",
          element: <Page404Screen />,
        },
      ],
    },
  ];

  const element = useRoutes(routes);
  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  );
};
