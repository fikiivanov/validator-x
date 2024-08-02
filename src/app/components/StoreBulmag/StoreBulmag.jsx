'use client'
import React, { useEffect, useState } from 'react';
import './StoreBulmag.scss';

const StoreBulmag = ({ currentStore, setStores }) => {
    const [checked, setChecked] = useState(() => {
        // Try to get the 'secondStores' data from local storage
        if (typeof window !== 'undefined') {
            const storedStores = localStorage.getItem('secondStores');
            if (storedStores) {
                // Parse the stored data and find if the current store is checked
                const parsedStores = JSON.parse(storedStores);
                const foundStore = parsedStores.find(store => store.number === currentStore.number);
                return foundStore ? foundStore.checked : false;
            }
        }
        // If no stored data or the current store is not found, default to false
        return false;
    });

    const toggleStoreChecked = () => {
        // Update the local state
        setChecked(prevChecked => !prevChecked);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Update local storage whenever the checked state changes
            const storedStores = localStorage.getItem('secondStores');
            let parsedStores = [];
            if (storedStores) {
                parsedStores = JSON.parse(storedStores);
            }
            // Find the index of the current store in the parsed stores array
            const index = parsedStores.findIndex(store => store.number === currentStore.number);
            if (index !== -1) {
                // Update the checked property of the current store in the parsed stores array
                parsedStores[index].checked = checked;
            } else {
                // If the current store is not found, add it to the parsed stores array
                parsedStores.push({ number: currentStore.number, checked });
            }
            // Save the updated stores array to local storage
            localStorage.setItem('secondStores', JSON.stringify(parsedStores));
            // Update the state in the parent component
            setStores(parsedStores);
        }
    }, [checked, currentStore.number, setStores]);

    return (
        <div className="store-bulmag">
            <div className="shell">
                <div className="store-bulmag__inner" onClick={toggleStoreChecked} style={{
                    backgroundColor: checked ? '#FF647B' : '#5BC0DE',
                    color: checked ? 'white' : 'black'
                }}>
                    <p>
                        {currentStore.name}
                    </p>

                    <p>
                        {currentStore.number}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StoreBulmag;
