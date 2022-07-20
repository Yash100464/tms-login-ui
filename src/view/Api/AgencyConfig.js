import axios from 'axios';



const BASE_URL = 'http://localhost:8081';
const token1 = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzbmtAZ21haWwuY29tIiwiZXhwIjoxNjU4MzUzNDg2LCJpYXQiOjE2NTgzMzU0ODZ9.RU-ixesTs02p_BUonO8uKk74kw-P9OGXRSeatIAjMeuTuuBdoFmYEYd8Bm5FgYahDlChQ6owxccJMCoepyUUEA";
// const token1 = localStorage.getItem('token');

export default axios.create({
    baseURL: BASE_URL
});




export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers:{
        Authorization: `Bearer ${token1}`,
    }
});