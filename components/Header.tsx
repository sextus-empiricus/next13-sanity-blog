import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { courseUrl, socratesLogo } from '../configs/consts';

const Header = () => {
   return (
      <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
         <div className="flex items-center space-x-1">
            <Image
               src={socratesLogo}
               alt="logo"
               height={50}
               width={50}
               className="w-[50px] h-[50px] min-w-[50px] object-cover rounded-full"
            />
            <h1>Socrates Blog</h1>
         </div>
         <div>
            <Link
               href={courseUrl}
               className="px-5 py-3 text-sm md:text-base bg-gray-800 text-yellow-500 rounded-full flex items-center text-center">
               Check out the tutorial
            </Link>
         </div>
      </header>
   );
};

export default Header;
