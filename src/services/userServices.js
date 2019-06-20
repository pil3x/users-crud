import User from '../entities/User.js'
const axios = require('axios');

const fetchUsers = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => res.data)
        .then(data => {
            return data.map(user => {
                return new User(user.id, user.name, user.email, user.address.city, user.website);
            })
        })

}

const fetchUser = (userID) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`)
        .then(res => res.data)
        .then(user => {
            return new User(user.id, user.name, user.email, user.address.city, user.website);
        })
}

export { fetchUsers, fetchUser }; 