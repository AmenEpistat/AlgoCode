export interface Module {
    id: string;
    title: string;
    description: string;
    difficulty: number;
    order: number;
    progress: number | null;
}

export interface ModuleDetails extends Module {
    steps: Step[];
}

export interface Step {
    id: string;
    title: string;
    description: string;
    tasks: Task[];
}

export interface Task {
    id: string;
    title: string;
    description: string;
    type: 'theory' | 'code' | 'test' | 'exam';
}
