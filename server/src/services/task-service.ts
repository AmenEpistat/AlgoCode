import { Task } from '../models/task-model';
import ApiError from '../exceptions/api-error';

export class TaskService {
    async getTaskById(id: string | string[]) {
        const task = await Task.findById(id);

        if (!task) {
            throw ApiError.NotFound('Задача не найдена');
        }

        return {
            ...task.toObject(),
            id: task._id.toString(),
        };
    }
}
