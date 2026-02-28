import { makeAutoObservable } from 'mobx';
import type { Achievement } from '@/types/achievement';
import type { RootStore } from './RootStore';

export class UserStore {
    root: RootStore;

    username: string = 'Amen';
    xp: number = 0;
    streak: number = 0;

    unlockedAchievementIds: Set<string> = new Set();
    completedTaskIds: Set<string> = new Set();

    activeAchievement: Achievement | null = null;
    isModalOpen: boolean = false;

    constructor(root: RootStore) {
        this.root = root;
        makeAutoObservable(this, { root: false });
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
