import styles from './TaskCodeResult.module.scss';
import Panel from '@/components/Panel/Panel.tsx';
import { CheckCircleOutlined } from '@ant-design/icons';
import type { TestCodeResult } from '@/types/code.ts';
import { Spin } from 'antd';
import { classNames } from '@/utils/classNames.ts';
import ResultHeader from '@/components/Tasks/TaskCodeResult/components/ResultHeader.tsx';
import ResultFailed from '@/components/Tasks/TaskCodeResult/components/ResultFailed.tsx';

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
                            passed={result?.passed}
                            total={result?.total}
                            errorTitle={
                                result?.lastFailed ? 'Wrong Answer' : ''
                            }
                        />

                        {result?.lastFailed && (
                            <ResultFailed lastFailed={result.lastFailed} />
                        )}
                    </div>
                )}
            </Spin>
        </Panel>
    );
};

export default TaskCodeResult;
