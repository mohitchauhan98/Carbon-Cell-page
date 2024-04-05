import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import TokenIcon from '@mui/icons-material/Token';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import WalletIcon from '@mui/icons-material/Wallet';
import LandscapeIcon from '@mui/icons-material/Landscape';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import RecyclingIcon from '@mui/icons-material/Recycling';
import LightModeIcon from '@mui/icons-material/LightMode';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import InfoIcon from '@mui/icons-material/Info';

export const NavItems = [
    {
        imgSrc : <CorporateFareIcon />,
        name : 'Organization', 
    },
    {
        imgSrc : <TokenIcon />,
        name : 'Assets', 
    },
    {
        imgSrc : <ImportExportIcon />,
        name : 'Trade', 
    },
    {
        imgSrc : <HourglassEmptyIcon />,
        name : 'History', 
    },
    {
        imgSrc : <WalletIcon />,
        name : 'Wallet', 
    },

]

export const donutItems = [
    {
        name : 'USDT',
        money : '$300.56'
    },
    {
        name : 'NBST',
        money : '270.72'
    },
    {
        name : 'EFT',
        money : '203.04'
    },
    {
        name : 'WET',
        money : '329.76'
    },
]

export const cardItems = [
    {
        imgSrc : <LandscapeIcon />,
        name : 'NBST',
        desc : 'Nature Based Solution Token and Plastic Based Token...',
        profit : '+9.15%',
        trend : <TrendingUpIcon />,
        icon : <InfoIcon />,
        trade : 'Trade'
    },
    {
        imgSrc : <LightbulbIcon />,
        name : 'EFT',
        desc : 'Energy Efficiency Token and Plastic Credits Token...',
        profit : '+9.15%',
        trend : <TrendingUpIcon />,
        icon : <InfoIcon />,
        trade : 'Trade'
    },
    {
        imgSrc : <RecyclingIcon />,
        name : 'WPCT',
        desc : 'Waste Management and Plastic Credits Token',
        profit : '11.01%',
        trend : <TrendingUpIcon />,
        icon : <InfoIcon />,
        trade : 'Trade'
    },
    {
        imgSrc : <LightModeIcon />,
        name : 'RET',
        desc : 'Renewable Energy Token and Plastic Based Token...',
        profit : '-0.56%',
        trend : <TrendingDownIcon />,
        icon : <InfoIcon />,
        trade : 'Trade'
    },
    {
        imgSrc : <WaterDropIcon />,
        name : 'WET',
        desc : 'Water Energy Token and Plastic Credits Token...',
        profit : '-1.48%',
        trend : <TrendingDownIcon />,
        icon : <InfoIcon />,
        trade : 'Trade'
    }
]