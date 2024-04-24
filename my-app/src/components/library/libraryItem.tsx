import { PlusCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { validateURL } from "@/lib/features/validateUrl/validateUrl";
import {ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger,} from "@/components/ui/context-menu";

import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    title: string,
    preTitle:string,
    subTitle:string,
    image: string,
}

export default function LibraryItem({title,image,preTitle,subTitle, className, ...props }: Props) {
    const validatedImage = validateURL(image);
    return (
        <div className={cn("space-y-3", className)} {...props}>
            <ContextMenu>
                <ContextMenuTrigger>
                    <div className="w-[250] overflow-hidden rounded-md">
                        <Image
                            src={validatedImage}
                            alt={title}
                            width={250}
                            height={250}
                            className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[4/4]"   
                        />
                    </div>
                </ContextMenuTrigger>
                <ContextMenuContent className="w-40">
                    <ContextMenuSeparator />
                    <ContextMenuItem>Edit / Open</ContextMenuItem>
                    <ContextMenuItem>Duplicate</ContextMenuItem>
                    <ContextMenuSeparator />
                </ContextMenuContent>
            </ContextMenu>

            <div className="space-y-1 text-sm">
                <h3 className="font-medium leading-none">{title}</h3>
                <p className="text-xs text-muted-foreground">{preTitle}</p>
            </div>
        </div>
            
    )
}
