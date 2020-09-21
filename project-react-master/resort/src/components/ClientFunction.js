import axios from 'axios'

export const register = newClient => {
    return axios
        .post('api/new', {
            firstName: newClient.firstName,
            lastName: newClient.lastName,
            email: newClient.email,
            password: newClient.password,
            address: newClient.address,
            birthDate: newClient.birthDate
        })
        .then(response => {
            console.log('Registered')
        })
}

export const login = client => {
    return axios
        .post('users/login', {
            email: client.email,
            password: client.password
        })
        .then(response => {
            localStorage.setItem('usertoken', response.data)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}