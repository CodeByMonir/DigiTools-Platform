import React from 'react';
import { toast } from 'react-toastify';

const MainConZ = ({data, cartCount, setCartCount}) => {
    const handleRemove = () => {
        const removeData = cartCount.filter((remove) => remove.id != data.id);
        setCartCount(removeData);
        toast.error(`${data.name} is removed`)
    }

    return (
        <div>
            <div key={data.id} className='mb-4 p-5 flex items-center gap-4 bg-[#F9FAFC] rounded-xl shadow-xl'>
                                    <div>
                                        <div className='flex items-center justify-center w-15 h-15 rounded-full border border-[#F2F2F2]'>
                                            <img src={data.icon} alt="Icon" />
                                        </div>
                                    </div>
                                    <div className='w-full'>
                                        <h1 className='text-[#101727] font-bold text-[20px]'>{data.name}</h1>
                                        <p className='text-[#627382] '>${data.price}/{data.period}</p>
                                    </div>
                                    <button onClick={handleRemove} className='font-bold text-[#FF3980]'>Remove</button>
                                </div>
        </div>
    );
};

export default MainConZ;