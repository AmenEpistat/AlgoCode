import { QuizCard } from './components/QuizCard/QuizCard';
import QuizSteps from './components/QuizSteps/QuizSteps';
import { QuizFooter } from './components/QuizFooter/QuizFooter';
import styles from './TaskQuiz.module.scss';
import type { TaskQuizType } from '@/types/task.ts';
import { useQuizProgress } from '@/components/Tasks/TaskQuiz/useQuizProgress.ts';

interface Props {
    task: TaskQuizType;
    onFinish: (a: any) => void;
}

const TaskQuiz = ({ task, onFinish }: Props) => {
    const {
        currentQuestion,
        currentIdx,
        setCurrentIdx,
        answers,
        answeredIndices,
        isLast,
        handleSelect,
        goNext,
        goPrev,
    } = useQuizProgress(task);

    return (
        <div className={styles['task-quiz']}>
            <QuizCard
                question={currentQuestion.question}
                options={currentQuestion.options}
                selectedValue={answers[currentQuestion.id]}
                onSelect={handleSelect}
                order={currentIdx + 1}
                point={currentQuestion.point}
            />

            <div className={styles['task-quiz__steps']}>
                <QuizSteps
                    total={task.questions.length}
                    current={currentIdx}
                    answeredIndices={answeredIndices}
                    onStepClick={setCurrentIdx}
                />
            </div>

            <QuizFooter
                onPrev={currentIdx > 0 ? goPrev : undefined}
                onNext={() => goNext(onFinish)}
                isLast={isLast}
                isFirst={currentIdx === 0}
            />
        </div>
    );
};

export default TaskQuiz;
