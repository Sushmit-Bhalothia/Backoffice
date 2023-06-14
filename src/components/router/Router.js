// import { Dialog } from "@headlessui/react";
import { lazy, Suspense } from "react";
import Right1 from "../auth/Right1";

import EmailSent from "../auth/EmailSent";
import "../../css/index.css";
import {
  Outlet,
  useRoutes,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";

import Left from "./logo";
import Footer from "./footer";
import Navbar from "./Navbar";
import SignIn from "../auth/Signin";
import ForgotPassword from "../auth/forgotpassword";
import Home from "../screens/main";
const Loading = () => <p>Loading...</p>;
const Page404Screen = lazy(() => import("./404"));
const PrivateRoute = ({ path, element: Element, isAuthenticated }) => {
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/sign-in");
    return SignIn;
    // return <Redirect to="/auth-sign-in" />;
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
function Layout2() {
  return (
    <div className="Backoffice_Log-in">
      <Left />
      <Outlet />
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
  const isAuthenticated = false;
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
          path: "/email-sent",
          element: <EmailSent />,
        },

        {
          path: "*",
          element: <Page404Screen />,
        },
      ],
    },
    {
      path: "/auth",
      element: <Layout2 />,
      children: [
        {
          path: "/auth/sign-in",
          element: <Right1 />,
        },
        // {
        //   path: "/auth/forgot-password",
        //   element: <Right2 />,
        // },
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
