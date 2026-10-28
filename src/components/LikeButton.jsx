import { useState } from "react"

const LikeButton = () => {
    const [like, setLike] = useState(0)

    const handleLike = () => {
        setLike(like + 1)
    }

    return(
        <div>
            <h2>좋아요 {like}</h2>
            <button onClick={handleLike}>좋아요</button>
        </div>
    )
}

export default LikeButton