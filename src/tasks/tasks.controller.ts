import { Controller, Get, Post, Delete, Body, Param, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import {CreateTaskDto} from "./dto/task.dto"
import { UpdateTaskDto } from './dto/task.dto';


@Controller('tasks')
export class TasksController {

constructor(private tasksService:TasksService){}
 
@Get()
getAllTasks() {
    return this.tasksService.getAllTasks()
}

@Post()
createTask(@Body() newTask : CreateTaskDto) {
    return this.tasksService.createTasks(newTask.title, newTask.description);
}

@Delete(":id")
deleteTask(@Param("id") id : string) {
    this.tasksService.deleteTasks(id)
}

@Patch(":id") 
updateTask(@Param("id") id: string, @Body() updatedFields: UpdateTaskDto){
    return this.tasksService.updateTasks(id, updatedFields)
}

}
