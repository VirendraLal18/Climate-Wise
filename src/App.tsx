import { useState, ChangeEvent, useEffect } from "react";
import Search from "./Components/Search";
import "./App.css";
import { optionType, forecastType } from "./types";
import Forecast from "./Components/Forecast";
import useForecast from "./Hooks/UseForecast";
import HomepageImage from "./Components/homepageImage";

function App(): JSX.Element {
  const { place, options, forecast, onInputChange, onOptionSelect, onSearch } =
    useForecast();

  return (
    <main className=" flex justify-between items-center bg-gradient-to-b bg-bg3 h-[100vh] ">
      <Search
        place={place}
        onInputChange={onInputChange}
        options={options}
        onOptionSelect={onOptionSelect}
        onSearch={onSearch}
      />

      <div className="justify-end mx-auto w-auto items-center h-auto">
        {forecast ? (
          <Forecast forecast={forecast} />
        ) : (
          <div className="flex justify-center">
            <HomepageImage />
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
