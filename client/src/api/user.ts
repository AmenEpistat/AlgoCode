import api from '@/api/axios.ts';

export const userApi = {
    getProfile: () => api.get('/profile'),
    getCalendarData: () => api.get('/profile/activity/calendar'),
    getDayEvents: (date: string) =>
        api.get('/profile/activity/day', { params: { date } }),
    getAchievements: () => api.get('/profile/achievements'),
    completeTask: (taskId: string) =>
        api.post('/progress/complete', { taskId }),
};
