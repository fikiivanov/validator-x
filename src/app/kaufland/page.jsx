'use client'
import React, { useState } from 'react'
import Header from '../components/Header/Header'
import { firstStores } from '../../../public/stores'

const page = () => {

    const [state, setState] = useState(firstStores)
    return (

        <div className='first-stores'>
            <Header />
            <div className="first-stores__inner">
                <div className="shell">

                    cvs
                </div>
            </div>
        </div>
    )
}

export default page