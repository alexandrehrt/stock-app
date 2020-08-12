import React from 'react';
import Plot from 'react-plotly.js';

const Chart = ({ stockX, stockY }) => {
  return (
    <div>
      <Plot 
        data={[
          {
            x: stockX,
            y: stockY,
            type: "scatter"
          }
        ]}
        config={
          {displayModeBar: false}
        }
        layout={{ width: 620, height: 440, paper_bgcolor: '#1E2130', plot_bgcolor: '#1E2130', }}
      />     
    </div>
  )
};

export default Chart;