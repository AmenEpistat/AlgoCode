import { Radio, Tag } from 'antd';
import ReactMarkdown from 'react-markdown';
import TaskMarkdown from '@/components/Tasks/common/TaskMarkdown/TaskMarkdown';
import type { QuizOption } from '@/types/quiz.ts';
import styles from './QuizCard.module.scss';
import { useMemo } from 'react';

interface Props {
    question: string;
    options: QuizOption[];
    selectedValue?: string;
    onSelect: (id: string) => void;
    order: number;
    point: number;
}

export const QuizCard = ({
    question,
    options,
    selectedValue,
    onSelect,
    point,
    order,
}: Props) => {
    const radioOptions = useMemo(() => {
        return options.map((option) => ({
            value: option.id,
            label: option.text,
        }));
    }, [options]);

    return (
        <div className={styles['quiz-card']}>
            <div className={styles['quiz-card__question-order']}>
                {order} задание
                <Tag>{point} балл</Tag>
            </div>

            <ReactMarkdown components={TaskMarkdown as any}>
                {question}
            </ReactMarkdown>

            <Radio.Group
                className={styles['quiz-card__options']}
                onChange={(e) => onSelect(e.target.value)}
                value={selectedValue}
                options={radioOptions}
            />
        </div>
    );
};
