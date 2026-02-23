import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '@/styles/pages/task-theory-page.scss';
import type { TaskTheory } from '@/types/task.ts';
import { useTaskTheoryProgress } from '@/pages/TaskPage/components/TaskTheory/useTaskTheoryProgress.ts';
import TaskMarkdown from '@/components/Tasks/common/TaskMarkdown/TaskMarkdown.tsx';
import TaskTheoryFooter from '@/components/Tasks/TaskTheory/TaskTheoryFooter/TaskTheoryFooter.tsx';

interface Props {
    task: TaskTheory;
}

const TaskTheoryPage = ({ task }: Props) => {
    const { isCompleted, handleAction } = useTaskTheoryProgress(task.progress);

    return (
        <section className='task-theory-page content-wrapper'>
            <h2 className='task-theory-page__title'>{task.title}</h2>
            <div className='task-theory-page__content'>
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={TaskMarkdown}
                >
                    {task.body}
                </ReactMarkdown>
                <TaskTheoryFooter
                    isCompleted={isCompleted}
                    onAction={handleAction}
                />
            </div>
        </section>
    );
};

export default TaskTheoryPage;
