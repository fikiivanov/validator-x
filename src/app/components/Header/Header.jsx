import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <div className='header__inner'>
                <ul>
                    <li><Link href={"/kaulfland"}>Кауфланд</Link></li>
                    
                    <li><Link href={"/billa"}>Билла</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header