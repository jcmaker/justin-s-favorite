import React, { useState } from "react";
import SliderBox from "./SliderBox";

function YearRow({ data }) {
  const [thisYear, setThisYear] = useState();
  const [yearCard, setYearCard] = useState();

  if (data) {
    var years = data.years.map((years) => {
      return (
        <button
          className={thisYear === years.year ? "selected-years" : "years"}
          onClick={() => {
            setThisYear(years.year);
            setYearCard(years);
          }}
        >
          {years.year}
        </button>
      );
    });
  }

  console.log(thisYear);
  return (
    <div className="year-row">
      <div className="year-row-container">{years}</div>
      <SliderBox data={yearCard} year={thisYear} />
    </div>
  );
}

export default YearRow;
