import React from 'react';
import NewsItem from './newsItem';
import newsImage from '../../../assets/img/newsBg.png';

const newsWidget = () => {
  //this would be fetched somehow at some point, let's say
  const newsStories = [
    {
      id: 1,
      title: 'Astronauts could land on Red Planet by 2039',
      image: newsImage,
      source: 'SPACE.com',
      date: 'Tue, 26 Jul 2022 12:42:29 GMT',
      category: 'science'
    }
  ];

  const renderNewsStories = () =>
    newsStories.map((story) => {
      const { id, ...restOfProps } = story;
      return <NewsItem key={id} {...restOfProps} />;
    });

  return <div className="newsWidgetContainer">{renderNewsStories()}</div>;
};

export default newsWidget;
