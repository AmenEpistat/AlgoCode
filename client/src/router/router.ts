import IslandPage from '../pages/IslandPage.tsx';
import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import ModulePage from '@/pages/ModulePage.tsx';
import TaskPage from '@/pages/TaskPage/TaskPage.tsx';
import ProfilePage from '@/pages/ProfilePage.tsx';
import LoginPage from '@/pages/LoginPage.tsx';

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
    {
        path: '/profile',
        element: React.createElement(ProfilePage),
    },
    {
        path: '/login',
        element: React.createElement(LoginPage),
    },
]);
