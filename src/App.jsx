import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";

import { Navbar } from "./Components";

import routes from "./routes";

const router = createBrowserRouter(routes);

const App = () => {
  useEffect(()=>{
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if(threeScript){
        threeScript.remove()
      }
    }
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
