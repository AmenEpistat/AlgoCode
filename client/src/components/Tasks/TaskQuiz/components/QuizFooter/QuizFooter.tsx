import styles from './QuizFooter.module.scss';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

interface QuizFooterProps {
    onPrev?: () => void;
    onNext: () => void;
    isLast: boolean;
    isFirst: boolean;
}

export const QuizFooter = ({
    onPrev,
    onNext,
    isLast,
    isFirst,
}: QuizFooterProps) => (
    <div className={styles['quiz-footer']}>
        {!isFirst && (
            <Button
                size='large'
                className={'ant-btn-accent'}
                icon={<LeftOutlined />}
                onClick={onPrev}
            >
                Назад
            </Button>
        )}
        <Button
            size='large'
            onClick={onNext}
            className={'ant-btn-secondary'}
            icon={!isLast && <RightOutlined />}
        >
            {isLast ? 'Завершить' : 'Вперед'}
        </Button>
    </div>
);
