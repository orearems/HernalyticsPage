import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { electionData, positions, years } from "./data";
import Dropdown from "./components/Dropdown";
import MapDisplay from "./components/MapDisplay";
import ChartDisplay from "./components/ChartDisplay";
import Footer from "./components/Footer";

function App() {
  const [isElectData, setIsElectData] = useState<boolean>(false);
  const [isPosition, setIsPosition] = useState<boolean>(false);
  const [isYear, setIsYear] = useState<boolean>(false);
  const [electData, setElectData] = useState<string>(electionData[0]);
  const [position, setPosition] = useState<string>(positions[0]);
  const [year, setYear] = useState<string>(years[0]);
  return (
    <div className="App">
      <NavBar />
      <header className="body__header">
        <div className="header__details">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <h1>Post Election Data</h1>
            <div className="headerSelection">{`${position}\\${year}`}</div>
          </div>
          <p>
            <span className="colored__text">UPDATED</span> MAR. 15, 2021, 9:43
            A.M. EDT
          </p>
        </div>
        <div className="header__selects">
          <Dropdown
            isVisible={isElectData}
            setIsVisible={setIsElectData}
            data={electionData}
            placeholder={electData}
            setPlaceholder={setElectData}
          />
          <Dropdown
            isVisible={isPosition}
            setIsVisible={setIsPosition}
            data={positions}
            placeholder={position}
            setPlaceholder={setPosition}
          />
          <Dropdown
            isVisible={isYear}
            setIsVisible={setIsYear}
            data={years}
            placeholder={year}
            setPlaceholder={setYear}
          />
        </div>
      </header>
      <div className="app__body">
        <MapDisplay />
        <ChartDisplay />
        <Footer />
      </div>
    </div>
  );
}

export default App;
