import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Card = ({ data, cartCount, setCartCount }) => {
    const [isSelected, setIsSelected] = useState(false);
    const handleChoosePackage = () => {
        const findItem = cartCount.find((count) => data.id === count.id) 
        if (findItem){
            toast.error(`${data.name} "is exist."`)
            return;
        }
        toast.success(`${data.name} package is selected`);
        setIsSelected(true);
        setCartCount([...cartCount, data]);
    };
    
    return (
        <div className='border border-[#F2F2F2] rounded-md shadow-md p-6 space-y-4'>
            <div className='flex justify-between'>
                <div className='flex items-center justify-center w-15 h-15 rounded-full border border-[#F2F2F2] p-2'>
                    <img src={data.icon} alt="Icon" />
                </div>
                <div>
                    <p className={
                        data.tag === "new"
                            ? "bg-[#DBFCE7] font-medium text-[14px] text-[#0A883E] rounded-full py-1.5 px-3"
                            : data.tag === "popular"
                                ? "bg-[#E1E7FF] font-medium text-[14px] text-[#4F39F6] rounded-full py-1.5 px-3"
                                : "bg-[#FEF3C6] font-medium text-[14px] text-[#BB4D00] rounded-full py-1.5 px-3"
                    }>{data.tag}</p>
                </div>
            </div>
            <h1 className='text-[#101727] font-bold text-[24px]'>{data.name}</h1>
            <p className='text-[#627382] leading-5 line-clamp-2'>{data.description}</p>
            <p className='text-[#627382] '><span className='text-[#101727] font-bold text-[24px]'>${data.price}</span>/{data.period}</p>
            <ul>
                {
                    data.features.map((feature) => {
                        return (
                            <li key={feature} className='flex gap-2'><img src="/public/check.png" alt="" />{feature}</li>
                        )
                    })
                }
            </ul>
            <button onClick={handleChoosePackage} className='btn btn-primary w-full rounded-full'>{isSelected === true ? "Added" : "Buy Now"}</button>
        </div>
    );
};

export default Card;