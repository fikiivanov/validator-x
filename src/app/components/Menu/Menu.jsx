import React from 'react';
import './Menu.scss'
import { ProgressIndicator } from '../ProgessIndicator/ProgressIndicator';

const Menu = ({ stores, setStores }) => {


    const handleResetButtonClick = () => {
        // Create a new array with all stores unchecked
        const updatedStores = stores.map(store => ({ ...store, checked: false }));
        // Update the state with the modified stores array
        setStores(updatedStores);
        // Update the local storage to reflect the changes
        localStorage.setItem('stores', JSON.stringify(updatedStores));
    };

    return (
        <div className="menu">
            <div className="shell">
                <div className="menu__inner">
                    <div>
                        <button className="reset"
                            onClick={handleResetButtonClick}>
                            Обнови
                        </button>

                        <p>Трябва и да презаредиш ръчно!</p>
                    </div>

                   <ProgressIndicator stores={stores}/>
                </div>
            </div>
        </div>
    );
};

export default Menu;
