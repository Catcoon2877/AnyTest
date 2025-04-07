import styles from './Sidebar.module.scss'
import lop from '../../assets/lop.jpg'

const Sidebar = ({ className }) => {
  const categories = [
    { name: "Название категории", count: 3 },
    { name: "Название категории", count: 3 },
    { name: "Название категории", count: 3 },
    { name: "Название категории", count: 3 }
  ]

  const brands = [
    { name: "Атрибут", count: 3 },
    { name: "Атрибут", count: 3 },
    { name: "Атрибут", count: 3 },
    { name: "Атрибут", count: 3 },
    { name: "Атрибут", count: 3 }
  ]

  const attributes = [
    { name: "Цвет", options: ["Атрибут", "Атрибут", "Атрибут"] },
    { name: "Размер", options: ["Атрибут", "Атрибут", "Атрибут", "Атрибут"] },
    { name: "Материал", options: ["Атрибут", "Атрибут", "Атрибут"] }
  ]

  return (
    <aside className={`${styles.sidebar} ${className}`}>
      <div className={styles.section}>
        <h3 className={styles.h3}>Категории</h3>
        <ul className={styles.list}>
          {categories.map((category, index) => (
            <li key={index} className={styles.item}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" className={styles.checkbox} />
                <span className={styles.checkmark}></span>
                <span className={styles.categoryName}>{category.name}</span>
                <span className={styles.categoryCount}>({category.count})</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Цена</h3>
        <div className={styles.priceRange}>
          <div className={styles.priceInputs}>
            <div className={styles.priceInput}>
              <span className={styles.pricePrefix}>от</span>
              <input 
                type="text" 
                defaultValue="5 500"
                className={styles.priceField}
              />
              <span className={styles.currency}>₽</span>
            </div>
            <div className={styles.priceSeparator}>—</div>
            <div className={styles.priceInput}>
              <span className={styles.pricePrefix}>до</span>
              <input 
                type="text" 
                defaultValue="15 000"
                className={styles.priceField}
              />
              <span className={styles.currency}>₽</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>Бренд</h3>
          <button className={styles.clearButton}>Очистить</button>
        </div>
        <div className={styles.searchContainer}>
          <span className={styles.searchIcon}>          <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
            <path d="M19 19L13 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="black" strokeWidth="2" strokeLinecap="round"/>
          </svg></span>
          <input
            type="text"
            placeholder="Поиск"
            className={styles.searchInput}
          />
        </div>
        <ul className={styles.list}>
          {brands.map((brand, index) => (
            <li key={index} className={styles.item}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" className={styles.checkbox} />
                <span className={styles.checkmark}></span>
                <span className={styles.categoryName}>{brand.name}</span>
                <span className={styles.categoryCount}>({brand.count})</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {attributes.map((attribute, index) => (
        <div key={index} className={styles.section}>
          <h3 className={styles.sectionTitle}>{attribute.name}</h3>
          <ul className={styles.list}>
            {attribute.options.map((option, optIndex) => (
              <li key={optIndex} className={styles.item}>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" className={styles.checkbox} />
                  <span className={styles.checkmark}></span>
                  <span className={styles.categoryName}>{option}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
        <button 
        className={styles.closeButton}
        onClick={() => className.includes('visible') && className.replace('visible', '')}
      >
        ×
      </button>
    </aside>
  )
}

export default Sidebar