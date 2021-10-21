import { User } from './User'

const user = new User({ name: 'James', age: 20 })

user.set({ age: 45 })

console.log(user.get('age'))
