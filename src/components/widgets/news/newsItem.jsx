import React from 'react';

const calculateArticleAge = (date) => {
  const parsedDate = new Date(date);
  const now = new Date();
  const diff = now - parsedDate;
  const SEC = 1000,
    MIN = 60 * SEC,
    HRS = 60 * MIN,
    DAY = 24 * HRS;

  const days = Math.floor(diff / DAY);
  const hours = Math.floor((diff % DAY) / HRS);
  const minutes = Math.floor((diff % MIN) / SEC);

  return `${days ? `${days}d` : ''} ${hours ? `${hours}h` : ''} ${
    minutes ? `${minutes}m` : ''
  } ago`;
};

const newsItem = (props) => (
  <div className="newsItem">
    <div className="articleImage">
      <img src={props.image} alt={props.title} />
    </div>
    <div className="articleInfo">
      <h3 className="articleTitle">{props.title}</h3>
      <div className="articleDetails">
        <span className="source">{props.source}</span>
        <span className="date">{calculateArticleAge(props.date)}</span>
        <span className="category">{props.category}</span>
      </div>
    </div>
  </div>
);

export default newsItem;
