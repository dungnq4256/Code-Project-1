import axiosClient from "./axiosClient"

const userAPI = {
    getProfile: async () => {
        try {
            const url = '/member/profile';
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            alert(error.message)
        }
    }
}

export default userAPI;