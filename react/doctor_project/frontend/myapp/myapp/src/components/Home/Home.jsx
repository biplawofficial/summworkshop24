import React from 'react'
import './Home.css'
import Navbar1 from './navbar1/navbar1'
import Navbar2 from './navbar2/navbar2'
import Navbar3 from './navbar3/navbar3'
import SliderandNews from './SliderandNews/SliderandNews'
import data from './data/data.json'
import Cards from './cards/cards'
const Home = () => {
    return (
        <div className='home'>
            <Navbar1 />
            <Navbar2/>
            <Navbar3/>
            <SliderandNews slides={data.banner.start}/>
            <Cards/>
        
        </div>
    )
}

export default Home