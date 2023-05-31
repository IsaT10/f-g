import React, { createContext } from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

export const ServicesContext = createContext();
const Main = () => {
  const services = useLoaderData();
  return (
    <ServicesContext.Provider value={services}>
      <Navbar />
      <Outlet />
      <Footer />
    </ServicesContext.Provider>
  );
};

export default Main;
