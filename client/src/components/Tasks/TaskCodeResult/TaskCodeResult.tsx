import styles from './TaskCodeResult.module.scss';
import Panel from '@/components/Panel/Panel.tsx';
import { CheckCircleOutlined } from '@ant-design/icons';

interface Props {
    onCollapse: () => void;
    onExpand: () => void;
    isExpanded: boolean;
}

const TaskCodeResult = ({ onCollapse, onExpand, isExpanded }: Props) => {
    return (
        <Panel
            className={styles['task-code-result']}
            onCollapsePanel={onCollapse}
            onExpandPanel={onExpand}
            title='Result code'
            icon={<CheckCircleOutlined />}
            isExpanded={isExpanded}
        >
            <div className={styles['task-code-title']} />
        </Panel>
    );
};

export default TaskCodeResult;
