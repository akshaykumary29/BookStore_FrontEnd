import React, { useState } from "react";
import '../card/Card.scss'

import { getBookApi } from '../../services/AxiosService';
import thedesign from '../../assests/thedesign.png'
import Delete from "../delete/Delete";

function Card() {
    const [books, setBooks] = useState([]);
    const [select, setSelect] = useState([]);
    const [viewBook, setViewBook] = useState({});


    const getBookDetails = () => {
        getBookApi().then((res) => {
            console.log(res);
            setBooks(res.data.result)
        }).catch((err) => {
            console.log(err);
        })
    }

    React.useEffect(() => {
        getBookDetails();
    }, [])

    const [open, setOpen] = useState(false)

    const openImage = (item) => {
        setViewBook({ ...viewBook}, item)
        setSelect(!select)
    }

    return (
        <div className="bookValue" >
            {
                select ? <Delete item={viewBook} /> :
                books.map((item, index) => (
                    <div className="displayGrid" onClick={() => openImage(item)} open={open} >
                        
                        <div className="onlyImage" >
                            <img key={index} className="image" src={thedesign} />
                        </div>
                        <div className="title" >
                            <span className="bookName" >Book:{item.bookName}</span><br /><br />
                            <span className="authorName" >Author: {item.author}</span>
                            <div className="bookRating" >
                                <span className="star" > 4.5* </span>
                                <span className="reviewUser" > (20) </span>
                            </div>
                            <div className="mainValue" >
                                <span className="value" > Rs:- {item.price} </span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Card;