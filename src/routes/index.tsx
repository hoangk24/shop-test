import AppLayout from "layouts";
import { Route, Routes as RouteWrapper } from "react-router-dom";
import { ROUTE } from "./routes";

export default function Routes() {
  return (
    <RouteWrapper>
      {Object.values(ROUTE).map((route, index) =>
        route.hasLayout ? (
          <Route key={index} element={<AppLayout />}>
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          </Route>
        ) : (
          <Route key={index} path={route.path} element={<route.component />} />
        )
      )}
    </RouteWrapper>
  );
}
