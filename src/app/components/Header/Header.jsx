import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <div className='header__inner'>
                <ul>
                    <li><Link href={"/kaulfland"}>Kaulfland</Link></li>
                    
                    <li><Link href={"/billa"}>Billa</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header