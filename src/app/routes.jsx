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
    Component,
    children: [
      { index, Component },
      { path: "razas", Component },
      { path: "alimentacion", Component },
      { path: "cuidados", Component },
      { path: "salud", Component },
      { path: "faq", Component },
    ],
  },
]);



