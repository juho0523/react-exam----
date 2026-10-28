import { useState } from "react"

const LiveInput = () => {
    const [text, setText] = useState("")

    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    return(
        <div>
            <input
                type="text"
                placeholder="텍스트를 입력하세요"
                onChange={handleOnChange}
            />
            <p>입력값 : {text}</p>
        </div>
    )
}
export default LiveInput