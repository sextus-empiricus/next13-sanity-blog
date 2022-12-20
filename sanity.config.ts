import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { myTheme } from './theme';
import StudioNavbar from './components/StudioNavbar';
import StudioLogo from './components/StudioLogo';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
const dataset = process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET as string;

export default defineConfig({
   basePath: '/studio',
   name: 'Next_Sanity_Studio',
   title: 'Next Sanity Studio',

   projectId,
   dataset,

   plugins: [deskTool(), visionTool()],

   schema: {
      types: schemaTypes,
   },
   studio: {
      components: {
         logo: StudioLogo,
         navbar: StudioNavbar,
      },
   },
   theme: myTheme,
});
