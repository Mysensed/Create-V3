"use client"

import Link from "next/link"
import { TooltipTrigger, TooltipContent, Tooltip, TooltipProvider } from "@/components/ui/tooltip"
import MainMenuData from './mainMenu'
import { usePathname } from "next/navigation";
import { Fragment, cloneElement } from "react"
import { 
  HomeIcon,
  SettingsIcon,
} from 'lucide-react';




   
export default function Sidebar() {
  const pathname = usePathname();


  const MenuLinks = MainMenuData.map((menuItem, index) => (
    <Tooltip key={index}>
      <TooltipTrigger asChild>
        <Link 
          href={menuItem.href} 
          className={`
            ${pathname.startsWith(menuItem.href) ? "group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold md:h-8 md:w-8 md:text-base" 
            : "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            }
          `}
        >
          {cloneElement(menuItem.icon as React.ReactElement<any>, { className: "h-5 w-5 transition-all group-hover:scale-110" })}

          <span className="sr-only">{menuItem.label}</span>
        </Link>
      </TooltipTrigger>
    </Tooltip>
  ))
  
  

  return (
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Link
              className={`
                ${pathname === "/" ? "group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold md:h-8 md:w-8 md:text-base" 
                : "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                }
              `}
              href="/"
            >
              <HomeIcon className="h-5 w-5" />
              <span className="sr-only">Create v3</span>
            </Link>

            {MenuLinks}
            
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  href="/settings"
                >
                  <SettingsIcon className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
    )
}
