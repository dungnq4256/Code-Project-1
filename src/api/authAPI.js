import axiosClient from "./axiosClient"
import * as Actions from "./../store/actions"
import { store } from './../index'


const authAPI = {
    login: async () => {
        try {
            const url = 'https://61bca039d8542f00178248c3.mockapi.io/api/users';
            const response = await axiosClient.get(url);
            console.log(response)
            return response;
        } catch (err) {
            console.log("khong oke");
            alert(err.message)
        }
    },

    logout: async () => {
        try {
            localStorage.removeItem('user');
            localStorage.removeItem('role');
            localStorage.removeItem('id');
        } catch (err) {
            alert(err.message);
        }

    }
}

export default authAPI;
