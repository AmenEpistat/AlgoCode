import { Request, Response } from 'express';
import { ModuleService } from '../services/module-service';
import { catchAsync } from '../utils/catch-async';

export class ModuleController {
    private moduleService = new ModuleService();

    public getModuleDetails = catchAsync(
        async (req: Request, res: Response) => {
            const { slug } = req.params;
            const data = await this.moduleService.getModuleWithSteps(slug);
            res.json(data);
        },
    );
}

export default new ModuleController();
