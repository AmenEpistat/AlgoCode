import { classNames } from '../../../utils/classNames.ts';
import styles from './Plank.module.scss';

interface TabletProps {
    title: string;
    progress: number;
    isLocked: boolean;
}

const Plank = ({ title, progress, isLocked }: TabletProps) => {
    return (
        <div className={classNames(styles.plank, isLocked && styles.locked)}>
            <div className={styles.plank__title}>{title}</div>
            {isLocked ? (
                <div className={styles.plank__lock} />
            ) : (
                <div className={styles.plank__progress}>{progress}</div>
            )}
        </div>
    );
};

export default Plank;
