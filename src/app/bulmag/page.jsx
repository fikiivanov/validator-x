'use client'
import React, { useState } from 'react'
import Header from '../components/Header/Header'
import { secondStores } from '../../../public/stores'

const Page = () => {

    const [state, setState] = useState(secondStores)

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

export default Page