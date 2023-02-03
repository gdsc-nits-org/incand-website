import { Navbar } from "./Components";
import { Home, Sponsors } from "./Pages";

const routes = [
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/sponsors",
    element: (
      <>
        <Navbar />
        <Sponsors />
      </>
    ),
  },
];

export default routes;
