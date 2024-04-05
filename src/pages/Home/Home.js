import React from 'react';
import './Home.css'
import WavingHandIcon from '@mui/icons-material/WavingHand';
import LineChart from '../LineChart/LineChart';
import DonutChart from '../DonutChart/DonutChart';
import InfoCard from '../InfoCard/InfoCard';
import Cards from '../Cards/Cards';

const Home = () => {  
  return (
    <div className='home-box'>
      <div className='home-head'>
        <div className='home-head-text'>
          <span>Hello, <span className='head-name'>Mohit Chauhan </span><span className='head-wave'><WavingHandIcon /></span></span>
          <span>Welcome to <span className='head-name'>Spot trading !</span></span>
        </div>
        <div className='home-head-button'>
          Start Trading
        </div>
      </div>
      <div className='charts-container'>
        <div className='line-chart-box'><LineChart /></div>
        <div className='donut-chart-box'><DonutChart /></div>
        <div className='info-box'><InfoCard /></div>
      </div>
      <div className='cards-container-box'><Cards /></div>
    </div>
  )
}

export default Home