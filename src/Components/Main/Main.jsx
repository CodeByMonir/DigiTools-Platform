import React, { use, useState } from 'react';
import MainConX from '../MainCon/MainConX';
import MainConY from '../MainCon/MainConY';

const Main = ({ dataPromise, cartCount, setCartCount }) => {
    const data = use(dataPromise);
    const [selected, setSelected] = useState("products");

    return (
        <div className='max-w-300 mx-auto'>
            <main id='top' className='flex flex-col items-center text-center'>
                <h1 className='font-extrabold text-[48px] text-[#101727]'>Premium Digital Tools</h1>
                <p className='text-[#627382] leading-5'>Choose from our curated collection  of premium digital products designed<br /> to boost your productivity and creativity.</p>
                <div className='border-[#F6F6F6] border rounded-full w-50 overflow-hidden grid grid-cols-2 mt-4 mb-10'>
                    <button
                        onClick={() => setSelected("products")} className={`py-3.5 px-4 ${selected === "products" ? "btn btn-primary rounded-full" : "btn border-none bg-transparent"}`}>Products</button>

                    <button
                        onClick={() => setSelected("cart")}
                        className={`py-3.5 px-4 ${selected === "cart" ? "btn btn-primary rounded-full" : "btn border-none bg-transparent"}`}>Cart <span>({cartCount.length})</span></button>
                </div>
            </main>

            {
                selected === "products" ? (

                    <MainConX
                        key={data.id}
                        data={data}
                        cartCount={cartCount}
                        setCartCount={setCartCount}
                    />
                ) : (

                    <MainConY
                        key={data.id}
                        data={data}
                        cartCount={cartCount}
                        setCartCount={setCartCount}
                    />
                )
            }
        </div>
    );
};

export default Main;