'use client'
import React, { useState, useEffect } from 'react'
import Header from '../components/Header/Header'
import { secondStores } from '../../../public/stores'
import StoreBulmag from '../components/StoreBulmag/StoreBulmag'
import './Bulmag.scss'
import Menu from '../components/Menu/Menu'
const Page = () => {
    const [stores, setStores] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedStores = localStorage.getItem('secondStores');
            return storedStores ? JSON.parse(storedStores) : secondStores;
        }
        return secondStores;
    });

    useEffect(() => {
        // Save stores to local storage whenever they change
        if (typeof window !== 'undefined') {
            localStorage.setItem('secondStores', JSON.stringify(stores));
        }
    }, [stores]);

    return (
        <>
            <Header />
            <div className="shell">
                <div className='second-stores'>
                    <div className="second-stores__inner">
                        <h1>Булмаг</h1>
                        <div className='wrapper'>
                            <div className='stores'>
                                {stores.map((store) => (
                                    <StoreBulmag key={store.number}
                                        currentStore={store}
                                        setStores={setStores}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page;
