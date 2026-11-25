import React from 'react'
import Header from './components/Header/Header'
import styles from './dashboard.module.css'
function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <header className={styles.header}>
                Header
            </header>

            <div className={styles.body}>
                <aside className={styles.sidebar}>
                    Sidebar
                </aside>

                <main className={styles.main}>
                    Main Content
                </main>
            </div>
        </div>
    )
}

export default Dashboard