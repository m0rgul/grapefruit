import React from 'react';
import { VictoryArea, VictoryChart, VictoryVoronoiContainer } from 'victory';

const Chart = ({ dataSet }) => {
  return (
    <div className="chartContainer">
      <VictoryChart
        containerComponent={
          <VictoryVoronoiContainer labels={({ datum }) => datum.value} />
        }
      >
        <VictoryArea
          interpolation={'catmullRom'}
          samples={100}
          data={dataSet}
          x="month"
          y="value"
          style={{
            data: {
              fill: '#000',
              fillOpacity: 0.2,
              stroke: '#666',
              strokeWidth: 1
            }
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default Chart;
