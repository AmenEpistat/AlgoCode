import type { Text } from '@/types/text.ts';

export type IslandType = 'plain' | 'sort' | 'recursive';

export interface IslandData extends Text {
    type: IslandType;
    x: number;
    y: number;
    progress: number;
    isLocked: boolean;
    isCompleted: boolean;
    order: number;
}
