import styles from './Music.module.css'

const releases = [
  { title: 'Primer Álbum', year: 'Disponible en Spotify', href: 'https://open.spotify.com/intl-es/album/3Kf5uPflscadekMA6OC5Tv' },
  { title: 'Singles', year: 'Lanzamientos sueltos', href: 'https://open.spotify.com/intl-es/album/3Kf5uPflscadekMA6OC5Tv' },
  { title: 'Álbum II', year: 'En producción · 2025', href: null },
]

export default function Music() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>Discografía</p>
      <div className={styles.grid}>
        {releases.map((r) => (
          <div key={r.title} className={styles.card}>
            <div className={styles.art}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" stroke="#c9973a" strokeWidth="0.5" opacity="0.3"/>
                <circle cx="24" cy="24" r="14" stroke="#c9973a" strokeWidth="0.5" opacity="0.2"/>
                <circle cx="24" cy="24" r="3" fill="#c9973a" opacity="0.5"/>
              </svg>
            </div>
            <p className={styles.title}>{r.title}</p>
            <p className={styles.year}>{r.year}</p>
            {r.href && (
              <a href={r.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Escuchar →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}