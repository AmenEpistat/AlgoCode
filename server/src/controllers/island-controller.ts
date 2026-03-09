import { NextFunction, Request, Response } from 'express';
import { IslandService } from '../services/island-service';
import ApiError from '../exceptions/api-error';
import { catchAsync } from '../utils/catch-async';

class IslandController {
    private islandService: IslandService;

    constructor() {
        this.islandService = new IslandService();
    }

    public getIslands = catchAsync(
        async (req: Request, res: Response, next: NextFunction) => {
            const data = await this.islandService.getAllIslands();
            res.json(data);
        }
    );

    public getIslandBySlug = catchAsync(
        async (req: Request, res: Response, next: NextFunction) => {
            const { slug } = req.params;
            const data = await this.islandService.getFullIslandBySlug(slug);

            if (!data) {
                throw ApiError.NotFound('Остров не найден');
            }

            res.json(data);
        }
    );
}

export default new IslandController();
