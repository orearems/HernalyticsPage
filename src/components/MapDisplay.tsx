import React, { useEffect, useState } from "react";
import { parties } from "../data";
import "./styles/MapDisplay.css";

function MapDisplay() {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  return (
    <div className="mapDisplay">
      <img src="/big_ng_map.png" alt="nigeria map" className="map" />
      <div
        className="hoverArea"
        onMouseEnter={() => {
          setShowDetails(true);
        }}
        onMouseLeave={() => {
          setShowDetails(false);
        }}
      >
        <div className={showDetails ? "mapPopulation" : "hide"}>
          <div className="title">
            <p style={{ color: "#57656b" }}>VOTE COUNT</p>
            <p style={{ color: "#e5b805" }}>SEE FULL LIST</p>
          </div>
          <div className="candidates">
            <div className="candidate">
              <p>Bola Ahmed Tinubu</p>
              <p>Peter Obi</p>
              <p>Atiku Abubakar</p>
            </div>
            <div className="party">
              <p>APC</p>
              <p>LP</p>
              <p>PDP</p>
            </div>
            <div className="votes">
              <p>13,000,000</p>
              <p>12,083,991</p>
              <p>2,083,991</p>
            </div>
          </div>
        </div>
      </div>
      <div className="map__controls">
        <div className="map__btn">
          <img src="/plus.png" alt="" />
        </div>
        <div className="map__btn">
          <img src="/minus.png" alt="" />
        </div>
      </div>

      <div className="map__legends">
        {parties.map((party: { name: string; colorCode: string }, i) => {
          return <MapLegend key={i} party={party} />;
        })}
      </div>
    </div>
  );
}

const MapLegend = ({
  party,
}: {
  party: { name: string; colorCode: string };
}) => {
  return (
    <div className="map__legend">
      <div className="color__box" style={{ background: party.colorCode }}></div>
      <p>{party.name}</p>
    </div>
  );
};

export default MapDisplay;
