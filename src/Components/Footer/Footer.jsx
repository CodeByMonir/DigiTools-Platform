import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import { TbBrandInstagramFilled } from 'react-icons/tb';

const Footer = () => {
    return (
        <div>
            <footer className="p-10 bg-neutral">
                <div className='footer lg:footer-horizontal text-neutral-content flex justify-around'>
                    <aside>
                    <img src="digitools.png" alt="" />
                    <p>
                        Premium digital tools for creators,<br/>professionals, and businesses. Work smarter<br/>with our suite of powerful tools.
                    </p>
                    </aside>

                <nav>
                    <h6 className="font-medium text-white text-[20px] leading-5">Product</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Templates</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav>
                    <h6 className="font-medium text-white text-[20px] leading-5">Company</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press</a>
                </nav>
                <nav>
                    <h6 className="font-medium text-white text-[20px] leading-5">Resources</h6>
                    <a className="link link-hover">Documentation</a>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">Contact</a>
                </nav>

                <nav>
                    <h6 className="font-medium text-white text-[20px] leading-5">Social Links</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a className='bg-white p-1 rounded-full text-black'>
                            <TbBrandInstagramFilled />
                        </a>
                        <a className='bg-white p-1 rounded-full text-black'>
                            <FaFacebookSquare />
                        </a>
                        <a className='bg-white p-1 rounded-full text-black'>
                            <RiTwitterXLine />
                        </a>
                    </div>
                </nav>
                </div>

                <hr className='border border-white outline-0 my-5 max-w--[1200px] mx-auto' />
                <div className='flex items-center flex-col md:flex-row justify-around'>
                    <h1 className='leading-6 text-[#FAFAFA] mb-6'>© 2026 Digitools. All rights reserved.</h1>
                    <div className='text-[#FAFAFA] flex items-center gap-10'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;