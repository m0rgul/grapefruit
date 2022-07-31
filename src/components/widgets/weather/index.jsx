import React, { useMemo, useState } from 'react';

import useWeather from '../../../hooks/use-weather';
import WeatherIcon from './weatherIcon';

const tabs = ['today', 'tomorrow', 'week'];

const tempDisplay = (temp, time) => (
  <div className="temp">
    <p className="degrees">{`${temp}&deg;`}</p>
    <p className="time">{time}</p>
  </div>
);

const WeatherWidget = () => {
  const { data, location, loading } = useWeather();
  const [tab, setTab] = useState(tabs[0]);

  const parsedData = useMemo(() => {
    if (loading) return {};

    const actualData = data[0] || {};

    const {
      WeatherText: weatherText = '',
      Temperature: { Metric: { Value: temperature = 0 } = {} } = {}
    } = actualData;

    const { LocalizedName: localizedName = '' } = location;

    return { weatherText, temperature, localizedName };
  }, [data, location, loading]);

  if (loading) return <div className="weatherWidgetContainer"></div>;

  return (
    <div className="weatherWidgetContainer">
      <div className="topLeft">
        <WeatherIcon weatherText={parsedData.weatherText} />
        <p className="location">{parsedData.localizedName}</p>
      </div>
      <div className="topRight">
        <div className="forecastTabs">
          {tabs.map((val) => (
            <div
              className={`tabItem ${tab === val ? 'active' : ''}`}
              onClick={() => setTab(val)}
            >
              {val.toUpperCase()}
            </div>
          ))}
        </div>
        <div className="temperature">{parsedData.temperature}&deg;</div>
      </div>
      <div className="bottomRow">
        <div className="temp">
          <p className="degrees">28&deg;</p>
          <p className="time">6 AM</p>
        </div>
        <div className="temp">
          <p className="degrees">28&deg;</p>
          <p className="time">6 AM</p>
        </div>
        <div className="temp">
          <p className="degrees">28&deg;</p>
          <p className="time">6 AM</p>
        </div>
        <div className="temp">
          <p className="degrees">28&deg;</p>
          <p className="time">6 AM</p>
        </div>
        <div className="temp">
          <p className="degrees">28&deg;</p>
          <p className="time">6 AM</p>
        </div>
        <div className="temp">
          <p className="degrees">28&deg;</p>
          <p className="time">6 AM</p>
        </div>
        <div className="temp">
          <p className="degrees">28&deg;</p>
          <p className="time">6 AM</p>
        </div>
        <div className="temp">
          <p className="degrees">28&deg;</p>
          <p className="time">6 AM</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
