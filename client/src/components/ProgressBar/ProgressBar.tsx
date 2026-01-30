import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
    percent: number | null;
    type?: 'circle' | 'line';
    size?: number;
    height?: number;
    strokeWidth?: number;
    className?: string;
}

const getProgressColor = (percent: number | null) => {
    if (percent !== 0) return 'current';
    return 'default';
};

export const ProgressBar = ({
    percent,
    type = 'line',
    size = 160,
    height = 20,
    strokeWidth = 8,
    className = '',
}: ProgressBarProps) => {
    const colorClass = styles[getProgressColor(percent)];

    if (type === 'circle') {
        const radius = 50 - strokeWidth;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference * (1 - (percent ?? 0) / 100);

        return (
            <div className={styles['progress-bar-wrapper']}>
                <svg
                    width={size}
                    height={size}
                    viewBox='0 0 100 100'
                    className={className}
                >
                    <circle
                        cx='50'
                        cy='50'
                        r={radius}
                        stroke='#eee'
                        strokeWidth={strokeWidth}
                        fill='none'
                    />
                    <circle
                        cx='50'
                        cy='50'
                        r={radius}
                        stroke='#000'
                        strokeWidth={strokeWidth}
                        fill='none'
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap='round'
                        transform='rotate(-90 50 50)'
                        className={colorClass}
                    />
                </svg>
            </div>
        );
    }

    return (
        <div
            className={`${styles['progress-bar']} ${className}`}
            style={{ height }}
        >
            <div
                className={`${styles['progress-fill']} ${colorClass}`}
                style={{ width: `${percent}%` }}
            />
        </div>
    );
};
