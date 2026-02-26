import styles from './QuizFooter.module.scss';
import { Button } from 'antd';
import { LeftOutlined, CheckOutlined, RightOutlined } from '@ant-design/icons';

interface QuizFooterProps {
    onPrev?: () => void;
    onNext: () => void;
    isLast: boolean;
    canNext: boolean;
}

export const QuizFooter = ({
    onPrev,
    onNext,
    isLast,
    canNext,
}: QuizFooterProps) => (
    <div className={styles.footer}>
        <div className={styles.footer__left}>
            {onPrev && (
                <Button type='text' icon={<LeftOutlined />} onClick={onPrev}>
                    Назад
                </Button>
            )}
        </div>
        <Button
            size='large'
            disabled={!canNext}
            onClick={onNext}
            icon={isLast ? <CheckOutlined /> : <RightOutlined />}
        >
            {isLast ? 'Завершить' : 'Вперед'}
        </Button>
    </div>
);
