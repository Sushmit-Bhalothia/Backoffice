// import { Dialog } from "@headlessui/react";
import { lazy, Suspense } from "react";
import { Outlet, useRoutes, BrowserRouter } from "react-router-dom";

import Footer from "./footer";
import Navbar from "./Navbar";
import SignIn from "../screens/Signin";
import ForgotPassword from "../screens/forgotpassword";
// import Page404Screen from "../screens/404";

const Loading = () => <p>Loading...</p>;
const Page404Screen = lazy(() => import("../screens/404"));
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
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <SignIn />,
        },
        {
          path: "/forgotPassord",
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
