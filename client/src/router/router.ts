import IslandPage from '../pages/IslandPage.tsx';
import { createBrowserRouter } from 'react-router-dom';
import React from 'react';

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
]);
