import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { Player } from '@lottiefiles/react-lottie-player';

import routes from "./routes";
import { useState } from "react";

const router = createBrowserRouter(routes);

const App = () => {

  const [isLoading, setisLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setisLoading(false), 4000)
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove()
      }
    }
  }, []);
  return (
    <>
      {
        isLoading ? <>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Player loop autoplay src="/lottie/Incand.json" style={{ height: '300px', width: '300px' }} />
          </div>

        </> : <RouterProvider router={router} />
      }
    </>
  );
};

export default App;
