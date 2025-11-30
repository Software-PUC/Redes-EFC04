import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage";
import Blueprint from "./pages/Blueprint";
import PhaseOne from "./pages/networking/PhaseOne";
import PhaseTwo from "./pages/networking/PhaseTwo";
import PhaseThree from "./pages/networking/PhaseThree";

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blueprint" element={<Blueprint />} />
        <Route path="/phases/lan" element={<PhaseOne />} />
        <Route path="/phases/networking" element={<PhaseTwo />} />
        <Route path="/phases/diagnostic" element={<PhaseThree />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppLayout>
  );
}
