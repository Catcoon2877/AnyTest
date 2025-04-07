import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt="Логотип" />
      </div>

      <div className={styles.catalogButton}>
        <button>Каталог</button>
      </div>

      <div className={styles.search}>

        <input 
          type="text" 
          placeholder="Поиск по 100 000 товаров " 
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M19 19L13 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="#7397F5" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.infoItem}>
          <span>Информация о компании</span>
        </div>
        <div className={styles.infoItem}>
          <span>Контакты</span>
        </div>
        <div className={styles.infoItem}>
          <span>Полезные ссылки</span>
        </div>
      </div>
    </header>
  )
}

export default Header