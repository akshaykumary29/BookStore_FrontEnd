import axios from 'axios'

export const registration = async(data) => {
    let response = await axios.post("https://new-bookstore-backend.herokuapp.com/bookstore_user/registration", data);
    return response;
}