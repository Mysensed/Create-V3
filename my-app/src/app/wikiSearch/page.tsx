import { Metadata } from 'next';
import IntroBlock from "@/components/navigation/introBlock";
import Search from './components/Search';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



const MainBlock = { 
  title: 'Wiki search', 
  body: 'Demo page for tutorial search in next.js. Creating a searchbar and getting results from wikipedia', 
  cta: 'view tutorial', 
  href: 'https://www.youtube.com/watch?v=PcHY2Py6AQY&list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj&index=5&ab_channel=DaveGray'
};
// const SecondaryBlock = { preTitle: 'Total', title: '1234', body: 'Content items', sub: '' };
// const thirdBlock = { preTitle: 'pretitle', title: 'Content Library', body: 'value2', sub: '' };






export default function LibraryPage() {
  return (
    <>
      {IntroBlock(MainBlock)}

      <Card x-chunk="wikiSearch" className="my-5">
        <CardHeader>
          <CardTitle>Form element</CardTitle>
          {/* <CardDescription>placeholder</CardDescription> */}
        </CardHeader>
        <CardContent>
          <Search />
        </CardContent>
      </Card>


      
    </>
  );
}
