import React from "react";
import Slider from "react-slick";
import Card from "../components/Card";

function SliderBox({ data, year }) {
  if (data) {
    var cards = data.cards.map((cards) => {
      return <Card title={cards.headTitle} year={year} data={cards.list} />;
    });
  }
  return (
    <div className="slider-container">
      <div className="slider-box">
        <Slider
          settings={{
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
          }}
        >
          {cards}
        </Slider>
      </div>
    </div>
  );
}

export default SliderBox;
