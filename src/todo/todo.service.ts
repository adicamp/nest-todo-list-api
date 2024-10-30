import { Injectable } from '@nestjs/common';
import { TodoRepository } from './todo.repository';

@Injectable()
export class TodoService {
  constructor(public todoRepo: TodoRepository) {}

  findAll() {
    return this.todoRepo.findAll();
  }

  findOne(id: number) {
    return this.todoRepo.findOne(id);
  }

  create(todo: string) {
    return this.todoRepo.create(todo);
  }
}
