import { Metadata } from 'next';
import IntroBlock from "@/components/navigation/introBlock";
import { DarkmodeToggle } from '@/components/ui/darkmode-toggle';


export const metadata: Metadata = {
  title: 'Settings page for Springbok create V3 ',
  description: ''
}


const MainBlock = { 
  title: 'Personal settings', 
  body: 'Here you can set settings', 
  cta: '', 
  href: ''
};
const SecondaryBlock = { preTitle: 'User', title: 'You', body: '', sub: '' };
const thirdBlock = { preTitle: 'Brand selected', title: 'Springbok', body: '', sub: '' };




export default function SettingsPage() {
  return (
    <>
      {IntroBlock(MainBlock, SecondaryBlock, thirdBlock)}
      
      <div className="flex items-center">
        <DarkmodeToggle /> <p className="mx-5">Toggle darkmode</p>
      </div>
    </>
  );
}
