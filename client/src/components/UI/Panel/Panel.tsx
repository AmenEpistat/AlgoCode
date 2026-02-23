import styles from './Panel.module.scss';
import { classNames } from '@/utils/classNames.ts';
import React, { type CSSProperties } from 'react';
import { ExpandOutlined, CompressOutlined } from '@ant-design/icons';
import { Button } from 'antd';

interface PanelProps {
    className?: string;
    style?: CSSProperties;
    children: React.ReactNode;
    title: string;
    icon: React.ReactNode;
    onExpandPanel: () => void;
    onCollapsePanel: () => void;
    isExpanded: boolean;
}

const Panel = ({
    className,
    children,
    title,
    icon,
    style,
    onExpandPanel,
    onCollapsePanel,
    isExpanded,
}: PanelProps) => {
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
                <div className={styles['panel__buttons']}>
                    <Button
                        icon={
                            !isExpanded ? (
                                <ExpandOutlined
                                    className={styles['panel__icon']}
                                />
                            ) : (
                                <CompressOutlined
                                    className={styles['panel__icon']}
                                />
                            )
                        }
                        type='text'
                        onClick={!isExpanded ? onExpandPanel : onCollapsePanel}
                    />
                </div>
            </div>
            {children}
        </div>
    );
};

export default Panel;
