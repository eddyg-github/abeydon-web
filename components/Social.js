import styles from './Social.module.css'

const links = [
  { label: 'Instagram', href: 'https://www.instagram.com/abeydon_oficial/' },
  { label: 'Facebook', href: 'https://www.facebook.com/p/ABEYDON-100063466753719/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@canaldeabeydon' },
  { label: 'Spotify', href: 'https://open.spotify.com/intl-es/album/3Kf5uPflscadekMA6OC5Tv' },
  { label: 'X / Twitter', href: 'https://x.com/Abeydon_Oficial' },
  { label: 'SoundCloud', href: 'https://soundcloud.com/abeydon-oficial' },
]

export default function Social() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>Redes y plataformas</p>
      <div className={styles.row}>
        {links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <span className={styles.dot} />
            {l.label}
          </a>
        ))}
      </div>
    </section>
  )
}