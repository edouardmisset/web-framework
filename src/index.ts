import { User } from './models/User'

const user = new User({ id: 1, name: 'Hulk', age: 23 })

user.on('save', () => {
  console.log(user)
})

user.save()
