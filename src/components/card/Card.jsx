import React, { useState } from "react";
import '../card/Card.scss'

import { getBookApi } from '../../services/AxiosService';
import thedesign from '../../assests/thedesign.png'
import DisplayBook from "../displayBook/DisplayBook";

function Card() {
    const [books, setBooks] = useState([]);
    const [select, setSelect] = useState(false);
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

    // const [open, setOpen] = useState(false)

    const openImage = (item) => {
        setViewBook({ ...viewBook, item })
        setSelect(!select)
    }

    return (
        <div className="bookValue" >
            {
                select ? <DisplayBook item={viewBook} /> :
                    books.map((item, index) => (
                        <div className="displayGrid" key={index} value={select} >

                            <div className="onlyImage" onClick={() => openImage(item)} >
                                <img className="image" src={thedesign} />
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