import styles from './styles.module.css'
import { CheckCircle, Clock } from 'phosphor-react'

export function Status() {
  return (
    <div className={styles.content}>
      <div className={styles.status}>
        <CheckCircle size={36} color="green" />
        <p>Aberto</p>
      </div>

      <div className={styles.time}>
        <Clock size={36} />

        <div className={styles.timeData}>
          <p>Tempo de entrega</p>
          30-45min
        </div>
      </div>
    </div>
  )
}