import { Route, Routes } from "react-router-dom";
import { Home, Login } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/login" element={<Login />} />
    </Routes>
  );
}
