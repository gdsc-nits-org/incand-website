import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import { Loader, Navbar, ScrollToTop } from "./Components";

// Pages
import { Home, Sponsors, Events } from "./Pages";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);

    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsors" element={<Sponsors />} />
          {/* <Route path="/team" element={<Team />} /> */}
          <Route path="/events" element={<Events />} />
        </Routes>
      </ScrollToTop>
    </>
  );
};

export default App;
