import styles from './card.module.css'

interface props {
  image?: string,
  text?: string,
  descricao: string
}
export const Card = ({ image, text, descricao }: props) => {
  return (
    <div className={styles.card}>
      <div>
        <img src={image} alt={text} />
      </div>
      <div className={styles.descricao}>
        <p>{descricao}</p>
      </div>
    </div>
  )
}

export default Card
