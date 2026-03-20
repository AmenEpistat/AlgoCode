import { Request, Response } from 'express';
import { catchAsync } from '../utils/catch-async';
import ApiError from '../exceptions/api-error';
import ProgressService from '../services/progress-service';

declare global {
    namespace Express {
        interface User {
            _id: string;
        }
    }
}

export class ProgressController {
    completeTask = catchAsync(async (req: Request, res: Response) => {
        const { taskId } = req.body;
        const userId = req.user?._id || '1';

        if (!taskId) {
            throw new ApiError(400, 'taskId обязателен');
        }

        const result = await ProgressService.completeTask(userId, taskId);

        res.json(result);
    });
}
