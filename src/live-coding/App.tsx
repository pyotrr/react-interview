import React from "react";
import "./styles.scss";

// https://live-weather.deno.dev/city?CityName
// type CityName = "Cracow" | "Athens" | "Rome" | "Sydney" | "Oslo";

// eslint-disable-next-line
const getWidgetBackgroundColor = (temperature?: number) => {
  if (temperature === undefined) {
    return "white";
  }
  if (temperature <= 15) {
    return "#7597eb";
  }
  if (temperature <= 25) {
    return "#aeed6f";
  }
  if (temperature <= 30) {
    return "#f09254";
  }
  return "#f09254";
};

export default function WeatherApp() {
  return <div className="app"></div>;
}
