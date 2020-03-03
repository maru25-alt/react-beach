import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../Context'
import Title from "../components/Title";



//get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}


export default function RoomFilter({rooms}){
   const context = useContext(RoomContext) 
   //console.log(context)
   const {handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    pets,
    breakfast} = context;

    //get unique types
    let types = getUnique(rooms, 'type');
    types = ['all', ...types]

    types = types.map((item, index) => {
        //console.log(item)
    return <option value={item} key={index}>{item}</option>
    })

    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
    return <option key={index} value={item}>{item}</option>
    })


        return (
            <section className='filter-container'>
                
                <Title title='search rooms'></Title>
                <form className='filter-form'>
                    {/* select type*/}
                    <div className='form-group'>
                        <label htmlFor='type'>room type</label>
                        <select name='type' id='type' value={type} className='form-control' onChange={handleChange}>
                          {types} 
                        </select>
                    </div>
                    {/** end select type */}

                    {/* guest type*/}
                    <div className='form-group'>
                        <label htmlFor='capacity'>Guest</label>
                        <select name='capacity' id='capacity' value={capacity} className='form-control' onChange={handleChange}>
                          {people} 
                        </select>
                    </div>
                    {/** end guest */}

                    {/**room price */}
                    <div className='form-group'>
                        <label htmlFor='price'>Room price ${price}</label>

                         <input type='range' name='price' min={minPrice} max={maxPrice} id='price' value={price} className='form-control'  onChange={handleChange} />

                    </div>
                    {/** end room price */}


                    {/* size */}
        <div className="form-group">
          <label htmlFor="price">room size </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of sizes */}


         {/* extras */}
         <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">pets</label>
          </div>
        </div>
        {/* end of extras type */}

                </form>
            </section>
        )
   
}
