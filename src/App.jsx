import { useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import { Loader } from "./Components";

// Pages
const Home = lazy(() => import("./Pages/Home/Home"));
const Sponsors = lazy(() => import("./Pages/Sponsors/Sponsors"));

const App = () => {
  useEffect(() => {
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
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sponsors" element={<Sponsors />} />
      </Routes>
    </Suspense>
  );
};

export default App;
