import Todo from 'App/Models/Todo'
import { TodoInput } from 'Contracts/TodoInput'
import { Arg, Args, Mutation, Query, Resolver } from 'type-graphql'

@Resolver()
export class TodosResolver {
  @Query((_) => [Todo])
  public async todos() {
    const todos = await Todo.all()
    return todos
  }

  @Mutation((_) => Todo)
  public async addTodo(@Arg('input') todo: TodoInput) {
    const todoToAdd = new Todo()

    todoToAdd.title = todo.title
    todoToAdd.description = todo.description
    todoToAdd.isComplete = todo.isComplete

    const savedTodo = await todoToAdd.save()
    return savedTodo
  }
}
