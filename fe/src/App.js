import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Soal1 from "./page/Soal1";
import Soal2 from "./page/Soal2";
import Soal3 from "./page/Soal3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soal1" element={<Soal1 />} />
        <Route path="/soal2" element={<Soal2 />} />
        <Route path="/soal3" element={<Soal3 />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
