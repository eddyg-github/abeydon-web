import styles from './News.module.css'

const news = [
  {
    tag: 'Nuevo álbum',
    date: '2025',
    title: 'Segundo álbum en producción',
    body: 'La banda trabaja en su segundo disco de estudio. Una nueva entrega de Heavy Metal Clásico en camino.',
  },
  {
    tag: 'Lanzamiento',
    date: '2024',
    title: 'Singles disponibles en todas las plataformas',
    body: 'Escuchá los últimos lanzamientos de Abeydon en Spotify, YouTube y SoundCloud.',
  },
]

export default function News() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>Últimas noticias</p>
      <div className={styles.grid}>
        {news.map((n) => (
          <div key={n.title} className={styles.card}>
            <span className={styles.tag}>{n.tag}</span>
            <p className={styles.date}>{n.date}</p>
            <h3 className={styles.title}>{n.title}</h3>
            <p className={styles.body}>{n.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}