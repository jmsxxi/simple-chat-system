import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RouteLayout from "./layouts/RouteLayout";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RouteLayout />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
  )
);
function App() {
  return (
    <div className="App">
      <header></header>

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
