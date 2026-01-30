import { ModuleCard } from '@/components/ModuleCard/ModuleCard.tsx';
import '@/styles/pages/island-page.scss';
import { ProgressBar } from '@/components/ProgressBar/ProgressBar.tsx';
import { pluralize } from '@/utils/pluralize.ts';
import { Button } from 'antd';

const mock = [
    {
        id: '1',
        title: 'fklll',
        order: 1,
        description:
            'Начинаем готовить разметку страницы блога, разбираемся из каких тегов она состоит и за что эти теги отвечают.',
        difficulty: 1,
        progress: 100,
    },
    {
        id: '2',
        title: 'fklll',
        order: 2,
        description:
            'Продолжаем верстать страницу блога, изучаем, как правильно размечать текстовое содержание: абзацы, заголовки, подзаголовки, списки и многое другое.gll',
        difficulty: 2,
        progress: 0,
    },
    {
        id: '3',
        title: 'fklll',
        order: 3,
        description:
            'Завершаем разметку страницы блога, добавляем навигационные ссылки, а также разбираемся с форматами изображений.',
        difficulty: 3,
        progress: null,
    },
];

const IslandPage = () => {
    const isLastId = mock.at(-1)?.id;
    const island = {
        id: '1',
        title: 'Алгоритмы сортировки через визуализации',
        type: 'plain',
        x: 14,
        y: 25,
        progress: 10,
        isLocked: false,
        isCompleted: false,
        description:
            'В этом курсе мы превратим абстрактные сортировки в наглядные анимации, где всё сразу становится понятно. Учитесь легко, наблюдая, как алгоритмы работают вживую!\n' +
            '\n' +
            'Мы разберём алгоритмы сортировки, которыми требуется владеть на уровнях джуна, мидла и синьора.',
        order: 2,
    };
    const imagePath = new URL(
        `/src/assets/images/islands/${island.type}.png`,
        import.meta.url
    ).href;

    const world = pluralize(mock.length, ['модуль', 'модуля', 'модулей']);

    return (
        <section className='islands container'>
            <div className='islands__wrapper content-wrapper'>
                <section className='islands__head'>
                    <div className='islands__content'>
                        <img
                            className='islands__image'
                            src={imagePath}
                            width={150}
                            height={150}
                            alt={island.title}
                        />
                        <ProgressBar
                            className='islands__progress'
                            percent={island.progress}
                            size={240}
                            type='circle'
                        />
                    </div>
                    <div className='islands__description-wrapper'>
                        <h1 className='islands__title'>{island.title}</h1>
                        <p className='islands__description'>
                            {island.description}
                        </p>
                    </div>
                    <p className='islands__count-modules'>
                        <span className='islands__count'>{mock.length}</span>
                        {world}
                    </p>
                    <Button
                        className='island__head-button ant-btn-primary'
                        size={'large'}
                    >
                        {island.progress !== null
                            ? 'Продолжить обучение'
                            : 'Начать обучение'}
                    </Button>
                </section>

                <section className='islands__modules-wrapper'>
                    <div className='islands__modules'>
                        {mock.map((item) => (
                            <div key={item.id}>
                                <ModuleCard
                                    module={item}
                                    isLast={item.id === isLastId}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
};

export default IslandPage;
