import { Request, Response } from 'express';
import { TaskService } from '../services/task-service';
import { catchAsync } from '../utils/catch-async';

export class TaskController {
    private taskService = new TaskService();

    public getTaskData = catchAsync(async (req: Request, res: Response) => {
        const { id } = req.params;
        const data = await this.taskService.getTaskById(id);
        res.json(data);
    });
}

export default new TaskController();
