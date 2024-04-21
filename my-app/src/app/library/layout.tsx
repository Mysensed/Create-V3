import styles from './styles.module.css'
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className={styles.main}>
        {children}
      </main>
    );
  }


