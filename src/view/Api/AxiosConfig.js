import axios from 'axios';



const BASE_URL = 'http://localhost:8081';
const token1 = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnZ2dAZ21haWwuY29tIiwiZXhwIjoxNjU4MzUzNTEyLCJpYXQiOjE2NTgzMzU1MTJ9.dGyRCEdIUfNxhD6TPR16bw9D0POU0UKYUJxQ7HFUcm3UjHFHiJLRu04x_Ir-8iV5aO1amTDY0Q6SDroihSAvRw";


export default axios.create({
    baseURL: BASE_URL
});




export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers:{
        Authorization: `Bearer ${token1}`,
    }
});