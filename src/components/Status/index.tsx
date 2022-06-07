import styles from './styles.module.css'
import { CheckCircle, Clock } from 'phosphor-react'

export function Status() {
  return (
    <div className={styles.content}>
      <div className={styles.status}>
        <CheckCircle size={32} color="green" />
        Aberto
      </div>

      <div className={styles.time}>
        <Clock size={32} />

        <div className={styles.timeData}>
          Tempo de entrega <br />
          30-45min
        </div>
      </div>
    </div>
  )
}