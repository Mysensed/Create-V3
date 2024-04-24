import { CardTitle, CardDescription, CardHeader, CardFooter, Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react"
import Link from "next/link"


interface Content {
  preTitle?:string;
  title?: string;
  body?: string;
  cta?: string;
  href?: string;
  footer?: string;
}

interface IntroBlockProps {
  content: Content[];
}

const IntroBlock: React.FC<IntroBlockProps> = ({ content }) => {
  const itemCount = content ? content.length : 0;

  let columnOneClassName: string = "";
  let columnTwoClassName: string = "";
  if (itemCount === 1) {
    columnOneClassName = "sm:col-span-4";
  } else if (itemCount === 2) {
    columnOneClassName = "sm:col-span-2";
    columnTwoClassName = "sm:col-span-2";
  } else if (itemCount === 3) {
    columnOneClassName = "sm:col-span-2";
  }
 
  if (itemCount > 4) {
    throw new Error('IntroBlock can only accept up to 4 content items');
  }
  
  if (itemCount > 0)
    return (
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 pb-5">
        {content.map((item, index) => (
          <Card 
            key={index}
            className={index === 0 ? columnOneClassName : index === 1 ? columnTwoClassName : ""}
            >
            <CardHeader className={index === 0 ? 'pb-3' : 'pb2' }>
              {index === 0 
                ? <>
                {item.preTitle && <CardDescription>{item.preTitle}</CardDescription>}
                {item.title && <CardTitle>{item.title}</CardTitle>}
                {item.body && <CardDescription className="text-balance leading-relaxed">{item.body}</CardDescription>}
                </>
                : <>
                {item.preTitle && <CardDescription>{item.preTitle}</CardDescription>}
                {item.title && <CardTitle className="text-4xl">{item.title}</CardTitle>}
                </>
              } 
            </CardHeader>
            {index !== 0 && item.body && 
              <CardContent><div className="text-xs text-muted-foreground">{item.body}</div></CardContent>
            }
            <CardFooter>
              {item.footer && <div className="text-xs text-muted-foreground">{item.footer}</div>}
              {item.cta && item.href && <Button><Link href={item.href}>{item.cta}</Link></Button>}
            </CardFooter>
          </Card>
        ))}

      </div>
    )
  else {
    return null;
  }
};

export default IntroBlock;