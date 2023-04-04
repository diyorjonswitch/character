import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ApiGet from "./Components/ApiGet";
import Login from "./Components/Login";
import Containers from "./Components/Containers";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/diracter" element={<Containers/>} />
        <Route path="/location" element={<Navbar />} />
        <Route path="/episode" element={<ApiGet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
