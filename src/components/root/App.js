import { useState, GlobalStateContext, DispatchStateContext } from "react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "../auth/Signin";
import ForgotPassword from "../auth/forgotpassword";
import EmailSent from "../auth/EmailSent";
import SetUpProfile from "../onboarding/SetupProfile";
import SocialMedia from "../onboarding/socialMeadia";
import Success from "../onboarding/Success";
import Welcome from "../onboarding/Welcome";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/footer";
import Main from "../screens/main";
import Snapshot1 from "../screens/Snapshot/snapshot-1";
import Snapshot2 from "../screens/Snapshot/snapshot-2";
import Snapshot3 from "../screens/Snapshot/snapshot-3";
import Snapshot4 from "../screens/Snapshot/snap-shot-4";
import Snapshot5 from "../screens/Snapshot/snapshot-5";
import Hot100_1 from "../screens/Hot100/hot100-1";
import Hot100_2 from "../screens/Hot100/hot100-2";
import Hot100_3 from "../screens/Hot100/hot100-3";
import Hot100_4 from "../screens/Hot100/hot100-4";

import Hot100 from "../screens/Hot100/hot100";
import Social from "../screens/Social";
import HallFame from "../screens/Hall-of-fame/HallOfFame";
import Analtics from "../screens/analytic";
import Protected from "../sharedComponents/protected";
import ScreeNotFound from "../sharedComponents/404";
import Embed from "../screens/embed";
import SnapshotSideNav from "../Navbar/optionalsidebar";
import Hot100_Sidebar from "../Navbar/hot100_sidebar";
import { FilterProvider } from "../contexts/FilterContext";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);

  const signin = () => {
    setIsSignedIn(true);
  };

  const signout = () => {
    setIsSignedIn(false);
  };

  return (
    //
    <FilterProvider>
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
                  <Navbar />
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
                      path="/snapshot/*"
                      element={
                        <>
                          <Protected isSignedIn={isSignedIn}>
                            <div className="outer">
                              <SnapshotSideNav />
                              <Routes>
                                <Route
                                  path="/1"
                                  element={
                                    <Protected isSignedIn={isSignedIn}>
                                      <Snapshot1 />
                                    </Protected>
                                  }
                                />
                                <Route
                                  path="/2"
                                  element={
                                    <Protected isSignedIn={isSignedIn}>
                                      <Snapshot2 />
                                    </Protected>
                                  }
                                />
                                <Route
                                  path="/3"
                                  element={
                                    <Protected isSignedIn={isSignedIn}>
                                      <Snapshot3 />
                                    </Protected>
                                  }
                                />
                                <Route
                                  path="/4"
                                  element={
                                    <Protected isSignedIn={isSignedIn}>
                                      <Snapshot4 />
                                    </Protected>
                                  }
                                />
                                <Route
                                  path="/5"
                                  element={
                                    <Protected isSignedIn={isSignedIn}>
                                      <Snapshot5 />
                                    </Protected>
                                  }
                                />
                              </Routes>
                            </div>
                          </Protected>
                        </>
                      }
                    />
                    <Route
                      path="/hot-100/*"
                      element={
                        <>
                          <Protected isSignedIn={isSignedIn}>
                            <div className="outer">
                              <Hot100_Sidebar />
                              <Routes>
                                <Route
                                  path="/1"
                                  element={
                                    <Protected isSignedIn={isSignedIn}>
                                      <Hot100_1 />
                                    </Protected>
                                  }
                                />
                                <Route
                                  path="/2"
                                  element={
                                    <Protected isSignedIn={isSignedIn}>
                                      <Hot100_2 />
                                    </Protected>
                                  }
                                />
                                <Route
                                  path="/3"
                                  element={
                                    <Protected isSignedIn={isSignedIn}>
                                      <Hot100_3 />
                                    </Protected>
                                  }
                                />
                                <Route
                                  path="/4"
                                  element={
                                    <Protected isSignedIn={isSignedIn}>
                                      <Hot100_4 />
                                    </Protected>
                                  }
                                />
                              </Routes>
                            </div>
                          </Protected>
                        </>
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
                        <Protected isSignedIn={isSignedIn}>
                          <ScreeNotFound />
                        </Protected>
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
    </FilterProvider>
    //
  );
}

export default App;
