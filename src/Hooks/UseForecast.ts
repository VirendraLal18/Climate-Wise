import { useState, useEffect, ChangeEvent } from "react";
import { optionType } from "../types";
import { forecastType } from "../types";

const useForecast = () => {
    const API_KEY = import.meta.env.VITE_API_KEY!;

    const [place, setPlace] = useState<string>("");
    const [options, setOptions] = useState<[]>([]);
    const [city, setCity] = useState<optionType | null>(null);
    const [forecast, setForecast] = useState<forecastType | null>(null);
  
    const getPlace = (value: string) => {
      fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}
      &limit=5&appid=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => setOptions(data));
    };
  
    // function to return the value of place
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setPlace(value);
      if (value === "") setPlace(""); setForecast(null);
      getPlace(value);
    };
  
    const getForecast = (city: optionType) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          const forecastData = {
            ...data.city,
            list: data.list.slice(0, 16),
          };
          setForecast(forecastData);
        });
    };
  
    const onSearch = () => {
      if (!city) return;
      getForecast(city);
    };
  
    const onOptionSelect = (option: optionType) => {
      setCity(option);
    };
  
    useEffect(() => {
      if (city) {
        setPlace(city.name);
        setOptions([]);
      }
    }, [city]);

    return {
        place,
        options,
        forecast,
        onInputChange,
        onOptionSelect,
        onSearch
    }
}

export default useForecast