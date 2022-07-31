import React from 'react';
import NavBar from './components/navigation';
import NewsWidget from './components/widgets/news';
import StocksWidget from './components/widgets/stocks';
import WeatherWidget from './components/widgets/weather';

const App = () => {
  return (
    <div className="mainApp">
      <NavBar />
      <NewsWidget />
      <WeatherWidget />
      <StocksWidget />
    </div>
  );
};

export default App;
