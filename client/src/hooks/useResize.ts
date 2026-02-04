import { useCallback } from 'react';

interface ResizeOptions {
    direction: 'horizontal' | 'vertical';
    min: number;
    onResize: (value: number) => void;
    startValue: number;
}

export const useResize = ({
    direction,
    min,
    onResize,
    startValue,
}: ResizeOptions) => {
    return useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();

            const startPos = direction === 'horizontal' ? e.clientX : e.clientY;

            const onMove = (ev: MouseEvent) => {
                const currentPos =
                    direction === 'horizontal' ? ev.clientX : ev.clientY;

                const delta = currentPos - startPos;
                onResize(Math.max(min, startValue + delta));
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
