import styles from './TaskCodeResult.module.scss';
import Panel from '@/components/UI/Panel/Panel.tsx';
import { CheckCircleOutlined } from '@ant-design/icons';
import type { TestCodeResult } from '@/types/code.ts';
import { Spin } from 'antd';
import { classNames } from '@/utils/classNames.ts';
import ResultHeader from '@/components/Tasks/TaskCode/TaskCodeResult/components/ResultHeader.tsx';
import ResultFailed from '@/components/Tasks/TaskCode/TaskCodeResult/components/ResultFailed.tsx';
import ResultSystemError from '@/components/Tasks/TaskCode/TaskCodeResult/components/ResultSystemError.tsx';
import ResultMetrics from '@/components/Tasks/TaskCode/TaskCodeResult/components/ResultMetrics.tsx';

interface Props {
    onCollapse: () => void;
    onExpand: () => void;
    isExpanded: boolean;
    result: TestCodeResult | null;
    isRunning: boolean;
}

const TaskCodeResult = ({
    onCollapse,
    onExpand,
    isExpanded,
    result,
    isRunning,
}: Props) => {
    return (
        <Panel
            className={styles['result']}
            onCollapsePanel={onCollapse}
            onExpandPanel={onExpand}
            title='Test Result'
            icon={<CheckCircleOutlined />}
            isExpanded={isExpanded}
        >
            <Spin
                spinning={isRunning}
                wrapperClassName={classNames(
                    result === null && styles['result__container']
                )}
            >
                {result === null ? (
                    <div className={styles['result__none-content']}>
                        You must run your code first
                    </div>
                ) : (
                    <div className={styles['result__content']}>
                        <ResultHeader
                            passed={result?.passed ?? 0}
                            total={result?.total ?? 0}
                            status={result.status}
                        />

                        {result?.lastFailed && (
                            <ResultFailed
                                lastFailed={result.lastFailed}
                                logs={result.logs}
                            />
                        )}

                        {result.errorMessage && (
                            <ResultSystemError
                                errorMessage={result.errorMessage}
                            />
                        )}

                        {result.time && result.memory && (
                            <ResultMetrics
                                time={result.time}
                                memory={result.memory}
                            />
                        )}
                    </div>
                )}
            </Spin>
        </Panel>
    );
};

export default TaskCodeResult;
