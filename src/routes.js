import React from 'react';
import Homepage from './pages/Homepage'
import Loginpage from './pages/Loginpage';
import Notfoundpage from './pages/Notfoundpage';
import AdminPage from './pages/AdminPage';
import TrainerInforPage from './pages/TrainerPage';


const routes = [
    {
        path: '/',
        element: <Homepage/>
    },
    {
        path: '/login',
        element: <Loginpage/>
    },
    {
        path: '/admin/*',
        element: <AdminPage/>
    },
    {
        path: '/myinfor',
        element: <TrainerInforPage/>
    },
    {
        path: '*',
        element: <Notfoundpage/>
    }
]

export default routes;