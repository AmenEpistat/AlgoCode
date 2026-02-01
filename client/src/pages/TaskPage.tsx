import TaskCodePage from '@/pages/TaskCodePage.tsx';
import type { TaskCodeType } from '@/types/task.ts';

export const taskSum: TaskCodeType = {
    type: 'code',
    id: 'sum',
    title: 'Сумма чисел',
    description: 'Напиши функцию sum(a, b), которая возвращает сумму',
    language: 'ts',
    starterCode: 'function sum(a, b) {\n  \n}',
    tests: [
        {
            id: 1,
            description: 'sum(1, 2) === 3',
            run: (code) => eval(code + '; sum(1,2) === 3'),
        },
        {
            id: 2,
            description: 'sum(5, 5) === 10',
            run: (code) => eval(code + '; sum(5,5) === 10'),
        },
    ],
    point: 2,
    progress: 0,
};

const TaskPage = () => {
    return (
        <div>
            <TaskCodePage task={taskSum} />
        </div>
    );
};

export default TaskPage;
