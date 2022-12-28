import React from 'react';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const StudioNavbar = (props: any) => {
   return (
      <div className="flex-col">
         <div className="flex items-center justify-between p-5">
            <Link
               href="/"
               className="text-yellow-400 flex items-center text-white">
               <ArrowUturnLeftIcon className="h-6 w-6 mr-2 text-lizard_green" />
               Back to home page
            </Link>
         </div>
         {props.renderDefault(props)}
      </div>
   );
};

export default StudioNavbar;
