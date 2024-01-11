import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { TaskStatus } from './task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'first task',
      description: 'some task',
      status: TaskStatus.PENDING,
    },
  ];

  getAllTasks() {
    return this.tasks;
  }

  createTasks(title: string, description: string) {
const task = {
    id: new Date().toISOString(),
    title,
    description,
    status: TaskStatus.PENDING
}

    this.tasks.push()
  }
  updateTasks() {}
  deleteTasks() {}
}
