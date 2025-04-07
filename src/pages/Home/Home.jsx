import styles from './Home.module.scss'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import Card from '../../components/Card/Card'
import { useState } from 'react'

const Home = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false)

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.content}>
        <Sidebar 
          className={`${styles.sidebar} ${sidebarVisible ? styles.visible : ''}`} 
        />
        <div className={styles.products}>
          {Array(12).fill().map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
      <button 
        className={styles.mobileFilterButton}
        onClick={() => setSidebarVisible(!sidebarVisible)}
      >
        Фильтры
      </button>
    </div>
  )
}

export default Home