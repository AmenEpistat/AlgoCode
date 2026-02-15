import styles from '@/components/Tasks/TaskCodeResult/TaskCodeResult.module.scss';
import type { CodeTest } from '@/types/code.ts';

interface Props {
    lastFailed: CodeTest;
}

const ResultFailed = ({ lastFailed }: Props) => {
    return (
        <div className={styles['result__fail-wrapper']}>
            <div className={styles['result__fail-desc']}>
                Input
                <span className={styles['result__fail-info']}>
                    &#39;&#39;{lastFailed.input}&#39;&#39;
                </span>
            </div>
            <div className={styles['result__fail-desc']}>
                Expected:
                <span className={styles['result__fail-info']}>
                    &#39;&#39;{lastFailed.output}&#39;&#39;
                </span>
            </div>
        </div>
    );
};

export default ResultFailed;
