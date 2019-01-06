import React from 'react';
import ReactDOM from 'react-dom';
import ItemComponent from './ItemComponent';

const App = () => {
    let mockResponse = {
        name: 'Tafarel',
        class: 'Monk',
        level: 70,
        items: ['sword of hell', 'shield of doom', 'cap of fire', 'dagger of venom']
    }
    
    return (
        <div>
            <p>{mockResponse.name}</p>
            <p>{mockResponse.class}</p>
            <p>{mockResponse.level}</p>
            {mockResponse.items.map(currentItem => {
                return <ItemComponent item={currentItem} />
            })}
            {/* <p>{mockResponse.items}</p> */}
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);







