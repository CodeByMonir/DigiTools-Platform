import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";


const NavBar = ({cartCount}) => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm flex justify-around">
                <div className="">
                    <a className="btn btn-ghost text-xl"><img src="public/digitools.png" alt="" /></a>
                </div>
                <ul className="md:flex justify-between gap-8 font-semibold text-[#101727] hidden">
                    <li>Products</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>FAQ</li>
                </ul>
                <div className="flex items-center gap-3">
                    <div className="indicator">
                        <span className="badge badge-sm indicator-item p-0">{cartCount.length}</span>
                        <RiShoppingCartLine />
                    </div>
                    <div className="flex gap-2.5">
                        <button className="btn font-semibold rounded-full">Login</button>
                        <button className="btn btn-primary font-semibold rounded-full">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
