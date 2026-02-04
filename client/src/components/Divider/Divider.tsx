import styles from './Divider.module.scss';
import React from 'react';

interface Props {
    direction: 'horizontal' | 'vertical';
    onMouseDown: (e: React.MouseEvent) => void;
}

export const Divider = ({ direction, onMouseDown }: Props) => (
    <div
        className={`${styles.divider}-${styles[direction]}`}
        onMouseDown={onMouseDown}
    />
);
