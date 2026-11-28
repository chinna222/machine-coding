import React from 'react'
import Header from './components/Header/Header'
import styles from './dashboard.module.css'
import ProductGrid from './components/ProductGrid/ProductGrid'
function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <Header />

            <div className={styles.body}>
                <aside className={styles.sidebar}>
                    Sidebar
                </aside>

                <main className={styles.main}>
                    <ProductGrid />
                </main>
            </div>
        </div>
    )
}

export default Dashboard