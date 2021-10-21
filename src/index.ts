import { User } from './User'

const user = new User({ name: 'James', age: 20 })

user.on('change', () => {
  console.log('change 1')
})
user.on('change', () => {
  console.log('change 1')
})
user.on('save', () => {
  console.log('saved was trigger')
})

user.trigger('save')
