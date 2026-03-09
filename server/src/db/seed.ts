import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Island } from '../models/island-model';
import { Module } from '../models/module-model';
import { Task } from '../models/task-model';

dotenv.config();

const seedDatabase = async () => {
    try {
        await mongoose.connect(
            process.env.MONGODB_URI || 'mongodb://localhost:27017/algocode'
        );
        console.log('🚀 Подключено к MongoDB. Начинаем чистку...');

        await Promise.all([
            Island.deleteMany({}),
            Module.deleteMany({}),
            Task.deleteMany({}),
        ]);

        const createdIslands = await Island.insertMany([
            {
                slug: 'recursive-island',
                title: 'Рекурсивные миры',
                type: 'recursive',
                x: 30,
                y: 50,
                description: 'Погружение в глубины самовызова функций.',
                order: 1,
            },
            {
                slug: 'sorting-island',
                title: 'Остров Сортировок',
                type: 'sort',
                x: 14,
                y: 25,
                description: 'От пузырька до быстрой сортировки.',
                order: 2,
            },
            {
                slug: 'plain-island',
                title: 'Линейные структуры',
                type: 'plain',
                x: 64,
                y: 25,
                description: 'Списки, стеки и очереди.',
                order: 3,
            },
        ]);

        const sortIslandId = createdIslands[1]._id;
        console.log('🏝️ Острова созданы');

        const sortModule = await Module.create({
            islandId: sortIslandId,
            slug: 'bubble-sort-basics',
            title: 'Bubble Sort Basics',
            description:
                'Изучаем основы самого популярного алгоритма для новичков.',
            order: 1,
        });
        console.log('📦 Модуль создан');

        await Task.insertMany([
            {
                moduleId: sortModule._id,
                type: 'theory',
                title: 'Что такое Bubble Sort?',
                description: 'Пойми концепцию всплывающего пузырька.',
                body: '# Визуализация\nПредставь, что самые тяжелые элементы опускаются на дно...', // Для Markdown
                rewardXP: 10,
                order: 1,
                stepNumber: 1,
            },
            {
                moduleId: sortModule._id,
                type: 'quiz',
                title: 'Быстрый тест',
                description: 'Проверь свои знания сложности.',
                questions: [
                    {
                        question:
                            'Какова сложность Bubble Sort в лучшем случае (уже отсортирован)?',
                        options: ['O(n)', 'O(n²)', 'O(log n)'],
                        correctAnswer: 0,
                    },
                    {
                        question:
                            'Какова сложность Bubble Sort в лучшем случае (уже отсортирован)?',
                        options: ['O(n)', 'O(n²)', 'O(log n)'],
                        correctAnswer: 2,
                    },
                    {
                        question:
                            'Какова сложность Bubble Sort в лучшем случае (уже отсортирован)?',
                        options: ['O(n)', 'O(n²)', 'O(log n)'],
                        correctAnswer: 0,
                    },
                ],
                rewardXP: 15,
                order: 2,
                stepNumber: 1,
            },
            {
                moduleId: sortModule._id,
                type: 'code',
                title: 'Реализация Swap',
                description: 'Напиши функцию обмена элементов.',
                difficulty: 'Easy',
                starterCode: {
                    javascript: 'function swap(arr, i, j) {\n  // Твой код\n}',
                    python: 'def swap(arr, i, j):\n  # Твой код',
                },
                tests: [
                    {
                        id: 1,
                        name: 'Basic swap',
                        input: '[1, 2], 0, 1',
                        expected: '[2, 1]',
                    },
                ],
                rewardXP: 50,
                order: 3,
                stepNumber: 2,
            },
        ]);

        console.log('✅ База успешно наполнена! Можешь проверять в Compass.');
        process.exit(0);
    } catch (error) {
        console.error('❌ Ошибка при наполнении базы:', error);
        process.exit(1);
    }
};

seedDatabase();
