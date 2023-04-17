import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Link,
  useLocation,
  Route,
  Routes
} from "react-router-dom";
import Elixir from "./pages/Elixir";
import ElixirQ from "./pages/ElixirQ";
import Home from "./pages/Home";
import "./style.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className={`App`}>
       
        <Content />
      </div>
    </BrowserRouter>
  );
}

function Content() {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Home/>} />
        <Route path="/elixir/:id" element={<ElixirQ />} />
        <Route path="/elixirq" element={<ElixirQ />} />
      </Routes>
    </div>
  );
}
