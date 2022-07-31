import React, { useMemo, useState } from 'react';
import Tabs from './tabs';
import Chart from './chart';

const TABS = {
  NASDAQ: {
    displayName: 'NASDAQ',
    value: 5055.55,
    fluctuation: -0.88,
    data: [
      { month: 1, value: 40 },
      { month: 2, value: 55 },
      { month: 3, value: 64 },
      { month: 4, value: 34 }
    ]
  },
  APPL: {
    displayName: 'APPL',
    value: 126.56,
    fluctuation: 0.51,
    data: [
      { month: 1, value: 2 },
      { month: 2, value: 6 },
      { month: 3, value: 7 },
      { month: 4, value: 8 }
    ]
  },
  DOWJ: {
    displayName: 'DOW J',
    value: 19936.02,
    fluctuation: -0.34,
    data: [
      { month: 1, value: 1 },
      { month: 2, value: 1 },
      { month: 3, value: 3 },
      { month: 4, value: 4 }
    ]
  },
  GOOG: {
    displayName: 'GOOG',
    value: 534.53,
    fluctuation: 0.71,
    data: [
      { month: 1, value: 3 },
      { month: 2, value: 1 },
      { month: 3, value: 2 },
      { month: 4, value: 3 }
    ]
  }
};

const StocksWidget = () => {
  const [activeTab, setActiveTab] = useState(Object.keys(TABS)[0]);
  const dataSet = useMemo(() => TABS[activeTab].data, [activeTab]);

  return (
    <div className="stocksWidgetContainer">
      <Tabs {...{ TABS, activeTab, setActiveTab }} />
      <Chart dataSet={dataSet} />
    </div>
  );
};

export default StocksWidget;
