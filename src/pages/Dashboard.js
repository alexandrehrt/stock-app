import React, { useState, useCallback } from 'react';

import { Container, Form, ChartContainer } from './styles';

import Chart from '../components/Chart/Chart';

function Dashboard() {
  const [searchValue, setSearchValue] = useState('');
  const [stockX, setStockX] = useState([]);
  const [stockY, setStockY] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
      const symbol = searchValue;
      const api_call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.API_KEY}`;
      
      let stockChartXValues = [];
      let stockChartYValues = [];

      // Get stock values and dates (days)
      try {
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

          setIsLoading(false);
          }          
        )   
      } catch (error) {
        console.log(error);
      }
  }, [searchValue])

  return (
    <Container>
        <Form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={searchValue} 
            onChange={(e) => setSearchValue(e.target.value)} 
          />
        </Form>
        <ChartContainer>
          { isLoading ? "" : 
              <Chart stockX={stockX} stockY={stockY}/>
          }
        </ChartContainer>
    </Container>
  )
}

export default Dashboard;