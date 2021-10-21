import { User } from './models/User'

const user = new User({ name: 'Franky', age: -0 })

user.events.on('change', (): void => {
  console.log('some change')
})

user.events.trigger('change')
