import { Route, Routes } from "react-router";
import { Task4 } from "../components/Task4";
import { Authorization } from "../components/Authorization";
import React from "react";

export const MenuRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path=":pageId?" element={<Task4 />} />
      <Route path="authorization/*" element={<Authorization />} />
    </Routes>
  );
};
