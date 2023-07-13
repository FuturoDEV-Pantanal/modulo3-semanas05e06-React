import { BrowserRouter, Routes, Route } from "react-router-dom";
import Escolas from "./pages/escolas/Escolas";
import Login from "./pages/login/Login";
import NotFound from "./pages/notfound/NotFound";
import Contador from "./pages/contador/Contador";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Escolas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contador" element={<Contador />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
