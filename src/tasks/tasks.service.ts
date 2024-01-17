import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';
import { ObjectUnsubscribedError } from 'rxjs';

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
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING,
    };

  this.tasks.push(task);
  }

  deleteTasks(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  getTasksById(id: string): Task{
    return this.tasks.find(task => task.id === id);
  }

  updateTasks(id: string, updatedFields: any) {
    const task = this.getTasksById(id)

    const newTask = Object.assign(task, updatedFields)
    this.tasks = this.tasks.map((task)=>(task.id === id ? newTask : task))
  
  return newTask;
  }
}
