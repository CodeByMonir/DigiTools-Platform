import React from 'react';

const GetSec = () => {
    return (
        <div className='py-30 bg-[#F9FAFC]'>
            <div className='max-w-300 mx-auto'>
                <main id='top' className='flex flex-col items-center text-center mb-15'>
                    <h1 className='font-extrabold text-[48px] text-[#101727]'>Get Started in 3 Steps</h1>
                    <p className='text-[#627382] leading-5'>Start using premium digital tools in minutes, not hours.</p>
                </main>
                <main id='card' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5'>
                    <div className='p-6 border border-white shadow-md rounded-xl'>
                        <div className='flex justify-end'>
                            <span className='flex items-center justify-center bg-[#4F39F6] text-white rounded-full py-1 px-1.5 w-10 h-10'>01</span>
                        </div>

                        <div className='flex items-center flex-col space-y-4 mb-16 text-center'>
                            <div className='h-20 w-20 border border-white rounded-full overflow-hidden bg-[#4F39F640] flex items-center justify-center'>
                                <img src="user.png" alt="" />
                            </div>
                            <h1 className='font-bold text-[24px] text-[#101727]'>Create Account</h1>
                            <p className='text-[#627382] leading-5'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>

                    </div>
                    <div className='p-6 border border-white shadow-md rounded-xl'>
                        <div className='flex justify-end'>
                            <span className='flex items-center justify-center bg-[#4F39F6] text-white rounded-full py-1 px-1.5 w-10 h-10'>02</span>
                        </div>

                        <div className='flex items-center flex-col space-y-4 mb-16 text-center'>
                            <div className='h-20 w-20 border border-white rounded-full overflow-hidden bg-[#4F39F640] flex items-center justify-center'>
                                <img src="package.png" alt="" />
                            </div>
                            <h1 className='font-bold text-[24px] text-[#101727]'>Choose Products</h1>
                            <p className='text-[#627382] leading-5'>Browse our catalog and select the tools that fit your needs.</p>
                        </div>

                    </div>
                    <div className='p-6 border border-white shadow-md rounded-xl'>
                        <div className='flex justify-end'>
                            <span className='flex items-center justify-center bg-[#4F39F6] text-white rounded-full py-1 px-1.5 w-10 h-10'>03</span>
                        </div>

                        <div className='flex items-center flex-col space-y-4 mb-16 text-center'>
                            <div className='h-20 w-20 border border-white rounded-full overflow-hidden bg-[#4F39F640] flex items-center justify-center'>
                                <img src="rocket.png" alt="" />
                            </div>
                            <h1 className='font-bold text-[24px] text-[#101727]'>Start Creating</h1>
                            <p className='text-[#627382] leading-5'>Download and start using your premium tools immediately.</p>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default GetSec;