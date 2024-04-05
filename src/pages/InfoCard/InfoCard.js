import './InfoCard.css';
import CellImg from '../../assets/cell.jpg';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import UploadIcon from '@mui/icons-material/Upload';
const InfoCard = () => {
  return (
    <div className='donut-chart'>
        <div className='dc-wrap'>
            <span>In recent posts</span>
        </div>
        <div className='donut-divider'></div>
        <div className='info-card-box'>
            <div><img src = {CellImg} alt = 'logo' className='cell-img'/></div>
            <div>
                <span className='info-card-head'>Carbon Cell <span><VerifiedIcon /></span> <span className='info-tag'>@carboncell . 2h</span></span>
                <div className='info-container'>
                    <div className='para'>
                        <span className='info-para'>Carbon Cell: Pioneering Financial Solutions for a Greener Future!</span>
                    </div>
                    <div className='para'><span className='info-para'>Carbon Cell: Pioneering Financial Solutions for a Greener Future!</span></div>
                    <div className='para'>
                        <span className='info-para'>In a world where decarbonization is paramount, Carbon Cell is leading the charge to redefine #CarbonMarkets. Follow this thread to learn how we’re making sustainable Carbon Cell: Pioneering Financial Solutions for a Greener Future!…
                        Show more</span>
                    </div>
                    <div className='info-icons-text'>
                        <span><ChatBubbleOutlineIcon /></span>
                        <span>19</span>
                        <span><RepeatIcon /></span>
                        <span>48</span>
                        <span><FavoriteBorderIcon /></span>
                        <span>482</span>
                        <span><UploadIcon /></span>
                        <span>36</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='info-divider'></div>
        <div className='info-button'>Follow Us on X</div>
    </div>
  )
}

export default InfoCard