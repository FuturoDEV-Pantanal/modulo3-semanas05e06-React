import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Escolas from "./pages/escolas/Escolas";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Escolas />} />
        <Route path="/school" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
