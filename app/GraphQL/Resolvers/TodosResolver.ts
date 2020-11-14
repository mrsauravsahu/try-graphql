import Todo from 'App/Models/Todo'
import { Query, Resolver } from 'type-graphql'

@Resolver()
export class TodosResolver {
  @Query((_) => [Todo])
  public async todos() {
    const todos = await Todo.all()
    return todos
  }
}
