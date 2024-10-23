import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Navbar from "./componets/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/our-menu" element={<Menu />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
