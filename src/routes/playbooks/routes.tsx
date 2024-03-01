import { RouteObject } from "react-router-dom";
import Playbooks from "./Playbooks";

export const playbooksRoutes: RouteObject[] = [
  {
    path: "playbooks",
    element: <Playbooks />,
  },
];
