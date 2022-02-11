import React from "react";
import '../book/Book.scss'
import Card from '../card/Card';
import { getBookApi } from '../../services/AxiosService'
function Book() {

    const [update, setUpdate] = React.useState([]);

    const clickMe = () => {
        console.log('');
        getBookApi(update).then((res) => {
            console.log();
            console.log(res);
            setUpdate(res.data.result)
        }).catch((err) => {
            console.log(err);
        })
    }

    React.useEffect(() => {
        clickMe();
    }, [])

    return (
        <div className="bookImage" >
            <div className="imageMap" >
                <Card />
            </div>
        </div>
    )
}

export default Book;