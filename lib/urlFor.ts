import { client } from './sanity.client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

export const urlFor = (src: any) => {
   return builder.image(src);
};

export default urlFor;
