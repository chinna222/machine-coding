import ProductCard from "../ProductCard/ProductCard";
import styles from './productGrid.module.css'

const PRODUCTS = [
    { id: 1, name: 'Bag', category: 'Accessories', price: 2499, image: '/images/dashboard/bag.jpg' },
    { id: 2, name: 'Headphones', category: 'Electronics', price: 4999, image: '/images/dashboard/headphones.jpg' },
    { id: 3, name: 'Shoes', category: 'Footwear', price: 3999, image: '/images/dashboard/shoes.jpg' },
    { id: 4, name: 'Watch', category: 'Accessories', price: 7999, image: '/images/dashboard/watch.jpg' },
]

function ProductGrid() {
    return (
        <div className={styles.productGrid}>
            {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductGrid
