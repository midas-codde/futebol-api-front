import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./views/system/error-page";
import Root from "./views/root";
import Login from "./views/login";
import ProtectedRoute from "./utils/protected-router";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={<ProtectedRoute to={<Root />} redirectsTo={<Login />} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;