import React from 'react';
import Homepage from './pages/Homepage'
import Loginpage from './pages/Loginpage';
import Notfoundpage from './pages/Notfoundpage';
import AdminPage from './pages/AdminPage';
import TrainerPage from './pages/TrainerPage';
import CustomerPage from './pages/CustomerPage';
import ServicePage from './pages/ServicePage';
import EventPage from './pages/EventPage';
import PackagePage from './pages/PackagePage';


const routes = [
    {
        path: '/',
        element: <Homepage/>
    },
    {
        path: '/service',
        element: <ServicePage />
    },
    {
        path: '/event',
        element: <EventPage />
    },
    {
        path: '/package',
        element: <PackagePage />
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
        path: '/trainer',
        element: <TrainerPage/>
    },
    {
        path: '/customer',
        element: <CustomerPage/>
    },
    {
        path: '*',
        element: <Notfoundpage/>
    }
]

export default routes;