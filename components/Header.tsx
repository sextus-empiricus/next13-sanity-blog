import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import avatarImg from '../public/images/avatar.png'

const courseUrl =
   'https://www.youtube.com/watch?v=x3fCEPFgUSM&ab_channel=SonnySangha';

const Header = () => {
   return (
      <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
         <Link href="/">
            <div className="flex items-center space-x-1">
               <div className="relative w-[50px] h-[50px]">
                  <Image
                     src={avatarImg}
                     alt="Socrates"
                     fill
                     className="absolute t-0 l-0 object-cover rounded-full"
                  />
               </div>
               <h1 className="text-white">Socrates Blog</h1>
            </div>
         </Link>
         <div>
            <Link
               href={courseUrl}
               className="px-5 py-3 text-sm md:text-base bg-lizard_green text-black rounded-full flex items-center text-center">
               Check out the tutorial
            </Link>
         </div>
      </header>
   );
};

export default Header;
