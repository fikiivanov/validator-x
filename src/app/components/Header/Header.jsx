import Link from 'next/link'
import React from 'react'
import './Header.scss'

const Header = () => {
    return (
        <div className='header'>
            <div className='header__inner'>
                <ul>
                    <li><Link href={"/kaufland"}>Кауфланд</Link></li>
                    
                    <li><Link href={"/billa"}>Билла</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header