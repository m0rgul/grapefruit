import { useState, useEffect } from 'react';
import { get } from 'axios';

// these would probably come from some ENV variable
const API_KEY = 'McuRtShn6kLmY61oKLep3GZbuAv5oxI3';
const locationBaseURL = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}`;
const weatherBaseURL =
  'http://dataservice.accuweather.com/currentconditions/v1/';

const useWeather = () => {
  const [coordinates, setCoordinates] = useState();
  const [location, setLocation] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchLocationKey = async ({ latitude, longitude }) => {
    const URL = `${locationBaseURL}&q=${latitude},${longitude}`;
    try {
      const { data } = await get(URL);

      setLocation(data);
    } catch (e) {
      console.warn(e);
    }
  };

  const fetchWeatherData = async (locationKey) => {
    const URL = `${weatherBaseURL}/${locationKey}?apikey=${API_KEY}&details=true`;
    try {
      const { data } = await get(URL);
      setData(data);
      setLoading(false);
    } catch (e) {
      console.warn(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        setCoordinates({ latitude, longitude }),
      (e) => console.warn(e)
    );
  }, []);

  useEffect(() => {
    if (coordinates) fetchLocationKey(coordinates);
  }, [coordinates]);

  useEffect(() => {
    if (location) fetchWeatherData(location.Key);
  }, [location]);

  return { data, location, loading };
};

export default useWeather;
