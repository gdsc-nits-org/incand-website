import { Home, Sponsors, Gallery } from "./Pages";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sponsors",
    element: <Sponsors />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
];

export default routes;
