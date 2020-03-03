import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

export default class componentName extends Component {
    render() {
        return (
            <div>
                <Hero>
                    <Banner title='404' subtitle='page not find'>
                        <Link to='/' className='btn-primary'>return Home</Link>
                    </Banner>
                </Hero>
            </div>
        )
    }
}
