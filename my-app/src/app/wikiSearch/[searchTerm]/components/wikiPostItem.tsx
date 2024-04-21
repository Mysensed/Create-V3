//This will be an item to display 1 wiki article
//The prop type for this we did set as WikiResult

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


type Props = {
    result: WikiResult
}

export default function WikiPostItem({ result }: Props) {
    const item = (
      <div className="flex items-center gap-4">
        {result.thumbnail?.source && <Avatar className="hidden h-9 w-9 sm:flex">
          <AvatarImage src={result.thumbnail?.source.toString()} alt="Avatar" />
          <AvatarFallback>NA</AvatarFallback>
        </Avatar>}
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">
            {result.title}
          </p>
          <p className="text-sm text-muted-foreground">
            {result.extract}
          </p>
        </div>
        <div className="ml-auto">
          <Link href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank"><Button>Wiki</Button></Link>
        </div>
      </div>
    )
    
  return item
}