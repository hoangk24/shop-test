import { IRoutes } from "types/common";
import Home from "pages/Home/Home";
import NotFound from "pages/NotFound/NotFound";

export const ROUTE: IRoutes = {
  HOME: {
    path: "",
    component: Home,
    hasLayout: true,
  },
  NOTFOUND: {
    path: "*",
    component: NotFound,
  },
};
