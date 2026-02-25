import { CodeOutlined } from '@ant-design/icons';
import DifficultyTag from '@/components/DifficultyTag/DifficultyTag.tsx';
import Panel from '@/components/UI/Panel/Panel.tsx';
import type { TaskCodeType } from '@/types/task.ts';
import styles from './TaskDescription.module.scss';

interface Props {
    task: TaskCodeType;
    isExpanded: boolean;
    onExpand: () => void;
    onCollapse: () => void;
}

const TaskDescription = ({
    task,
    isExpanded,
    onExpand,
    onCollapse,
}: Props) => {

    return (
        <Panel
            className={styles['task-description']}
            title='Description'
            isExpanded={isExpanded}
            icon={<CodeOutlined />}
            onExpandPanel={onExpand}
            onCollapsePanel={onCollapse}
        >
            <div className={styles['task-description__content']}>
                <h2 className={styles['task-description__title']}>
                    {task.title}
                </h2>
                <DifficultyTag difficulty={task.difficulty} />
                <p className={styles['task-description__text']}>
                    {task.description}
                </p>
            </div>
        </Panel>
    );
};

export default TaskDescription;
