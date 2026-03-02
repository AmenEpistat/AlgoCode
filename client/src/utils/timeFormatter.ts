import { pluralize } from './pluralize';

export const formatRelativeTime = (dateParam: string | Date): string => {
    const date =
        typeof dateParam === 'string' ? new Date(dateParam) : dateParam;
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return 'только что';

    const minutes = Math.floor(diffInSeconds / 60);
    if (minutes < 60) {
        const word = pluralize(minutes, ['минуту', 'минуты', 'минут']);
        return `${minutes} ${word} назад`;
    }

    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
        const word = pluralize(hours, ['час', 'часа', 'часов']);
        return `${hours} ${word} назад`;
    }

    const days = Math.floor(hours / 24);
    if (days < 7) {
        const word = pluralize(days, ['день', 'дня', 'дней']);
        return `${days} ${word} назад`;
    }

    return date.toLocaleDateString('ru-RU');
};
