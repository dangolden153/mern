import React from 'react'
import UserPlaceItem from '../userPlacesItem/userPlacesItem'
import {useParams} from 'react-router-dom'
import './userPlaces.css' 

const DAN_PLACE = [
    {
        id: 'p1',
        name: 'Dan Golden',
        email: 'test@gmail.com',
        title: 'Sweet in the middle',
        places : '4 places',
        image : `${require('../pics/unsplash.jpg')}`,
        description: 'music sang by Nigeria artists',
        creator: 'u1'
    },

    {
        id: 'p1',
        name: 'Dan Golden',
        email: 'test@gmail.com',
        title: 'Sweet in the middle',
        places : '4 places',
        image : `${require('../pics/splash1.jpg')}`,
        description: 'music sang by Nigeria artists',
        creator: 'u2'

    },

    {
        id: 'p1',
        name: 'Dan Golden',
        email: 'test@gmail.com',
        title: 'Sweet in the middle',
        places : '4 places',
        image : `${require('../pics/splash.jpg')}`,
        description: 'music sang by Nigeria artists',
        creator: 'u2'

    }
]


const Places =()=>{

  const  placeId = useParams().userId
  const  Danplaces = DAN_PLACE.filter(place => place.creator === placeId)

    return(
        <div className="userplace">
        <div className="userPlaceBox">
            {
                Danplaces.map(data => <UserPlaceItem data={data} key={data.id} />)
            }
        </div>        </div>
    )
}

export default Places