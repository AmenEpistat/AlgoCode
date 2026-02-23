import TextCopy from '@/components/UI/TextCopy/TextCopy.tsx';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import styles from './TaskMarkDown.module.scss';
import { oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const TaskMarkdown = {
    h3: ({ children, ...props }: any) => (
        <h3 className={styles['task-markdown__subtitle']} {...props}>
            {children}
        </h3>
    ),
    p: ({ ...props }: any) => (
        <p className={styles['task-markdown__text']} {...props} />
    ),
    ul: ({ ...props }: any) => (
        <ul className={styles['task-markdown__list']} {...props} />
    ),
    a: ({ children, ...props }: any) => (
        <a
            className={styles['task-markdown__link']}
            target='_blank'
            rel='noopener noreferrer'
            {...props}
        >
            {children}
        </a>
    ),
    code({ inline, className, children, ...props }: any) {
        const match = /language-(\w+)/.exec(className || '');
        const language = match ? match[1] : '';
        const code = String(children).replace(/\n$/, '');

        return !inline && match ? (
            <div className={styles['task-markdown__code-wrapper']}>
                <div className={styles['task-markdown__copy-button']}>
                    <TextCopy
                        text={code}
                        buttonClassName={styles['task-markdown__copy-button']}
                    />
                </div>

                <SyntaxHighlighter
                    style={oneLight}
                    language={language}
                    PreTag='div'
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        ) : (
            <code className={styles['task-markdown__inline-code']} {...props}>
                {children}
            </code>
        );
    },
};

export default TaskMarkdown;
