import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { MainLayout } from "../Layout/Main-layout";
import { CardDetail } from "../pages/CardDetail";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home/detail/:id" element={<CardDetail />} />
        </Route>
      </Routes>
    </>
  );
};
