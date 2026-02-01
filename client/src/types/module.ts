import type { Text } from '@/types/text.ts';
import type { Step } from "@/types/step.ts";

export interface Module extends Text {
    difficulty: number;
    order: number;
    progress: number;
}

export interface ModuleDetails extends Module {
    steps: Step[];
}
