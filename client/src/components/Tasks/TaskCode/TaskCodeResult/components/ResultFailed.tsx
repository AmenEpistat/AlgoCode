import styles from '@/components/Tasks/TaskCode/TaskCodeResult/TaskCodeResult.module.scss';
import type { CodeTest } from '@/types/code.ts';
import TextCopy from '@/components/UI/TextCopy/TextCopy.tsx';

interface Props {
    lastFailed: CodeTest;
    logs?: string[];
}

const ResultFailed = ({ lastFailed, logs }: Props) => {
    return (
        <div className={styles['result__fail-wrapper']}>
            <TextCopy text={lastFailed.input} title={'Input'} />
            <TextCopy text={lastFailed.output} title={'Output'} />
            <TextCopy text={lastFailed.expected} title={'Expected'} />
            {logs && logs.length > 0 && (
                <TextCopy text={logs} title={'Console'} />
            )}
        </div>
    );
};

export default ResultFailed;
