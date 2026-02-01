import type { TaskCodeType } from '@/types/task.ts';
import { useState } from 'react';
import Editor from '@monaco-editor/react';

interface TaskCodeProps {
    task: TaskCodeType;
    onSubmit: (code: string) => void;
}

const TaskCode = ({ task, onSubmit }: TaskCodeProps) => {
    const [code, setCode] = useState(task.starterCode);

    return (
        <section>
            <Editor
                height='85vh'
                width={'100%'}
                language={task.language || 'javascript'}
                defaultValue={task.starterCode}
                onChange={onSubmit}
            />
        </section>
    );
};

export default TaskCode;
