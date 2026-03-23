import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import BoafoWidgetInitializer from "./components/BoafoWidgetInitializer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);

  return (
    <>
      <BoafoWidgetInitializer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
