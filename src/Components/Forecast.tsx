import React from "react";
import { forecastType } from "../types";
import Degree from "./Degree";
import Sunrise from "./Icons/sunrise";
import Sunset from "./Icons/sunset";
import {
  getSunTime,
  getWindDirection,
  getHumidityInfo,
  getPop,
  getPressureInfo,
  getVisibilityValue,
} from "../helpers/helper";
import Widgets from "./widgets";
import '../App.css'

type props = {
  forecast: forecastType;
};

function Forecast({ forecast }: props): JSX.Element {
  const today = forecast.list[0];

  return (
    <>
      <div className="h-full min-w-[800px] rounded-md drop-shadow-lg flex flex-col justify-center items-center">
        <div className="flex flex-col items-center mx-auto my-4">
          <h1 className="font-bold text-white text-5xl mx-auto ">
            {forecast.name}{" "}
            <span className="font-thin">,{forecast.country}</span>
          </h1>
          <h1 className="font-extrabold text-white text-6xl">
            <Degree temp={Math.round(today.main.temp)} />
          </h1>
          <p className="text-sm text-white">
            {today.weather[0].main} {today.weather[0].description}
          </p>
          <p className="text-md text-white">
            Highest: {Math.ceil(today.main.temp_max)} Lowest:{" "}
            {Math.floor(today.main.temp_min)}
          </p>
        </div>

        <section className="flex gap-4 overflow-x-scroll no-scrollbar mt-4 max-w-3xl">
          {forecast.list.map((item, i) => {
            return (
              <>
                <div
                  key={i}
                  className="inline-block text-center mb-3 py-2 bg-white bg-opacity-40 drop-shadow-lg h-[150px] w-[100px] rounded-lg flex-shrink-0 hover:py-0 hover:bg-zinc-400"
                >
                  <p className="text-sm text-white">
                    {i === 0 ? "Now" : new Date(item.dt * 1000).getHours()}
                  </p>
                  <img
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt={`weather-icon-${item.weather[0].description}`}
                  />
                  <p className="text-sm text-white font-semibold">
                    {<Degree temp={Math.round(item.main.temp)} />}
                  </p>
                </div>
              </>
            );
          })}
        </section>

        <section className="flex gap-x-10 justify-between my-10 items-center">
          <div className="bg-white bg-opacity-40 drop-shadow-xl h-[130px] w-[210px] rounded-lg flex flex-col items-center hover:bg-zinc-500 hover:h-[140px] hover:w-[220px]">
            <Sunrise />{""}
            <span className="text-3xl text-white font-thin">
              {getSunTime(forecast.sunrise)}
            </span>
          </div>

          <div className="bg-white bg-opacity-40 drop-shadow-xl h-[130px] w-[210px] rounded-lg flex flex-col items-center hover:bg-zinc-500 hover:h-[140px] hover:w-[220px]">
            <Sunset />{""}
            <span className="text-3xl text-white font-thin">
              {getSunTime(forecast.sunset)}
            </span>
          </div>

          <Widgets
            icon="wind"
            title="Wind Speed"
            info={`${Math.round(today.wind.speed)} km/h`}
            description={`${getWindDirection(Math.round(today.wind.deg))}  
          gusts: ${today.wind.gust.toFixed(1)} km/h`}
          />

          <Widgets
            icon="feelsLike"
            title="Feels Like"
            info={`${<Degree temp={Math.round(today.main.feels_like)} />}`}
            description={`${
              today.main.feels_like < today.main.temp
                ? "Feels Colder"
                : "Feels Warmer"
            }`}
          />
        </section>

        <section className="flex justify-between gap-10">
          <Widgets
            icon="humidity"
            title="Humidity"
            info={`${today.main.humidity}%`}
            description={`${getHumidityInfo(today.main.humidity)}`}
          />

          <Widgets
            icon="precipitation"
            title="Precipitation"
            info={`${today.pop}%`}
            description={`${getPop(today.pop)} clouds at ${today.clouds.all}%`}
          />

          <Widgets
            icon="pressure"
            title="Pressure"
            info={`${today.main.pressure} HPA`}
            description={`${getPressureInfo(Math.round(today.main.pressure))}`}
          />

          <Widgets
            icon="visibility"
            title="Visibility"
            info={`${(today.visibility / 1000).toFixed()} km`}
            description={`${getVisibilityValue(today.visibility)}`}
          />
        </section>
      </div>
    </>
  );
}

export default Forecast;
