import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Service from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'


class componentName extends Component {
    
    

    render() {
        return (
            <div>
              <Hero >
                  <Banner title='Luxurious rooms' subtitle='delux rooms starting at $299'>
                      <Link to='/rooms' className='btn-primary'>Our Rooms</Link>
                  </Banner>
              </Hero>
              <Service></Service>

              <FeaturedRooms></FeaturedRooms>

             
            </div>
        )
    }
}



export default componentName