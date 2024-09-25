import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HeroPage } from "./pages/Hero";
import { AboutUs } from "./components/AboutUs";
import { About } from "./pages/About";

function App() {
  return (
    <div className="bg-[#208856]">
      <div className="fixed flex w-full bg-opacity-40">
      <Navbar />
      </div>
      <div className="h-20"></div>
      <HashRouter>
          <Routes>
            <Route path="/" element={<HeroPage />}/>
            <Route path="/about" element={<About />}/>
          </Routes>
      </HashRouter>
      </div>
    
  );
}

export default App;
