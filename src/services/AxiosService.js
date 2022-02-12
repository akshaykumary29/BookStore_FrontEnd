import axios from "axios";

let baseUrl = "https://new-bookstore-backend.herokuapp.com/bookstore_user/";

let headerConfig = {
    Headers: {
        "x-access-token": localStorage.getItem("token")
    }
}

export const getBookApi = async () => {
    let response = await axios.get(`${baseUrl}get/book`)
    return response;
}

export const addToCartApi = async (data) => {
    let response = await axios.post(`${baseUrl}add_cart_item/${data}`, data, headerConfig)
    return response;
}