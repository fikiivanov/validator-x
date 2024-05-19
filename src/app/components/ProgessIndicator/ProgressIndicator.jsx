import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import './ProgressIndicator.scss'

export const ProgressIndicator = ({ stores }) => {
    // Calculate the number of stores with checked: true
    const checkedStoresCount = stores.filter(store => store.checked).length;
    // Calculate the percentage completed
    const totalStores = stores.length;

    const completedPercentage = parseInt(
        (totalStores > 0 ? (checkedStoresCount / totalStores) * 100 : 0)
        .toLocaleString('en-US', { maximumFractionDigits: 0 })
        .replace(/,/g, ''), 10);;
    

    return (
        <div className="progress-indicator">
            <ProgressBar
                bgColor='#265E86'
                borderRadius='10px'
                barContainerClassName="container"
                completed={
                    completedPercentage}
                maxCompleted={88} />
        </div>
    );
};
