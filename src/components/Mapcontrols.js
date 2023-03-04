import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { resultLegend } from "./data";

const Mapcontrols = () => {
  return (
    <div className="relative">
      <div className="block m-10">
        <button className="rounded-t-md block bg-slate-300 p-3 mb-2">
          <FaPlus />
        </button>
        <button className="rounded-b-md block bg-slate-300 p-3">
          <FaMinus />
        </button>
      </div>

      <div className="absolute bottom-0">
        {resultLegend.map((result) => (
          <div className="flex" key={result.name}>
            <div className={result.color}></div>
            <p className="uppercase ml-4 text-color">{result.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mapcontrols;
