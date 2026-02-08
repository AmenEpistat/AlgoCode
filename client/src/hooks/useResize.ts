import React, { useCallback } from 'react';

interface ResizeOptions {
    direction: 'horizontal' | 'vertical';
    min: number; //в процентах!
    onResize: (value: number) => void;
    startValue: number; // в процентах!!
    invert?: boolean;
    unit?: 'px' | '%';
}

export const useResize = ({
    direction,
    min,
    onResize,
    startValue,
    invert = false,
    unit = 'px',
}: ResizeOptions) => {
    return useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();

            const container = (e.currentTarget as HTMLElement).parentElement;
            if (!container) return;

            const containerSize =
                direction === 'horizontal'
                    ? container.clientWidth
                    : container.clientHeight;

            const startPos = direction === 'horizontal' ? e.clientX : e.clientY;

            const onMove = (ev: MouseEvent) => {
                const currentPos =
                    direction === 'horizontal' ? ev.clientX : ev.clientY;

                let delta = currentPos - startPos;
                if (invert) delta = -delta;

                if (unit === '%') {
                    const deltaPercent = (delta / containerSize) * 100;
                    const newValue = Math.max(min, startValue + deltaPercent);
                    onResize(Math.min(100, newValue));
                } else {
                    onResize(Math.max(min, startValue + delta));
                }
            };

            const stop = () => {
                window.removeEventListener('mousemove', onMove);
                window.removeEventListener('mouseup', stop);
            };

            window.addEventListener('mousemove', onMove);
            window.addEventListener('mouseup', stop);
        },
        [direction, min, onResize, startValue]
    );
};
