import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Donation from "./components/Donation/Donation";
import DonationDetails from "./components/DonationDetails/DonationDetails";
import Statistics from "./components/Statistics/Statistics";
import Error from "./components/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/donation",
        element: <Donation />,
        // loader: () => fetch("./donateCampioan.json"),
      },
      {
        path: "/donationDetails/:Id",
        element: <DonationDetails />,
        loader: () => fetch("./donateCampioan.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
