import React from 'react'
import Header from './header and footer/Header'
import Profile from '../components/home/Profile'
import Dashboard from '../components/home/Dashboard'


const Home = ({homeRoute}) => {
    let body = (
      <div>
        {homeRoute === "dashboard" && <Dashboard />}
        {homeRoute === "profile" && <Profile />}
      </div>
    )
    return (
      <div>
        <Header />
        <div className='p-4'>
          {body}
        </div>
      </div>
    )
}

export default Home