import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';


// import { Container } from './styles';

const Chart = () => {
  const [stockX, setStockX] = useState([]);
  const [stockY, setStockY] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    async function fetchStockData() {
      const symbol = 'IBM';
      const api_call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.API_KEY}`;
      let stockChartXValues = [];
      let stockChartYValues = [];

      await fetch(api_call)
        .then(response => response.json())
        .then(
          function(data) {
          for (let key in data['Time Series (Daily)']) {
            stockChartXValues.push(key);
            stockChartYValues.push(data['Time Series (Daily)'][key]['4. close']);
          }

          setStockX(stockChartXValues);
          setStockY(stockChartYValues);
          setIsLoading(false)
          }          
        )
      }

      fetchStockData();
  }, []);

  return (
    <div>
        {isLoading ? "Loading" : 
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
            layout={{ width: 720, height: 540, title: 'título', paper_bgcolor: '#1E2130', plot_bgcolor: '#1E2130', }}
          />
        }
    </div>
  )
};

export default Chart;