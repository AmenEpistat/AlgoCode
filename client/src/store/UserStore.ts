import { makeAutoObservable, reaction } from 'mobx';
import type { Achievement } from '@/types/achievement';
import type { RootStore } from './RootStore';
import type { ActivityEvent } from '@/types/activity.ts';

const STORAGE_KEY = 'user_data';

export class UserStore {
    root: RootStore;

    username: string = 'Amen';
    xp: number = 0;
    streak: number = 0;
    activity: Record<string, ActivityEvent[]> = {};

    unlockedAchievementIds: Set<string> = new Set();
    completedTaskIds: Set<string> = new Set();

    activeAchievement: Achievement | null = null;
    isModalOpen: boolean = false;

    constructor(root: RootStore) {
        this.root = root;
        makeAutoObservable(this, { root: false });

        this.loadFromStorage();

        reaction(
            () => ({
                xp: this.xp,
                streak: this.streak,
                activity: this.activity,
                unlockedAchievementIds: Array.from(this.unlockedAchievementIds),
                completedTaskIds: Array.from(this.completedTaskIds),
            }),
            (data) => {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            }
        );
    }

    private loadFromStorage() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                const data = JSON.parse(saved);
                this.xp = data.xp || 0;
                this.streak = data.streak || 0;
                this.activity = data.activity || {};
                this.unlockedAchievementIds = new Set(
                    data.unlockedAchievementIds || []
                );
                this.completedTaskIds = new Set(data.completedTaskIds || []);
            } catch (e) {
                console.error('Ошибка загрузки данных', e);
            }
        } else {
            this.activity = {
                '2026-01-12': [
                    {
                        id: '1',
                        type: 'code',
                        title: 'JS Basics',
                        xp: 100,
                        timestamp: '...',
                    },
                ],
                '2026-02-01': [
                    {
                        id: '2',
                        type: 'quiz',
                        title: 'React Quiz',
                        xp: 50,
                        timestamp: '...',
                    },
                ],
                '2026-02-14': [
                    {
                        id: '3',
                        type: 'theory',
                        title: 'Flexbox',
                        xp: 120,
                        timestamp: '...',
                    },
                ],
                '2026-02-28': [
                    {
                        id: '4',
                        type: 'code',
                        title: 'Algorithms',
                        xp: 300,
                        timestamp: '...',
                    },
                ],
                '2026-03-01': [
                    {
                        id: '5',
                        type: 'code',
                        title: 'MobX Intro',
                        xp: 80,
                        timestamp: '...',
                    },
                ],
            };
        }
    }

    get calendarData() {
        const data = [];
        const today = new Date();

        for (let i = 0; i <= 364; i++) {
            const date = new Date();
            date.setDate(today.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];

            const dayEvents = this.activity[dateStr] || [];
            const totalDayXP = dayEvents.reduce(
                (sum, event) => sum + event.xp,
                0
            );

            let level = 0;
            if (totalDayXP > 0 && totalDayXP < 50) level = 1;
            else if (totalDayXP >= 50 && totalDayXP < 150) level = 2;
            else if (totalDayXP >= 150 && totalDayXP < 300) level = 3;
            else if (totalDayXP >= 300) level = 4;

            data.push({
                date: dateStr,
                count: dayEvents.length,
                level: level,
            });
        }

        return data.sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
    }

    get level() {
        return Math.floor(this.xp / 1000) + 1;
    }

    get xpProgressInLevel() {
        return (this.xp % 1000) / 10;
    }

    get unlockedAchievements(): Achievement[] {
        return this.root.contentStore.achievements.filter((a) =>
            this.unlockedAchievementIds.has(a.id)
        );
    }

    addXP = (amount: number, taskId: string) => {
        if (this.completedTaskIds.has(taskId)) return;

        this.xp += amount;
        this.completedTaskIds.add(taskId);

        this.checkAutoAchievements();
    };

    showAchievementModal = (achievement: Achievement) => {
        this.activeAchievement = achievement;
        this.isModalOpen = true;
    };

    closeModal = () => {
        this.isModalOpen = false;
        this.activeAchievement = null;
    };

    unlockAchievement = (id: string) => {
        if (this.unlockedAchievementIds.has(id)) return;

        this.unlockedAchievementIds.add(id);

        const ach = this.root.contentStore.achievements.find(
            (a) => a.id === id
        );
        if (ach) {
            this.showAchievementModal(ach);
        }
    };

    private checkAutoAchievements() {
        if (this.completedTaskIds.size === 1) {
            this.unlockAchievement('first_step');
        }

        if (this.level === 2 && !this.unlockedAchievementIds.has('level_2')) {
            this.unlockAchievement('level_2');
        }
    }
}
