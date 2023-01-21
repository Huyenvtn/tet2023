import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.love}>I love you, my bae &nbsp;</h1>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/x.jpg"
          alt="My Bae"
          width={300}
          height={300}
          priority
        />
      </div>
    </main>
  )
}
