import React from 'react';
import Card from '../Cards/Card';

const MainConX = ({ data, cartCount, setCartCount }) => {
    
    return (
        <main id='main' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-30">
            {data.map((data) => {
                return (
                    <Card
                        key={data.id}
                        data={data}
                        cartCount={cartCount}
                        setCartCount={setCartCount}
                    />
                );
            })}
        </main>
    );
};

export default MainConX;