import { useState } from 'react'
import styles from './productCard.module.css'

// Formats a number like 2499 as "₹2,499". Change currency here if needed.
const priceFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
})

function ProductCard({ product }) {
    const { name, image, category, price } = product
    const [added, setAdded] = useState(false)

    return (
        <article className={styles.card}>
            <img className={styles.image} src={image} alt={name} loading="lazy" />

            <div className={styles.content}>
                <span className={styles.category}>{category}</span>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.price}>{priceFormatter.format(price)}</p>
                <button
                    type="button"
                    className={`${styles.button} ${added ? styles.buttonAdded : ''}`}
                    aria-pressed={added}
                    onClick={() => setAdded((prev) => !prev)}
                >
                    {added ? 'Added ✓' : 'Add to Cart'}
                </button>
            </div>
        </article>
    )
}

export default ProductCard
