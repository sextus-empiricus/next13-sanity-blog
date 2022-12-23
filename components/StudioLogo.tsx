import React from 'react';
import Image from 'next/image';
import { socratesLogo } from '../configs/consts';

const StudioLogo = (props: any) => {
   const { renderDefault } = props;
   return (
      <div className="flex items-center space-x-2">
         <Image
            src={socratesLogo}
            alt="Socrates"
            width={50}
            height={50}
            className="rounded-full object-cover"
         />
         {renderDefault && <>{renderDefault(props)}</>}
      </div>
   );
};

export default StudioLogo;
