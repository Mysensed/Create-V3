import Image from "next/image";
import { PlusCircleIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger,} from "@/components/ui/context-menu";

//import { Album } from "../data/albums";
interface Album {
    name: string
    artist: string
    cover: string
}
//import { playlists } from "../data/playlists";
const playlists = [
    "Recently Added",
    "Recently Played",
    "Top Songs",
    "Top Albums",
    "Top Artists",
    "Logic Discography",
    "Bedtime Beats",
    "Feeling Happy",
    "I miss Y2K Pop",
    "Runtober",
    "Mellow Days",
    "Eminem Essentials",
]

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Album;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function Artwork({
  album,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: AlbumArtworkProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md">
            <Image
              src={album.cover}
              alt={album.name}
              width={width}
              height={height}
              className={cn(
                "h-auto w-auto object-cover transition-all hover:scale-105",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square",
              )}
            />
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-40">
          <ContextMenuItem>Edit</ContextMenuItem>
          <ContextMenuItem>Duplicate</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Share</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{album.name}</h3>
        <p className="text-xs text-muted-foreground">{album.artist}</p>
      </div>
    </div>
  );
}