import React from "react";
// import 
import Header from "../../components/header/Header";
import Book from "../../components/book/Book";

function Home() {
    return (
        <div className="homePage" >
            <Header />
            <div className="bookBundle" >
                <div>
                    Books
                    <Book />
                </div>
            </div>
        </div>
    )
}