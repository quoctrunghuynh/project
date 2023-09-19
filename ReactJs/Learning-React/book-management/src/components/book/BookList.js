import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {BOOK_MANAGEMENT_API} from "../constant/AppConstant";

export default function BookList() {
    const {bookId} = useParams();
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
        console.log('fetching...')
    }, [bookId]);

    async function fetchData(){
        await axios
            .get(`${BOOK_MANAGEMENT_API}/books`)
            .then(response => {
                setBooks(response.data);
            })
            .catch(err => {
                throw err;
            })
    }
    function handleCreate(){
        window.location.href = "/book/add"
    }

    return (
        <div>
            <h1>Books</h1>
            <table border={1}>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th colSpan={2}>
                        <button type="button" onClick={handleCreate}>
                            Create
                        </button>
                    </th>
                </tr>
                </thead>

                <tbody>
                {books.map(book => (
                    <tr key={book.id}>
                        <td>{book.id} </td>
                        <td>{book.title} </td>
                        <td className="quantity">{book.quantity} </td>
                        <td>
                            <a href={`/book/${book.id}`}>Details</a>
                        </td>
                        <td>
                            <a href={`/book/edit/${book.id}`}>Edit</a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}