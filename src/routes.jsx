import { Home } from "./Pages";
import { Sponsors } from "./Pages";
import { Team } from "./Pages"

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
    path: "/team",
    element: <Team />,
  }
];

export default routes;
