import {v4 as uuidv4} from "uuid";

let users = []
export const getUsers = (req, res) => {
    res.send(users)
}
export const  getUser = (req, res) => {
    const {id} = req.params
    const foundUser = users.find(user => user.id === id)
    res.send(foundUser)
}
export const  deleterUser = (req, res) => {
    const id = req.params.id
    users = users.filter(user => user.id !== id)
    res.send('user was with id was  deleted')
}
export const  updateUser = (req, res) => {
    const {id} = req.params
    const user = users.find(user => user.id === id)
    const {firstName, lastName, age} = req.body
    if (firstName) user.firstName = firstName
    if (lastName) user.lastName = lastName
    if (age) user.age = age
    res.send(`user with id ${id} has been updated`)
}
export const createUser = (req, res) => {
    console.log('post reached')
    const user = req.body
    users.push({...user, id: uuidv4()})
    res.send(`user name ${user.firstName} was added`)
}
