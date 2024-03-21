import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    BadRequestException,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { isValidPriority, isValidUserId } from '../utils/check';

@Controller()
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Post()
    create(@Body() createTaskDto: CreateTaskDto) {
        const { name, userId, priority } = createTaskDto;

        if (!name || !userId || !priority) {
            throw new BadRequestException('All fields are required');
        }

        const parsedPriority = parseInt(priority);
        const parsedUserId = parseInt(userId);

        if (!isValidUserId(parsedUserId)) {
            throw new BadRequestException('Invalid userId');
        }

        if (!isValidPriority(parsedUserId)) {
            throw new BadRequestException(
                'Priority must be a positive integer',
            );
        }

        return this.taskService.addTask(name, parsedUserId, parsedPriority);
    }

    @Get('user/:userId')
    getUserTasks(@Param('userId') userId: string) {
        const parsedUserId = parseInt(userId);

        if (!isValidUserId(parsedUserId)) {
            throw new BadRequestException('Invalid userId');
        }

        return this.taskService.getUserTasks(parsedUserId);
    }
}
