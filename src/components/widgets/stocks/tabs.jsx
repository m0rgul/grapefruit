import React from 'react';

const Tabs = ({ TABS, activeTab, setActiveTab }) => (
  <div className="tabs">
    {Object.keys(TABS).map((tabName) => {
      const { displayName, value, fluctuation } = TABS[tabName];
      return (
        <div
          className={`tabItem ${activeTab === tabName ? 'active' : ''}`}
          onClick={() => setActiveTab(tabName)}
        >
          <div className="market">
            <span className="displayName">{displayName}</span>
            <span className="marketValue">{`${value}%`}</span>
          </div>
          <div
            className={`fluctuation ${fluctuation > 0 ? 'up' : 'down'}`}
          >{`${fluctuation}%`}</div>
        </div>
      );
    })}
  </div>
);

export default Tabs;
