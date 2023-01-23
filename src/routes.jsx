import { Home } from "./Pages";
import { Sponsors } from "./Pages";
import { Events } from "./Pages";

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
    path: "/events",
    element: <Events />,
  },
];

export default routes;
