import styles from './TaskCode.module.scss';
import { Button, Select } from 'antd';
import { AlignLeftOutlined, UndoOutlined } from '@ant-design/icons';
import type { CodeLanguage } from '@/types/code.ts';

interface Props {
    language: CodeLanguage;
    starterCode: Record<CodeLanguage, string>;
    onFormat: () => void;
    onReset: () => void;
    setLanguage: (language: CodeLanguage) => void;
}

const TaskCodeControls = ({
    language,
    setLanguage,
    starterCode,
    onFormat,
    onReset,
}: Props) => {
    return (
        <div className={styles['task-code-wrapper']}>
            <Select
                className={styles['task-code__select']}
                value={language}
                style={{ width: 120 }}
                onChange={setLanguage}
                options={Object.keys(starterCode).map((lang) => ({
                    value: lang,
                    label: lang,
                }))}
            />
            <div className={styles['task-code__controls']}>
                <Button
                    icon={<AlignLeftOutlined />}
                    type='text'
                    onClick={onFormat}
                />
                <Button
                    icon={<UndoOutlined />}
                    type='text'
                    style={{ rotate: '90deg' }}
                    onClick={onReset}
                />
            </div>
        </div>
    );
};

export default TaskCodeControls;
