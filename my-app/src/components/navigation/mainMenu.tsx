import { 
    SquareIcon,
    LineChartIcon,
    BlocksIcon,
    MailIcon,
    LibraryIcon,
    Users2Icon,
    QuoteIcon,
    FileSearch,
  } from 'lucide-react';

interface MenuItem {
    label: string;
    href: string;
    icon: React.ReactNode;
}

const MainMenuData: MenuItem[] = [
    {
        label: 'Library', 
        href: '/library',
        icon: <LibraryIcon />,
    },
    {
        label: 'Blocks', 
        href: '/blocks',
        icon: <BlocksIcon/>,
    },
    {
        label: 'elements', 
        href: '/elements',
        icon: <SquareIcon/>,
    },
    {
        label: 'Emails', 
        href: '/emails',
        icon: <MailIcon/>,
    },
    {
        label: 'Reporting', 
        href: '/reporting',
        icon: <LineChartIcon/>,
    },
    {
        label: 'quotes', 
        href: '/quotes',
        icon: <QuoteIcon/>,
    },
    {
        label: 'verify', 
        href: '/verify',
        icon: <LineChartIcon/>,
    },
    {
        label: 'users', 
        href: '/users',
        icon: <Users2Icon/>,
    },
    {
        label: 'wikiSearch', 
        href: '/wikiSearch',
        icon: <FileSearch/>,
    }

    
];
export default MainMenuData;