import ProductCard from "../components/ProductCard"
import { products } from "../datas/products"
const ProductList = () => {


    return (
        <div>

            <div className="product-list">
                <div>
                    {products.map((product) => (
                        <div key={product.id}>
                        <ProductCard name={product.name} category={product.category} price={product.price}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ProductList