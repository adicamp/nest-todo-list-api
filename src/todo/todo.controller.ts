import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-class.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(public todoService: TodoService) {}

  @Get()
  listTodo() {
    return this.todoService.findAll();
  }

  @Post()
  createTodo(@Body() body: CreateTaskDto) {
    return this.todoService.create(body.content);
  }

  @Get('/:id')
  async getTodo(@Param('id') id: string) {
    const todo = await this.todoService.findOne(parseInt(id));

    if (!todo) {
      throw new NotFoundException('Todo Not Found');
    }

    return todo;
  }
}
