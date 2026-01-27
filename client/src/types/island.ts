export type IslandType = 'plain' | 'sort' | 'recursive';

export interface IslandData {
    id: string;
    title: string;
    type: IslandType;
    x: number;
    y: number;
    progress: number;
    isLocked: boolean;
    isCompleted: boolean;
    order: number;
}
