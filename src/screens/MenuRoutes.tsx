import { Route, Routes } from "react-router";
import { Task3 } from "../task3/components/Task3";
import { Task4Queries } from "../task4/components/Task4Queries";
import { Task5 } from "../task5/components/Task5";
import React from "react";
import { Task6 } from "../task6/components/Task6";
import {Task7} from "../task7/components/Task7";

export const MenuRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/task3/*" element={<Task3 />} />
      <Route path="/task4/*" element={<Task4Queries />} />
      <Route path="/task5" element={<Task5 />} />
      <Route path="/task6" element={<Task6 />} />
      <Route path="/task7" element={<Task7 />} />
    </Routes>
  );
};
