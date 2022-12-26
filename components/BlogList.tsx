import React from 'react';
import Image from 'next/image';
import urlFor from '../lib/urlFor';
import { nanoid } from 'nanoid';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import ClientSideRoute from './ClientSideRoute';

interface Props {
   posts: Post[];
}

const descriptionMock =
   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci animi aspernatur deserunt dicta dignissimos dolore, eius enim excepturi exercitationem expedita fugit illo, ipsam iste magni molestias obcaecati odio officia omnis quasi quia quisquam ratione recusandae repellendus repudiandae saepe sapiente similique sint, tenetur totam ullam unde velit veniam voluptate voluptatem.';

const BlogList = ({ posts }: Props) => {
   console.log(posts.length);
   return (
      <div>
         <hr className="border-amber-500 mb-10" />

         <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 px-10 gap-10 pb-24">
            {posts.map((post) => (
               <ClientSideRoute
                  key={nanoid()}
                  route={`/post/${post.slug.current}`}>
                  <div className="flex flex-col group cursor-pointer">
                     <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                        <Image
                           className="object-cover object-left lg:object-center"
                           src={urlFor(post.mainImage).url()}
                           alt={post.author.name}
                           fill></Image>
                        <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                           <div>
                              <p className="font-bold">{post.title}</p>
                              <p>
                                 {new Date(post._createdAt).toLocaleDateString(
                                    'en-US',
                                    {
                                       day: 'numeric',
                                       month: 'long',
                                       year: 'numeric',
                                    },
                                 )}
                              </p>
                           </div>
                           <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                              {post.categories.map((category) => (
                                 <div
                                    key={nanoid()}
                                    className="bg-yellow-500 text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                                    <p>{category.title}</p>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                     <div className="mt-5 flex-1">
                        <p className="underline text-lg font-bold">
                           {post.title}
                        </p>
                        <p className="line-clamp-2 text-grey-500">
                           {descriptionMock}
                        </p>
                     </div>
                     <p className="mt-5 font-bold flex items-center group-hover:underline">
                        Read Post
                        <ArrowUpRightIcon className="ml-2 w-4 h-4" />
                     </p>
                  </div>
               </ClientSideRoute>
            ))}
         </div>
      </div>
   );
};

export default BlogList;
