import styles from './TaskCodeResult.module.scss';
import Panel from '@/components/Panel/Panel.tsx';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import type { TestCodeResult } from '@/types/code.ts';
import { Spin } from 'antd';
import { classNames } from '@/utils/classNames.ts';

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
                        <div className={styles['result__header']}>
                            <h3
                                className={classNames(
                                    styles['result__title'],
                                    result?.passed === result?.total &&
                                        styles['result__title--success']
                                )}
                            >
                                {result?.passed === result?.total
                                    ? 'Accepted'
                                    : 'Tests failed'}
                            </h3>
                            <p className={styles['result__head-text']}>
                                {result?.passed}/ {result?.total} testcases
                                passed
                            </p>
                        </div>
                        {result?.lastFailed && (
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
                            Total Score: <span>{result?.score} pts</span>
                        </div>
                    </div>
                )}
            </Spin>
        </Panel>
    );
};

export default TaskCodeResult;
