
const ProductCard = (props) => {
    return(
        <div className="card">
            <p>{props.name}</p>
            <p>{props.category}</p>
            <p>{props.price}원</p>
        </div>
    )
}
export default ProductCard