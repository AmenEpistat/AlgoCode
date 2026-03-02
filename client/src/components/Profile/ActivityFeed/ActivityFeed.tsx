import { observer } from 'mobx-react-lite';
import { useStore } from '@/store/StoreContext';
import styles from './ActivityFeed.module.scss';
import { Button } from 'antd';
import { formatRelativeTime } from '@/utils/timeFormatter.ts';
import { RightOutlined } from '@ant-design/icons';

export const ActivityFeed = observer(() => {
    const { userStore } = useStore();
    const events = userStore.selectedDayEvents;

    return (
        <section className={styles['activity-feed']}>
            <div className={styles['activity-feed__header']}>
                <h4 className={styles['activity-feed__label']}>
                    {userStore.selectedDayIsToday
                        ? 'Последняя активность'
                        : `Активность за ${userStore.selectedDate}`}
                </h4>
                <Button type={'text'} size={'small'}>
                    Посмотреть все активности <RightOutlined />
                </Button>
            </div>

            {events.length === 0 ? (
                <div className={styles['activity-feed__empty']}>
                    В этот день активностей не было
                </div>
            ) : (
                <ul className={styles['activity-feed__event-list']}>
                    {events.map((event) => (
                        <li
                            key={event.id}
                            className={styles['activity-feed__event-item']}
                        >
                            <div className={styles['activity-feed__info']}>
                                <span
                                    className={
                                        styles['activity-feed__event-title']
                                    }
                                >
                                    {event.title}
                                </span>
                                <span
                                    className={
                                        styles['activity-feed__event-time']
                                    }
                                >
                                    {formatRelativeTime(event.timestamp)}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
});
