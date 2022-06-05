import './sidebar.scss'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom"
import ImageIcon from '@mui/icons-material/Image';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to='/' style={{textDecoration: "none"}}>
                <span className="logo">Hope</span>
            </Link>
        </div>
        <hr />
        <div className="bottom">
            <ul>
                <Link to='/users' style={{textDecoration: "none"}}>
                <li>
                    <PersonOutlineIcon className='icon'/>
                    <span>Users</span>
                </li>
                </Link>
            </ul>
            <ul>
                <Link to='/products' style={{textDecoration: "none"}}>
                <li>
                    <BabyChangingStationIcon className='icon'/>
                    <span>View</span>
                </li>
                </Link>
            </ul>
            <ul>
                <Link to='/appDon' style={{textDecoration: "none"}}>
                <li>
                    <ChildCareIcon className='icon'/>
                    <span>Donor Application</span>
                </li>
                </Link>
            </ul>
            <ul>
                <Link to='/appAdopt' style={{textDecoration: "none"}}>
                <li>
                    <FavoriteIcon className='icon'/>
                    <span>Adopter Application</span>
                </li>
                </Link>
            </ul>
            <ul>
                <Link to='/Track' style={{textDecoration: "none"}}>
                <li>
                    <FindInPageIcon className='icon'/>
                    <span>Track</span>
                </li>
                </Link>
            </ul>
            <ul>
                <Link to='/Donorimg' style={{textDecoration: "none"}}>
                <li>
                    <ImageIcon className='icon'/>
                    <span>Donor Image</span>
                </li>
                </Link>
            </ul>
            <ul>
                <Link to='/Adopterimg' style={{textDecoration: "none"}}>
                <li>
                    <ImageIcon className='icon'/>
                    <span>Adopter Image</span>
                </li>
                </Link>
            </ul>
            <ul>
            <Link to='/' style={{textDecoration: "none"}}>
                <li>
                    <LogoutIcon className='icon'/>
                    <span>Logout</span>
                </li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar