import React, { useState,useEffect } from 'react'
import Carbon from '../../assets/Carbon.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import "./Navbar.css"
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Admin from '../../assets/admin.jpg';
import { NavItems } from './NavItems';

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(true);
    const handleClick = () => setIsOpen(!isOpen)

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 1280) {
            setIsOpen(false);
          }else {
            setIsOpen(true)
          }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div>
        <div className={`navbar ${isOpen ? "open" : "close"}`}>
            <div className='nav-head'>
                <div className='nav-head-inner'>
                    <div className='nav-head-wrap'>
                        {isOpen ? (
                            <>
                                <div><img src={Carbon} alt='logo' className='image-nav' /></div>
                                <div className='nav-inner-item'>
                                    <span>Carbon</span>
                                    <span>Cell</span>
                                </div>
                            </>
                            ) : (
                            <div onClick={handleClick}><MenuIcon className='close-menu-icons' /></div>
                        )}
                    </div>
                    {isOpen && <div onClick={handleClick}><MenuIcon className='menu-icon'/></div>}
                </div>
                {isOpen && 
                    <div className='nav-searchbox'>
                        <span><SearchIcon className='nav-searchIcon' /></span>
                        <input type='search' placeholder='Search' className='nav-searchInput' />
                    </div>
                }
                <nav>
                    <div className='active-nav' id = 'active'>
                        <div className='active-nav-text'>
                            <span><HomeIcon /></span>
                            <span>Home</span>
                        </div>
                    </div>
                    {NavItems.map((item,index) => (
                        <div key = {index} className='active-nav'>
                            <div className='nav-text'>
                                <span>{item.imgSrc}</span>
                                <span>{item.name}</span>
                            </div>
                        </div>
                    ))}
                    <div className='navbar-footer-container'>
                        <div className='nav-footer'>
                            <div className='nf-notification'>
                                <div className='nf-notification-text'>
                                    <span><NotificationsIcon /></span>
                                    <span>Notifications</span>
                                </div>
                                <div className='notification-wrap'>
                                    <span>12</span>
                                </div>
                            </div>
                            <div className='nf-notification-text'>
                                <span><HelpOutlineIcon /></span>
                                <span>Support</span>
                            </div>
                            <div className='nf-notification-text'>
                                <span><SettingsIcon /></span>
                                <span>Settings</span>
                            </div>
                        </div>
                        {isOpen && 
                            <div className='footer-box'>
                                <div className='footer-left'>
                                    <div>
                                        <img src = {Admin} alt = 'admin' className='footer-img'/>
                                    </div>
                                    <div className='footer-text'>
                                        <span>Mohit</span>
                                        <span>mohit@gmail.com</span>
                                    </div>
                                </div>
                                <div><MoreVertIcon /></div>
                            </div>
                        }
                    </div>
                </nav>
            </div>
        </div>
        <div onClick={handleClick} className='res-menu-icons'><MenuIcon /></div>
    </div>
  )
}

export default Navbar