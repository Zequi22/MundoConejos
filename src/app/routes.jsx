import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import BreedsPage from "./pages/BreedsPage";
import NutritionPage from "./pages/NutritionPage";
import CarePage from "./pages/CarePage";
import HealthPage from "./pages/HealthPage";
import FAQPage from "./pages/FAQPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "razas", Component: BreedsPage },
      { path: "alimentacion", Component: NutritionPage },
      { path: "cuidados", Component: CarePage },
      { path: "salud", Component: HealthPage },
      { path: "faq", Component: FAQPage },
    ],
  },
]);
