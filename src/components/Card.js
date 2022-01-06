import React from "react";
import CardContent from "./CardContent";

function Card({ title, year, data }) {
  return (
    <div className="card">
      <h2 className="card-title">
        Justin's Favorite {title} of {year}
      </h2>
      <CardContent data={data} />
    </div>
  );
}

export default Card;
