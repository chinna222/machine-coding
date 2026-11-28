import {
    Menu,
    ShoppingCart,
    Moon,
    UserRound
} from 'lucide-react';

import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.leftSection}>
                <button
                    type="button"
                    className={styles.iconButton}
                    aria-label="Toggle sidebar"
                >
                    <Menu size={22} />
                </button>

                <h1 className={styles.logo}>Workspace</h1>
            </div>

            <div className={styles.rightSection}>
                <button
                    type="button"
                    className={styles.cartButton}
                    aria-label="Open cart, 3 items"
                >
                    <ShoppingCart size={22} />
                    <span className={styles.cartBadge}>3</span>
                </button>

                <button
                    type="button"
                    className={styles.iconButton}
                    aria-label="Switch to dark mode"
                >
                    <Moon size={22} />
                </button>

                <button
                    type="button"
                    className={styles.profileButton}
                    aria-label="Open profile"
                >
                    <UserRound size={22} />
                </button>
            </div>
        </header>
    );
}