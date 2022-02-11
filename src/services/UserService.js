import axios from 'axios'

let headerConfig = {
    Headers: {
        "x-access-token": localStorage.getItem("token")
    }
}

export const registration = async(data) => {
    let response = await axios.post("https://new-bookstore-backend.herokuapp.com/bookstore_user/registration", data);
    return response;
}

export const login = async(data) => {
    let response = await axios.post("https://new-bookstore-backend.herokuapp.com/bookstore_user/registration", data);
    return response;
}