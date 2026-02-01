import type { Task } from '@/types/task.ts';
import type { Text } from '@/types/text.ts';

export interface Step extends Text {
    progress: number;
    tasks: Task[];
}
