import { Metadata } from 'next';
import IntroBlock from "@/components/navigation/introBlock";


export const metadata: Metadata = {
  title: 'Content library',
  description: 'Create a library of content, so that you can re-use this content in multiple campaigns.'
}






const MainBlock = { 
  title: 'Content Library', 
  body: 'Create a library of content, so that you can re-use this content in multiple campaigns. Use your library to create new content, update existing content, or remove old content.', 
  cta: 'Create new content', 
  href: 'library/new'
};
const SecondaryBlock = { preTitle: 'Total', title: '1234', body: 'Content items', sub: '' };
// const thirdBlock = { preTitle: 'pretitle', title: 'Content Library', body: 'value2', sub: '' };






export default function LibraryPage() {
  return (
    <>
      {IntroBlock(MainBlock, SecondaryBlock)}
      <h1>Library page</h1>
      <p>This page is intended to showcase RTK Query.</p>
      
    </>
  );
}
