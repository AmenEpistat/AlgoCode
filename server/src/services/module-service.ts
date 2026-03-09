import { Module } from '../models/module-model';
import { Task } from '../models/task-model';
import ApiError from '../exceptions/api-error';

export class ModuleService {
    async getModuleWithSteps(slug: string | string[]) {
        const moduleDoc = await Module.findOne({ slug });

        if (!moduleDoc) {
            throw ApiError.NotFound('Модуль не найден');
        }

        const tasks = await Task.find({ moduleId: moduleDoc._id }).sort({
            stepNumber: 1,
            order: 1,
        });

        const stepsMap = tasks.reduce((acc: any[], task: any) => {
            const stepIdx = task.stepNumber - 1;

            if (!acc[stepIdx]) {
                acc[stepIdx] = {
                    id: `step-${task.stepNumber}`,
                    title: `Шаг ${task.stepNumber}`,
                    progress: 0,
                    tasks: [],
                };
            }

            acc[stepIdx].tasks.push({
                ...task.toObject(),
                id: task._id.toString(),
            });

            return acc;
        }, []);

        return {
            ...moduleDoc.toObject(),
            id: moduleDoc._id.toString(),
            steps: stepsMap.filter(Boolean),
        };
    }
}
