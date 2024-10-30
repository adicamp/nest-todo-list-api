import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class TodoRepository {
  async findAll(): Promise<any> {
    const data = await readFile('todos.json', 'utf-8');
    return JSON.parse(data);
  }

  async findOne(id: number) {
    const data = await readFile('todos.json', 'utf-8');
    const todos = JSON.parse(data);

    return todos.find((todo: any) => todo.id === id);
  }

  async create(todo: string) {
    const data = await readFile('todos.json', 'utf-8');
    const todos = JSON.parse(data);

    const newTodo = {
      id: todos[todos.length - 1].id + 1,
      constent: todo,
    };

    todos.push(newTodo);

    await writeFile('todos.json', JSON.stringify(todos, null, 2), 'utf-8');
  }
}
