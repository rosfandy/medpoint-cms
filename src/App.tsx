import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
