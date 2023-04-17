import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:1337/api/items").then((res) => {
      setData(res.data.data);
    });
  }, []);
  return (
    <div className={style.home}>
      {data.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
              padding: "20px",
            //   margin: "100px",
              cursor: "pointer",
            }}
            onPointerDown={() => {
              navigate(`/elixir/${item.id}`);
            }}
          >
            <h1>{item.attributes.name}</h1>
            <p>{item.attributes.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
