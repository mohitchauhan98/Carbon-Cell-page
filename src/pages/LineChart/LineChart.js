import React, { useEffect, useState } from 'react';
import ApexCharts from 'react-apexcharts';
import axios from 'axios'; 
import './LineChart.css'

const LineChart = () => {
    const [series,setSeries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
                const populationData = response.data.data.map(item => item.Population);
                const chartData = [{
                name: 'Population',
                data: populationData,
                color: '#2AB42A'
                }];
                setSeries(chartData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
      }, []);

    const options = {
        chart: {
          id: 'your-chart-id',
          type: 'line',
          toolbar: {
            show: false,
          },
        },
        xaxis: {
            categories: ["Us", "Fra", "Arg", "Africa", "Ind", "China", "Pak", "Eng", "Spain"]
        },
      };
  return (
    <div>
        <div className='linechart-header'>
            <div><span className='linechart-overview'>Market Overview</span></div>
            <div className='chart-tokens'>
                <span>NBST</span>
                <span>EFT</span>
                <span>WPCT</span>
                <span>RET</span>
                <span>WET</span>
            </div>
        </div>
        <div className='divider'></div>
        <ApexCharts options={options} series={series} type="line" width= '100%' height='385px'/>
        <div className='divider'></div>
        <div className='linechart-header'>
            <div className='linechart-overview'>Get in depth charts in Trade</div>
            <div className='line-chart-button'>Trade</div>
        </div>
    </div>
  )
}

export default LineChart