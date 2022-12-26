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

export const revalidate = 60;

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
      <article className="px-10 pb-28">
         <section className="space-y-2 border text-white">
            <div className="relative min-h-[14rem] flex flex-column md:flex-row justify-between">
               <div className="absolute top-0 w-full h-full opacity-10 blur-sm">
                  <Image
                     className="object-cover object-center mx-auto"
                     alt="img"
                     src={urlFor(post.mainImage).url()}
                     fill
                  />
               </div>
               <section className="p-5 bg-yellow-500 w-full">
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
                        <div className="w-[40px] h-[40px] relative">
                           <Image
                              className="rounded-full"
                              alt="author"
                              src={urlFor(post.author.image).url()}
                              fill
                           />
                        </div>
                        <div className="w-64">
                           <h3 className="text-lg font-bold">
                              {post.author.name}
                           </h3>
                           <div>{/*Author BIO*/}</div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <h2 className="italic pt-10">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolore, dolorem explicabo fuga id illum iure optio
                        quaerat tenetur velit voluptatum.
                     </h2>
                  </div>
                  <div className="flex items-center justify-end mt-auto space-x-auto">
                     {post.categories.map((category) => (
                        <p
                           key={nanoid()}
                           className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4">
                           {category.title}
                        </p>
                     ))}
                  </div>
               </section>
            </div>
         </section>
         <PortableText value={post.body} components={RichTextComponents} />
      </article>
   );
};

export default Post;
