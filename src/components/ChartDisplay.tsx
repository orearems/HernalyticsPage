import React from "react";
import { genderCount, zones } from "../data";
import "./styles/ChartDisplay.css";

function ChartDisplay() {
  return (
    <div className="chartDisplay">
      <div className="pieChart__container">
        <img src="/donut_chart.png" alt="donutchart" />
      </div>
      <div className="map__container">
        <div className="map__image">
          <p>CANDIDATES BY GEOPOLITICAL ZONES</p>
          <img src="/ng 1.png" alt="" />
        </div>
        <div className="legends">
          {zones.map((zone, i) => {
            return (
              <div key={i}>
                <div className="legend">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "27px",
                      gap: "2px",
                    }}
                  >
                    <div
                      className="box"
                      style={{ background: zone.colorCode }}
                    ></div>
                    <p>{zone.name}</p>
                  </div>

                  <p className="legend_count">3000</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="stats__container">
        <div className="stat">
          <h4 className="statTitle">Total Elected Members</h4>
          <p>
            {genderCount
              .reduce((i, gender) => {
                return gender.count + i;
              }, 0)
              .toLocaleString()}
          </p>
        </div>
        {genderCount.map((gender, i) => {
          return (
            <div key={i} className="stat">
              <h4 className="statTitle">
                {gender.gender} <img src={gender.imgPath} alt="" />
              </h4>
              <p>{gender.count.toLocaleString()}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChartDisplay;
