import React from 'react';
import Image from 'next/image';
import urlFor from '../lib/urlFor';
import { nanoid } from 'nanoid';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

interface Props {
   post: Post;
}

const PostCard = ({ post }: Props) => {
   return (
      <div className="relative flex flex-col group cursor-pointer z-0">
         <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
            <Image
               className="object-cover object-left lg:object-center"
               src={urlFor(post.mainImage).url()}
               alt={post.author.name}
               fill
            />
            <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
               <div>
                  <p className="font-bold text-lizard_green break-words">
                     {post.title}
                  </p>
                  <p className="text-white">
                     {new Date(post._createdAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                     })}
                  </p>
               </div>
               <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                  {post.categories.map((category) => (
                     <div
                        key={nanoid()}
                        className="bg-happy_pink text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                        <p>{category.title}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         <div className="mt-5 flex-1">
            <p className="underline text-lg text-happy_pink font-bold">
               {post.title}
            </p>
            <p className="line-clamp-2 text-grey-500 text-white">
               {post.description}
            </p>
         </div>
         <p className="mt-5 font-bold text-white flex items-center group-hover:underline">
            Read Post
            <ArrowUpRightIcon className="ml-2 w-4 h-4" />
         </p>
         <div className="absolute bg-pink-gradient w-[30%] h-[30%] bottom-[50%] top-[50%] -z-10" />
      </div>
   );
};

export default PostCard;
