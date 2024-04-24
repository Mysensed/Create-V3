
import styles from './styles/page.module.css'
import { Metadata } from 'next';

import IntroBlock from "@/components/ui/introBlock";


export const metadata: Metadata = {
  title: 'Springbok create - home',
  description: 'Build email content quickly, with a constand high quility.'
}

export default function Home() {
  
  const introContent = [
    { 
      title: 'Springbok create', 
      body: 'Build email content quickly, with a constand high quility. By re-using code and developing modules centrally, we can provide a greate user experience and work on building really internactive emails. ', 
      cta: 'Create content', 
      href: 'library/new'
    },
    { 
      preTitle: 'Content items', 
      title: '1234', 
      body: 'created', 
    },
    {
      preTitle: 'Templates', 
      title: '15', 
      body: 'by springbok', 
      footer: 'Most recent template: Carousel'
    }

  ]
  return (
    <main className={styles.main}>
       
       <IntroBlock content={introContent} />
    


      

      


    </main>
  );
}
