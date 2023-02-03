import { Navbar } from "./Components";
import { Home, Sponsors, Gallery } from "./Pages";

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
  {
    path: "/gallery",
    element: (
      <>
        <Navbar />
        <Gallery />
      </>
    ),
  },
];

export default routes;
