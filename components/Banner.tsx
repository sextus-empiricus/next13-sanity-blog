import React from 'react';

const features = [
   'New brain features',
   'The latest ideas',
   'The weekly study',
   'Pure knowledge & More!',
];

const Banner = () => {
   return (
      <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
         <div>
            <h1 className="text-7xl title_gradient">
               Socartes{"'"} daily blog
            </h1>
            <h2 className="mt-5 md:mt-0.5 text-white">
               Welcome to{' '}
               <span className="underline decoration-4 decoration-lizard_green">
                  Every Philosopher{' '}
               </span>
               favorite blog!
            </h2>
         </div>
         <p className="mt-5 md:mt-2 max-w-sm text-white">
            {features.map((el, index, arr) => (
               <>
                  {el}
                  {index + 1 < arr.length && (
                     <span className="text-happy_pink"> | </span>
                  )}
               </>
            ))}
         </p>
      </div>
   );
};

export default Banner;
