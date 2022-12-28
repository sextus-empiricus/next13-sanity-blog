import React from 'react';
import Image from 'next/image';
import urlFor from '../lib/urlFor';
import Link from 'next/link';

const RichTextComponents = {
   types: {
      image: ({ value }: any): any => {
         return (
            <div className="relative w-full h-[24rem] m-10 mx-auto">
               <Image
                  className="object-contain"
                  alt="Blog Post Image"
                  src={urlFor(value).url()}
                  fill
               />
            </div>
         );
      },
   },
   list: {
      bullet: ({ children }: any): any => (
         <ul className="ml-10 py-5 list-disc space-y-5 marker:text-lizard_green">
            {children}
         </ul>
      ),
      number: ({ children }: any): any => (
         <ol className="mt-lg list-decimal marker:text-lizard_green">
            {children}
         </ol>
      ),
   },
   block: {
      h1: ({ children }: any): any => (
         <h1 className="text-5xl py-10 font-bold break-words">{children}</h1>
      ),
      h2: ({ children }: any): any => (
         <h2 className="text-4xl py-10 font-bold break-words">{children}</h2>
      ),
      h3: ({ children }: any): any => (
         <h3 className="text-3xl py-10 font-bold break-words">{children}</h3>
      ),
      h4: ({ children }: any): any => (
         <h4 className="text-2xl py-10 font-bold break-words">{children}</h4>
      ),

      blockquote: ({ children }: any): any => (
         <blockquote className="border-l-lizard_green border-l-4 pl-5 my-5 italic">
            {children}
         </blockquote>
      ),
   },
   marks: {
      link: ({ children, value }: any) => {
         const rel = !value.href.startsWith('/')
            ? 'noreferrer noopener'
            : undefined;
         return (
            <Link
               href={value.href}
               rel={rel}
               className="underline decoration-yellow-500 hover:decoration-black text-lizard_green">
               {children}
            </Link>
         );
      },
   },
};
export default RichTextComponents;
