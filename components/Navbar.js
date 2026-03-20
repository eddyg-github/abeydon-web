import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/logo-abeydon.png" alt="Abeydon" width={160} height={52} style={{ objectFit: 'contain' }} />
      </div>
      <ul className={styles.links}>
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/banda">Banda</Link></li>
        <li><Link href="/musica">Música</Link></li>
        <li><Link href="/shows">Shows</Link></li>
        <li><Link href="/noticias">Noticias</Link></li>
        <li><Link href="/videos">Videos</Link></li>
      </ul>
    </nav>
  )
}