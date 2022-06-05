import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'
import Logo from '../../images/logo.png';

const Home = () => {
  return (
      <div className="home">
          <Sidebar/>
          <Navbar/>
          <div className="homeContainer">
            <img src={Logo}  className='image' />
          </div>
      </div>
  )
}

export default Home