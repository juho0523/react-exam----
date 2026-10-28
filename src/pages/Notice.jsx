import { useEffect, useState } from "react";
import axios from "axios";

const Notice = () => {
    const [data, setData] = useState([]);
    const [searchKeyWord, setSearchKeyword] = useState("");

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => console.error(err));
    }, []);

    const filteredProducts = data.filter((notice) =>
        notice.title.toLowerCase().includes(searchKeyWord.toLowerCase())
    );

    return (
        <div>
            <h2>공지사항</h2>

            <input
                type="text"
                placeholder="검색"
                value={searchKeyWord}
                onChange={(e) => setSearchKeyword(e.target.value)}
            />

            {filteredProducts.length === 0 ? (
                <p>검색 결과가 없습니다.</p>
            ) : (
                <ul className="notice-list">
                    {filteredProducts.map((notice) => (
                        <li key={notice.id}>
                            <p>{notice.id}</p>
                            <p>{notice.title}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Notice;