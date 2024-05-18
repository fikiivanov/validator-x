import React from 'react';
import { FaStoreAlt } from "react-icons/fa";

const StoreBilla = ({ store, setStores }) => {
    const toggleStoreChecked = () => {
        // Create a copy of the store
        const updatedStore = { ...store };
        // Update the checked property to true
        updatedStore.checked = true;
        // Set the state with the updated store
        setStores(prevStores => {
            // Find the index of the current store in the previous stores array
            const index = prevStores.findIndex(prevStore => prevStore.number === store.number);
            if (index !== -1) {
                // Create a copy of the previous stores array
                const updatedStores = [...prevStores];
                // Replace the current store with the updated store
                updatedStores[index] = updatedStore;
                // Return the updated stores array
                return updatedStores;
            }
            // Return the previous stores array unchanged if the store is not found
            return prevStores;
        });
    };

    return (
        <div className="store-billa">
            <div className="shell">
                <div className="store-billa__inner" onClick={toggleStoreChecked} style={{ backgroundColor: store.checked ? 'red' : '#9effa9' }}>
                    <p>
                        {store.number}
                    </p>
                    <FaStoreAlt />
                </div>
            </div>
        </div>
    );
}

export default StoreBilla;
