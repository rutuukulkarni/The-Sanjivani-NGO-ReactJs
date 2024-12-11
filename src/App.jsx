import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
// import SignUp from "./pages/SignUp";
import Admin from "./pages/Admin";
import StickyButton from "./components/StickyButton";
import Gallery from "./pages/Gallery";

// Import the AudioPlayer component
import AudioPlayer from "./components/AudioPlayer";

export default function App() {
  return (
    <BrowserRouter>
      {/* Place the AudioPlayer and StickyButton here so they appear on every page */}
      <AudioPlayer /> 
      <StickyButton />
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/event" element={<Events />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/donate" element={<Donate />} />
        {/* <Route exact path="/signup" element={<SignUp />} /> */}
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}
