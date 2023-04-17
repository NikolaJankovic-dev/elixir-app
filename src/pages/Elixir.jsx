import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import style from "./Elixir.module.css";

const Elixir = () => {
  const params = useParams();

  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:1337/api/items/${params.id}`).then((res) => {
      setItem(res.data.data);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div className={style.elixir}>
        <img src={"item.attributes.image"} alt="elixir" />
        <div className={style.table}>
          <div>NAZIV</div>
                  <div>{item.attributes && item.attributes.name}</div>
          <div>TIP SIROVINE</div>
          <div>ALTERNATIVNA SIROVINA</div>
          <div>ALTERNATIVA ZA</div>
          <div>
                      Sumpornu kiselinu <br/>

                      Fosfornu kiselinu
          </div>
          <div>POREKLO I KARAKTERISTIKE</div>
                  <div>
                      Nastaje u automobilskoj industriji
                      <br />
                      <br />
                      Smesam sumporne i fosforne kiseline....
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elixir;
