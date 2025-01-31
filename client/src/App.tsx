import Homepages from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/home" element={<Homepages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
