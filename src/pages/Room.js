import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import RoomsContainer from '../components/RoomsContainer'

export default class componentName extends Component {
    render() {
        return (
            <div>
                <Hero hero='roomsHero'>
                    <Banner title='Our Rooms'>
                        <Link className='btn-primary' to='/'> Return Home
                        </Link>
                    </Banner>
                </Hero>

                <RoomsContainer></RoomsContainer>
            </div>
        )
    }
}
