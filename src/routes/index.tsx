import React, { useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Component/superheros";
import RQSuperHeros from "../Component/superheros/RQSuperHeros";
import SuperHeros from "../Component/superheros/SuperHeros";
import TestRQ from "../Component/Home";
import NavBar from "../Component/Nav";
import PersonalDetails from "../Component/superheros/PersonalDetails";
import ParallelData from "../Component/superheros/ParallelData";

const routes = () => {
  return (
    <div className=" min-w-full min-h-screen relative m-0 p-0">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/normal-superheros" element={<SuperHeros />} />
        <Route path="/rq-superheros" element={<RQSuperHeros />} />
        <Route path="/test" element={<TestRQ />} />
        <Route path="/hero/:id" element={<PersonalDetails />} />
        <Route path="/parallel-route" element={<ParallelData />} />
      </Routes>
    </div>
  );
};

export default routes;
