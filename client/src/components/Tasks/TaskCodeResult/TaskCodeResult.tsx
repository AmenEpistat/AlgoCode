import styles from './TaskCodeResult.module.scss';
import Panel from '@/components/Panel/Panel.tsx';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import type { TestCodeResult } from '@/types/code.ts';
import { Progress } from 'antd';

interface Props {
    onCollapse: () => void;
    onExpand: () => void;
    isExpanded: boolean;
    result: TestCodeResult | null;
}

const TaskCodeResult = ({
    onCollapse,
    onExpand,
    isExpanded,
    result,
}: Props) => {
    const successPercent = result
        ? Math.round((result.passed / result.total) * 100)
        : 0;

    return (
        <Panel
            className={styles['result']}
            onCollapsePanel={onCollapse}
            onExpandPanel={onExpand}
            title='Test Result'
            icon={<CheckCircleOutlined />}
            isExpanded={isExpanded}
        >
            {result === null ? (
                <div className={styles['result__none-content']}>
                    You must run your code first
                </div>
            ) : (
                <div className={styles['result__content']}>
                    <div className={styles['result__header']}>
                        <Progress
                            type='circle'
                            percent={successPercent}
                            size={40}
                            status={
                                result.passed === result.total
                                    ? 'success'
                                    : 'normal'
                            }
                        />
                        <div className={styles['result__summary']}>
                            <h3>
                                {result.passed === result.total
                                    ? 'All Tests Passed!'
                                    : 'Some tests failed'}
                            </h3>
                            <p>
                                Passed: <strong>{result.passed}</strong> /{' '}
                                {result.total}
                            </p>
                        </div>
                    </div>
                    {result.lastFailed && (
                        <div className={styles['result__error-block']}>
                            <div className={styles['result__error-title']}>
                                <CloseCircleOutlined
                                    style={{ color: '#ff4d4f' }}
                                />
                                <span>Failed Test Case:</span>
                            </div>
                            <div className={styles['result__error-desc']}>
                                {result.lastFailed.description}
                            </div>
                        </div>
                    )}
                    <div className={styles['result__score']}>
                        Total Score: <span>{result.score} pts</span>
                    </div>
                </div>
            )}
        </Panel>
    );
};

export default TaskCodeResult;
