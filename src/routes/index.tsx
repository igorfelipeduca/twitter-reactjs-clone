import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages";
import MainLayout from "../pages/layout/mainLayout";

const routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
