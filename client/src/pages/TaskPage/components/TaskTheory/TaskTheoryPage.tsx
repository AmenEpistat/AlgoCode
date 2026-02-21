import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Panel from '@/components/Panel/Panel.tsx';
import { BookOutlined } from '@ant-design/icons';
import '@/styles/pages/task-theory-page.scss';
import type { TaskTheory } from '@/types/task.ts';

interface Props {
    task: TaskTheory;
}

const TaskTheoryPage = ({ task }: Props) => {
    return (
        <section className='task-theory-page'>
            <Panel
                className='task-theory-page__panel'
                title={task.title}
                icon={<BookOutlined className='task-theory-page__icon' />}
            >
                <div className='task-theory-page__content'>
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            h3: ({ node, ...props }) => (
                                <h3
                                    className='task-theory-page__subtitle'
                                    {...props}
                                />
                            ),
                            p: ({ node, ...props }) => (
                                <p
                                    className='task-theory-page__text'
                                    {...props}
                                />
                            ),
                            ul: ({ node, ...props }) => (
                                <ul
                                    className='task-theory-page__list'
                                    {...props}
                                />
                            ),
                            a: ({ node, ...props }) => (
                                <a
                                    className='task-theory-page__link'
                                    target='_blank'
                                    {...props}
                                />
                            ),
                            code: ({ node, ...props }) => (
                                <code
                                    className='task-theory-page__inline-code'
                                    {...props}
                                />
                            ),
                        }}
                    >
                        {task.body}
                    </ReactMarkdown>
                </div>
            </Panel>
        </section>
    );
};

export default TaskTheoryPage;