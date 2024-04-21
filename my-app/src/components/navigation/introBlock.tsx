import { CardTitle, CardDescription, CardHeader, CardFooter, Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react"
import Link from "next/link"

export default function IntroBlock(
  MainBlock: { title: string; body: string; cta?: string; href?: any; }, 
  SecondaryBlock?: { preTitle: string ; title: string ; body: string ; sub: string ; } | undefined, 
  thirdBlock?: { preTitle: string ; title: string ; body: string ; sub: string ; } | undefined
) {

    return (
        <div className="grid gap-4 xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          {/*  */}
  
          <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
            <CardHeader className="pb-3">
              <CardTitle>{MainBlock.title}</CardTitle>
              <CardDescription className="text-balance leading-relaxed">
                {MainBlock.body}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              {MainBlock.cta && <Button><Link href={MainBlock.href}>{MainBlock.cta}</Link></Button>}
            </CardFooter>
          </Card>
  
          {SecondaryBlock && <Card x-chunk="dashboard-05-chunk-1">
            <CardHeader className="pb-2">
              <CardDescription>{SecondaryBlock.preTitle}</CardDescription>
              <CardTitle className="text-4xl">{SecondaryBlock.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">{SecondaryBlock.body}</div>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">{SecondaryBlock.sub}</div>
            </CardFooter>
          </Card>}
  
          {thirdBlock && <Card x-chunk="dashboard-05-chunk-2">
            <CardHeader className="pb-2">
              <CardDescription>{thirdBlock.preTitle}</CardDescription>
              <CardTitle className="text-4xl">{thirdBlock.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">{thirdBlock.body}</div>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">{thirdBlock.sub}</div>
            </CardFooter>
          </Card>}
  
        </div>
    )
  }