import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "../auth/Signin";
import ForgotPassword from "../auth/forgotpassword";
import EmailSent from "../auth/EmailSent";
import SetUpProfile from "../onboarding/SetupProfile";
import SocialMedia from "../onboarding/socialMeadia";
import Success from "../onboarding/Success";
import Welcome from "../onboarding/Welcome";
import Header from "../router/Navbar";
import Footer from "../router/footer";
import Main from "../screens/main";
import Snapshot from "../screens/snapshot";
import Hot100 from "../screens/hot100";
import Social from "../screens/Social";
import HallFame from "../screens/HallOfFame";
import Analtics from "../screens/analytic";
import Protected from "../protected";
import ScreeNotFound from "../router/404";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);

  const signin = () => {
    setIsSignedIn(true);
  };

  const signout = () => {
    setIsSignedIn(false);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/email-sent" element={<EmailSent />} />
          <Route path="/setup-profile" element={<SetUpProfile />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/success" element={<Success />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Protected isSignedIn={isSignedIn}>
                        <Main />
                      </Protected>
                    }
                  />
                  <Route
                    path="/snapshot"
                    element={
                      <Protected isSignedIn={isSignedIn}>
                        <Snapshot />
                      </Protected>
                    }
                  />
                  <Route
                    path="/hot-100"
                    element={
                      <Protected isSignedIn={isSignedIn}>
                        <Hot100 />
                      </Protected>
                    }
                  />
                  <Route
                    path="/analytics"
                    element={
                      <Protected isSignedIn={isSignedIn}>
                        <Analtics />
                      </Protected>
                    }
                  />
                  <Route
                    path="/hall-of-fame"
                    element={
                      <Protected isSignedIn={isSignedIn}>
                        <HallFame />
                      </Protected>
                    }
                  />
                  <Route
                    path="/social"
                    element={
                      <Protected isSignedIn={isSignedIn}>
                        <Social />
                      </Protected>
                    }
                  />
                  <Route
                    path="/*"
                    element={
                      // <Protected isSignedIn={isSignedIn}>
                      <ScreeNotFound />
                      //</Protected>
                    }
                  />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
