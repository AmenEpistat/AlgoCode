import styles from '../TaskCodeResult.module.scss';
import { classNames } from '@/utils/classNames.ts';

interface Props {
    status: string;
    passed: number;
    total: number;
}

const ResultHeader = ({ status, passed, total }: Props) => {
    const accepted = passed === total && passed !== 0;

    return (
        <div className={styles['result__header']}>
            <h3
                className={classNames(
                    styles['result__title'],
                    accepted && styles['result__title--success']
                )}
            >
                {status}
            </h3>
            <p className={styles['result__head-text']}>
                {passed} / {total} testcases passed
            </p>
        </div>
    );
};

export default ResultHeader;
