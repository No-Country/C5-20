import axios from "axios";
const URL_API = `${process.env.REACT_APP_API_SERVER}/users/signin`;

const login = async (email, password) => {

    return axios.post(URL_API, {
        email,
        password,



    }).then((response) => {

        if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));

        }

        return response.data;
    })



}


const logout = () => {
    localStorage.removeItem('user');
}

export default {
    login,
    logout
}