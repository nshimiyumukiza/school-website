import { useEffect, useRef, useState } from "react"
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import logo from "./image/logo.png";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutSide = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenu(false);
            }

        }
        if (menu) {
            document.addEventListener("mousedown", handleClickOutSide);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutSide);
        };

    }, [menu])


    return (
        <div className='bg-gray-200'>
            <div className='flex justify-between px-8 mx-auto w-11/12 py-2'>
                <div>
                   <img className="h-14" src={logo} alt="logo" />
                </div>
                <div className=' hidden md:flex space-x-5'>
                    <button className='border-2 border-blue-400 rounded-lg px-3 py-2 text-blue-500 hover:text-white hover:bg-blue-400'>Login</button>
                    <button className='border rounded-lg px-3 py-2 bg-blue-400 text-white hover:bg-gray-200 hover:border-2 hover:border-blue-400 hover:text-black'>Register</button>
                </div>
                <div onClick={() => setMenu(prev => !prev)} className="flex md:hidden">
                    {!menu && (
                        <div>
                            <IoMenuOutline className="text-3xl" />
                        </div>
                    )}
                </div>

                {menu && (
                    <div
                        ref={menuRef}
                        className="absolute top-14 right-0 bg-green-500 rounded-lg p-4 w-48 md:hidden shadow-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-semibold text-lg">menu</span>
                            <AiOutlineClose onClick={() => setMenu(false)} className="text-red-500 text-2xl" />
                        </div>
                        <div className='flex flex-col space-y-3'>
                            <button className='border-2 border-blue-400 rounded-lg px-3 py-2 text-blue-500 hover:text-white hover:bg-blue-400'>Login</button>
                            <button className='border rounded-lg px-3 py-2 bg-blue-400 text-white hover:bg-gray-200 hover:border-2 hover:border-blue-400 hover:text-black'>Register</button>
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar

