import styles from './Panel.module.scss';
import { classNames } from '@/utils/classNames.ts';
import React, { type CSSProperties } from 'react';

interface PanelProps {
    className?: string;
    style?: CSSProperties;
    children: React.ReactNode;
    title: string;
    icon: any;
}

const Panel = ({ className, children, title, icon, style }: PanelProps) => {
    return (
        <div
            className={classNames(
                styles['panel'],
                className !== undefined && className
            )}
            style={style}
        >
            <div className={styles['panel__title']}>
                {icon}
                {title}
            </div>
            {children}
        </div>
    );
};

export default Panel;
