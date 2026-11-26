import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Analyze from "./pages/Analyze";
import History from "./pages/History";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
      />
      <Route
        path="/analyze"
        element={<ProtectedRoute><Analyze /></ProtectedRoute>}
      />
      <Route
        path="/history"
        element={<ProtectedRoute><History /></ProtectedRoute>}
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
