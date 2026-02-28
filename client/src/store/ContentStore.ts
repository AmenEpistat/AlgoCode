import { makeAutoObservable } from 'mobx';
import type { Achievement } from '@/types/achievement';
import type { IslandData } from '@/types/island';
import type { RootStore } from './RootStore';
import type { Module } from '@/types/module.ts';

export class ContentStore {
    root: RootStore;

    islands: IslandData[] = [
        {
            id: '1',
            title: 'fklll;l;;',
            type: 'sort',
            x: 14,
            y: 25,
            progress: 46,
            isLocked: false,
            isCompleted: false,
            description: 'sdfghjk',
            order: 2,
        },
        {
            id: '2',
            title: 'f',
            type: 'recursive',
            x: 30,
            y: 50,
            progress: 100,
            isLocked: false,
            isCompleted: true,
            description: 'dfghjuikolp;[;p',
            order: 1,
        },
        {
            id: '3',
            title: 'Остров сотировок',
            type: 'plain',
            x: 64,
            y: 25,
            progress: 0,
            isLocked: true,
            isCompleted: false,
            description: 'dfghjuikolp;[;p',
            order: 3,
        },
    ];

    achievements: Achievement[] = [
        {
            id: 'first_step',
            name: 'Первый шаг',
            description: 'Решена первая задача!',
            status: 'locked',
            svgPath: '/src/assets/images/achievements/first_easy_code.svg',
        },
        {
            id: '22',
            name: 'JSCODER',
            description: 'Реал код',
            status: 'locked',
            svgPath: '/src/assets/images/achievements/full_test.svg',
        },
    ];

    modules: Module[] = [
        {
            id: '1',
            title: 'fklll',
            order: 1,
            description:
                'Начинаем готовить разметку страницы блога, разбираемся из каких тегов она состоит и за что эти теги отвечают.',
            progress: 100,
        },
        {
            id: '2',
            title: 'fklll',
            order: 2,
            description:
                'Продолжаем верстать страницу блога, изучаем, как правильно размечать текстовое содержание: абзацы, заголовки, подзаголовки, списки и многое другое.gll',
            progress: 0,
        },
        {
            id: '3',
            title: 'fklll',
            order: 3,
            description:
                'Завершаем разметку страницы блога, добавляем навигационные ссылки, а также разбираемся с форматами изображений.',
            progress: 0,
        },
    ];

    constructor(root: RootStore) {
        this.root = root;
        makeAutoObservable(this, { root: false });
    }
}
