'use client'
import React, { useState } from 'react'
import Header from '../components/Header/Header'
import { firstStores } from '../../../public/stores'
import StoreBilla from '../components/StoreBilla/StoreBilla'
import './Billa.scss'
import Menu from '../components/Menu/Menu'
const Page = () => {
    const [stores, setStores] = useState(firstStores);

    return (
        <div className='second-stores'>
            <Header />
            <div className="shell">
                <div className="second-stores__inner">
                    <h1>Билла</h1>
                    <div className='wrapper'>
                        <div className='stores'>
                            {stores.map((store) => <StoreBilla key={store.id} stores={stores} currentStore={store} setStores={setStores} />)}
                        </div>
                        <Menu stores={stores} setStores={setStores} />

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Page;
