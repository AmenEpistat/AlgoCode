import { Button, message } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import styles from './TextCopy.module.scss';
import { classNames } from '@/utils/classNames.ts';

interface Props {
    text: any;
    className?: string;
    buttonClassName?: string;
    showText?: boolean;
}

const TextCopy = ({ text, className, showText, buttonClassName }: Props) => {
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
            {showText && (
                <span
                    className={classNames(
                        styles['text-copy__info'],
                        className !== undefined && className
                    )}
                >
                    {displayText}
                </span>
            )}
            <Button
                className={classNames(
                    styles['text-copy__button'],
                    buttonClassName !== undefined && buttonClassName
                )}
                icon={<CopyOutlined className={styles['text-copy__icon']} />}
                type='text'
                size='small'
                onClick={handleCopy}
            />
        </div>
    );
};

export default TextCopy;
