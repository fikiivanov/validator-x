import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

export const ProgressIndicator = ({ stores }) => {
    // Calculate the number of stores with checked: true
    const checkedStoresCount = stores.filter(store => store.checked).length;

    // Calculate the percentage completed
    const totalStores = stores.length;
    const completedPercentage = totalStores > 0 ? (checkedStoresCount / totalStores) * 100 : 0;

    return (
        <div className="progress-indicator">
            <ProgressBar completed={completedPercentage} customLabel='още малко' />
        </div>
    );
};
