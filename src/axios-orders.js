import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-659cc.firebaseio.com/'
});

export default instance;