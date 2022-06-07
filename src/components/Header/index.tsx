import styles from './styles.module.css'
import { UserCircle } from 'phosphor-react'
import logo from '../../assets/dindin.png'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="" />

      <a href="#">
        <UserCircle size={32} />
      </a>
    </header>
  )
}