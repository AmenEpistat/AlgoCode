import { Island } from '../models/island-model';
import { Module } from '../models/module-model';
import ApiError from '../exceptions/api-error';

export class IslandService {
    async getAllIslands() {
        const islands = await Island.find().sort('order');
        return islands.map((island) => ({
            ...island.toObject(),
            id: island._id.toString(),
            progress: 0,
            isLocked: false,
            isCompleted: false,
        }));
    }

    async getFullIslandBySlug(slug: string | string[]) {
        const island = await Island.findOne({ slug });
        if (!island) {
            throw ApiError.NotFound('Остров не найден');
        }

        const modules = await Module.find({ islandId: island._id }).sort(
            'order'
        );

        const moduleDetails = await Promise.all(
            modules.map(async (mod) => {
                return {
                    ...mod.toObject(),
                    id: mod._id.toString(),
                    progress: 0,
                };
            })
        );

        return {
            ...island.toObject(),
            id: island._id.toString(),
            modules: moduleDetails,
        };
    }
}
