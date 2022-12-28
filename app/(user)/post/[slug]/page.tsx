import React from 'react';
import Image from 'next/image';
import { groq } from 'next-sanity';
import { client } from '../../../../lib/sanity.client';
import urlFor from '../../../../lib/urlFor';
import { nanoid } from 'nanoid';
import { PortableText } from '@portabletext/react';
import RichTextComponents from '../../../../components/RichTextComponents';

interface Props {
   params: {
      slug: string;
   };
}

export const revalidate = 3600;

export async function generateStaticParams() {
   const query = groq`*[_type == 'post']
   {
      slug
   }
   `;

   const slugs: Post[] = await client.fetch(query);
   const slugRoutes = slugs.map((slug) => slug.slug.current);

   return slugRoutes.map((slug) => ({
      slug,
   }));
}

const Post = async ({ params: { slug } }: Props) => {
   const query = groq`
   *[_type=='post' && slug.current == $slug][0]
   {
      ...,
      author->,
      categories[]->
   }
   `;

   const post: Post = await client.fetch(query, { slug });

   return (
      <article className="px-10 text-white">
         <section className="space-y-2 text-white">
            <div className="relative min-h-[14rem] flex flex-column md:flex-row justify-between">
               <div className="absolute top-0 w-full h-full opacity-10 blur-sm">
                  <Image
                     className="object-cover object-center mx-auto"
                     alt="img"
                     src={urlFor(post.mainImage).url()}
                     fill
                  />
               </div>
               <section className="p-5 post-banner-bg w-full">
                  <div className="flex flex-col md:flex-row justify-between gap-y-5">
                     <div>
                        <h1 className="text-4xl font-extrabold">
                           {post.title}
                        </h1>
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
                     <div className="flex items-center space-x-2">
                        <div className="w-[50px] h-[50px] relative">
                           <Image
                              className="rounded-full"
                              alt="author"
                              src={urlFor(post.author.image).url()}
                              fill
                           />
                        </div>
                        <div className="w-64">
                           <h3 className="text-lg font-bold">
                              <span className="opacity-50 font-normal text-base mr-2">
                                 author:
                              </span>
                              {post.author.name}
                           </h3>
                           <div>
                              <p className="line-clamp-2 white">
                                 {post.author.bio[0].children[0].text}
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <h2 className="italic pt-10">{post.description}</h2>
                  </div>
                  <div className="flex items-center justify-end mt-auto space-x-auto">
                     {post.categories.map((category) => (
                        <p
                           key={nanoid()}
                           className="bg-happy_pink text-white px-3 py-1 rounded-full text-sm font-semibold mt-4">
                           {category.title}
                        </p>
                     ))}
                  </div>
               </section>
            </div>
         </section>
         <div className="relative z-0">
            <PortableText value={post.body} components={RichTextComponents} />
            <div className="absolute bg-pink-gradient w-[30%] h-[30%] left-0 top-0 -z-10 opacity-30" />
            <div className="absolute bg-blue-gradient w-[30%] h-[30%] right-0 bottom-0 -z-10 opacity-40" />
         </div>
      </article>
   );
};

export default Post;
