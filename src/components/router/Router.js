// import { Dialog } from "@headlessui/react";
import { lazy, Suspense } from "react";

import EmailSent from "../auth/EmailSent";
import "../../css/index.css";
import {
  Outlet,
  useRoutes,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";
import SetUpProfile from "../onboarding/SetupProfile";

import Success from "../onboarding/Success";
import Left from "./logo";
import Footer from "./footer";
import Navbar from "./Navbar";
import SignIn from "../auth/Signin";
import ForgotPassword from "../auth/forgotpassword";
import Home from "../screens/main";
import Welcome from "../onboarding/Welcome";
import SocialMedia from "../onboarding/socialMeadia";
import Sucess from "../onboarding/Success";
const Loading = () => <p>Loading...</p>;
const Page404Screen = lazy(() => import("./404"));
const PrivateRoute = ({ path, element: Element, isAuthenticated }) => {
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/sign-in");
    return SignIn;
    // return null;
    // rturn <Redirect to="/auth-sign-in" />;
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
          path: "/email-sent",
          element: <EmailSent />,
        },
        {
          path: "/Setup-Profile",
          element: <SetUpProfile />,
        },
        {
          path: "/welcome",
          element: <Welcome />,
        },
        {
          path: "/Social-Media",
          element: <SocialMedia />,
        },
        {
          path: "/success",
          element: <Success />,
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
