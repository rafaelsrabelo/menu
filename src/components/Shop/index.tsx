import styles from './styles.module.css'
import { ShoppingCart, Plus, Minus } from 'phosphor-react'
export function Shop() {
  return (
    <div className={styles.shop}>
      <div className={styles.header}>
        <ShoppingCart size={32} />
        <div className={styles.headerText}>
          <h4>Carrinho</h4>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.headerContent}>
          <h4>1x Ninho com nutella</h4>

          <button className={styles.decrease}><Minus size={18} weight="bold" /></button>
          <span>1</span>
          <button className={styles.incremment}><Plus size={18} weight="bold" /></button>
        </div>
        <hr />
        <div className={styles.value}>
          <p>Total do pedido</p>
          <span>R$ 4,00</span>
        </div>
        <button type='submit'>Finalizar</button>
      </div>
    </div>
  )
}