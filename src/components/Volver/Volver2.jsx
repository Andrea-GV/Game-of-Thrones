import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Volver.css";

export default function Volver() {
  const [prevUrl, setPrevUrl] = useState("");

  useEffect(() => {
    const urlArray = window.location.pathname.split("/");
    urlArray.pop();
    const prevUrlArray = [...urlArray];
    const prevUrl = prevUrlArray.join("/");
    setPrevUrl(prevUrl);
  }, []);

  return (
    <div className="back-button">
      <Link to={"/"}>
        <button> ← Volver</button>
      </Link>
    </div>
  );
}
