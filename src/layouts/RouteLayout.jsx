import React, { useState } from "react";

import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import { Outlet } from "react-router-dom";

function RouteLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {!isLoggedIn && <Login status={isLoggedIn} />}
      {isLoggedIn && <SignUp />}
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default RouteLayout;
