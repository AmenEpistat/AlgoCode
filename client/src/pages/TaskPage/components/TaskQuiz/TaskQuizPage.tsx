import type { TaskQuizType } from '@/types/task.ts';
import TaskQuiz from '@/components/Tasks/TaskQuiz/TaskQuiz.tsx';

interface Props {
    task: TaskQuizType;
}

const TaskQuizPage = ({ task }: Props) => {
    return (
        <div className={'task-quiz-page content-wrapper'}>
            <TaskQuiz task={task} onFinish={() => console.log('fin')} />
        </div>
    );
};

export default TaskQuizPage;
