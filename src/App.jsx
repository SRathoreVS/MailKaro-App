import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Inbox from "./components/Inbox";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Mail from "./components/Mail";
import SendEmail from "./components/SendEmail";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="bg-[#f6f8fc] h-screen">
      <Navbar />
      <RouterProvider router={appRouter} />
      <div className="absolute w-[30%] bottom-0 right-20 z-10">
        <SendEmail />
      </div>
    </div>
  );
};

export default App;
