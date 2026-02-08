import { useState } from 'react';
import { useResize } from '@/hooks/useResize.ts';

export const useTaskLayout = () => {
    const [height, setHeight] = useState(400);
    const [width, setWidth] = useState(40);

    const onMouseHeight = useResize({
        direction: 'vertical',
        min: 40,
        onResize: setHeight,
        startValue: height,
    });

    const onMouseWidth = useResize({
        direction: 'horizontal',
        min: 0,
        onResize: setWidth,
        startValue: width,
        invert: true,
        unit: '%',
    });

    return {
        width,
        height,
        onMouseWidth,
        onMouseHeight,
        setWidth,
        isDescriptionExpanded: width === 0,
        isEditorExpanded: width === 100,
    };
};
