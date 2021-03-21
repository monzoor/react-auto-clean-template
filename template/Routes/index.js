import React from "react";
import { Switch } from "react-router-dom";

import PublicType from "./types/publicType";
import publicRoutes from "./configs/publicConfig";

const Routes = () => {
  return (
    <Switch>
      {publicRoutes.map(({ path, component, exact = true }, key) => (
        <PublicType key={key} exact={exact} path={path} component={component} />
      ))}
    </Switch>
  );
};

export default Routes;
