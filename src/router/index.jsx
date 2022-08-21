import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, TaskOne, TaskTwo } from "../views";

function router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/one"
        element={
          <TaskOne
            {...{ arr1: [115, 18, 17, 22, 180, 713, 1024, 817, 3, 88], k: 4 }}
          />
        }
      />

      <Route path="/two" element={<TaskTwo />} />
    </Routes>
  );
}

export default router;
