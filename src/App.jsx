import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Link,
  useLocation,
  Route,
  Routes,
  HashRouter
} from "react-router-dom";
import Elixir from "./pages/Elixir";
import ElixirQ from "./pages/ElixirQ";
import Item from "./pages/Item/Item";
import Home from "./pages/Home";
import "./style.css";
import Login from "./pages/Login/Login";

export default function App() {
  return (
    <HashRouter>
      <div className={`App`}>
       
        <Content />
      </div>
    </HashRouter>
  );
}

function Content() {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [localStorage.token]);


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
      style={{overflow: "hidden", minHeight: "100vh"}}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Home loggedIn={loggedIn}/>} />
        <Route path="/item/:id" element={<Item  loggedIn={loggedIn}/>} />
        <Route path="/elixirq/:id" element={<ElixirQ />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}
