import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'

export default class componentName extends Component {
    state= {
        services: [
            {
                icon: <FaCocktail/>,
                title: 'free Cocktails',
                info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error consequatur esse ratione dolorum aliquid perspiciatis hic fuga, quo excepturi nam porro. Sed dolorem eius sint sapiente unde libero, alias distinctio!'

            },
            {
                icon: <FaHiking/>,
                title: 'free haking',
                info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error consequatur esse ratione dolorum aliquid perspiciatis hic fuga, quo excepturi nam porro. Sed dolorem eius sint sapiente unde libero, alias distinctio!'

            },
            {
                icon: <FaShuttleVan/>,
                title: 'free shuttle',
                info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error consequatur esse ratione dolorum aliquid perspiciatis hic fuga, quo excepturi nam porro. Sed dolorem eius sint sapiente unde libero, alias distinctio!'

            },
            {
                icon: <FaBeer/>,
                title: 'free beer',
                info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error consequatur esse ratione dolorum aliquid perspiciatis hic fuga, quo excepturi nam porro. Sed dolorem eius sint sapiente unde libero, alias distinctio!'

            },
        ]
    }
    render() {

        return (
          
                <section className='services'>
               <Title title='Services'></Title>

        <div className='services-center'>{this.state.services.map((item , index)=> {
            return <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
            </article>

        })}</div>

               </section>
         
        )
    }
}
