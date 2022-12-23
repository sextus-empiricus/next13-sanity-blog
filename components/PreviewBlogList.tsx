'use client';

import React from 'react';
import { usePreview } from '../lib/sanity.preview';
import BlogList from './BlogList';

interface Props {
   query: string;
}

export default function PreviewBlogList({ query }: Props) {
   const posts = usePreview(null, query);
   return <BlogList posts={posts} />;
}
