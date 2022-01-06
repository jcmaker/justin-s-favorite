import React from "react";

function CardContent({ data }) {
  if (data) {
    var list = data.map((lists) => {
      return (
        <div className="content-box">
          <h3
            className="content-box-title"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `${lists.link}`;
            }}
          >
            {lists.title}
          </h3>
          <span className="content-box-span">{lists.desc}</span>
        </div>
      );
    });
  }
  return <div className="card-content">{list}</div>;
}

export default CardContent;
