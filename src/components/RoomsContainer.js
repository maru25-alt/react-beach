import React from 'react'
import RoomsFilter from './RoomsFilters'
import RoomList from './RoomsList'
//import {RoomConsumer} from '../Context'
import Loading from './Loading'
import {withRoomConsumer } from '../Context'


function RoomsContainer({context}){
    console.log(context)
    const {sortedRooms, loading, rooms } = context;
    if(loading ){
        return <Loading/>
    }
    return (
            <>
               
              
             <RoomsFilter rooms={rooms}></RoomsFilter>
             <RoomList rooms={sortedRooms} />
                          
              </>

    );

  

}


export default withRoomConsumer(RoomsContainer);




















/*

export default function RoomsContainer() {
    return (
        <RoomConsumer>
            {
                (value) => {
                    //console.log(value);
                    const {loading, sortedRooms, rooms} = value
                    if(loading === true){
                        return <Loading/>
                    }
                    return (
                        <div>

                             <RoomsFilter rooms={rooms}></RoomsFilter>
                              <RoomList rooms={sortedRooms}></RoomList>

                        </div>

                    );
                }
            }
        </RoomConsumer>
       
    );
}
*/