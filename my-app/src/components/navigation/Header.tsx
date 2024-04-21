
"use client"

import Link from "next/link"
import { TooltipTrigger, TooltipContent, Tooltip, TooltipProvider } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { BreadcrumbLink, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbPage, BreadcrumbList, Breadcrumb } from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import MainMenuData from './mainMenu'
import { usePathname } from "next/navigation";
import Image from 'next/image'
import { Fragment,cloneElement } from "react"
import { HomeIcon, SettingsIcon,PanelLeftIcon } from "lucide-react"


export default function Header() {
  const paths:string = usePathname();
  const pathNames:string[] = paths.split('/').filter(segment => segment !== '');
  

  const MenuLinks = () => MainMenuData.map((menuItem, index) => (
    <Link 
      key={index} 
      href={menuItem.href} 
      className={`
        group
        flex
        items-center
        gap-4
        px-2.5
        ${paths.startsWith(menuItem.href) ? 
          "gap-2 rounded-full bg-primary text-primary-foreground font-semibold md:h-8 md:w-8 md:text-base" 
          : "text-muted-foreground hover:text-foreground"
        }
      `}
    >
      {cloneElement(menuItem.icon as React.ReactElement<any>, { className: "h-5 w-5 transition-all group-hover:scale-110" })}
      {menuItem.label}
    </Link>
  ))

  const Breadcrumbs = () => {
    return (
      <Breadcrumb className="hidden md:flex" key={`beadcrumbs_${paths}`}>
        <BreadcrumbList>
          {pathNames.map((link, index) => {
            const href:string = `/${pathNames.slice(0, index + 1).join('/')}`
            const linkName:string = link[0].toUpperCase() + link.slice(1, link.length)
            const isLastPath: boolean = pathNames.length === index + 1;

            return (
              <Fragment key={index}>
                <BreadcrumbItem>
                  {!isLastPath 
                    ? <BreadcrumbLink asChild><Link href={href}>{linkName}</Link></BreadcrumbLink>
                    :<BreadcrumbPage>{linkName}</BreadcrumbPage>
                  }
                </BreadcrumbItem>
                {!isLastPath  && <BreadcrumbSeparator />}
              </Fragment>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>
      )
  };







  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="sm:hidden" size="icon" variant="outline">
            <PanelLeftIcon className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="sm:max-w-xs" side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              className={`
                ${paths === "/" ? "group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold md:h-8 md:w-8 md:text-base" 
                : "flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                }
              `}
              href="/"
            >
              <HomeIcon className="h-5 w-5" />
              <span className="sr-only">Create v3</span>
            </Link>

            {MenuLinks()}

            <Link className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" href="/settings">
              <SettingsIcon className="h-5 w-5" />
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>

      {Breadcrumbs()} 
      

      <div className="relative ml-auto flex-1 md:grow-0">
        {/* <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          placeholder="Search..."
          type="search"
        /> */}
      </div>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="overflow-hidden rounded-full" size="icon" variant="ghost">
            <Image
              alt="Avatar"
              className="overflow-hidden rounded-full"
              height={36}
              src="https://www.place-hold.it/400"
              style={{
                aspectRatio: "36/36",
                objectFit: "cover",
              }}
              width={36}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}

