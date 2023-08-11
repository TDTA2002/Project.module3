import axios from "axios";

export default {
    findByCategory: async (category_id) => {
        return await axios.get(`${process.env.REACT_APP_SERVER_HOST_API}/categories/` + category_id)
    },
    // findBy1: async (category_id) => {
    //     return await axios.get(`${process.env.REACT_APP_SERVER_HOST_API}/categories/1`)
    // },
    // findBy2: async (category_id) => {
    //     return await axios.get(`${process.env.REACT_APP_SERVER_HOST_API}/categories/2`)
    // },
    // findBy3: async (category_id) => {
    //     return await axios.get(`${process.env.REACT_APP_SERVER_HOST_API}/categories/3`)
    // }
}