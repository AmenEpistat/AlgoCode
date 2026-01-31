import type { Step } from '@/types/module.ts';
import StepCard from '@/components/StepCard/StepCard.tsx';
import '@/styles/pages/module-page.scss';

const module = {
    id: '1',
    title: ' Основы React: JSX, компоненты, передача данных',
    description:
        'Познакомимся с основами React — одной из самых популярных библиотек для разработки пользовательских интерфейсов. Узнаем о синтаксическом расширении JavaScript — JSX, компонентах и передаче данных в компоненты. Создадим первое приложение на React.',
    difficulty: 1,
    progress: 40,
    steps: [
        {
            progress: 40,
            id: '1',
            title: 'Базовые структуры данных',
            description:
                'Разберём базовые структуры данных и алгоритмы для их обработки. Научимся работать с массивами, функциями и объектами. Напишем программы для расшифровки сообщений, несколько калькуляторов для коммерческих и бухгалтерских расчётов, конструктор компьютера из комплектующих.',
            tasks: [
                {
                    id: '1',
                    title: 'Массивы',
                    description:
                        'Массивы. Доступ к элементам массива по индексу. Вычисление медианы и среднего. Алгоритм сортировки.',
                    type: 'theory' as const,
                    progress: 15,
                },
                {
                    id: '2',
                    title: 'Графы',
                    description:
                        'Массивы. Доступ к элементам массива по индексу. Вычисление медианы и среднего. Алгоритм сортировки.',
                    type: 'code' as const,
                    progress: 70,
                },
                {
                    id: '3',
                    title: 'Сортировка',
                    description:
                        'Массивы. Доступ к элементам массива по индексу. Вычисление медианы и среднего. Алгоритм сортировки.',
                    type: 'test' as const,
                    progress: 100,
                },
                {
                    id: '4',
                    title: 'Сортировка',
                    description:
                        'Массивы. Доступ к элементам массива по индексу. Вычисление медианы и среднего. Алгоритм сортировки.',
                    type: 'theory' as const,
                    progress: 0,
                },
            ],
        },
        {
            progress: 100,
            id: '2',
            title: 'Погружение в браузерный JavaScript',
            description:
                'Разберём базовые структуры данных и алгоритмы для их обработки. Научимся работать с массивами, функциями и объектами. Напишем программы для расшифровки сообщений, несколько калькуляторов для коммерческих и бухгалтерских расчётов, конструктор компьютера из комплектующих.',
            tasks: [
                {
                    id: '1',
                    title: 'Массивы',
                    description:
                        'Массивы. Доступ к элементам массива по индексу. Вычисление медианы и среднего. Алгоритм сортировки.',
                    type: 'theory' as const,
                    progress: 10,
                },
                {
                    id: '2',
                    title: 'Графы',
                    description:
                        'Массивы. Доступ к элементам массива по индексу. Вычисление медианы и среднего. Алгоритм сортировки.',
                    type: 'code' as const,
                    progress: 0,
                },
            ],
        },
    ],
};

const ModulePage = () => {
    return (
        <section className='module container'>
            <div className='module__wrapper content-wrapper'>
                <div className='module__head'>
                    <h2 className='module__title'>{module.title}</h2>
                </div>
                <section className='module__program'>
                    <h3 className='module__program-title'>Программа</h3>
                    <ul className='module__steps-list'>
                        {module.steps.map((step: Step) => (
                            <li key={step.id} className='module__step'>
                                <StepCard step={step} />
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </section>
    );
};

export default ModulePage;
