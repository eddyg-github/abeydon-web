import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src="/logo-abeydon.png" alt="Abeydon" width={100} height={32} style={{ objectFit: 'contain', opacity: 0.35, filter: 'grayscale(1)' }} />
      <div className={styles.right}>
        <p className={styles.email}>abeydonprensa@gmail.com</p>
        <p className={styles.copy}>© Abeydon · Heavy Metal Clásico</p>
      </div>
    </footer>
  )
}