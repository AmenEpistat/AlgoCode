import { Button, message } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import styles from './TextCopy.module.scss';

interface Props {
    text: any;
    title?: string;
}

const TextCopy = ({ text, title }: Props) => {
    const displayText =
        typeof text === 'object' ? JSON.stringify(text, null, 2) : String(text);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(displayText);
            message.success('Скопировано!');
        } catch (err) {
            message.error('Ошибка при копировании');
        }
    };

    return (
        <div className={styles['text-copy']}>
            {title && (
                <span className={styles['text-copy__title']}>{title}:</span>
            )}
            <span className={styles['text-copy__info']}>{displayText}</span>
            <Button
                className={styles['text-copy__button']}
                icon={<CopyOutlined className={styles['text-copy__icon']} />}
                type='text'
                size='small'
                onClick={handleCopy}
            />
        </div>
    );
};

export default TextCopy;
