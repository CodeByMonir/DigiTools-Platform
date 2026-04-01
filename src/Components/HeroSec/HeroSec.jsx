import React from 'react';
import { CiPlay1 } from 'react-icons/ci';

const HeroSec = () => {
    return (
        <>
            <div className='max-w-300 mx-auto flex flex-col md:flex-row items-center gap-15 py-15'>
                <div>
                    <div className="badge bg-[#E1E7FF] text-[#4F39F6] font-medium">
                        <div className="flex items-center justify-center relative h-4 w-4">
                            <div className="absolute rounded-full bg-[#4F39F6] h-4 w-4 opacity-15"></div>
                            <div className="absolute rounded-full bg-[#4F39F6] h-3 w-3 opacity-30"></div>
                            <div className="absolute rounded-full bg-[#4F39F6] h-1.5 w-1.5 opacity-45"></div>
                        </div>
                        New: AI-Powered Tools Available
                    </div>
                    <h1 className='font-extrabold text-[72px] leading-21'>
                        Supercharge Your<br />Digital Workflow
                    </h1>
                    <p className='leading-5 text-4.5 text-[#627382]'>Access premium AI tools, design assets, templates, and productivity<br />software—all in one place. Start creating faster today.<br />Explore Products
                    </p>
                    <div className='flex gap-4 mt-8'>
                        <button className='btn btn-primary font-bold rounded-full'>Explore Products</button>
                        <button className='btn btn-outline border-[#4F39F6] text-[#4F39F6] font-bold rounded-full'><CiPlay1 />Watch Demo</button>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src="public/banner.png" alt="" />
                </div>
            </div>

            <div className='bg-[#4F39F6] py-15 flex items-center justify-around'>
                <div>
                    <h1 className='font-extrabold text-[60px] text-white'>50K+</h1>
                    <p className='font-medium text-[24px] text-white'>Active Users</p>
                </div>
                <div>
                    <h1 className='font-extrabold text-[60px] text-white'>200+</h1>
                    <p className='font-medium text-[24px] text-white'>Premium Tools</p>
                </div>
                <div>
                    <h1 className='font-extrabold text-[60px] text-white'>4.9</h1>
                    <p className='font-medium text-[24px] text-white'>Rating</p>
                </div>
            </div>
        </>
    );
};

export default HeroSec;