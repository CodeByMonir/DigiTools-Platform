import { IoCartOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';
import MainConZ from './MainConZ';

const MainConY = ({ cartCount, setCartCount }) => {

    const totalAmount = cartCount.reduce((sum, curr) => sum + curr.price, 0);

    const handleBtn = () => {
        setCartCount([]);
        toast.success("Payment Successful");
        return;
    }

    return (
        <div className='p-10 border border-[#F2F2F2] rounded-md space-y-6'>
            <h1 className='text-[#101727] font-bold text-[24px]'>Your Cart</h1>
            <div>
                {
                    cartCount.length === 0 ? (
                        <div className="flex items-center justify-center flex-col gap2">
                            <IoCartOutline className='h-20 w-20 text-gray-300' />
                            <p className="text-gray-400">
                                Your cart is empty.
                            </p>
                        </div>
                    ) : (

                        cartCount.map((data) => {
                            return (
                                <MainConZ 
                                data={data}
                                cartCount={cartCount}
                                setCartCount={setCartCount}
                                />

                            );
                        })
                    )
                }
            </div>

            <div className='flex items-center justify-between text-[#627382] text-[24px]'>
                <p>Total :</p>
                <p>${totalAmount}</p>
            </div>

            <div>
                <button onClick={handleBtn} className='btn btn-primary w-full rounded-full'>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default MainConY;