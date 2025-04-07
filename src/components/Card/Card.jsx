import styles from './Card.module.scss'
import Button from '../Button/Button'
import FireIcon from '../../assets/fire.png'
import Box from '../../assets/box.png'

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <img 
            src={Box}
            alt="Product" 
            className={styles.productImage}
          />
        </div>
        <div className={styles.hitBadge}>
          <span>Хит продаж</span>
          <img src={FireIcon} alt="Fire" className={styles.fireIcon} />
        </div>
        <div className={styles.discountBadge}>25%</div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.brand}>Бренд</div>
        <div className={styles.name}>
          Полное название товара в несколько строк для вида с обрывом в конце...
        </div>
        <div className={styles.price}>
          <span className={styles.current}>5 990 ₽</span>
          <span className={styles.old}>7 990 ₽</span>
        </div>
        <button className={styles.buyButton}>Купить</button>
      </div>
    </div>
  )
}

export default Card