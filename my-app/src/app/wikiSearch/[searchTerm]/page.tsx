import getWikiResults from "@/lib/features/wikiSearch/getWikiResults"
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import WikiPostItem from "./components/wikiPostItem"
import Link from "next/link"

type Props = {
    params: {
        searchTerm: string
    }
}

export async function generateMetadata({ params: { searchTerm } }: Props) {
    //we can request the data (getWikiResults) multiple times. Next.js will de-duplocate
    const wikiData: Promise<WikiSearchResult> = getWikiResults(searchTerm)
    const data = await wikiData
    const displayTerm = searchTerm.replaceAll("%20"," ")

    //if not found...
    if(!data?.query?.pages){
        return{
            title: `${displayTerm} not found`
        }
    }

    return {
        title: displayTerm,
        description: `Search results for ${displayTerm}`
    }
}

export default async function WikiSearchResults({ params: {searchTerm} }: Props) {

    //create a Promise for the getWikiResults function
    const wikiData: Promise<WikiSearchResult> = getWikiResults(searchTerm)

    //wait untill that promise is done and store it in data
    const data = await wikiData

    //store the results, and check if they type matches wikiResult or is undefined
    const results: WikiResult[] | undefined = data?.query?.pages

    const content = (
        <main key={searchTerm} className="container mx-auto py-1">
            {results
                ? <Card key='found' x-chunk="wikiSearch">
                    <CardHeader>
                            <CardTitle>Found wiki articles</CardTitle>
                            <CardDescription>results shown below</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-8">
                            {Object.values(results).map( result => (
                                <WikiPostItem key={`container_${result.pageid}`} result={result}/>
                            ))}
                        </CardContent>
                </Card>
                : <Card key='not found' x-chunk="wikiSearch">
                    <CardHeader>
                        <CardTitle>Not found</CardTitle>
                        <CardDescription>{searchTerm}</CardDescription>
                    </CardHeader>
                    <CardContent>
                    <Link href="/wikiSearch">You can try again here</Link>
                    </CardContent>
                </Card>
            }

        </main>
    )

  return content
}