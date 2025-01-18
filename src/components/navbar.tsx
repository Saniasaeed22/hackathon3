import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoIosNotifications, IoMdSettings } from "react-icons/io";

function Navbar() {
  return (
    <div className="flex flex-wrap items-center justify-between p-4 w-full h-auto shadow-sm bg-white">
      {/* Logo */}
      <div className="flex items-center py-2">
        <h1 className="text-[#3563E9] font-semibold text-2xl md:text-3xl font-Plus Jakarta Sans">
          <Link href="/"> MORENT </Link>
        </h1>
      </div>

      {/* Search Bar */}
      <div className="flex flex-1 justify-center mt-4 md:mt-0 max-w-[600px]">
        <div
          className="flex items-center space-x-2 outline outline-1 outline-gray-300 text-[#596780] 
          rounded-full px-4 py-2 w-full sm:w-[90%] lg:w-[492px]"
        >
          <div className="text-[#596780] text-2xl md:text-3xl">
            <CiSearch />
          </div>
          <input
            type="text"
            placeholder="Search something here"
            className="flex-1 bg-transparent outline-none text-sm"
          />
          <img src="/rentacar/filter.png" 
              alt="filter"
           className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      </div>

      {/* Icons Section */}
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <Link href="/carDetail" className="text-[#596780] text-xl md:text-2xl">
          <FaHeart/>
        </Link>
        <p className="text-[#596780] text-xl md:text-2xl"><IoIosNotifications/></p>
         <p className="text-[#596780] text-xl md:text-2xl"><IoMdSettings /></p>
        <img
          src="/rentacar/Profil.png" alt="account"
          className="w-8 h-8 md:w-[44px] md:h-[44px] rounded-full"
        />
      


  
      </div>
    </div>
  );
}

export default Navbar;
