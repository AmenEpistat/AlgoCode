import TextCopy from '@/components/UI/TextCopy/TextCopy.tsx';
import styles from '@/components/Tasks/TaskCode/TaskCodeResult/TaskCodeResult.module.scss';

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
