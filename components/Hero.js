import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/logo-abeydon.png"
        alt="Abeydon"
        width={400}
        height={130}
        className={styles.logo}
        priority
      />
      <div className={styles.divider} />
      <p className={styles.sub}>Heavy Metal Clásico · Argentina</p>

      <a
        href="https://open.spotify.com/intl-es/album/3Kf5uPflscadekMA6OC5Tv"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btn}
      >
        Escuchar en Spotify
      </a>
    </section>
  )
}