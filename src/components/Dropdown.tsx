import React from "react";
import "../App.css";

function Dropdown({
  isVisible,
  setIsVisible,
  data,
  placeholder,
  setPlaceholder,
}: {
  isVisible: boolean;
  setIsVisible: (val: boolean) => void;
  data: string[];
  placeholder: string;
  setPlaceholder: (val: string) => void;
}) {
  return (
    <div className="headerSelects__container">
      <div
        className="headerSelect"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        <p>{placeholder}</p>
        <img src="/dropdown.png" alt="" />
      </div>
      <div className={isVisible ? "select__list" : "hide"}>
        {data.map((data, i) => {
          return (
            <div
              key={i}
              className="select__listItem"
              style={i === data.length - 1 ? { borderBottom: "none" } : {}}
              onClick={() => {
                setPlaceholder(data);
                setIsVisible(!isVisible);
              }}
            >
              {data}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;
