import React from 'react'
import NavBar from '../Components/NavBar'
import HomeCard from '../Components/Card'
import Footer from '../Components/Footer'
import NavBot from '../Components/NavBot'
import Category from '../Components/Category'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Category/>
      <HomeCard/>
      <Footer/>
      <NavBot/>
    </div>
  )
}

export default Home