import styles from './Band.module.css'

const members = [
  { name: 'Darío Achcar', role: 'Cantante' },
  { name: 'Oscar Esquivel', role: 'Guitarrista' },
  { name: 'Julio Mendoza', role: 'Bajista' },
  { name: 'Eduardo Ghidoli', role: 'Guitarrista' },
]

export default function Band() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>La banda</p>
      <div className={styles.grid}>
        {members.map((m) => (
          <div key={m.name} className={styles.card}>
            <div className={styles.icon}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="9" r="4.5" stroke="#c9973a" strokeWidth="0.8" opacity="0.7"/>
                <path d="M5 24C5 19.5 9 17 14 17C19 17 23 19.5 23 24" stroke="#c9973a" strokeWidth="0.8" opacity="0.7"/>
              </svg>
            </div>
            <p className={styles.name}>{m.name}</p>
            <p className={styles.role}>{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}