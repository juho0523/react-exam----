import { Link, useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
    return (
        <header>
            
                <Link to="/">SPACE SHOP</Link>
                <Link to="/">상품목록</Link>
                <Link to="/notice">공지사항</Link>
            
        </header>
    )
}
export default Header