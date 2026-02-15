import styles from '../TaskCodeResult.module.scss';
import { classNames } from '@/utils/classNames.ts';

interface Props {
    errorTitle?: string;
    passed: number;
    total: number;
}

const ResultHeader = ({ errorTitle, passed, total }: Props) => {
    const accepted = passed === total;

    return (
        <div className={styles['result__header']}>
            <h3
                className={classNames(
                    styles['result__title'],
                    accepted && styles['result__title--success']
                )}
            >
                {accepted && 'Accepted'}
                {!accepted && errorTitle}
            </h3>
            <p className={styles['result__head-text']}>
                {passed}/ {total} testcases passed
            </p>
        </div>
    );
};

export default ResultHeader;
