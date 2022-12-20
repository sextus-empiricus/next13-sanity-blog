import React from 'react';
import Image from 'next/image';

const imgUrl =
   'https://cdn.britannica.com/69/75569-050-7AB67C4B/herm-Socrates-half-original-Greek-Capitoline-Museums.jpg';

const StudioLogo = (props: any) => {
   const { renderDefault } = props;
   return (
      <div className="flex items-center space-x-2">
         <Image
            src={imgUrl}
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
