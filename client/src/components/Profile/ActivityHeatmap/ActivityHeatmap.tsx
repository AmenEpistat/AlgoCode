import { ActivityCalendar } from 'react-activity-calendar';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/store/StoreContext';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import styles from './ActivityHeatmap.module.scss';
import React from 'react';

export const ActivityHeatmap = observer(() => {
    const { userStore } = useStore();

    return (
        <div className={styles['heatmap']}>
            <h3 className={styles['heatmap__title']}>Статистика обучения</h3>

            <ActivityCalendar
                data={userStore.calendarData}
                showWeekdayLabels={true}
                blockSize={12}
                blockMargin={4}
                colorScheme='light'
                theme={{
                    light: [
                        '#dddbdb',
                        '#39d353',
                        '#26a641',
                        '#006d32',
                        '#0e4429',
                    ],
                }}
                labels={{
                    months: [
                        'Янв',
                        'Фев',
                        'Мар',
                        'Апр',
                        'Май',
                        'Июн',
                        'Июл',
                        'Авг',
                        'Сен',
                        'Окт',
                        'Ноя',
                        'Дек',
                    ],
                    weekdays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                    totalCount: '{{count}} активностей за последний год',
                    legend: {
                        less: 'Меньше',
                        more: 'Больше',
                    },
                }}
                renderBlock={(block, activity) =>
                    React.cloneElement(block, {
                        'data-tooltip-id': 'activity-tooltip',
                        'data-tooltip-content': `${activity.count} задач: ${activity.date} (${activity.level} ур.)`,
                    })
                }
            />
            <ReactTooltip id='activity-tooltip' />
        </div>
    );
});
