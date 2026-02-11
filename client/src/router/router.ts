import IslandPage from '../pages/IslandPage.tsx';
import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import ModulePage from '@/pages/ModulePage.tsx';
import TaskPage from '@/pages/TaskPage/TaskPage.tsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: React.createElement(IslandPage, {
            to: '/',
            replace: true,
        }),
    },
    {
        path: '/island/:id',
        element: React.createElement(IslandPage),
    },
    {
        path: '/module/:id',
        element: React.createElement(ModulePage),
    },
    {
        path: '/task/:id',
        element: React.createElement(TaskPage),
    },
]);
