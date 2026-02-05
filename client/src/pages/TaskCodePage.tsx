import { useRef, useState } from 'react';
import type { TaskCodeType } from '@/types/task';
import TaskCode from '@/components/Tasks/TaskCode/TaskCode.tsx';
import '@/styles/pages/task-code-page.scss';
import { Divider } from '@/components/Divider/Divider.tsx';
import { useResize } from '@/hooks/useResize.ts';
import Panel from '@/components/Panel/Panel.tsx';
import { CodeOutlined } from '@ant-design/icons';

interface Props {
    task: TaskCodeType;
}

const TaskCodePage = ({ task }: Props) => {
    const [code, setCode] = useState('');
    const editorRef = useRef<any>(null);

    const [height, setHeight] = useState(300);
    const [width, setWidth] = useState(300);

    const onMouseHeight = useResize({
        direction: 'vertical',
        min: 50,
        onResize: setHeight,
        startValue: height,
    });

    const onMouseWidth = useResize({
        direction: 'horizontal',
        min: 300,
        onResize: setWidth,
        startValue: width,
        invert: true,
    });

    return (
        <section className='task-code-page content-wrapper'>
            <Panel
                className='task-code-page__description'
                style={{ width: `calc(100% - ${width}px)` }}
                title='Description'
                icon={<CodeOutlined />}
            >
                <h2>{task.title}</h2>
                <p>{task.description}</p>
            </Panel>

            <section
                className='task-code-page__editor-wrapper'
                style={{ width: width }}
            >
                <Divider
                    className={'task-code-page__horizontal'}
                    direction='horizontal'
                    onMouseDown={onMouseWidth}
                />
                <Panel
                    className='task-code-page__editor'
                    style={{ height: height }}
                    title={'Code'}
                    icon={
                        <CodeOutlined
                            className={'task-code-page__editor-icon'}
                        />
                    }
                >
                    <TaskCode
                        starterCode={task.starterCode}
                        onChange={(code) => console.log(height)}
                        editorRef={editorRef}
                    />
                    <Divider
                        className={'task-code-page__vertical'}
                        direction='vertical'
                        onMouseDown={onMouseHeight}
                    />
                </Panel>
            </section>
        </section>
    );
};

export default TaskCodePage;
