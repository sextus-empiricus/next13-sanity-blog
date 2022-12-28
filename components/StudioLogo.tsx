import React from 'react';
import Image from 'next/image';
import avatar from '../public/images/avatar.png';

const StudioLogo = (props: any) => {
   const { renderDefault } = props;
   return (
      <div className="flex items-center space-x-2">
         <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden">
            <Image src={avatar} alt="Socrates" fill className=" object-cover" />
         </div>
         {renderDefault && <>{renderDefault(props)}</>}
      </div>
   );
};

export default StudioLogo;
