import React, { useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Component/superheros";
import RQSuperHeros from "../Component/superheros/RQSuperHeros";
import SuperHeros from "../Component/superheros/SuperHeros";
import TestRQ from "../Component/Home";
import NavBar from "../Component/Nav";

const routes = () => {
  return (
    <div className=" min-w-full min-h-screen relative m-0 p-0">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/normal-superheros" element={<SuperHeros />} />
        <Route path="/rq-superheros" element={<RQSuperHeros />} />
        <Route path="/test" element={<TestRQ />} />
      </Routes>
    </div>
  );
};

export default routes;
