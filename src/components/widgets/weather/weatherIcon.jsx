import React from 'react';
import weatherIcons from '../../../utils/weatherIcons';

const getWeatherIcon = (weatherText) => {
  if (!weatherText || weatherText === '') return weatherIcons['sun'];

  const foundKey = Object.keys(weatherIcons).find(
    (icon) => weatherText.includes(icon) || icon.includes(weatherText)
  );

  if (foundKey) return weatherIcons[foundKey];

  return weatherIcons['sun'];
};

const weatherIcon = ({ weatherText = '' }) => (
  <div className="weatherIco">
    <img src={getWeatherIcon(weatherText)} alt="" />
    <p className="status">{weatherText}</p>
  </div>
);

export default weatherIcon;
