import React from 'react'
import UserItems from '../userItems/userItems'

import './user.css'

const DAN_DATA = [
    {
        id: 'p1',
        name: 'Dan Golden',
        email: 'test@gmail.com',
        title: 'Sweet in the middle',
        places : '4 places',
        image : `${require('../pics/section3.jpg')}`,
        description: 'music sang by Nigeria artists',

    }
]



const User = ()=>{
    return (
        <div className="user">

        <div className="userBox">
            {
                DAN_DATA.map(data => <UserItems data={data} key={data.id} />)
            }
        </div>
        </div>
    )
}

export default User