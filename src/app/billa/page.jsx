'use client'
import React, { useState } from 'react'
import Header from '../components/Header/Header'
import { firstStores } from '../../../public/stores'
import StoreBilla from '../components/Header/StoreBilla/StoreBilla'
import './Billa.scss'
const Page = () => {
    const [stores, setStores] = useState(firstStores);

    return (
        <div className='second-stores'>
            <Header />
            <div className="shell">
                <div className="second-stores__inner">
                    <h1>Билла</h1>
                    <div className='stores'>
                        {stores.map((store) => <StoreBilla key={store.id} stores={stores} store={store} setStores={setStores} />)}
                        <Menu stores={ stores} setStores={setStores } />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Page;
