import { NextFunction, Request, Response } from 'express';
import { IslandService } from '../services/island-service';
import ApiError from '../exceptions/api-error';

class IslandController {
    private islandService: IslandService;

    constructor() {
        this.islandService = new IslandService();
    }

    public getIslands = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            const data = await this.islandService.getAllIslands();
            res.json(data);
        } catch (error) {
            next(error);
        }
    };

    public getIslandBySlug = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            const { slug } = req.params;
            const data = await this.islandService.getFullIslandBySlug(slug);

            if (!data) {
                throw ApiError.NotFound('Остров с таким slug не найден');
            }

            res.json(data);
        } catch (error) {
            next(error);
        }
    };
}

export default new IslandController();
