import { Metadata } from 'next';
import IntroBlock from "@/components/ui/introBlock";
import Search from './components/Search';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const introContent = [
  { 
    title: 'Wiki search', 
    body: 'Demo page for tutorial search in next.js. Creating a searchbar and getting results from wikipedia', 
    cta: 'view tutorial', 
    href: 'https://www.youtube.com/watch?v=PcHY2Py6AQY&list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj&index=5&ab_channel=DaveGray'
  },
]



export default function LibraryPage() {
  return (
    <>
      <IntroBlock content={introContent} />

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
