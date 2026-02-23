import styles from './Divider.module.scss';
import React from 'react';
import { classNames } from '@/utils/classNames.ts';

interface Props {
    direction: 'horizontal' | 'vertical';
    onMouseDown: (e: React.MouseEvent) => void;
    className: string;
}

export const Divider = ({ direction, onMouseDown, className }: Props) => (
    <div
        className={classNames(styles[`divider-${direction}`], className)}
        onMouseDown={onMouseDown}
    />
);
