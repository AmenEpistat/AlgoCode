import TextCopy from '@/components/TextCopy/TextCopy.tsx';
import styles from '@/components/Tasks/TaskCodeResult/TaskCodeResult.module.scss';

interface Props {
    errorMessage: string;
}

const ResultSystemError = ({ errorMessage }: Props) => {
    return (
        <div className={styles['result__error-container']}>
            <TextCopy
                className={styles['result__error-message']}
                text={errorMessage}
            />
        </div>
    );
};

export default ResultSystemError;
