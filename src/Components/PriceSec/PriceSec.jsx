import React from 'react';

const PriceSec = () => {
    return (
        <div className='max-w-300 mx-auto mb-30'>
            <main id='top' className='flex flex-col items-center text-center mb-15'>
                <h1 className='font-extrabold text-[48px] text-[#101727]'>Get Started in 3 Steps</h1>
                <p className='text-[#627382] leading-5'>Start using premium digital tools in minutes, not hours.</p>
            </main>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='bg-[#F9FAFC] border border-[#F2F2F2] p-6 space-y-4 rounded-xl shadow-md'>
                    <div>
                        <h1 className='font-bold text-[#101727] text-[24px]'>Starter</h1>
                        <p className='text-[#627382] leading-5'>Perfect for getting started</p>
                    </div>
                    <p className='text-[#627382] text-[20px]'><span className='text-[#101727] font-bold text-[40px]'>$0</span>/Month</p>

                    <ul className='mb-14'>
                        <li className='text-[#627382] leading-5 flex gap-4'><img src="/public/check.png" alt="" />Access to 10 free tools</li>
                        <li className='text-[#627382] leading-5 flex gap-4'><img src="/public/check.png" alt="" />Basic templates</li>
                        <li className='text-[#627382] leading-5 flex gap-4'><img src="/public/check.png" alt="" />Community support</li>
                        <li className='text-[#627382] leading-5 flex gap-4'><img src="/public/check.png" alt="" />1 project per month</li>
                    </ul>

                    <button className='btn btn-primary w-full p-3 font-bold rounded-full'>Get Started Free</button>
                </div>
                <div className='relative'>
                    <div className='absolute left-[35%] -top-5'>
                        <button className="btn btn-success rounded-full shadow-xl">Most Popular</button>
                    </div>
                    <div className='bg-[#4F39F6] border border-[#F2F2F2] p-6 space-y-4 rounded-xl shadow-md'>
                        <div>
                            <h1 className='font-bold text-white text-[24px]'>Pro</h1>
                            <p className='text-white leading-5'>Best for professionals</p>
                        </div>
                        <p className='text-white text-[20px]'><span className=' font-bold text-[40px]'>$29</span>/Month</p>

                        <ul>
                            <li className='text-white leading-5 flex gap-4'><img src="/public/check.png" alt="" />Access to all premium tools</li>
                            <li className='text-white leading-5 flex gap-4'><img src="/public/check.png" alt="" />Unlimited templates</li>
                            <li className='text-white leading-5 flex gap-4'><img src="/public/check.png" alt="" />Priority support</li>
                            <li className='text-white leading-5 flex gap-4'><img src="/public/check.png" alt="" />Unlimited projects</li>
                            <li className='text-white leading-5 flex gap-4'><img src="/public/check.png" alt="" />Cloud sync</li>
                            <li className='text-white leading-5 flex gap-4'><img src="/public/check.png" alt="" />Advanced analytics</li>
                        </ul>

                        <button className='btn btn-soft btn-primary w-full p-3 font-bold rounded-full'>Get Started Free</button>
                    </div>
                </div>
                <div className='bg-[#F9FAFC] border border-[#F2F2F2] p-6 space-y-4 rounded-xl shadow-md'>
                    <div>
                        <h1 className='font-bold text-[#101727] text-[24px]'>Enterprise</h1>
                        <p className='text-[#627382] leading-5'>For teams and businesses</p>
                    </div>
                    <p className='text-[#627382] text-[20px]'><span className='text-[#101727] font-bold text-[40px]'>$99</span>/Month</p>

                    <ul>
                        <li className='text-[#627382] leading-5 flex gap-4'><img src="/public/check.png" alt="" />Everything in Pro</li>
                        <li className='text-[#627382] leading-5 flex gap-4'><img src="/public/check.png" alt="" />Team collaboration</li>
                        <li className='text-[#627382] leading-5 flex gap-4'><img src="/public/check.png" alt="" />Custom integrations</li>
                        <li className='text-[#627382] leading-5 flex gap-4'><img src="/public/check.png" alt="" />Dedicated support</li>
                        <li className='text-[#627382] leading-5 flex gap-4'><img src="/public/check.png" alt="" />SLA guarantee</li>
                        <li className='text-[#627382] leading-5 flex gap-4'><img src="/public/check.png" alt="" />Custom branding</li>
                    </ul>

                    <button className='btn btn-primary w-full p-3 font-bold rounded-full'>Get Started Free</button>
                </div>
            </div>
        </div>
    );
};

export default PriceSec;