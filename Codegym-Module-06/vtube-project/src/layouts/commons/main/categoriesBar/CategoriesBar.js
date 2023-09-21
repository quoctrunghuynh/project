import './_categoriesBar.scss'
import {useState} from "react";

const keywords = [
    'All',
    'Team Bất ổn',
    'Hài Phong Lê',
    'Phốt Hải Nguyễn đi bơi',
    'Thái Coder - Debug để thêm BUG!',
    'Ảnh nóng Tâm Bành',
    'Doraemon',
    'Music',
    'Movies Review',
    'Soccer',
    'Guitar',
    'Cover music',
    'Coding',
    'Gaming',
    'LiveStream',
    'Anh beo reviewfood'
]
const CategoriesBar = () => {

    const [active, setActive] = useState(keywords)

    const handleClick = value => {
        setActive(value);
    }

    return (
        <div className={"categoriesBar"}>
            {
                keywords.map((keyword, index) =>
                    (
                        <span
                            key={index}
                            onClick={() => handleClick(keyword)}
                            className={active === keyword ? 'active' : ''}
                        >
                            {keyword}
                        </span>
                    ))
            }
        </div>
    )
}

export default CategoriesBar;