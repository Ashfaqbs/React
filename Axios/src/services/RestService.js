import axios from 'axios'
const baseURL = 'https://jsonplaceholder.typicode.com/todos/'

export const  getSampleTitles = () =>{
    return  axios.get(baseURL);
}


export const  getListEmp = () =>{
    return  axios.get('http://localhost:8080/api/v1/employees/');
}