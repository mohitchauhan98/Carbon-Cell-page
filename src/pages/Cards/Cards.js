import './Cards.css';
import { useEffect, useState } from 'react';
import { cardItems } from '../Navbar/NavItems';
const Cards = () => {
    const [product,setProduct] = useState([])
    const colors = ["#1B9A59","#9FFF9D", "#77F534", "#EED70A", "#03C3FF"]

    useEffect(() => {
        async function productHandler(){
            try{
                const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
                const data = await response.json()
                setProduct(data)
            }catch(error){
                console.log(error)
            }
        }
        productHandler()
    },[])
  return (
    <div>
        <div className="card-container">
            <div><span className='dc-wrap'>Assets</span></div>
            <div>
                <select className='card-dropdown'>
                    <option>Today</option>
                </select>
            </div>
        </div>
        <div className='card-wrapper'>
            {cardItems.map((item,index) => (
                <div className='card-box' key = {index}>
                    <div className='cb-icon-wrap'>
                        <span className='icon-item' style = {{background:colors[index]}}>{item.imgSrc}</span>
                        <span>{item.name}</span>
                    </div>
                    <div className='card-icon-text'><span>{item.desc}</span></div>
                    <div className='card-money-wrap'>
                        <span className='card-money'>{product?.bpi?.EUR?.rate} €</span>
                        <div className='card-trending'>
                            <span>{item.profit}</span>
                            <span>{item.trend}</span>
                        </div>
                    </div>
                    <div className='card-money-wrap'>
                        <span className='card-info-icon' style = {{color : colors[index]}}>{item.icon}</span>
                        <span className='card-trade-button' style = {{background:colors[index]}}>{item.trade}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Cards