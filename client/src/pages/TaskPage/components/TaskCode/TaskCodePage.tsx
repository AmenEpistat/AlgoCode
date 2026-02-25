import { useRef } from 'react';
import type { TaskCodeType } from '@/types/task.ts';
import TaskCode from '@/components/Tasks/TaskCode/TaskCode.tsx';
import '@/styles/pages/task-code-page.scss';
import { Divider } from '@/components/UI/Divider/Divider.tsx';
import Panel from '@/components/UI/Panel/Panel.tsx';
import { CodeOutlined } from '@ant-design/icons';
import { useTaskLayout } from '@/pages/TaskPage/components/TaskCode/useTaskLayout.ts';
import { useTaskCodeRunner} from '@/pages/TaskPage/components/TaskCode/useTaskCodeRunner.ts';
import TaskDescription from '@/components/Tasks/TaskCode/TaskDescription/TaskDescription.tsx';
import TaskCodeResult from '@/components/Tasks/TaskCode/TaskCodeResult/TaskCodeResult.tsx';

interface Props {
    task: TaskCodeType;
}

const TaskCodePage = ({ task }: Props) => {
    const editorRef = useRef<any>(null);
    const {
        width,
        height,
        onMouseWidth,
        onMouseHeight,
        setWidth,
        isDescriptionExpanded,
        isEditorExpanded,
    } = useTaskLayout();

    const { result, runCode, isRunning } = useTaskCodeRunner(task.tests);

    return (
        <section className='task-code-page'>
            <TaskDescription
                task={task}
                isExpanded={isDescriptionExpanded}
                onExpand={() => setWidth(0)}
                onCollapse={() => setWidth(40)}
            />
            <section
                className='task-code-page__editor-wrapper'
                style={{ width: `${width}%` }}
            >
                <Divider
                    className={'task-code-page__horizontal'}
                    direction='horizontal'
                    onMouseDown={onMouseWidth}
                />
                <Panel
                    className='task-code-page__editor'
                    style={{ height: `${height}px` }}
                    isExpanded={isEditorExpanded}
                    title={'Code'}
                    icon={
                        <CodeOutlined
                            className={'task-code-page__editor-icon'}
                        />
                    }
                    onExpandPanel={() => setWidth(100)}
                    onCollapsePanel={() => setWidth(40)}
                >
                    <TaskCode
                        starterCode={task.starterCode}
                        runCode={(code) => runCode(code)}
                        editorRef={editorRef}
                    />
                    <Divider
                        className={'task-code-page__vertical'}
                        direction='vertical'
                        onMouseDown={onMouseHeight}
                    />
                </Panel>
                <TaskCodeResult
                    isExpanded={isEditorExpanded}
                    onExpand={() => setWidth(100)}
                    onCollapse={() => setWidth(40)}
                    result={result}
                    isRunning={isRunning}
                />
            </section>
        </section>
    );
};

export default TaskCodePage;
