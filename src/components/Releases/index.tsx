import styles from './styles.module.css'
import { PlusCircle } from 'phosphor-react'
import icecream from '../../assets/picole.png'

export function Releases() {
  return (
    <div className={styles.releases}>
      <h1>Promo do Dia 🚀</h1>

      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.header}>

            <div className={styles.contentHeader}>
              <h2>Ninho com Nutella</h2>
              <p>Muito leite ninho e muita nutella! :)</p>
            </div>

            <img src={icecream} alt="" />
          </div>

          <div className={styles.information}>
            <span>R$ 4,00</span>
            <a href="#">
              Adicionar
              <PlusCircle size={16} color={`var(--white)`} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}