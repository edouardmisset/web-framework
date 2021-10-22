import { User, UserProps } from '../models/User'
import { View } from './View'

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
      <div>
        <h1>User Details</h1>
        <span>User Name: ${this.model.get('name')}</span>
        <span>User Age: ${this.model.get('age')}</span>
      </div>
    `
  }
}
