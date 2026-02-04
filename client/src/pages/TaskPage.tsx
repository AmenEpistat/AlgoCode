import TaskCodePage from '@/pages/TaskCodePage.tsx';
import type { TaskCodeType } from '@/types/task.ts';
import '@/styles/pages/task-page.scss';

export const taskSum: TaskCodeType = {
    type: 'code',
    id: 'sum',
    title: 'Сумма чисел',
    description: 'Напиши функцию sum(a, b), которая возвращает сумму',
    starterCode: {
        javascript: 'function sort(arr) { return arr.sort(); }',
        python: 'def sort(arr): return sorted(arr)',
        cpp: '#include <algorithm>\nvoid sort(vector<int>& arr){ std::sort(arr.begin(), arr.end()); }',
    },
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
        <section className='task-page container'>
            <TaskCodePage task={taskSum} />
        </section>
    );
};

export default TaskPage;
