import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://tnder-clone.herokuapp.com'
})

export default instance;