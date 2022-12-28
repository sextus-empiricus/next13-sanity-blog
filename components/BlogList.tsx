import React from 'react';
import { nanoid } from 'nanoid';
import ClientSideRoute from './ClientSideRoute';
import PostCard from './PostCard';

interface Props {
   posts: Post[];
}

const BlogList = ({ posts }: Props) => {
   return (
      <div className="relative z-0">
         <hr className="border-happy_pink mb-10" />
         <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 px-10 gap-10 pb-24">
            {posts.map((post) => (
               <ClientSideRoute
                  key={nanoid()}
                  route={`/post/${post.slug.current}`}>
                  <PostCard post={post} />
               </ClientSideRoute>
            ))}
            <div className="absolute bottom-0 right-0 bg-blue-gradient w-[50%] h-[50%] -z-10"></div>
         </div>
      </div>
   );
};

export default BlogList;
