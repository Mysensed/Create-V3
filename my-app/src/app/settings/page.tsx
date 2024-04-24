import { Metadata } from 'next';
import IntroBlock from "@/components/ui/introBlock";
import { DarkmodeToggle } from '@/components/ui/darkmode-toggle';


export const metadata: Metadata = {
  title: 'Settings page for Springbok create V3 ',
  description: ''
}

const introContent = [
  { 
    preTitle: '',
    title: 'Personal Settings', 
    body: 'Here you can set settings', 
  },
  { 
    preTitle: 'user',
    title: 'You', 
    body: 'content items',
  },
  {
    preTitle: 'Brand',
    title: 'Springbok', 
    body: 'default styling',
  }
]



export default function SettingsPage() {
  return (
    <>
      <IntroBlock content={introContent} />
      
      <div className="flex items-center">
        <DarkmodeToggle /> <p className="mx-5">Toggle darkmode</p>
      </div>
    </>
  );
}
