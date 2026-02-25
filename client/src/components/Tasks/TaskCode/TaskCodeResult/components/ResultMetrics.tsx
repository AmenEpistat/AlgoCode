import { FieldTimeOutlined } from '@ant-design/icons';
import styles from '../TaskCodeResult.module.scss';

interface Props {
    time: number;
    memory: number;
}

const ResultMetrics = ({ time, memory }: Props) => {
    return (
        <div className={styles['result__metrics']}>
            <div className={styles['result__metric']}>
                <span>
                    <FieldTimeOutlined /> Runtime
                </span>
                <span>
                    <strong className={styles['result__metric-value']}>
                        {time}
                    </strong>
                    ms
                </span>
            </div>
            <div className={styles['result__metric']}>
                <span>
                    <FieldTimeOutlined /> Memory
                </span>
                <span>
                    <strong className={styles['result__metric-value']}>
                        {memory}
                    </strong>{' '}
                    MB
                </span>
            </div>
        </div>
    );
};

export default ResultMetrics;
