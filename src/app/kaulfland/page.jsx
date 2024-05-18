import React, { useState } from 'react'
import Header from '../components/Header/Header'

const page = () => {

    const [stores, setStores] = useState([])
    const [state, setState] = useState(initialState)
    return (

        <div className='first-stores'>
            <Header />
            <div className="first-stores__inner">
                <div className="shell">


                </div>
            </div>
        </div>
    )
}

export default page