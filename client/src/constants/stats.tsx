import {
    TrophyOutlined,
    ThunderboltOutlined,
    FireOutlined,
    StarTwoTone,
} from '@ant-design/icons';
import type { ReactNode } from 'react';

export const STAT_META: Record<string, { label: string; icon: ReactNode }> = {
    totalXP: { label: 'Опыт', icon: <ThunderboltOutlined /> },
    level: { label: 'Уровень', icon: <StarTwoTone twoToneColor='#eb2f96' /> },
    rank: { label: 'Ранк', icon: <TrophyOutlined /> },
    currentStreak: { label: 'Стрик', icon: <FireOutlined /> },
};
