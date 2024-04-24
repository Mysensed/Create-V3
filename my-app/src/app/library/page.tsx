import { Metadata } from 'next';
import IntroBlock from "@/components/ui/introBlock";
import { Separator } from '@/components/ui/separator';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

//import { getLibrary } from '@/lib/features/library/library'
import { LibraryItems } from '@/components/library/libraryItems';

export const metadata: Metadata = {
  title: 'Content library',
  description: 'Email content library, use individual content items to create a campaign. In this library you can browse, select, and maintain content'
}

export default async function LibraryPage() {
  
  //const { library, isLoading, error } = useGetLibraryQuery
  //const library = await getLibrary()
    
  const introContent = [
    { 
      preTitle: '',
      title: 'Content Library', 
      body: 'Create a library of content, so that you can re-use this content in multiple campaigns. Use your library to create new content, update existing content, or remove old content.', 
      cta: 'Create new content', 
      href: 'library/new',
      footer: '',
    },
    { 
      preTitle: 'total content items',
      //title: library ? library.length.toString() : '0', 
      body: '',
      cta: '', 
      href: '',
      footer: '',
    },
  ]

  

  return (
    <>
      <IntroBlock content={introContent}/>

      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Recent
          </h2>
          <p className="text-sm text-muted-foreground">
            Your most recent content
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="relative w-full h-[320px]">
        <div className="absolute left-0 right-0">
          <ScrollArea className="">
            <div className="flex space-x-4 pb-4">
              <LibraryItems page={1} />
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
        </div>
      </div>



      <div className="mt-6 space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">
          All content
        </h2>
        <p className="text-sm text-muted-foreground">
          Browse through all content
        </p>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {/* {allContent.map((content) => (
              <Artwork
                key={content.name}
                content={content}
                className="w-[150px]"
                aspectRatio="square"
                width={150}
                height={150}
              />
            ))} */}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>


    </>
  );
}
