import React, { useState } from 'react';
import './DonutChart.css';
import ApexCharts from 'react-apexcharts';
import { donutItems } from '../Navbar/NavItems';

const DonutChart = () => {
    const [series] = useState([44, 55, 64, 22]);
    const [options] = useState({
      chart: {
        width: 380,
        type: 'donut',
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
          donut: {
            labels: {
              show: true,
            }
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        colors: ['#9FFF9D', '#2AB42A', '#1B9A59', '#03C3FF']
      },
      legend: {
        show: false,
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    });
  
  return (
    <div className='donut-chart'>
      <div className='dc-wrap'>
        <span>Wallet Balance</span>
      </div>
      <div className='donut-divider'></div>
        <div className='chart-inner'>
          <ApexCharts options={options} series={series} type="donut" width={300} />
        </div>
        <div className='dc-items-container'>
          {donutItems.map((item,index) => (
            <>
              <div key = {index}>
                <ul className='dc-items'>
                  <span>{item.name}</span>
                  <span>{item.money}</span>
                </ul>
              </div>
            </>
          ))}
        </div>
        <div className='donut-divider-second'></div>
        <div className='donut-wallet'>
            <span>Manage Wallet</span>
        </div>
    </div>
  );
}

export default DonutChart