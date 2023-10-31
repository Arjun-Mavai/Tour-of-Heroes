import React from "react";
import { heroes } from "../data";
import { Link } from "react-router-dom";

export default function HeroList() {
  return (
    <div
      style={{
        margin: "10px",
        display: "flex",
        flexWrap: "wrap",
        gap: "4px",
        fontFamily: "sans-serif",
        font: "24px",
        color: "whitesmoke",
        margin: "15px",
      }}
    >
      {/* <h1>Hero Details</h1> */}
      {heroes.map((hero) => (
        <div key={hero.id}>
          <button
            style={{
              border: "2px",
              border: "2px solid black",
              font: "bold",
            }}
          >
            <Link to={`/hero/${hero.id}`} key={hero.id}>
              {hero.name}
            </Link>
          </button>
        </div>
      ))}
    </div>
  );
}
