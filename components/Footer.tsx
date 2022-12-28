import React from 'react';
import Link from 'next/link';
import { nanoid } from 'nanoid';

const footerData = {
   techStack: ['Sanity v3', 'TypeScript', 'Tailwind CSS', 'Auth', 'CMS'],
   links: [
      {
         id: nanoid(),
         text: "Go to Sony's website",
         href: 'https://www.papareact.com/',
      },
      {
         id: nanoid(),
         text: "Go to Sony's Youtube channel",
         href: 'https://www.youtube.com/@SonnySangha',
      },
      {
         id: nanoid(),
         text: 'Go to tutorial',
         href: 'https://www.youtube.com/watch?v=x3fCEPFgUSM&ab_channel=SonnySangha',
      },
      {
         id: nanoid(),
         text: 'Go to my project repository',
         href: 'https://github.com/sextus-empiricus/next13-sanity-blog',
      },
   ],
};

const Footer = () => {
   return (
      <footer className="text-white">
         <hr className="text-[#212b44]" />
         <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 py-8 px-10 justify-between">
            <div className="flex flex-col space-y-2">
               <p className="text-white">
                  This project is based on{' '}
                  <span className="text-lizard_green">Sonny Sangha&apos;s</span>{' '}
                  youtube tutorial
               </p>
               <div className="flex space-x-4 flex-wrap">
                  <p className="flex-none">Tech stack:</p>
                  {footerData.techStack.map((el, index, arr) => (
                     <>
                        <p className="flex-none" key={nanoid()}>
                           {el}
                        </p>
                        {index + 1 < arr.length && (
                           <span className="text-happy_pink"> | </span>
                        )}
                     </>
                  ))}
               </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end space-x-3 flex-wrap display-none">
               {footerData.links.map((el, index, arr) => (
                  <>
                     <div key={el.id} className="hover:text-lizard_green">
                        <Link target="_blank" href={el.href}>
                           {el.text}
                        </Link>
                     </div>
                     {index + 1 < arr.length && (
                        <span className="text-happy_pink"> | </span>
                     )}
                  </>
               ))}
            </div>
         </div>
      </footer>
   );
};

export default Footer;
