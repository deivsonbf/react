import styles from './header.module.css'

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>Fortaleza Esporte Clube</h1>
        <img src="https://fortaleza1918.com.br/wp-content/uploads/2019/01/site-1-150x150.png" alt="logo" />
        <h1>Penta-Campeão Cearense</h1>
      </div>
    </>
  )
}

export default Header